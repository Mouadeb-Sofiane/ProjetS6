<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/celebrite/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Celebrite"]["Row"] & {Films:Tables<'Films'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>

<template>
    <div class="p-5 bg-pink-100" style="font-family:'Poppins';">
        <div>
            <h1 class="text-center text-6xl mb-16 mt-16" style="font-family:'Viga';">{{ prenom_celebrite }} {{ nom_celebrite }}</h1>
                <div class="flex flex-col lg:flex-row gap-4">
                <img :src="photo_celebrite ?? undefined" class="w-56 m-auto rounded-md object-cover mb-16">
            
                <div class="">
                    <div class="flex pb-2">
                        <p class="text-l underline"style="font-family:'Viga';">Nationnalité</p>
                        <p class="ml-5 text-justify">{{ nationnalite_celebrite }}</p>

                        <p class="text-l ml-10 underline" style="font-family:'Viga';">Date de naissance</p>
                        <p class="ml-5">{{ date_naissance }}</p>
                    </div>
                    
                    <div class="mt-10 pb-2">
                        <p class="text-l underline" style="font-family:'Viga';">Biographie</p>
                        <p class="ml-5 text-justify">{{ bio_celebrite }}</p>
                    </div>
                </div>
            </div>
            <p class="text-l underline text-center" style="font-family:'Viga';">Filmographie</p>
                    <div class="grid lg:grid-cols-3">
                        <div class="gap-5 mb-7 mt-8 m-auto" v-for="unFilm in Films">
                            <RouterLink :to="{ name : '/films/[id]', params: { id: unFilm.id}}" >
                                <img class="rounded-md m-auto w-40" :src="unFilm.image_film ?? undefined" >
                            </RouterLink>
                        </div>
                    </div>
        </div>
    </div>
</template>