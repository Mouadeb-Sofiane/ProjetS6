<template> 
  <div class="space-y-6">
    <div 
      v-for="(quiz, index) in quizzes" 
      :key="index" 
      class="border-2 p-4 sm:p-6 rounded-lg shadow-lg transition-all duration-300"
      :class="{
        'opacity-50 border-gray-500': !isUnlocked(index),
        'border-purple-600 hover:shadow-2xl hover:scale-95': isUnlocked(index)
      }"
    >
      <!-- Titre du Quiz -->
      <h2 class="text-lg sm:text-xl font-thin text-white font-maPolice">
        {{ quiz.title }}
      </h2>
      <p class="text-sm sm:text-base text-gray-400 mt-1">
        Niveau: {{ quiz.level }}
      </p>

      <!-- Boutons -->
      <div class="flex flex-wrap gap-4 mt-4">
        <button 
          @click="$emit('startQuiz', index)" 
          :disabled="!isUnlocked(index)"
          class="px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all duration-300 font-maPolice font-thin"
          :class="isUnlocked(index) 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-gray-500 text-gray-300 cursor-not-allowed'"
        >
          Démarrer
        </button>
        <button 
          @click="$emit('closeQuiz')" 
          class="px-4 font-maPolice font-thin sm:px-6 py-2 sm:py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg  transition-all duration-300"
        >
          Annuler
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ quizzes: any[], progress: number[] }>();
defineEmits(['startQuiz', 'closeQuiz']);

const isUnlocked = (index: number) => {
  if (index === 0 || index === 1) return true; // Les niveaux 1 et 2 sont toujours débloqués
  return props.progress[index - 1] >= 80; // Déverrouille si le niveau précédent a au moins 80% de réussite
};
</script>
