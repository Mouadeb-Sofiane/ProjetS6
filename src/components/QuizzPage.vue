<template>
    <div class="quiz">
      <h1>Quiz Cybersécurité</h1>
      <div v-if="currentQuestion < questions.length">
        <h3>{{ questions[currentQuestion].question }}</h3>
        <ul>
          <li v-for="(option, index) in questions[currentQuestion].options" :key="index">
            <button @click="answerQuestion(index)">{{ option.text }}</button>
          </li>
        </ul>
      </div>
      <div v-else>
        <h3>Quiz Terminé ! 🎉</h3>
        <p>Voici vos résultats :</p>
        <ul>
          <li>Débutant : {{ score.beginner }}%</li>
          <li>Intermédiaire : {{ score.intermediate }}%</li>
          <li>Avancé : {{ score.advanced }}%</li>
        </ul>
        <button @click="resetQuiz">Recommencer</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        questions: [
          {
            question: 'Qu’est-ce qu’un mot de passe robuste ?',
            options: [
              { text: '123456', level: 'beginner', correct: false },
              { text: 'Un mot de passe long et complexe', level: 'beginner', correct: true },
            ],
          },
          {
            question: 'Pourquoi utiliser un VPN ?',
            options: [
              { text: 'Pour accéder à Netflix', level: 'intermediate', correct: false },
              { text: 'Pour sécuriser la navigation en ligne', level: 'intermediate', correct: true },
            ],
          },
          {
            question: 'Qu’est-ce que le chiffrement des données ?',
            options: [
              { text: 'Une méthode pour cacher des données', level: 'advanced', correct: true },
              { text: 'Un logiciel antivirus', level: 'advanced', correct: false },
            ],
          },
        ],
        currentQuestion: 0,
        score: {
          beginner: 0,
          intermediate: 0,
          advanced: 0,
        },
      };
    },
    methods: {
      answerQuestion(index) {
        const question = this.questions[this.currentQuestion];
        if (question.options[index].correct) {
          this.score[question.options[index].level] += Math.round(100 / this.questions.length);
        }
        this.currentQuestion++;
        this.$emit('update-score', this.score);
      },
      resetQuiz() {
        this.currentQuestion = 0;
        this.score = {
          beginner: 0,
          intermediate: 0,
          advanced: 0,
        };
        this.$emit('update-score', this.score);
      },
    },
  };
  </script>
  
  <style>
  .quiz {
    padding: 20px;
  }
  button {
    display: block;
    margin: 10px 0;
    padding: 10px;
    background-color: #2196F3;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0b7dda;
  }
  </style>
  