<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { supabase } from '../supabase';
import BackGround from '@/components/BackGround.vue';

const email = ref('');
const password = ref('');
const firstName = ref('');
const lastName = ref('');
const user = ref(null);
const error = ref('');
const isSignUp = ref(false); // Pour basculer entre inscription et connexion
const router = useRouter(); // Initialisation du routeur

// Vérification de l'utilisateur connecté au début
async function checkUser() {
  const { data } = await supabase.auth.getUser();
  user.value = data?.user ?? null;
}

checkUser();

// Fonction de connexion de l'utilisateur
async function handleSignIn() {
  const { data, error: signInError } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (signInError) {
    error.value = signInError.message;
  } else {
    user.value = data.user;
    error.value = '';
    router.push('/profile');
  }
}

// Fonction d'inscription de l'utilisateur
async function handleSignUp() {
  const { data, error: signUpError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (signUpError) {
    error.value = signUpError.message;
  } else {
    // Ajouter les informations supplémentaires après l'inscription dans la table `users`
    const { error: userError } = await supabase
      .from('users') // Utiliser la table `users`
      .upsert([
        {
          id: data.user.id, // Utilisez l'ID de l'utilisateur pour la mise à jour
          email: data.user.email,
          first_name: firstName.value,
          last_name: lastName.value,
        },
      ]);

    if (userError) {
      console.error('Erreur lors de l\'ajout des informations dans la table users:', userError); // Log de l'erreur
      error.value = userError.message;
    } else {
      user.value = data.user;
      error.value = 'Vérifiez votre email pour confirmer votre inscription.';
      router.push('/profile');
    }
  }
}

// Fonction de déconnexion de l'utilisateur
async function handleSignOut() {
  await supabase.auth.signOut();
  user.value = null;
  router.push('/');
}
</script>

<template>
  <div class="relative min-h-screen">
    <BackGround class="absolute inset-0 z-[-1]" />

    <div class="p-8 flex flex-col items-center justify-center min-h-screen">
      <div v-if="user" class="text-center">
        <h2 class="text-xl text-white font-bold mb-4">Bienvenue, {{ user.email }}</h2>
        <button
          @click="handleSignOut"
          class="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded">
          Se déconnecter
        </button>
      </div>

      <div v-else class="backdrop-blur-lg p-8 shadow-lg rounded-lg max-w-sm w-full mt-20">
        <h2 class="text-2xl text-gray-100 font-bold mb-6">
          {{ isSignUp ? "Créer un compte" : "Connexion" }}
        </h2>

        <form @submit.prevent="isSignUp ? handleSignUp() : handleSignIn()">
          <div v-if="isSignUp" class="mb-4 grid grid-cols-2 gap-4 ">
          <!-- Prénom -->
          <div>
            <label for="firstName" class="block text-sm font-medium text-gray-300 mb-1">Prénom</label>
            <input
              v-model="firstName"
              type="text"
              id="firstName"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </div>

          <!-- Nom de famille -->
          <div>
            <label for="lastName" class="block text-sm font-medium text-gray-300 mb-1">Nom de famille</label>
            <input
              v-model="lastName"
              type="text"
              id="lastName"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </div>
        </div>

          <div class="mb-4">
            <label for="email" class="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input
              v-model="email"
              type="email"
              id="email"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </div>

          <div class="mb-4">
            <label for="password" class="block text-sm font-medium text-gray-300 mb-1">Mot de passe</label>
            <input
              v-model="password"
              type="password"
              id="password"
              class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required />
          </div>

          <p v-if="error" class="text-red-500 text-sm mb-4">{{ error }}</p>

          <button
            type="submit"
            class="w-full bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">
            {{ isSignUp ? "S'inscrire" : "Se connecter" }}
          </button>
        </form>

        <p class="text-gray-700 text-sm mt-4">
          {{ isSignUp ? "Vous avez déjà un compte ?" : "Pas encore de compte ?" }}
          <span
            @click="isSignUp = !isSignUp"
            class="text-blue-700 cursor-pointer hover:underline">
            {{ isSignUp ? "Connectez-vous" : "Inscrivez-vous" }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>
