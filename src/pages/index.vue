<script setup lang="ts">
import HomeBack from '../components/HomeBack.vue';

import HomeSection1 from '@/components/HomeSection1.vue';

// Fonction pour mettre à jour la navigation
function updateNavigation() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');
  let currentSection = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute('id') || '';
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('bg-red-500');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('bg-red-500');
    }
  });
}

// Écouteur d'événement pour mettre à jour la navigation lors du scroll
window.addEventListener('scroll', updateNavigation);

// Initialisation au chargement de la page
updateNavigation();
</script>

<template>
  <div class="">
    <!-- Composant de particules comme fond -->
    <HomeBack />

    <HomeSection1 />
  </div>
</template>
