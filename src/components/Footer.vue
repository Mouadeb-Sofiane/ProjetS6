<script setup lang="ts">
  import { RouterLink } from "vue-router";
  import LogoSpider from "./icon/Logo-Spider.vue";
  import FacebookIcon from "./icon/FacebookIcon.vue";
  import InstagramIcon from "./icon/InstagramIcon.vue";
  import LinkedinIcon from "./icon/LinkedinIcon.vue";
  import YoutubeIcon from "./icon/YoutubeIcon.vue";
</script>

<template>
  <div class="h-0.5 bg-cyan-500 w-full"></div>
  <footer class="bg-gris text-white py-8">
    <div class="container mx-auto px-6 md:px-12">
      <!-- Grille principale -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Section Programmes -->
        <div>
          <h2 class="text-2xl font-bold mb-4 font-maPolice">Les Programmes</h2>
          <div class="h-0.5 bg-cyan-500 w-full mb-10"></div>
          <ul class="grid grid-cols-2 gap-2 text-gray-300">
            <li><RouterLink to="/" class="hover:text-white">Accueil</RouterLink></li>
            <li><RouterLink to="/Quizz" class="hover:text-white">Les Quiz</RouterLink></li>
            <li><RouterLink to="/Profile" class="hover:text-white">Mon Profil</RouterLink></li>
            <li><RouterLink to="/Jeux" class="hover:text-white">Le Jeu éducatif</RouterLink></li>
            <li><RouterLink to="/Login" class="hover:text-white">Se connecter</RouterLink></li>
          </ul>
        </div>

        <!-- Section Services et Apps -->
        <div>
          <h2 class="text-2xl font-bold mb-4 font-maPolice">Les Services</h2>
          <div class="h-0.5 bg-cyan-500 w-full mb-10"></div>
          <ul class="grid grid-cols-2 gap-2 text-gray-300">
            <li><RouterLink to="/jeux" class="hover:text-white">Le jeu éducatif</RouterLink></li>
            <li><RouterLink to="/quizz" class="hover:text-white">Les Quizz</RouterLink></li>
            <li><RouterLink to="/articles" class="hover:text-white">Articles sur la cybersécurité</RouterLink></li>
          </ul>
        </div>


        <!-- Section Réseaux sociaux -->
        <div class="flex flex-col items-start md:items-end">
          <!-- Logo -->
          <RouterLink to="/" class="mb-6">
            <LogoSpider class="h-20"/>
            <p class="text-center text-xl bg-gradient-to-r from-textlogo1 via-textlogo2 to-textlogo3 text-transparent bg-clip-text font-bold">
             SilentTrap
            </p>
          </RouterLink>
        </div>
        
        
       
      </div>
    </div>
  </footer>
</template>
