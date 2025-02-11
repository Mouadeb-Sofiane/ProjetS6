<script setup lang="ts">
  import AffichePageCard from "./AffichePageCard.vue";
  import { useRouter, useRoute } from "vue-router";
  import { supabase } from "@/supabase";
  import type { Database, Tables } from '@/supabase-types';
  import { ref } from "vue";
  defineProps <Database["public"]["Tables"]["Card"]["Row"]>()
  

  const router = useRouter();
  const route = useRoute('/articles/[id]');

  let {data : projet, error} = await supabase
    .from('Card')
    .select('*')
    .eq('id', route.params.id)
    .single();
</script>


<template>
  <div class="p-2">
    <AffichePageCard v-if="projet" v-bind="projet" />
  </div>
</template>
