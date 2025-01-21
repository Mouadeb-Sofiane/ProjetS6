<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/support/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>

<template>
    <div class="p-5 pb-24 bg-pink-100" style="font-family:'Poppins';">
        <div v-for="unSupport in Support">
            <h1 class="text-center text-6xl mb-16 mt-16" style="font-family:'Viga';">{{ unSupport.support_type }}</h1>
            <div class="flex flex-col lg:flex-row gap-4">
                <img :src="unSupport.support_img ?? undefined" class="w-40 h-44 m-auto">
            
                <div class="flex flex-col">
                    <div class="flex flex-col lg:flex-row">
                        <p class="text-l underline" style="font-family:'Viga';">Description du support</p>
                        <p class="ml-5 text-justify">{{ unSupport.description_support1 }}</p>
                    </div>
                    <div class="flex pb-2 mt-5">
                        <p class="text-l underline" style="font-family:'Viga';">Prix du support</p>
                        <p class="ml-5">{{ unSupport.support_prix }} €</p>
                    </div>
                    <div class="flex pb-2 justify-center">
                        <a :href="unSupport.lien_support1" class="rounded-md p-2 bg-slate-700 text-gray-200 text-center" style="font-family:'Viga';">Lien vers le support</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>