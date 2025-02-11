<template>
  <div class="min-h-screen flex flex-col items-center bg-gradient-to-b from-black via-gray-900 to-black text-cyan-400">
    <!-- Header -->
    <div class="w-full py-6 sm:py-8 bg-gradient-to-r shadow-lg text-center">
      <h1 class="text-2xl sm:text-3xl text-cyan-400 font-bold uppercase tracking-wide font-maPolice">
        {{ quiz.title }}
      </h1>
    </div>

    <!-- Question Section -->
    <div class="w-full max-w-xl sm:max-w-3xl p-4 sm:p-6 mt-6 sm:mt-10 bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-lg shadow-lg border border-purple-600">
      <!-- Question -->
      <div class="p-3 sm:p-4 bg-gradient-to-r from-purple-700 to-purple-900 rounded-md shadow-md">
        <h2 class="text-lg sm:text-2xl font-extrabold text-center text-white font-maPolice">
          {{ currentQuestion.question }}
        </h2>
      </div>

      <!-- Options -->
      <ul class="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
        <li
          v-for="(option, index) in currentQuestion.options"
          :key="index"
          :class="[ 
            'block w-full p-3 sm:p-4 text-left bg-gradient-to-br from-gray-800 to-gray-700 border-4 rounded-lg shadow-lg cursor-pointer transition-all hover:scale-105 hover:border-pink-500 hover:shadow-xl',
            userAnswers[currentIndex] === index 
              ? 'border-yellow-400 bg-gradient-to-r from-purple-600 to-purple-700 scale-105'
              : 'border-purple-500'
          ]"
          @click="selectOption(index)"
        >
          <label class="flex items-center space-x-3 sm:space-x-4">
            <input
              type="radio"
              :name="'question-' + currentIndex"
              :value="index"
              v-model="userAnswers[currentIndex]"
              class="form-radio text-yellow-400 focus:ring-yellow-400"
            />
            <span class="text-sm sm:text-base font-bold text-yellow-400">{{ String.fromCharCode(65 + index) }}.</span>
            <span class="text-sm sm:text-base text-white">{{ option }}</span>
          </label>
        </li>
      </ul>

      <!-- Feedback -->
      <div v-if="feedback" class="mt-4 sm:mt-6 text-center text-yellow-400 text-base sm:text-lg font-medium">
        {{ feedback }}
      </div>
      <div v-if="explanation" class="mt-3 sm:mt-4 text-center text-gray-400 text-xs sm:text-sm">
        {{ explanation }}
      </div>

      <!-- Navigation -->
      <div class="mt-8 sm:mt-10 flex justify-between items-center">
        <button 
          @click="confirmQuit" 
          class=" px-4 sm:px-6 py-2 sm:py-3 bg-red-600 text-white rounded-lg shadow hover:bg-red-800 transition font-maPolice"
        >
           Quitter le quiz
        </button>
        <div class="flex gap-4 font-maPolice">
          <button
            v-if="currentIndex < quiz.questions.length - 1"
            @click="$emit('nextQuestion')"
            class="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            Suivant
          </button>
          <button
            v-else
            @click="$emit('submitQuiz')"
            class="px-4 font-maPolice sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300"
          >
            Valider
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  quiz: any, 
  currentQuestion: any, 
  currentIndex: number, 
  userAnswers: number[], 
  feedback: string, 
  explanation: string 
}>();


const emit = defineEmits(['nextQuestion', 'submitQuiz', 'quitQuiz']);

const confirmQuit = () => {
  if (confirm("Voulez-vous vraiment quitter le quiz ? Votre progression sera perdue.")) {
    emit("quitQuiz");
  }
};
</script>
