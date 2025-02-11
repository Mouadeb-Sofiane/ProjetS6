<template>
  <div id="particles-container" class="w-full h-screen bg-black"></div>
</template>

<script setup lang="ts">
import { onMounted, nextTick } from "vue";

// Déclaration globale de particlesJS
declare global {
  interface Window {
    particlesJS: any;
  }
}

onMounted(async () => {
  await nextTick(); // S'assurer que le DOM est chargé

  // Vérifier si l'élément existe
  const container = document.getElementById("particles-container");
  if (!container) {
    console.error("Erreur : #particles-container introuvable.");
    return;
  }

  // Charger dynamiquement particles.js si non disponible
  if (!window.particlesJS) {
    await import("particles.js");
  }

  // Initialisation de particlesJS
  window.particlesJS("particles-container", {
    particles: {
      number: { value: 150, density: { enable: true, value_area: 800 } },
      color: { value: "#4AB8F9" },
      shape: { type: "circle" },
      opacity: { value: 0.5, random: false, anim: { enable: false } },
      size: { value: 3, random: true, anim: { enable: false } },
      line_linked: { enable: true, distance: 150, color: "#4AB8F9", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, direction: "none", random: false, straight: false, out_mode: "out" },
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { grab: { distance: 200, line_linked: { opacity: 1 } }, push: { particles_nb: 4 } },
    },
    retina_detect: true,
  });
});
</script>

<style scoped>
#particles-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}
</style>
