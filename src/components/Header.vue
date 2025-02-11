<script setup lang="ts">
import LogoSpider from "@/components/icon/Logo-Spider.vue";
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";

// Simule l'authentification (à remplacer par une vraie vérification)
const isAuthenticated = ref(false);
const isOpen = ref(false);
const isScrolled = ref(false);
const isMobile = ref(false);

const toggleMobileMenu = () => {
  isOpen.value = !isOpen.value;
};

const closeMobileMenu = () => {
  isOpen.value = false;
};

const checkScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

const checkWidth = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  window.addEventListener("resize", checkWidth);
  checkScroll();
  checkWidth();

  // Simuler une connexion utilisateur après 10s (à remplacer par un vrai système d'authentification)
  setTimeout(() => {
    isAuthenticated.value = true;
  }, 10000);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
  window.removeEventListener("resize", checkWidth);
});
</script>

<template>
  <header
    class="fixed w-full z-50 transition-all duration-300 flex justify-center"
    :class="{ 'top-0 h-14': isMobile, 'top-4': !isMobile }"
  >
    <nav
      class="w-[90%] max-w-4xl transition-all duration-300 bg-gris md:p-4 p-4"
      :class="{ 'rounded-none w-full h-20': isMobile, 'rounded-full': !isMobile }"
    >
      <div class="flex justify-between items-center">
        <RouterLink to="/">
          <div
            class="flex-shrink-0 text-white font-bold uppercase tracking-widest"
            :class="{ 'text-sm': isMobile, 'text-lg': !isMobile }"
          >
            <LogoSpider class= "w-12 h-12"/>          
          </div>
        </RouterLink>

        <!-- Bouton mobile -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-white hover:text-gray-300 bg-gris focus:outline-none transform transition-transform duration-300"
          :class="{ 'rotate-180': isOpen }"
          aria-label="Toggle navigation menu"
        >
          <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:bg-gris" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:bg-gris" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Menu Desktop -->
        <ul class="hidden md:flex space-x-8">
          <li><RouterLink to="/quizz" class="text-white uppercase hover:text-gray-300 font-maPolice">Quiz</RouterLink></li>
          <li><RouterLink to="/jeux" class="text-white uppercase hover:text-gray-300 font-maPolice">Jeux</RouterLink></li>
          <li><RouterLink to="/articles" class="text-white uppercase hover:text-gray-300 font-maPolice">Articles</RouterLink></li>
          <li>
            <RouterLink :to="isAuthenticated ? '/profile' : '/Login'" class="text-white uppercase hover:text-gray-300 font-maPolice">
              {{ isAuthenticated ? "Profil" : "Connexion" }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Menu Mobile -->
      <transition name="fade-slide">
        <div v-if="isOpen" class="md:hidden bg-gris shadow-lg p-4 absolute w-full left-0">
          <ul class="flex flex-col space-y-4">
            <li><RouterLink @click="closeMobileMenu" to="/quizz" class="text-white uppercase hover:text-gray-300 font-maPolice">Quiz</RouterLink></li>
            <li><RouterLink @click="closeMobileMenu" to="/jeux" class="text-white uppercase hover:text-gray-300 font-maPolice">Jeux</RouterLink></li>
            <li><RouterLink @click="closeMobileMenu" to="/articles" class="text-white uppercase hover:text-gray-300 font-maPolice">Articles</RouterLink></li>
            <li>
              <RouterLink
                @click="closeMobileMenu"
                :to="isAuthenticated ? '/profile' : '/Login'"
                class="text-white uppercase hover:text-gray-300 font-maPolice"
              >
                {{ isAuthenticated ? "Profil" : "Connexion" }}
              </RouterLink>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
header {
  pointer-events: none;
}

nav {
  pointer-events: auto;
}

a {
  transition: color 0.3s ease;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.fade-slide-leave-from,
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0);
}
</style>
