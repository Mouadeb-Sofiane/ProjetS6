<script setup lang="ts">
import { useRoute } from 'vue-router/auto';
import { supabase } from '@/supabase';
import AfficheSaga from '@/components/AfficheSaga.vue';

const route = useRoute('/saga/[id]');


let {data : saga, error} = await supabase
    .from('Saga')
    .select(`
    *,
    Films(*)
    `)
    .eq('id', route.params.id)
    .single();

console.log("data film",saga);
</script>

<template>
    <div>
        <AfficheSaga v-bind="saga" />
    </div>
</template>