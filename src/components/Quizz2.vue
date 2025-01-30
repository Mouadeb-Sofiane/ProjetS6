// Quizz.vue - Page des quiz de cybersécurité
<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Quiz de Cybersécurité</h1>
    <div class="space-y-6">
      <div v-for="(quiz, index) in quizzes" :key="index" class="border p-4 rounded shadow">
        <h2 class="text-lg font-semibold">{{ quiz.title }}</h2>
        <p class="text-sm text-gray-600">Niveau: {{ quiz.level }}</p>
        <button @click="startQuiz(index)" class="mt-2 px-4 py-2 bg-blue-600 text-white rounded">Démarrer</button>
      </div>
    </div>

    <div v-if="currentQuiz !== null" class="mt-6 p-4 border rounded shadow">
      <h2 class="text-xl font-bold">{{ quizzes[currentQuiz].title }}</h2>
      <div v-for="(question, qIndex) in quizzes[currentQuiz].questions" :key="qIndex" class="mt-4">
        <p class="font-medium">{{ question.question }}</p>
        <ul>
          <li v-for="(option, oIndex) in question.options" :key="oIndex">
            <label>
              <input type="radio" :name="'question' + qIndex" :value="oIndex" v-model="userAnswers[qIndex]" />
              {{ option }}
            </label>
          </li>
        </ul>
      </div>
      <button @click="submitQuiz" class="mt-4 px-4 py-2 bg-green-600 text-white rounded">Valider</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const quizzes = ref([]);
const currentQuiz = ref(null);
const userAnswers = ref([]);

onMounted(() => {
  quizzes.value = [
    { 
      title: 'Introduction à la Cybersécurité', 
      level: 'Débutant',
      questions: [
        { question: "Qu'est-ce que la cybersécurité ?", options: ["Une marque d'ordinateur", "Une discipline protégeant les systèmes", "Un type de virus informatique"], answer: 1 },
        { question: "Quelle est la menace la plus courante sur Internet ?", options: ["Phishing", "Malware", "Attaque physique"], answer: 0 }
      ]
    },
    { 
      title: 'Phishing et Ingénierie Sociale', 
      level: 'Intermédiaire',
      questions: [
        { question: "Quel est l'objectif du phishing ?", options: ["Voler des informations personnelles", "Bloquer un site web", "Créer un virus"], answer: 0 },
        { question: "Que faire si vous recevez un e-mail suspect ?", options: ["Cliquer sur le lien", "Ignorer", "Vérifier l'expéditeur et signaler"], answer: 2 }
      ]
    },
    { 
      title: 'Cryptographie et Sécurité Réseau', 
      level: 'Avancé',
      questions: [
        { question: "Quel est l'objectif de la cryptographie ?", options: ["Masquer des fichiers", "Protéger les données en les chiffrant", "Supprimer des virus"], answer: 1 },
        { question: "Quel protocole est utilisé pour sécuriser les sites web ?", options: ["HTTP", "SSL/TLS", "FTP"], answer: 1 }
      ]
    }
  ];
});

const startQuiz = (index) => {
  currentQuiz.value = index;
  userAnswers.value = Array(quizzes.value[index].questions.length).fill(null);
};

const submitQuiz = () => {
  let score = 0;
  quizzes.value[currentQuiz.value].questions.forEach((q, i) => {
    if (userAnswers.value[i] === q.answer) {
      score++;
    }
  });
  alert(`Votre score est de ${score}/${quizzes.value[currentQuiz.value].questions.length}`);
  currentQuiz.value = null;
};
</script>

<style scoped>
  .p-6 { max-width: 600px; margin: auto; }
</style>
