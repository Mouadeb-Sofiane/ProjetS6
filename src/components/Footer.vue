<script setup lang="ts">
    import { ref, defineProps, onMounted } from 'vue';
    import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="bg-secondary h-0.5"></div>  
    <footer class="bg-primary py-4 text-secondary">  
      <div class="bg-primary p-4 flex flex-col sm:flex-row items-center justify-between">
        <div class="flex justify-center sm:justify-start space-x-8 sm:space-x-12 mb-4 sm:mb-0">
          <a href="https://www.linkedin.com/in/sofiane-mouadeb-1b2b78257/" class="text-white hover:text-gray-400"><IconLinkedin /></a>
          <a href="https://www.behance.net/sofianemouadeb" class="text-white hover:text-gray-400"><IconBehance /></a>
          <a href="https://github.com/Mouadeb-Sofiane" class="text-white hover:text-gray-400"><IconGithub /></a>
        </div>
        <p class="text-gray-400 mb-4 sm:mb-0">&copy; 2024 Sofiane Mouadeb. Site sur la cybersécurité.</p>
        <div class="flex justify-center sm:justify-end space-x-8 sm:space-x-4">
          <RouterLink to="/login-logout" class="text-white hover:text-gray-400">Se connecter</RouterLink>
          <a href="https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSHwrvPxPSCbQHKdKsWdRxwPqhdRJXLzQNMVlCcjbHTCXDbtDgjNtlGZdxxJGbhWCqlbqlzq" class="text-white hover:text-gray-400"><IconMail/></a>
        </div>
      </div>
    </footer>
</template>
