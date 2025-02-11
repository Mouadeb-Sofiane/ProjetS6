<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const canvas = document.getElementById('matrix');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const fontSize = 16;
  const columns = canvas.width / fontSize; // Nombre de colonnes basées sur la taille de police
  const drops = Array(Math.floor(columns)).fill(1);

  const draw = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#4AB8F9'; // Couleur Matrix
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
      // Générer une lettre aléatoire (majuscule ou minuscule)
      const text = String.fromCharCode(Math.floor(Math.random() * 26) + (Math.random() > 0.5 ? 65 : 97));
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0; // Réinitialise la goutte si elle dépasse la hauteur
      }
      drops[i]++;
    }
  };

  const updateCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

  window.addEventListener('resize', updateCanvas);

  setInterval(draw, 50);
});
</script>

<template>
  <canvas
    id="matrix"
    class="fixed top-0 left-0 w-full h-full z-0"
  ></canvas>
</template>

<style>
canvas {
  background-color: black;
}
</style>
