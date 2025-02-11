<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { supabase } from '@/supabase';
import Dash from '../components/DashPage.vue';
import AfficheCard from './AfficheCard.vue';
import Home2 from '../components/Home2.vue';

gsap.registerPlugin(ScrollTrigger);

// Références pour les animations
const introSection = ref(null);
const whySection = ref(null);
const basicsSection = ref(null);
const finalSection = ref(null);
const titleElement = ref(null);
const subtitleElement = ref(null);
const descriptionElement = ref(null);

// Référence pour stocker les projets
const tableauprojets = ref([]);

// Récupération des données depuis Supabase
onMounted(async () => {
  const { data, error } = await supabase.from('Card').select('*');
  if (error) {
    console.error('Erreur Supabase:', error);
  } else {
    tableauprojets.value = data;
  }
});

// Animation GSAP au montage du composant
onMounted(() => {
  gsap.from(titleElement.value, {
    duration: 1.2,
    y: 100,
    opacity: 0,
    ease: "power4.out"
  });

  gsap.from([subtitleElement.value, descriptionElement.value], {
    duration: 1,
    y: 50,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out"
  });

  gsap.from(whySection.value, {
    scrollTrigger: {
      trigger: whySection.value,
      start: "top center",
      end: "bottom center",
      toggleActions: "play none none reverse"
    },
    duration: 1,
    scale: 0.8,
    opacity: 0,
    ease: "power2.out"
  });

  gsap.from(basicsSection.value, {
    scrollTrigger: {
      trigger: basicsSection.value,
      start: "top 80%",
      end: "bottom center",
      toggleActions: "play none none reverse"
    },
    duration: 1.2,
    x: -100,
    opacity: 0,
    ease: "power3.inOut"
  });

  gsap.from(finalSection.value, {
    scrollTrigger: {
      trigger: finalSection.value,
      start: "top 70%",
      end: "bottom center",
      toggleActions: "play none none reverse"
    },
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "elastic.out(1, 0.75)"
  });

  // Animation au survol
  document.querySelectorAll('.hover-animate').forEach(element => {
    element.addEventListener('mouseenter', () => {
      gsap.to(element, { duration: 0.3, scale: 1.05, ease: "power2.out" });
    });
    element.addEventListener('mouseleave', () => {
      gsap.to(element, { duration: 0.3, scale: 1, ease: "power2.out" });
    });
  });
});

// Fonction pour un défilement fluide avec offset
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    const offset = 50;
    const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
  }
};
</script>


<template>
  <div class="overflow-hidden mt-10 mb-10">
    <div class="relative z-10 text-white">
      <!-- Section Intro -->
      <section id="intro" 
        class="mt-20 flex flex-col md:flex-row items-center justify-center text-left px-4 sm:px-8 space-y-8 md:space-y-0 md:space-x-8 mb-10" 
        ref="introSection">
        <!-- Texte à gauche -->
        <div class="w-full md:w-1/2 text-center md:text-left">
          <h1 ref="titleElement" class="text-2xl font-bold font-maPolice mt-20  sm:text-xl md:text-2xl lg:text-4xl mb-14">
            Bienvenue sur notre Site de Cybersécurité
          </h1>
          <p ref="subtitleElement" class="text-sm sm:text-base md:text-lg mb-16 max-w-2xl mx-auto md:mx-0">
            Apprenez à protéger vos données et vos informations personnelles contre les cyberattaques.
            Ce site est dédié à la cybersécurité, vous fournissant des ressources et des bonnes pratiques pour assurer
            votre sécurité numérique. Découvrez nos articles, testez vos mots de passe et participez à nos quiz interactifs.
          </p>
          <div class="flex flex-wrap gap-4 justify-center md:justify-start">
            <button class="font-maPolice rounded-lg bg-cyan-400 text-black p-2 hover-animate" @click="scrollToSection('final')">
              Tester votre mot de passe
            </button>
            <RouterLink to="/Quizz">
              <button class="font-maPolice rounded-lg bg-cyan-400 text-black p-2 hover-animate">
                Accéder aux quizs
              </button>
            </RouterLink>
          </div>
        </div>

        <!-- Image à droite -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img class="w-[80%] sm:w-[60%] object-cover rounded-full" src="@/assets/img/XYGi.gif" alt="Animation de cybersécurité">
        </div>
      </section>

      <!-- Section Bases -->
      <section id="why-important" class="mt-20 flex items-center justify-center" ref="whySection">
        <div class="relative w-full">
          <div class="relative z-10 flex items-center justify-center w-full hover-animate">
            <Home2 />
          </div>
        </div>
      </section>

      <!-- Section Importance -->
      <section id="basics" class="mt-20 mb-10 flex flex-col items-center justify-center px-4" ref="basicsSection">
        <h2 class="text-2xl text-center sm:text-3xl md:text-4xl font-semibold mb-10 font-maPolice">
          Nos articles sur la cybersécurité
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
          <AfficheCard v-for="projet in tableauprojets" :key="projet.id" v-bind="projet" />
        </div>
        <p v-if="tableauprojets.length === 0" class="text-red-500 mt-4">Aucun projet trouvé.</p>
      </section>

      <!-- Section Finale -->
      <section id="final" class="mt-20 flex items-center justify-center relative overflow-hidden px-4 text-center" ref="finalSection">
        <div class="relative text-center z-10 max-w-3xl">
          <h2 class="text-white font-maPolice text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Testeur de Mot de Passe
          </h2>
          <p class="text-base sm:text-lg md:text-xl mt-4">
            Améliorez votre niveau de sécurité en testant vos mots de passe. Notre outil vous aide à créer des mots de
            passe plus sécurisés et à évaluer leur complexité pour mieux comprendre vos risques et les atténuer.
          </p>
          <div class="mt-6">
            <Dash class="text-black" />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.hover-animate {
  transition: transform 0.3s ease;
}

.hover-animate:hover {
  transform: scale(1.05);
}
</style>
