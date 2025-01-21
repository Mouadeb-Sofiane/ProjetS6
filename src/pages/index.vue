<script setup lang="ts">

</script>

<template>
  <section class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <div class="px-6 py-12 text-center">
      <h1 class="text-4xl font-bold mb-4">Bienvenue sur CyberSécurité</h1>
      <p class="text-lg mb-6">
        Protégez vos données, sécurisez vos systèmes et restez à l’abri des menaces numériques.
      </p>
      <RouterLink
        to="/services"
        class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
      >
        Découvrez nos solutions
      </RouterLink>
    </div>
  </section>

  <!-- Features Section -->
  <section class="py-12 bg-gray-100">
    <div class="container mx-auto px-6">
      <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">
        Pourquoi choisir nos services de cybersécurité ?
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">
          <svg
            class="w-16 h-16 text-blue-600 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c1.133 0 2.172.432 2.93 1.14m1.33-6.39l.28-.28a8 8 0 10-11.31 0l.28.28m3.93 2.26a4 4 0 015.62 0m-3.19 7.93a4 4 0 01-5.62 0m7.89 3.18a8.963 8.963 0 01-9.56 0"
            />
          </svg>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            Sécurité avancée
          </h3>
          <p class="text-gray-600">
            Des solutions de pointe pour prévenir les cyberattaques et protéger vos systèmes.
          </p>
        </div>
        <div class="text-center">
          <svg
            class="w-16 h-16 text-blue-600 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c1.133 0 2.172.432 2.93 1.14m1.33-6.39l.28-.28a8 8 0 10-11.31 0l.28.28m3.93 2.26a4 4 0 015.62 0m-3.19 7.93a4 4 0 01-5.62 0m7.89 3.18a8.963 8.963 0 01-9.56 0"
            />
          </svg>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            Expertise technique
          </h3>
          <p class="text-gray-600">
            Une équipe d’experts dédiée à vous offrir les meilleures solutions personnalisées.
          </p>
        </div>
        <div class="text-center">
          <svg
            class="w-16 h-16 text-blue-600 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 11c1.133 0 2.172.432 2.93 1.14m1.33-6.39l.28-.28a8 8 0 10-11.31 0l.28.28m3.93 2.26a4 4 0 015.62 0m-3.19 7.93a4 4 0 01-5.62 0m7.89 3.18a8.963 8.963 0 01-9.56 0"
            />
          </svg>
          <h3 class="text-xl font-semibold text-gray-800 mb-2">
            Support 24/7
          </h3>
          <p class="text-gray-600">
            Une assistance disponible à tout moment pour garantir votre tranquillité d’esprit.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Call to Action -->
  <section class="py-12 bg-blue-600 text-white text-center">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-4">Protégez vos données dès aujourd'hui !</h2>
      <p class="text-lg mb-6">
        Contactez-nous pour en savoir plus sur nos solutions de cybersécurité personnalisées.
      </p>
      <RouterLink
        to="/contact"
        class="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-6 rounded"
      >
        Contactez-nous
      </RouterLink>
    </div>
  </section>
</template>
