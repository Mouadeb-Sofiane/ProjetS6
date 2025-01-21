<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { defineProps } from 'vue';
import { supabase } from '@/supabase';
const route = useRoute('/genre/[id]');
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Films"]["Row"] & {Celebrite:Tables<'Celebrite'>[]} & {Genre:Tables<'Genre'>[]} & {Saga:Tables<'Saga'>[]} & {Variante:Tables<'Variante'>} & {Support:Tables<'Support'>} & {Plateforme:Tables<'Plateforme'>}>()
</script>

<template>
    <div>
        <h2>{{ titre_film }}</h2>
        <p>{{ description_film }}</p>
        <p>{{ note_film }}</p>
        <p>{{ date_film }}</p>
        <p>{{ temps_film }}</p>
        <p v-for="uneCelbrite in Celebrite">{{ uneCelbrite.nom_celebrite }}</p>
        <p v-for="uneCelbrite in Celebrite">{{ uneCelbrite.prenom_celebrite }}</p>
        <p v-for="unGenre in Genre">{{ unGenre.genre_film }}</p>
    </div>
</template>