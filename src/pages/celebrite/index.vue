<script setup lang="ts">
import type { SchemaFilms } from '@/types';
import { supabase } from '@/supabase';
import AfficheCelebrite from '@/components/AfficheCelebrite.vue';
import { RouterLink } from 'vue-router';
 
console.log(supabase);
let {data : Celebrite, error} = await supabase
    .from('Celebrite')
    .select(`
    *,
    Films(*)
    `)
    if (error) {
        console.error( "erreur : dans list celeb :",error)
    }


console.log("data list celeb",Celebrite);
</script>

<template> 
<div class="p-5 bg-pink-100">
    <h1  class="text-center text-3xl mb-16 mt-16" style="font-family:'Viga';">Liste des célébrités</h1>
    <div class="p-5 bg-pink-100 grid lg:grid-cols-4 grid-cols-2 gap-4" style="font-family:'Poppins';">
        <div v-for="uneCeleb of Celebrite">
            <RouterLink :to="{ name : '/celebrite/[id]', params: { id: uneCeleb.id}}" >
                <div class="">
                <img :src="uneCeleb.photo_celebrite ?? undefined" class="w-56 m-auto rounded-md object-cover mb-2">
                </div> 
                <h2 class="text-center text-l mb-16 mt-16" style="font-family:'Viga';">{{ uneCeleb.prenom_celebrite }} {{ uneCeleb.nom_celebrite }}</h2>
            </RouterLink> 
        </div>
    </div>
</div>
</template>