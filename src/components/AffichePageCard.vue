<script setup lang="ts">
  import { defineProps } from 'vue';
  import type { Database, Tables } from '@/supabase-types';
  import { ref } from "vue";
  defineProps <Database["public"]["Tables"]["Card"]["Row"]>(); 
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HomeBack from './HomeBack.vue';

  

  const progressCircle = ref<HTMLElement | null>(null);
  const progressContent = ref<HTMLElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.value && progressContent.value) {
      progressCircle.value.style.setProperty('--progress', (1 - progress).toString());
      progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
    }
  }


// Fonction pour vérifier si l'URL de l'image est valide
const isImageValid = (url : string) => {
  const image = new Image();
  image.src = url;
  return image.complete && image.naturalHeight !== 0;
};

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
  <HomeBack />
  <div class=" text-white  mx-12">
    <div>
      <div class="text-center flex flex-col justify-center mb-16 items-center mt-12 ">
        <h1 class="text-4xl font-bold mt-12 font-maPolice ">{{ nom_projet }}</h1>
        </div>  

      <h2 class="text-2xl underline mb-7 font-maPolice mx-12">{{ title1 }}</h2>
      <div class="flex flex-col md:flex-row gap-11">
        <!-- Description prenant 60% de l'espace sur les petits écrans et 3/5 sur les grands écrans -->
        <p class="text-justify w-full md:w-3/5 mx-12 text-base" style="font-family: 'Poppins'">{{ description1 }}</p>

        <!-- Images prenant 40% de l'espace sur les petits écrans et 2/5 sur les grands écrans -->
        <div class="flex flex-col w-full md:w-2/5">
          <img v-if="img2" class="w-full" :src="img2" alt="Image projet" />

          <!-- <img class="w-full" :src="img2" alt="Image projet" /> -->
        </div>
      </div>
      </div>  
      <div class="mt-20"></div>
      <div class="mx-12">
      <h2 class="text-2xl underline mb-7 font-maPolice">{{ title2 }}</h2>
      <div class="flex flex-col md:flex-row gap-11">
        <!-- Images prenant 40% de l'espace sur les petits écrans et 2/5 sur les grands écrans -->
        <div class="flex flex-col w-full md:w-2/5">
          <img class="w-full" v-if="img3" :src="img3" alt="Image projet" />
        </div>
        <!-- Description prenant 60% de l'espace sur les petits écrans et 3/5 sur les grands écrans -->
        <div class="text-justify w-full md:w-3/5 text-base">
          <p style="font-family: 'Poppins'">{{ description2 }}</p><br>
          <p style="font-family: 'Poppins'">{{ description2b }}</p>
        </div>
      </div>
    </div>
      <div>
      <div class="mt-20"></div>
      <h2 class="text-2xl underline mb-7 text-center font-maPolice">{{ title3 }}</h2>
        <div>
          <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
            :navigation="true"
            :modules="modules"
            @autoplayTimeLeft="onAutoplayTimeLeft"
            class="mySwiper"
          >
            <swiper-slide><img class="w-auto h-24" v-if="img7" :src="img7" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img8" :src="img8" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img9" :src="img9" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img10" :src="img10" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img11" :src="img11" alt="Image projet" /></swiper-slide>
            <swiper-slide><img class="w-auto h-24" v-if="img12" :src="img12" alt="Image projet" /></swiper-slide>

            <template #container-end>
              <div class="autoplay-progress">
              </div>
            </template>
          </swiper>
        </div>
      </div>
        <div class=mt-20></div>
          <div class="flex flex-col md:flex-row gap-11 mx-12">
            <!-- Partie gauche avec l'iframe -->
            <div class="w-full">
                <div class="flex flex-col gap-5">
                    <h2 class="text-2xl underline mb-5 font-maPolice">{{ title5 }}</h2>
                    <p class="text-justify text-base" style="font-family: 'Poppins'">{{ description4 }}</p>
                </div>
            </div>
        </div>
        <div class="mt-20"></div>
    </div>  
    <p class="text-white text-center font-bold text-2xl">
      Si l'article vous a appris une nouvelle chose, approndissez-les et améliorez vos connaissances avec nos quizs !
      Découvrez nos quizs sur la cybersécurité et améliorez vos connaissances sur la cybersecurité. 
    </p>
    <RouterLink to="/quizz" class="flex justify-center mb-20 mt-10" >
        <button class="font-maPolice bg-cyan-400 text-black text-xl p-2 rounded-lg">Découvrez nos quizs !</button>
    </RouterLink>
</template>

<style>
#app {
  height: 50%;
}
html,
body {
  position: relative;
  height: 50%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 50%;
  height: 50%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.autoplay-progress {
  position: absolute;
  right: 16px;
  bottom: 16px;
  z-index: 10;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--swiper-theme-color);
}

.autoplay-progress svg {
  --progress: 0;
  position: absolute;
  left: 0;
  top: 0px;
  z-index: 10;
  width: 100%;
  height: 100%;
  stroke-width: 4px;
  stroke: var(--swiper-theme-color);
  fill: none;
  stroke-dashoffset: calc(125.6 * (1 - var(--progress)));
  stroke-dasharray: 125.6;
  transform: rotate(-90deg);
}
</style>
