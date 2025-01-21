<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>
<template>
    <RouterLink :to="`/films/${id}`" style="font-family:'Poppins';">
        <div class="p-4 max-w-sm">
            <div class="flex rounded-lg h-full dark:bg-white bg-teal-400 p-8 flex-col">
                <div class="flex items-center mb-3">
                    <img :src="image_film ?? undefined" alt="Placeholder Image" class="bg-teal-400 w-fullrounded-lg object-cover object-center mb-6">
                </div>
                <div class="flex gap-7">
                        <p class="text-gray-900 text-lg font-medium title-font" style="font-family:'Viga';">{{ titre_film }}</p>
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
                </div>     
        </div>
</RouterLink>
</template>
