<template>
  <div class="min-h-screen flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black text-cyan-400 p-4 sm:p-6">
    <div class="w-full max-w-5xl p-4 sm:p-8 bg-gradient-to-r from-gray-800 via-gray-900 to-black border-2 border-purple-600 rounded-lg shadow-lg">
      <h2 class="text-lg sm:text-2xl font-bold text-yellow-400 text-center">Récapitulatif</h2>

      <!-- Grille responsive -->
      <div class="mt-4 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <div 
          v-for="(question, index) in quiz.questions" 
          :key="index" 
          class="p-3 sm:p-4 border-2 border-gray-700 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 shadow-md"
        >
          <!-- Question -->
          <p class="text-sm sm:text-base font-medium text-yellow-400">{{ question.question }}</p>

          <!-- Réponses -->
          <p class="text-xs sm:text-sm text-white mt-1 sm:mt-2">
            Votre réponse : 
            <span class="font-bold">
              {{ question.options[userAnswers[index]] || 'Non répondu' }}
            </span>
          </p>

          <!-- Feedback -->
          <p 
            class="text-xs sm:text-sm font-semibold mt-1"
            :class="userAnswers[index] === question.answer ? 'text-green-400' : 'text-red-400'"
          >
            {{ userAnswers[index] === question.answer 
                ? 'Bonne réponse ✔' 
                : `Mauvaise réponse ✘ - Réponse correcte : ${question.options[question.answer]}` }}
          </p>

          <!-- Explication -->
          <p class="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">{{ question.explanation }}</p>
        </div>
      </div>

      <!-- Bouton retour -->
      <div class="mt-6 sm:mt-8 flex justify-center">
        <button 
          @click="$emit('resetQuiz')" 
          class="px-4 font-maPolice font-thin sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-lg shadow-md transition-transform duration-300"
        >
          Retour
        </button>
      </div>
    </div>
  </div> 
</template>

<script setup lang="ts">
defineProps<{ quiz: any, userAnswers: number[] }>();
defineEmits(['resetQuiz']);
</script>
