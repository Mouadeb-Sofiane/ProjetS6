<script setup lang="ts">
import { supabase } from '@/supabase';
import AfficheCard from '@/components/AfficheCard.vue';
import HomeBack from '@/components/HomeBack.vue';

let {data: tableauprojet, error} = await supabase
  .from('Card')
  .select('*');
</script>

<template>
  <HomeBack />
    <div class="relative">
    <div class="text-white bg-primary min-h-screen mt-28">
      
      <h2 class=" font-maPolice text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ml-6 text-center">Nos articles sur la cybersécurité.</h2>
        <p class=" text-primary mb-20 mt-10 ml-12 mr-12 text-justify" >
          Voici l'intégralité de nos articles 
        </p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6-4 ">
                <AfficheCard v-for="projet in tableauprojet" v-bind="projet" />
             </div>
        </div>
    </div>  
    <iframe 
  class="video-page__streaming-iframe"
  src="https://www.youtube.com/embed/EqwWRzPTvZM" 
  title="Vidéo YouTube" 
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen>
</iframe>
</template>
  

  