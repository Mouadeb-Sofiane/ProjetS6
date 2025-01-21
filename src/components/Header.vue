<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

const isOpen = ref(false);

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
};
</script>

<template>
  <header class="absolute inset-x-0 top-2 flex justify-center items-center">
    <nav class="bg-black bg-opacity-80 rounded-lg shadow-lg p-4 w-[90%] max-w-4xl">
      <div class="flex justify-between items-center">
        <!-- Logo ou nom du site -->
        <RouterLink to="/">
          <div class="flex-shrink-0 text-white text-lg font-bold uppercase tracking-widest">
            MyWebsite
          </div>
        </RouterLink>

        <!-- Bouton pour menu mobile -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-white hover:text-gray-300 focus:outline-none"
        >
          <!-- Icônes (hamburger ou croix) -->
          <svg v-if="!isOpen" viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M3 9h14a1 1 0 110 2H3a1 1 0 110-2zm0-4h14a1 1 0 110 2H3a1 1 0 110-2zm0 8h14a1 1 0 110 2H3a1 1 0 110-2z"
              clip-rule="evenodd"
            />
          </svg>
          <svg v-else viewBox="0 0 20 20" fill="currentColor" class="w-6 h-6">
            <path
              fill-rule="evenodd"
              d="M6 6a.75.75 0 011.06 0L10 8.94l2.47-2.47a.75.75 0 111.06 1.06L11.06 10l2.47 2.47a.75.75 0 11-1.06 1.06L10 11.06l-2.47 2.47a.75.75 0 01-1.06-1.06L8.94 10 6.47 7.53A.75.75 0 016 6z"
              clip-rule="evenodd"
            />
          </svg>
        </button>

        <!-- Menu pour grands écrans -->
        <ul class="hidden md:flex space-x-8">
          <li>
            <RouterLink to="/" class="text-white uppercase hover:text-gray-300">Home</RouterLink>
          </li>
          <li>
            <RouterLink to="/dogs" class="text-white uppercase hover:text-gray-300">Dogs</RouterLink>
          </li>
          <li>
            <RouterLink to="/cats" class="text-white uppercase hover:text-gray-300">Cats</RouterLink>
          </li>
          <li>
            <RouterLink to="/donate" class="text-white uppercase hover:text-gray-300">Donate</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="text-white uppercase hover:text-gray-300">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Menu mobile -->
      <div
        v-if="isOpen"
        class="md:hidden mt-4 bg-black bg-opacity-90 rounded-lg p-4"
      >
        <ul class="flex flex-col space-y-4">
          <li>
            <RouterLink
              @click="closeMobileMenu"
              to="/"
              class="text-white uppercase hover:text-gray-300"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              @click="closeMobileMenu"
              to="/dogs"
              class="text-white uppercase hover:text-gray-300"
            >
              Dogs
            </RouterLink>
          </li>
          <li>
            <RouterLink
              @click="closeMobileMenu"
              to="/cats"
              class="text-white uppercase hover:text-gray-300"
            >
              Cats
            </RouterLink>
          </li>
          <li>
            <RouterLink
              @click="closeMobileMenu"
              to="/donate"
              class="text-white uppercase hover:text-gray-300"
            >
              Donate
            </RouterLink>
          </li>
          <li>
            <RouterLink
              @click="closeMobileMenu"
              to="/contact"
              class="text-white uppercase hover:text-gray-300"
            >
              Contact
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  width: 100%;
  height: auto; /* Ajustement pour éviter un overflow sur la hauteur */
  pointer-events: none; /* Le menu ne bloque pas la page derrière */
}

nav {
  pointer-events: auto; /* Seul le menu reste interactif */
  transition: background-color 0.3s ease;
}

a {
  transition: color 0.3s ease;
}
</style>
