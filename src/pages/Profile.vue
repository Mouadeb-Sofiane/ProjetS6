<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { supabase } from "../supabase";
import BackGround from "@/components/BackGround.vue";

const user = ref(null);
const error = ref("");
const firstName = ref("");
const lastName = ref("");
const email = ref("");
const avatarUrl = ref("");
const bio_users = ref("");
const router = useRouter();

async function fetchUserInfo() {
  const { data, error: fetchError } = await supabase.auth.getUser();

  if (fetchError || !data?.user) {
    router.push("/login");
    return;
  }

  user.value = data.user;

  const { data: userData, error: userDataError } = await supabase
    .from("users")
    .select("*")
    .eq("id", user.value.id)
    .single();

  if (userDataError) {
    error.value = userDataError.message;
  } else {
    firstName.value = userData.first_name;
    lastName.value = userData.last_name;
    bio_users.value = userData.bio_users;
    email.value = userData.email;
    avatarUrl.value = userData.avatar_url || "";
  }
}

async function updateUserInfo() {
  const { error: updateError } = await supabase
    .from("users")
    .update({
      first_name: firstName.value,
      last_name: lastName.value,
      bio_users: bio_users.value,
      email: email.value,
      avatar_url: avatarUrl.value,
    })
    .eq("id", user.value.id);

  if (updateError) {
    error.value = updateError.message;
  } else {
    alert("Profile updated successfully!");
  }
}

function handleAvatarChange(event: Event) {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    avatarUrl.value = URL.createObjectURL(file);
  }
}

const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    router.push("/login");
  }
};

function cancelUpdate() {
  fetchUserInfo();
}

onMounted(fetchUserInfo);
</script>

<template>
  <BackGround class="absolute inset-0 z-[-1]" />
  <div class="min-h-screen flex items-center justify-center p-6">
    <div class="backdrop-blur-lg w-full max-w-4xl rounded-lg shadow-md p-6 mt-20">
      <!-- Header -->
      <div class="border-b pb-4 mb-6">
        <h1 class="text-xl font-bold text-gray-100">Mon Profil</h1>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Left Section: Profile Info -->
        <div>
          <!-- Profile Picture and Name -->
          <div class="flex items-center space-x-4 mb-6">
            <img
              v-if="avatarUrl"
              :src="avatarUrl"
              alt="Avatar"
              class="w-20 h-20 rounded-full object-cover border border-gray-300"
            />
            <div>
              <h2 class="text-lg font-semibold text-gray-200">{{ firstName }} {{ lastName }}</h2>
              <p class="text-sm text-gray-500">{{ email }}</p>
            </div>
          </div>

          <!-- User Info Fields -->
          <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- First Name -->
              <div>
                <label class="text-gray-300 text-sm">Prénom</label>
                <input
                  type="text"
                  v-model="firstName"
                  class="w-full mt-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/10 text-gray-50"
                />
              </div>

              <!-- Last Name -->
              <div>
                <label class="text-gray-300 text-sm">Nom de famille</label>
                <input
                  type="text"
                  v-model="lastName"
                  class="w-full mt-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/10 text-gray-50"
                />
              </div>
            </div>

            <!-- Email -->
            <div>
              <label class="text-gray-300 text-sm">Email</label>
              <input
                type="email"
                v-model="email"
                class="w-full mt-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/10 text-gray-50"
              />
            </div>

            <!-- Avatar Upload -->
            <div>
              <label class="text-gray-300 text-sm">Photo de profil</label>
              <input
                type="file"
                @change="handleAvatarChange"
                class="w-full mt-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/10 text-gray-50"
              />
            </div>
          </div>
        </div>

        <!-- Right Section: Bio & Buttons -->
        <div class="flex flex-col justify-between">
          <!-- Bio -->
           <div>
            <h2 class="text-xl font-semibold text-gray-300 underline">Biographie</h2>
            <p class="text-white">{{ bio_users }}</p>
           </div>
          <div>
            <label class="text-gray-300 text-sm">Bio</label>
            <textarea
              v-model="bio_users"
              rows="4"
              class="w-full mt-1 border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-black/10 text-gray-50 resize-none"
            ></textarea>
          </div>

          <!-- Boutons Enregistrer et Annuler sous la bio -->
          <div class="flex flex-row gap-4 mt-4">
            <button
              @click="updateUserInfo"
              class="flex-1 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
            >
              Enregistrer
            </button>

            <button
              @click="cancelUpdate"
              class="flex-1 bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              Annuler
            </button>
          </div>

          <!-- Bouton Déconnexion tout en bas -->
          <button
            @click="signOut"
            class="w-full bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 mt-6"
          >
            Se déconnecter
          </button>
        </div>
      </div>

      <p v-if="error" class="text-red-500 text-sm mt-4">{{ error }}</p>
    </div>
  </div>
</template>

