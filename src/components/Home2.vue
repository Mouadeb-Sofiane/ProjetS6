<template>
  <section id="advertisers" class="py-10 text-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold font-maPolice">
          Nos 3 principaux services
        </h2>
        <p class="relative inline-block mt-2">
          <span class="absolute top-1/2 left-[-50px] w-10 h-px bg-gray-300 sm:w-12 sm:left-[-70px]"></span>
          <span class="absolute top-1/2 right-[-50px] w-10 h-px bg-gray-800 sm:w-12 sm:right-[-70px]"></span>
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="service in services" 
          :key="service.title" 
          class="p-6 bg-white shadow-lg rounded-lg text-center transition duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-r from-cyan-400 to-pink-500 hover:text-white group"
        >
          <div class="w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <component :is="service.icon" class="w-12 h-12 fill-current text-pink-500 group-hover:text-white transition-colors duration-300" />
          </div>
          <h3 class="text-xl font-semibold text-gray-800 group-hover:text-white transition-colors duration-300 font-maPolice">{{ service.title }}</h3>
          <p class="text-gray-600 group-hover:text-white transition-colors duration-300 text-sm sm:text-base">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconQuiz from "../components/icon/Icon-Quiz.vue";
import IconGame from "../components/icon/Icon-Game.vue";
import IconMDP from "../components/icon/Icon-MDP.vue";

const services = ref([
  { icon: IconQuiz, title: "Quiz Cybersécurité", description: "Testez vos connaissances et apprenez à mieux vous protéger contre les cybermenaces." },
  { icon: IconGame, title: "Jeu Interactif", description: "Apprenez la cybersécurité en vous amusant avec des scénarios interactifs et immersifs." },
  { icon: IconMDP, title: "Testeur de Mot de Passe", description: "Vérifiez la robustesse de vos mots de passe et générez-en des sécurisés." },
]);
</script>
