const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface SchemaFilms {
id?: string;
titre_film: string;
image_film: string;
description_film: string;
note_film: number;
};
export type User = {
    id: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
  };

