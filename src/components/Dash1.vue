<template>
  <div class="p-6 bg-white shadow-lg rounded-lg">
    <h2 class="text-2xl font-bold mb-4">Tableau de Bord</h2>
    <p class="text-lg">Score moyen: {{ averageScore }} / {{ maxScore }}</p>
    <h3 class="text-xl font-semibold mt-4">Derniers quiz complétés</h3>
    <ul>
      <li v-for="(quiz, index) in completedQuizzes" :key="index" class="mt-2">
        <p><strong>{{ quiz.title }}</strong> - Score: {{ quiz.score }} / {{ quiz.total }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const completedQuizzes = ref([]);
const maxScore = ref(10);

const averageScore = computed(() => {
  if (completedQuizzes.value.length === 0) return 0;
  const totalScore = completedQuizzes.value.reduce((acc, quiz) => acc + quiz.score, 0);
  return (totalScore / completedQuizzes.value.length).toFixed(1);
});

const addCompletedQuiz = (quiz) => {
  completedQuizzes.value.push(quiz);
};
</script>

<style scoped>
  .p-6 { max-width: 600px; margin: auto; }
</style>