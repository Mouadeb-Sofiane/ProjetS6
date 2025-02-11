import { ref, computed, watchEffect } from "vue";
import { supabase } from "@/supabase";

interface Progress {
    id: string
    user_id: string
    progress: string
    scores: string
  };
interface User  {
    id: string
    email: string
    first_name: string
    last_name: string
    bio_users: string
    avatar_url: string
  };

const user = ref<User | null>(null);

// Vérifier l'utilisateur au chargement
const checkUser = async () => {
  const { data } = await supabase.auth.getUser();
  if (data?.user) {
    user.value = {
      id: data.user.id,
      email: data.user.email,
    };
  }
};

// Déconnexion
const logout = async () => {
  await supabase.auth.signOut();
  user.value = null;
};

// Vérifier si l'utilisateur est connecté
const isAuthenticated = computed(() => !!user.value);

checkUser();

export function useUser() {
  return {
    user,
    logout,
    isAuthenticated,
  };
}
