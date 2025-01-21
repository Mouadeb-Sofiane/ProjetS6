<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/films/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>

<template>
<div class="p-5 bg-pink-100" style="font-family: 'Poppins';">
    <h1 class="text-center text-6xl mb-16 mt-16" style="font-family: 'Viga';">{{ titre_film }}</h1>
    <div class="flex flex-col lg:flex-row gap-4">
      <img :src="image_film ?? undefined" class="rounded-xl object-cover w-full lg:w-1/4 mb-8 lg:mb-0" />
      <div class="lg:w-1/2">
        <div class="flex flex-col">
          <div class="flex pb-2">
            <p class="text-l underline" style="font-family: 'Viga';">Date de sortie du film</p>
            <p class="text-l ml-5">{{ date_film }}</p>
          </div>
        <div class="flex pb-2">
            <p class="text-l underline" style="font-family:'Viga';">Les variantes du film </p>
            <p v-for="uneVariante in Variante" class="text-l ml-10"> {{ uneVariante.type }} </p>
        </div>
        <div class="flex pb-2">
            <p class="text-l underline" style="font-family:'Viga';">Durée du film</p>
            <p class="text-l ml-10">{{ temps_film }}</p>
        </div>
        <div class="flex pb-2">
            <p class="underline" style="font-family:'Viga';">Note du film</p>
            <div class="flex ml-8 pl-2 pb-2">
                <div v-for="n in note_film ?? 0" class="text-gray-400">
                    <svg class="w-5 h-5 fill-current text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2L14.47 8.53L21 9.35L16.24 13.77L17.47 20.07L12 17.77L6.53 20.07L7.76 13.77L3 9.35L9.53 8.53L12 2Z" />
                    </svg>
                </div>
                <div v-for="n in (5-(note_film??0))" class="text-gray-400 ">
                    <svg class="w-5 h-5 fill-current text-gray-400" viewBox="0 0 24 24">
                        <path d="M12 2L14.47 8.53L21 9.35L16.24 13.77L17.47 20.07L12 17.77L6.53 20.07L7.76 13.77L3 9.35L9.53 8.53L12 2Z" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="flex">
            <h2 class="underline" style="font-family:'Viga';">Genre du film</h2>
                <p v-for="unGenre in Genre" class="ml-5">{{ unGenre.genre_film }}</p>
        </div>
        </div>
        <div class="">
            <h2 class="mt-5 underline mb-3" style="font-family:'Viga';">Synopsis </h2>
                <p class="text-justify">{{ description_film }}</p></div>
                    <h2 class="mt-5 underline mb-3" style="font-family: 'Viga';">Acteurs </h2>
                    <div class="flex gap-3">
                    <div v-for="(uneCelbrite, index) in Celebrite" :key="index">
                        <RouterLink :to="{ name: '/celebrite/[id]', params: { id: uneCelbrite.id } }">
                            <img :src="uneCelbrite.photo_celebrite ?? undefined" class="rounded-full w-24" alt="Photo Acteurs" />
                        </RouterLink>
                        <p class="text-center">{{ uneCelbrite.prenom_celebrite }}</p>
                    </div>
                    </div>
                </div>
            </div>
       
            

        <div class="flex pb-2">
            <p class="text-l underline"></p>
            <div v-for="(uneSaga, index) in Saga" :key="index">
                <RouterLink :to="{ name: '/saga/[id]', params: { id: uneSaga.id } }">
                    <p class="text-l ml-10 flex gap-4" style="font-family:'Viga';"> Saga du fim : <p class="text-blue-500" v-for="uneSaga in Saga">{{ uneSaga.nom_de_la_saga }}</p></p>
                </RouterLink>
            </div>
        </div>

<div class="mt-10"> 
</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
        <div v-for="unSupport in Support" class="ml-10">
        <h2 class="text-2xl" style="font-family:'Viga';">Où acheter</h2>
            <div class="ml-10">
                <p>{{ unSupport.support_type }}</p>
                    <img :src="unSupport.support_img ?? undefined">
                <p>Acheter à {{ unSupport.support_prix }} €</p>
                <RouterLink :to="`/support/${id}`">
                    <button class="rounded-full bg-blue-300 p-2">
                        + d'infos
                    </button>
                </RouterLink>
            </div>
        </div>
        <div v-for="unePlateforme in Plateforme" class="ml-10">
        <h2 class="text-2xl" style="font-family:'Viga';">Où louer</h2>
            <div class="ml-10">
                <p>{{ unePlateforme.plateforme_streaming }}</p>
                    <img :src="unePlateforme.logo ?? undefined">
                <p >Louer à partir de {{ unePlateforme.plateforme_prix }} €</p>
                <RouterLink :to="`/plateforme/${id}`">
                    <button class="rounded-full bg-blue-300 p-2 text-center">
                        + d'infos
                    </button>
                </RouterLink>
            </div>
        </div>
    </div>
    <div class="max-w-md mx-auto bg-gray-200 shadow-md rounded-md p-4">
    <!-- Header de l'interface -->
    <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold">Commentaires</h2>
        <!-- Ajout de l'élément pour ajouter un commentaire -->
    </div>
    <!-- Section des commentaires -->
    <div class="space-y-4">
        <!-- Commentaire 1 -->
        <div class="flex items-center comment">
            <img src="../assets/img/avatar.jpg" alt="Avatar" class="w-10 h-10 rounded-full mr-4">
            <div>
                <h3 class="font-semibold">Avatar le maître</h3>
                <p class="text-gray-600">Ce film est incroyable je pense que cela va être compliqué de le surpasser.</p>
            </div>
        </div>

        <!-- Commentaire 2 -->
        <div class="flex items-center comment">
            <img src="../assets/img/minecraft.png" alt="Avatar" class="w-10 h-10 rounded-full mr-4 object-cover">
            <div>
                <h3 class="font-semibold">Le nooby</h3>
                <p class="text-gray-600">Non, ce film est trop long, nnnuuuuuulllll :(</p>
            </div>
        </div>

        <!-- Commentaire 3 -->
        <div class="flex items-center comment">
            <img src="../assets/img/avatar.jpg" alt="Avatar" class="w-10 h-10 rounded-full mr-4">
            <div>
                <h3 class="font-semibold">Avatar le maître</h3>
                <p class="text-gray-600">Argumente un peu plus, la durée n'est pas un prétexte.</p>
            </div>
        </div>
            <div class="comment">
                <!-- Zone de texte pour ajouter un commentaire -->
                <textarea id="comment-textarea" class="w-full bg-gray-100 rounded-md p-2" placeholder="Votre commentaire..."></textarea>
                <button id="submit-comment-btn" class="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Envoyer</button>
            </div>
        
    </div>
</div>
</div>
</template>

<style>
    /* Ajout de styles CSS */
    .comment {
        border-left: 4px solid #4299e1; /* Ajout d'une bordure à gauche pour chaque commentaire */
        padding-left: 1rem; /* Ajout de marge intérieure à gauche pour séparer le texte de la bordure */
    }
    @font-face {
  font-family: "Poppins";
  src: url("../fonts/Poppins-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Viga";
  src: url("../fonts/Viga-Regular.ttf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
</style>