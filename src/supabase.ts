import { createClient, type User } from '@supabase/supabase-js'
import { ref } from 'vue'
import { type Database } from './supabase-types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

// @ts-ignore
globalThis.supabase = supabase

// Création d'une référence réactive pour l'utilisateur
export const user = ref<User|null>(null);

// Fonction asynchrone pour récupérer l'utilisateur et s'abonner aux changements d'état d'authentification
async function fetchUser() {
    const { data } = await supabase.auth.getUser();
    user.value = data.user;
    supabase.auth.onAuthStateChange((event, session) => {
        user.value = session?.user ?? null;
    });
}

// Invoquer fetchUser directement pour initialiser l'état de l'utilisateur
fetchUser();