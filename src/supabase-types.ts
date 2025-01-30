export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

  export type User = {
    id: string
    email: string
    first_name: string
    last_name: string
    bio_users: string
    avatar_url: string
  }
export type Database = {
  public: {
    Tables: {
      Agent: {
        Row: {
          id: number
          id_users: string | null
          nom_agent: string | null
        }
        Insert: {
          id?: number
          id_users?: string | null
          nom_agent?: string | null
        }
        Update: {
          id?: number
          id_users?: string | null
          nom_agent?: string | null
        }
        Relationships: []
      }
      basket: {
        Row: {
          bande: string | null
          created_at: string
          empeigne: string | null
          id: number
          lacet: string | null
          languette: string | null
          oeillet: string | null
          pointe: string | null
          semelle: string | null
          trimestre: string | null
        }
        Insert: {
          bande?: string | null
          created_at?: string
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Update: {
          bande?: string | null
          created_at?: string
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Relationships: []
      }
      Celebrite: {
        Row: {
          bio_celebrite: string | null
          date_deces: string | null
          date_naissance: string
          id: number
          nationnalite_celebrite: string | null
          nom_celebrite: string | null
          photo_celebrite: string | null
          prenom_celebrite: string | null
        }
        Insert: {
          bio_celebrite?: string | null
          date_deces?: string | null
          date_naissance: string
          id?: number
          nationnalite_celebrite?: string | null
          nom_celebrite?: string | null
          photo_celebrite?: string | null
          prenom_celebrite?: string | null
        }
        Update: {
          bio_celebrite?: string | null
          date_deces?: string | null
          date_naissance?: string
          id?: number
          nationnalite_celebrite?: string | null
          nom_celebrite?: string | null
          photo_celebrite?: string | null
          prenom_celebrite?: string | null
        }
        Relationships: []
      }
      celebrite_film: {
        Row: {
          celebrite: number
          film: number
        }
        Insert: {
          celebrite: number
          film: number
        }
        Update: {
          celebrite?: number
          film?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_celebrite_film_celebrite_1_fkey"
            columns: ["celebrite"]
            isOneToOne: false
            referencedRelation: "Celebrite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_celebrite_film_film_1_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
        ]
      }
      Commune: {
        Row: {
          commune_quartier: string | null
          id: number
          nom_commune: string | null
        }
        Insert: {
          commune_quartier?: string | null
          id?: number
          nom_commune?: string | null
        }
        Update: {
          commune_quartier?: string | null
          id?: number
          nom_commune?: string | null
        }
        Relationships: []
      }
      Films: {
        Row: {
          date_film: string | null
          description_film: string | null
          id: number
          image_film: string | null
          note_film: number | null
          temps_film: string | null
          titre_film: string | null
        }
        Insert: {
          date_film?: string | null
          description_film?: string | null
          id?: number
          image_film?: string | null
          note_film?: number | null
          temps_film?: string | null
          titre_film?: string | null
        }
        Update: {
          date_film?: string | null
          description_film?: string | null
          id?: number
          image_film?: string | null
          note_film?: number | null
          temps_film?: string | null
          titre_film?: string | null
        }
        Relationships: []
      }
      Genre: {
        Row: {
          genre_film: string
          id: number
        }
        Insert: {
          genre_film: string
          id?: number
        }
        Update: {
          genre_film?: string
          id?: number
        }
        Relationships: []
      }
      genre_film: {
        Row: {
          film: number
          genre: number
        }
        Insert: {
          film?: number
          genre: number
        }
        Update: {
          film?: number
          genre?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_genre_film_film_genre_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_genre_film_genre_fkey"
            columns: ["genre"]
            isOneToOne: false
            referencedRelation: "Genre"
            referencedColumns: ["id"]
          },
        ]
      }
      Maison: {
        Row: {
          adresse: string | null
          agent: number | null
          favori: boolean | null
          id: number
          image: string | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string
          prix: number | null
          rue: number | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          agent?: number | null
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string
          prix?: number | null
          rue?: number | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          agent?: number | null
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string
          prix?: number | null
          rue?: number | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Maison_agent_fkey"
            columns: ["agent"]
            isOneToOne: false
            referencedRelation: "Agent"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Maison_rue_fkey"
            columns: ["rue"]
            isOneToOne: false
            referencedRelation: "Quartier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Maison_rue_fkey"
            columns: ["rue"]
            isOneToOne: false
            referencedRelation: "QuartierCommune"
            referencedColumns: ["id_Quartier"]
          },
        ]
      }
      Plateforme: {
        Row: {
          description_support: string | null
          id: number
          lien_support: string | null
          logo: string | null
          plateforme_prix: number | null
          plateforme_streaming: string | null
        }
        Insert: {
          description_support?: string | null
          id?: number
          lien_support?: string | null
          logo?: string | null
          plateforme_prix?: number | null
          plateforme_streaming?: string | null
        }
        Update: {
          description_support?: string | null
          id?: number
          lien_support?: string | null
          logo?: string | null
          plateforme_prix?: number | null
          plateforme_streaming?: string | null
        }
        Relationships: []
      }
      plateforme_film: {
        Row: {
          film: number
          plateforme: number
        }
        Insert: {
          film: number
          plateforme: number
        }
        Update: {
          film?: number
          plateforme?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_plateforme_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_plateforme_film_plateforme_fkey"
            columns: ["plateforme"]
            isOneToOne: false
            referencedRelation: "Plateforme"
            referencedColumns: ["id"]
          },
        ]
      }
      Quartier: {
        Row: {
          id: number
          nom_quartier: string | null
          quartier_commune: number | null
        }
        Insert: {
          id?: number
          nom_quartier?: string | null
          quartier_commune?: number | null
        }
        Update: {
          id?: number
          nom_quartier?: string | null
          quartier_commune?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "Quartier_quartier_commune_fkey"
            columns: ["quartier_commune"]
            isOneToOne: false
            referencedRelation: "Commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Quartier_quartier_commune_fkey"
            columns: ["quartier_commune"]
            isOneToOne: false
            referencedRelation: "QuartierCommune"
            referencedColumns: ["id_Commune"]
          },
        ]
      }
      Saga: {
        Row: {
          description_saga: string | null
          id: number
          image_saga: string | null
          nom_de_la_saga: string | null
        }
        Insert: {
          description_saga?: string | null
          id?: number
          image_saga?: string | null
          nom_de_la_saga?: string | null
        }
        Update: {
          description_saga?: string | null
          id?: number
          image_saga?: string | null
          nom_de_la_saga?: string | null
        }
        Relationships: []
      }
      saga_film: {
        Row: {
          film: number
          saga: number
        }
        Insert: {
          film: number
          saga: number
        }
        Update: {
          film?: number
          saga?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_saga_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_saga_film_saga_fkey"
            columns: ["saga"]
            isOneToOne: false
            referencedRelation: "Saga"
            referencedColumns: ["id"]
          },
        ]
      }
      Support: {
        Row: {
          description_support1: string | null
          id: number
          lien_support1: string | null
          support_img: string | null
          support_prix: number | null
          support_type: string | null
        }
        Insert: {
          description_support1?: string | null
          id?: number
          lien_support1?: string | null
          support_img?: string | null
          support_prix?: number | null
          support_type?: string | null
        }
        Update: {
          description_support1?: string | null
          id?: number
          lien_support1?: string | null
          support_img?: string | null
          support_prix?: number | null
          support_type?: string | null
        }
        Relationships: []
      }
      support_film: {
        Row: {
          film: number
          support: number
        }
        Insert: {
          film: number
          support: number
        }
        Update: {
          film?: number
          support?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_support_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_support_film_support_fkey"
            columns: ["support"]
            isOneToOne: false
            referencedRelation: "Support"
            referencedColumns: ["id"]
          },
        ]
      }
      variant_film: {
        Row: {
          film: number
          variante: number
        }
        Insert: {
          film: number
          variante: number
        }
        Update: {
          film?: number
          variante?: number
        }
        Relationships: [
          {
            foreignKeyName: "public_variant_film_film_fkey"
            columns: ["film"]
            isOneToOne: false
            referencedRelation: "Films"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_variant_film_variante_fkey"
            columns: ["variante"]
            isOneToOne: false
            referencedRelation: "Variante"
            referencedColumns: ["id"]
          },
        ]
      }
      Variante: {
        Row: {
          id: number
          type: string
        }
        Insert: {
          id?: number
          type: string
        }
        Update: {
          id?: number
          type?: string
        }
        Relationships: []
      }
    }
    Views: {
      QuartierCommune: {
        Row: {
          id_Commune: number | null
          id_Quartier: number | null
          nom_commune: string | null
          nom_quartier: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
