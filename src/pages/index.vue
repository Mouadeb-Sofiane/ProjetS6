<script setup lang="ts">
import  AfficheFilm from '@/components/AfficheFilm.vue';
let {data : tableaufilms, error} = await supabase
    .from('Films')
    .select('*');
</script>

<template>
  <section class=" pt-5 text-center">
            <h2 class="text-3xl font-bold mb-2">Bienvenue sur Mon Site de Films</h2>
            <p class="text-lg text-gray-700 mb-4">Découvrez les derniers films et séries, explorez notre catalogue et bien plus encore.</p>
            <a href="#" class="bg-blue-500 text-white px-6 py-3 rounded-full inline-block hover:bg-blue-600 transition duration-300">Découvrir</a>
        </section>

        <!-- Featured Movies Section -->
        <section class="mt-12">
            <h2 class="text-l font-bold mb-6">Films en Vedette</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 stroke-black">
                <!-- Movie Card Example -->
                <AfficheFilm v-for="films in tableaufilms" v-bind="films" />
                <!-- Autres cartes de films peuvent être ajoutées ici -->
            </div>
        </section>
</template>
