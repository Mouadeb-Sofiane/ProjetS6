<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router/auto';
import AfficheSingle from '@/components/AfficheSingle.vue';
import { supabase } from '@/supabase';  // Import supabase client from the file

const projet = ref<any>({});
const route = useRoute("/articles/[id]");


onMounted(async () => {
  const { data, error } = await supabase
    .from('Card')
    .select('*')
    .eq('id', route.params.id)
    .single();
  
  if (error) {
    console.error(error);
  } else {
    projet.value = data;
  }
});
</script>

<template>
  <div class="relative">

    <div class="min-h-screen">
      <div class="text-secondary text-primary">
        <!-- Apply v-if here directly on the AfficheSingle component -->
        <AfficheSingle v-if="projet" v-bind="projet" />
      </div>
    </div>
  </div>
</template>