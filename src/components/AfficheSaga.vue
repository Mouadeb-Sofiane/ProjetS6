<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/saga/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Saga"]["Row"] & {Films:Tables<'Films'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>

<template>
     <div class="p-5 pb-24 bg-pink-100" style="font-family:'Poppins';">
        <div >
            <h1 class="text-center text-6xl mb-16 mt-16 "  style="font-family:'Viga';">{{ nom_de_la_saga }}</h1>
            <div class="flex flex-col lg:flex-row gap-4">
                <img :src="image_saga ?? undefined" class="w-40 h-44 m-auto rounded-md object-cover mb-16">
            
                <div class="">
                    <div class="flex pb-2">
                        <p class="text-l underline"  style="font-family:'Viga';">Synopsis de la saga</p>   
                    </div>
                    <p class="ml-5 mr-5 text-justify flex flex-col lg:flex-row" style="font-family:'Poppins';">{{ description_saga }}</p>
                </div>
                
            </div>
        </div>
        <div>
            <p class="text-center mt-5 text-3xl" style="font-family:'Viga';">Les films issus de la saga</p>
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