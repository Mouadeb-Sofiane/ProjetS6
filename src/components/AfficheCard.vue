<script setup lang="ts">
import { defineProps } from 'vue';
import type { Database, Tables } from '@/supabase-types';
defineProps <Database["public"]["Tables"]["Card"]["Row"]>()
</script>

<template>
    <div class="mb-10">
        <article 
        class="mx-auto max-w-sm shadow-xl bg-cover bg-center min-h-150 transform duration-500 hover:-translate-y-2 cursor-pointer group rounded-md" 
        :style="{ 'background-image': `url(${image_projet})` }"
        >
        <div class="bg-black bg-opacity-50 min-h-150 px-10 flex flex-wrap flex-col pt-32 hover:bg-opacity-80 transform duration-300">
            <h1 class="text-white text-3xl mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300 font-maPolice">
            {{ nom_projet }}
            </h1>
            <div class="relative w-32 h-2 mb-5 transform translate-y-20 group-hover:translate-y-0 duration-300">
                <div class="w-full h-full bg-white rounded-full overflow-hidden">
                    <div class="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-blue-400 rounded-full animate-slide duration-300"></div>
                </div>
            </div>


            <p class="opacity-0 text-white text-l group-hover:opacity-80 transform duration-500 text-justify">
                {{ description_projet }}
            
            </p>
            <RouterLink :to="{name:'/articles/[id]', params:{id:id!}}">
                <div class="opacity-0 border-white text-white text-xl group-hover:opacity-80 transform duration-500 flex justify-end mt-2 mb-2 font-maPolice">
                    <button type="button"  class="font-maPolice text-black bg-white border border-gray-300 rounded-lg focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium text-sm px-5 py-2.5 me-2 mb-2">
                        Voir plus
                    </button>
                </div>
            </RouterLink>
        </div>
        <div>
            <img v-if="image_projet" :src="image_projet" class="hidden"/>
        </div>
        </article>
    </div>
</template>
