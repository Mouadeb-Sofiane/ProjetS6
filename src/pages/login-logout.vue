<script setup lang="ts">
import { supabase, user } from '../supabase';
import  IconGithub  from '../components/icon/IconGithub.vue';
</script>

<template>
  <div class="p-72 flex justify-center items-center">
    <button v-if="user"
            @pointerdown="supabase.auth.signOut()"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Se déconnecter 
    </button>
    <button v-else
            @pointerdown="supabase.auth.signInWithOAuth({provider: 'github'})"
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
            

      Se connecter avec Github
    </button>
  </div>
</template>
