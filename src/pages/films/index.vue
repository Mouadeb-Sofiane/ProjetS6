<script setup lang="ts">
import type { SchemaFilms } from '@/types';
import { supabase } from '@/supabase';
import AfficheFilm from '@/components/AfficheFilm.vue';
 
console.log(supabase);
    
let {data : tableaufilms, error} = await supabase
    .from('Films')
    .select('*');
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6-4 bg-pink-100">
        <AfficheFilm v-for="films in tableaufilms" v-bind="films" />
    </div>
</template>