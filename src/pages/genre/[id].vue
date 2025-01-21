<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheGenre from '@/components/AfficheGenre.vue';

const route = useRoute('/genre/[id]');

let {data : film, error} = await supabase
    .from('Films')
    .select(`
    *,
    Celebrite(*),
    Genre(*),
    Saga(*),
    Support(*),
    Plateforme(*),
    Variante(*)
    `)
    .eq('id', route.params.id)
    .single();

console.log("data film",film);
</script>

<template>
    <div>
        <AfficheGenre v-bind="film" />
    </div>
</template>