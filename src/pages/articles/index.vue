<script setup lang="ts">
import { supabase } from '@/supabase';
import AfficheCard from '@/components/AfficheCard.vue';
import HomeBack from '@/components/HomeBack.vue';

let { data: tableauprojet, error } = await supabase.from('Card').select('*');
</script>

<template>
  <HomeBack />
  <div class="relative min-h-screen mt-28 px-4 sm:px-8">
    <!-- Titre -->
    <h2 class="text-white font-maPolice text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Nos articles sur la cybersécurité
    </h2>

    <!-- Description -->
    <p class="text-white text-justify max-w-3xl mx-auto mt-8 px-4 sm:px-0">
      Découvrez notre collection complète d’articles dédiés à la cybersécurité, 
      couvrant les dernières tendances, les meilleures pratiques et les menaces émergentes. 
      Pour aller plus loin, une vidéo exclusive vous attend, vous offrant un aperçu approfondi 
      des enjeux et des solutions pour renforcer votre protection en ligne.
    </p>

    <!-- Grid des cartes -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-0">
      <AfficheCard v-for="projet in tableauprojet" v-bind="projet" />
    </div>

    <h2 class="text-white mt-20 font-maPolice text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Notre Video Exclusive
    </h2>
    <!-- Vidéo -->
    <div class="flex justify-center mt-16 mb-16">
      <iframe 
        class="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
        src="https://www.youtube.com/embed/EqwWRzPTvZM" 
        title="Vidéo YouTube" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</template>
