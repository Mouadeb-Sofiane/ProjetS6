// Types de base
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

// Interfaces pour le Quiz
interface Question {
  question: string
  options: string[]
  answer: number
  explanation: string
}

export interface Quiz {
  title: string
  level: string
  quest: Question[]
}

// Types pour les utilisateurs et la progression
export type Progress = {
  id: number
  user_id: string
  progress: object
  scores: object
  quiz_id: number
}

export type User = {
  id: string
  email: string
  first_name: string
  last_name: string
  bio_users: string
  avatar_url: string
}

// Types pour les tables principales
export interface Tables {
  Card: {
    Row: {
      id: number
      nom_projet: string | null
      description_projet: string | null
      image_projet: string | null
      lien_projet: string | null
      logo: string | null
      maquette: string | null
      title1: string | null
      title2: string | null
      title3: string | null
      title4: string | null
      title5: string | null
      title6: string | null
      description1: string | null
      description2: string | null
      description2b: string | null
      description3: string | null
      description4: string | null
      img1: string | null
      img2: string | null
      img3: string | null
      img6: string | null
      img7: string | null
      img8: string | null
      img9: string | null
      img10: string | null
      img11: string | null
      img12: string | null
    }
  }
  
  Films: {
    Row: {
      id: number
      titre_film: string | null
      description_film: string | null
      date_film: string | null
      temps_film: string | null
      note_film: number | null
      image_film: string | null
    }
  }

  Celebrite: {
    Row: {
      id: number
      nom_celebrite: string | null
      prenom_celebrite: string | null
      bio_celebrite: string | null
      photo_celebrite: string | null
      date_naissance: string
      date_deces: string | null
      nationnalite_celebrite: string | null
    }
  }

  Genre: {
    Row: {
      id: number
      genre_film: string
    }
  }

  Plateforme: {
    Row: {
      id: number
      plateforme_streaming: string | null
      description_support: string | null
      lien_support: string | null
      logo: string | null
      plateforme_prix: number | null
    }
  }

  Support: {
    Row: {
      id: number
      support_type: string | null
      description_support1: string | null
      lien_support1: string | null
      support_img: string | null
      support_prix: number | null
    }
  }

  Saga: {
    Row: {
      id: number
      nom_de_la_saga: string | null
      description_saga: string | null
      image_saga: string | null
    }
  }

  // Tables de relations
  celebrite_film: {
    Row: {
      celebrite: number
      film: number
    }
    Relationships: [
      {
        foreignKeyName: "public_celebrite_film_celebrite_1_fkey"
        columns: ["celebrite"]
        referencedRelation: "Celebrite"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "public_celebrite_film_film_1_fkey"
        columns: ["film"]
        referencedRelation: "Films"
        referencedColumns: ["id"]
      }
    ]
  }

  genre_film: {
    Row: {
      film: number
      genre: number
    }
    Relationships: [
      {
        foreignKeyName: "public_genre_film_film_genre_fkey"
        columns: ["film"]
        referencedRelation: "Films"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "public_genre_film_genre_fkey"
        columns: ["genre"]
        referencedRelation: "Genre"
        referencedColumns: ["id"]
      }
    ]
  }

  plateforme_film: {
    Row: {
      film: number
      plateforme: number
    }
    Relationships: [
      {
        foreignKeyName: "public_plateforme_film_film_fkey"
        columns: ["film"]
        referencedRelation: "Films"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "public_plateforme_film_plateforme_fkey"
        columns: ["plateforme"]
        referencedRelation: "Plateforme"
        referencedColumns: ["id"]
      }
    ]
  }

  support_film: {
    Row: {
      film: number
      support: number
    }
    Relationships: [
      {
        foreignKeyName: "public_support_film_film_fkey"
        columns: ["film"]
        referencedRelation: "Films"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "public_support_film_support_fkey"
        columns: ["support"]
        referencedRelation: "Support"
        referencedColumns: ["id"]
      }
    ]
  }

  saga_film: {
    Row: {
      film: number
      saga: number
    }
    Relationships: [
      {
        foreignKeyName: "public_saga_film_film_fkey"
        columns: ["film"]
        referencedRelation: "Films"
        referencedColumns: ["id"]
      },
      {
        foreignKeyName: "public_saga_film_saga_fkey"
        columns: ["saga"]
        referencedRelation: "Saga"
        referencedColumns: ["id"]
      }
    ]
  }
}

// Type de la base de données
export type Database = {
  public: {
    Tables: Tables
    Views: {
      QuartierCommune: {
        Row: {
          id_Commune: number | null
          id_Quartier: number | null
          nom_commune: string | null
          nom_quartier: string | null
        }
      }
    }
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

// Types utilitaires
export type PublicSchema = Database[Extract<keyof Database, "public">]

export type TableRow<T extends keyof Tables> = Tables[T]["Row"]
export type TableRelationships<T extends keyof Tables> = Tables[T] extends { Relationships: any[] } ? Tables[T]["Relationships"] : never