const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
export interface SchemaFilms {
id?: string;
titre_film: string;
image_film: string;
description_film: string;
note_film: number;
};
interface Question {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Quiz {
  title: string;
  level: string;
  quest: Question[];
}
export interface SchemaProjet {
  id?: number;
  nom_projet: string;
  image_projet: string;
  lien_projet: string;
  description_projet: string;
  titre_page: string;
  description_page: string;
  video_p: string;
  logo: string;
  desc1: string;
  desc2: string;
  desc2b : string;
  desc3: string;
  desc4: string;
  desc5: string;
  desc6: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  img5: string;
  img6: string;
  img7: string;
  img8: string;
  img9: string;
  img10: string;
  img11: string;
  img12: string;
  title1: string;
  title2: string;
  title3: string;
  title4: string;
  title5: string;
  title6: string;
  };

  
export interface SchemaPageCard {
  id?: string;
  titre: string;
  description: string;
  };
  
export type User = {
    id: string
    email: string
    first_name: string
    last_name: string
    avatar_url: string
  };

  export type Progress = {
    id: number; // Si int8 (bigint en PostgreSQL), utilise `number`
    user_id: string; // UUID valide requis
    progress: object; // jsonb → utiliser un objet
    scores: object; // jsonb → utiliser un objet
    quiz_id: number; // int8 → utiliser `number`
  };
