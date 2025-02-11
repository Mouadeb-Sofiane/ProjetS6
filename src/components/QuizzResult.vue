<script setup lang="ts">
import { supabase } from '@/supabase';
import { defineProps } from 'vue';

const props = defineProps<{ score: number; total: number }>();

async function saveScore() {
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) return;

  const { error: updateError } = await supabase
    .from("users")
    .update({ score: props.score }) // Utiliser la prop `score`
    .eq("id", data.user.id);

  if (updateError) {
    console.error("Erreur de mise à jour du score :", updateError.message);
  } else {
    console.log("Score mis à jour avec succès !");
  }
}
</script>


<template>
  <div class="flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black text-cyan-400">
    <!-- Conteneur principal -->
    <div class="w-full max-w-xl sm:max-w-3xl p-6 mt-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg border border-purple-600 text-center">
      <!-- Titre -->
      <h2 class="text-2xl sm:text-3xl font-extrabold text-yellow-400">Résultat du Quiz</h2>

      <!-- Score -->
      <p class="mt-4 text-lg sm:text-xl font-bold text-white">
        Votre score : <span class="text-green-400">{{ score }}</span> / <span class="text-red-400">{{ total }}</span>
      </p>

      <!-- Boutons -->
      <div class="mt-6 flex flex-col sm:flex-row justify-center gap-4">
        <button 
          @click="$emit('resetQuiz')" 
          class="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-maPolice font-thin rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          Recommencer
        </button>
        <button 
          @click="saveScore" 
          class="px-6 py-3 bg-green-500 text-white shadow-md font-maPolice font-thin rounded-lg hover:scale-105 transition-transform duration-300"
        >
          Sauvegarder le score
        </button>
        <button 
          @click="$emit('showRecap')" 
          class="px-6 py-3 bg-gradient-to-r font-maPolice from-gray-600 to-gray-800 text-white font-thin rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
        >
          Voir le récapitulatif
        </button>
      </div>
    </div>
  </div>
</template>
