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
      
      <h2 class=" font-maPolice text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl ml-6 text-center">Nos articles sur la cybersécurité.</h2>
        <p class=" text-primary mb-20 mt-10 ml-36 mr-36 text-justify" >
          Découvrez notre collection complète d’articles dédiés à la cybersécurité, 
          couvrant les dernières tendances, les meilleures pratiques et les menaces 
          émergentes. Pour aller plus loin, une vidéo exclusive vous attend, vous 
          offrant un aperçu approfondi des enjeux et des solutions pour renforcer 
          votre protection en ligne.
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
  

  