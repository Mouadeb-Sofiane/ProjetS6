<script setup lang="ts">
import { defineProps, ref } from "vue";
import type { Database } from "@/supabase-types";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HomeBack from "./HomeBack.vue";

defineProps<Database["public"]["Tables"]["Card"]["Row"]>();

const progressCircle = ref<HTMLElement | null>(null);
const progressContent = ref<HTMLElement | null>(null);

const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
  if (progressCircle.value && progressContent.value) {
    progressCircle.value.style.setProperty("--progress", (1 - progress).toString());
    progressContent.value.textContent = `${Math.ceil(time / 1000)}s`;
  }
};

const modules = [Autoplay, Pagination, Navigation];
</script>

<template>
  <HomeBack />

  <div class="text-white mx-4 sm:mx-12 mt-24">
    <div class="text-center flex flex-col justify-center items-center mt-12 mb-16">
      <h1 class="text-3xl sm:text-4xl font-bold font-maPolice">{{ nom_projet }}</h1>
    </div>

    <!-- Section 1 -->
    <div class="mb-16">
      <h2 class="text-xl sm:text-2xl underline font-maPolice mx-4 sm:mx-12">{{ title1 }}</h2>
      <div class="flex flex-col md:flex-row gap-8 sm:gap-11 mt-6">
        <p class="text-justify w-full md:w-3/5 mx-4 sm:mx-12 text-base font-poppins">
          {{ description1 }}
        </p>
        <div class="flex flex-col w-full md:w-2/5">
          <img v-if="img2" class="w-full rounded-lg shadow-md" :src="img2" alt="Image projet" />
        </div>
      </div>
    </div>

    <!-- Section 2 -->
    <div class="mb-16">
      <h2 class="text-xl sm:text-2xl underline font-maPolice mx-4 sm:mx-12">{{ title2 }}</h2>
      <div class="flex flex-col md:flex-row gap-8 sm:gap-11 mt-6">
        <div class="flex flex-col w-full md:w-2/5">
          <img v-if="img3" class="w-full rounded-lg shadow-md" :src="img3" alt="Image projet" />
        </div>
        <div class="text-justify w-full md:w-3/5 text-base font-poppins">
          <p>{{ description2 }}</p><br>
          <p>{{ description2b }}</p>
        </div>
      </div>
    </div>

    <!-- Swiper -->
    <div class="mt-16">
      <h2 class="text-xl sm:text-2xl underline text-center font-maPolice">{{ title3 }}</h2>
      <div class="flex justify-center mt-8">
        <swiper
          :spaceBetween="20"
          :centeredSlides="true"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          :navigation="true"
          :modules="modules"
          @autoplayTimeLeft="onAutoplayTimeLeft"
          class="w-full max-w-4xl"
        >
          <swiper-slide v-for="(img, index) in [img7, img8, img9, img10, img11, img12]" :key="index">
            <img class="w-auto max-h-48 mx-auto rounded-lg shadow-md" v-if="img" :src="img" alt="Image projet" />
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!-- Section 5 -->
    <div class="mt-20 mx-4 sm:mx-12">
      <h2 class="text-xl sm:text-2xl underline font-maPolice">{{ title5 }}</h2>
      <p class="text-justify text-base font-poppins mt-4">
        {{ description4 }}
      </p>
    </div>

    <!-- Call to action -->
    <div class="mt-20 text-center">
      <p class="text-white font-bold text-xl sm:text-2xl">
        Si l'article vous a appris une nouvelle chose, approfondissez vos connaissances avec nos quizs !
      </p>
      <RouterLink to="/quizz" class="inline-block mt-8">
        <button class="font-maPolice bg-cyan-400 text-black text-xl px-6 py-3 rounded-lg shadow-md transition duration-300 hover:bg-cyan-500">
          Découvrez nos quizs !
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.swiper {
  width: 100%;
  height: auto;
}

.swiper-slide img {
  display: block;
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
