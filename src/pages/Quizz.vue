<template>
<HomeBack />
  <div class="p-6 pt-32  min-h-screen text-gray-300">
    <h1 class="text-3xl sm:text-4xl font-bold mb-6 text-white text-center font-maPolice">Sélectionnez un Quiz</h1>

    <!-- Texte d'introduction au quiz -->
    <p class="text-sm sm:text-base text-gray-400 mb-4 text-center">
      Bienvenue sur notre site de quizz sur la cybersécurité. 
      Vous pouvez choisir un quiz en cliquant sur le titre de celui-ci.
      Vous débloquerez ainsi des connaissances sur la cybersécurité et vous aiderez les autres utilisateurs.
      Les quizz sont disponible du debutant au professionnel, plus vous avancez, plus vous aurez de connaissances sur la cybersécurité.
      Plus les quizz seront difficiles, plus vous aurez de connaissances sur la cybersécurité.
    </p>
    
    <!-- Grille des quiz -->
    <div class="grid grid-cols-1 lg:grid-cols-2 w-full gap-6">
      <div v-for="(quiz, index) in quizzes" :key="index" class="w-full p-4 rounded-lg shadow-lg bg-gray-800">
        <QuizList 
          :quizzes="[quiz]" 
          :progress="[progress[index]]" 
          @startQuiz="startQuiz(index)"
          @closeQuiz="resetQuiz"
        />
        
        <!-- Afficher les questions sous le quiz sélectionné -->
        <div v-if="currentQuiz === index" class="mt-4 p-4 bg-black rounded-lg shadow-lg">
          <QuizQuestion 
            v-if="!quizCompleted"
            :quiz="quiz"
            :currentQuestion="quiz.questions[currentQuestionIndex]"
            :currentIndex="currentQuestionIndex"
            :userAnswers="userAnswers"
            :feedback="feedback"
            :explanation="explanation"
            @nextQuestion="nextQuestion"
            @submitQuiz="submitQuiz"
            @quitQuiz="quitQuiz"
          />

          <QuizResult 
            v-if="quizCompleted"
            :score="score"
            :total="quiz.questions.length"
            @resetQuiz="resetQuiz"
            @showRecap="showRecap = true"
          />

          <QuizRecap 
            v-if="showRecap"
            :quiz="quiz"
            :userAnswers="userAnswers"
            @resetQuiz="resetQuiz"
          />
        </div>
      </div>
    </div>
  </div>
</template>



<script setup lang="ts">
import { ref } from "vue";
import QuizRecap from "@/components/QuizRecap.vue";
import QuizQuestion from "@/components/QuizzQuestion.vue";
import QuizResult from "@/components/QuizzResult.vue";
import QuizList from "@/components/QuizzList.vue";

import HomeBack from "@/components/HomeBack.vue";

// Liste des quiz
const quizzes = ref([
  {
    title: 'Introduction à la Cybersécurité', 
    level: 'Débutant',
    questions: [
      { question: "Qu'est-ce que la cybersécurité ?", options: ["Une marque d'ordinateur", "Une discipline protégeant les systèmes", "Un type de virus informatique"], answer: 1, explanation: "La cybersécurité concerne la protection des systèmes informatiques contre les attaques et les menaces." },
      { question: "Quelle est la menace la plus courante sur Internet ?", options: ["Phishing", "Malware", "Attaque physique"], answer: 0, explanation: "Le phishing est une technique courante utilisée pour voler des informations personnelles via des e-mails frauduleux." },
      { question: "Quel est un exemple de bon mot de passe ?", options: ["123456", "MonNom2024", "@!xG8#zR"], answer: 2, explanation: "Un bon mot de passe doit être long, complexe et difficile à deviner." },
      { question: "Que signifie HTTPS ?", options: ["HyperText Transfer Protocol Secure", "High Tech Protection System", "HyperText Transfer Protocol Standard"], answer: 0, explanation: "HTTPS est une version sécurisée de HTTP qui utilise le chiffrement pour protéger les données échangées." }
    ]
  },
  { 
    title: 'Phishing et Ingénierie Sociale', 
    level: 'Intermédiaire',
    questions: [
      { question: "Quel est l'objectif du phishing ?", options: ["Voler des informations personnelles", "Bloquer un site web", "Créer un virus"], answer: 0, explanation: "Le phishing est une technique visant à récupérer des informations sensibles en se faisant passer pour une entité de confiance." },
      { question: "Que faire si vous recevez un e-mail suspect ?", options: ["Cliquer sur le lien", "Ignorer", "Vérifier l'expéditeur et signaler"], answer: 2, explanation: "Il est crucial de toujours vérifier l'expéditeur et de signaler les e-mails suspects pour éviter les arnaques." },
      { question: "Comment reconnaître un site de phishing ?", options: ["URL suspecte", "Pas de fautes d'orthographe", "Présence d'un cadenas vert"], answer: 0, explanation: "Un site de phishing utilise souvent une URL trompeuse ou légèrement modifiée pour tromper les utilisateurs." },
      { question: "Quelle est une méthode courante d'ingénierie sociale ?", options: ["Demande d'informations via téléphone", "Analyse de code source", "Chiffrement des données"], answer: 0, explanation: "Les attaquants utilisent souvent le téléphone ou les e-mails pour manipuler leurs victimes et obtenir des informations." },
      { question: "Pourquoi ne faut-il jamais réutiliser ses mots de passe ?", options: ["Pour éviter le vol de plusieurs comptes", "Pour économiser du temps", "Parce que c'est inutile"], answer: 0, explanation: "Réutiliser ses mots de passe expose plusieurs comptes à une attaque si un seul est compromis." }
    ]
  },
  { 
    title: 'Sécurité des Données et MFA', 
    level: 'Avancé',
    questions: [
      { question: "Quelle est la principale utilité du MFA (Multi-Factor Authentication) ?", options: ["Remplacer les mots de passe", "Ajouter une couche de sécurité supplémentaire", "Accélérer la connexion"], answer: 1, explanation: "Le MFA renforce la sécurité en demandant plusieurs méthodes d'authentification." },
      { question: "Quel est le principal risque lié à l'authentification par SMS ?", options: ["C'est trop compliqué", "Les SMS peuvent être interceptés via des attaques SIM swap", "Les SMS sont toujours chiffrés"], answer: 1, explanation: "Les attaquants peuvent détourner un numéro via une attaque de type SIM swap." },
      { question: "Quelle méthode d'authentification est la plus sécurisée ?", options: ["Un mot de passe seul", "Un mot de passe et un e-mail de validation", "Un mot de passe et une application d'authentification"], answer: 2, explanation: "Les applications d'authentification comme Google Authenticator sont plus sécurisées que les SMS ou e-mails." },
      { question: "Pourquoi est-il important de chiffrer les données sensibles ?", options: ["Pour empêcher l'accès en cas de vol", "Pour les compresser", "Pour accélérer leur transfert"], answer: 0, explanation: "Le chiffrement protège les données contre l'accès non autorisé." },
      { question: "Quelle est une bonne pratique pour stocker des mots de passe ?", options: ["Les noter sur un post-it", "Utiliser un gestionnaire de mots de passe", "Les mémoriser uniquement"], answer: 1, explanation: "Un gestionnaire de mots de passe permet de stocker et générer des mots de passe sécurisés."},
      { question: "Quel type d'attaque peut exposer des données stockées en clair ?", options: ["Fuite de données ou piratage", "Attaque par force brute", "Phishing"], answer: 0, explanation: "Si les données ne sont pas chiffrées, une fuite peut compromettre des millions d’informations sensibles." },
      { question: "Quelle est une bonne habitude pour protéger ses données personnelles en ligne ?", options: ["Partager ses informations uniquement avec ses amis", "Éviter d’utiliser Internet en public", "Utiliser des mots de passe uniques et du MFA"], answer: 2, explanation: "La combinaison de mots de passe uniques et MFA limite les risques en cas de fuite de données." }
    ]
  },
  { 
    title: 'Cryptographie et Sécurité Réseau', 
    level: 'Expert',
    questions: [
      { question: "Quel est l'objectif principal de la cryptographie ?", options: ["Masquer des fichiers", "Protéger les données en les chiffrant", "Supprimer des virus"], answer: 1, explanation: "La cryptographie permet de protéger les données contre l'accès non autorisé en les rendant illisibles sans une clé spécifique." },
      { question: "Quel algorithme de chiffrement est considéré comme obsolète et peu sécurisé ?", options: ["AES-256", "RSA-2048", "DES"], answer: 2, explanation: "L'algorithme DES (Data Encryption Standard) est désormais considéré comme trop faible en raison de la puissance de calcul moderne." },
      { question: "Qu'est-ce qu'un certificat SSL/TLS ?", options: ["Un fichier qui authentifie un site web et chiffre les données échangées", "Un antivirus", "Un pare-feu réseau"], answer: 0, explanation: "Un certificat SSL/TLS garantit une connexion chiffrée entre un utilisateur et un site web, empêchant l'interception des données." },
      { question: "Quelle est la différence entre le chiffrement symétrique et asymétrique ?", options: ["Le chiffrement asymétrique utilise une paire de clés, tandis que le symétrique utilise une seule clé", "Le chiffrement symétrique est plus lent", "Le chiffrement asymétrique est utilisé uniquement pour le stockage de données"], answer: 0, explanation: "Le chiffrement symétrique utilise une clé unique, tandis que l’asymétrique utilise une clé publique et une clé privée." },
      { question: "Qu'est-ce qu'une attaque de type 'Man-in-the-Middle' (MITM) ?", options: ["Une attaque où un pirate intercepte les communications entre deux parties", "Une attaque qui force un serveur à arrêter ses services", "Une technique de hameçonnage avancée"], answer: 0, explanation: "Une attaque MITM permet à un pirate d’intercepter et parfois de modifier les communications entre deux entités." },
      { question: "Quelle est la principale vulnérabilité du protocole WPA2 utilisé pour le Wi-Fi ?", options: ["Il peut être contourné par une attaque de type KRACK", "Il utilise un chiffrement trop fort", "Il bloque toutes les connexions non sécurisées"], answer: 0, explanation: "L'attaque KRACK permet d'exploiter des failles dans le protocole WPA2 pour intercepter des communications chiffrées." },
      { question: "Pourquoi est-il important de renouveler régulièrement ses clés de chiffrement ?", options: ["Pour suivre les tendances technologiques", "Pour empêcher qu'une clé compromise permette l'accès à toutes les données passées et futures", "Pour réduire la taille des fichiers chiffrés"], answer: 1, explanation: "Changer régulièrement ses clés limite l'impact d'une clé compromise." },
      { question: "Quel est le rôle d’un VPN dans la sécurité réseau ?", options: ["Chiffrer la connexion Internet et masquer l’adresse IP", "Supprimer les virus des fichiers téléchargés", "Augmenter la vitesse de connexion"], answer: 0, explanation: "Un VPN chiffre les données échangées sur Internet et permet d’anonymiser la connexion." },
      { question: "Qu'est-ce que la stéganographie en cybersécurité ?", options: ["Une technique de chiffrement des e-mails", "Une méthode pour dissimuler des informations dans des fichiers multimédias", "Un protocole de sécurité des routeurs"], answer: 1, explanation: "La stéganographie permet de cacher des messages ou fichiers dans des images, vidéos ou fichiers audio sans éveiller de soupçons." }
    ]
  },
  { 
    title: 'Sécurité Offensive et Zero Trust', 
    level: 'Maître',
    questions: [
      { 
        question: "Quel est le principe fondamental du modèle Zero Trust ?", 
        options: ["Faire confiance aux utilisateurs internes", "Ne faire confiance à aucun utilisateur ou appareil sans vérification", "Bloquer tout accès externe"], 
        answer: 1, 
        explanation: "Le modèle Zero Trust repose sur le principe 'Never Trust, Always Verify', exigeant une authentification et une surveillance constantes.",
        image: "https://example.com/zero-trust-diagram.jpg"
      },
      { 
        question: "Quel est le principal objectif d'un test de pénétration ?", 
        options: ["Identifier et exploiter des vulnérabilités pour les corriger", "Pirater un système pour l'endommager", "Remplacer les pare-feu"], 
        answer: 0, 
        explanation: "Un test de pénétration permet de simuler une attaque réelle pour identifier et corriger les failles de sécurité.",
        image: "https://example.com/penetration-testing.jpg"
      },
      { 
        question: "Quelle technique un attaquant utiliserait-il pour intercepter les communications réseau ?", 
        options: ["Brute Force", "Man-in-the-Middle (MITM)", "SQL Injection"], 
        answer: 1, 
        explanation: "Une attaque MITM intercepte les données échangées entre deux parties sans qu'elles s'en aperçoivent.",
        image: "https://example.com/mitm-attack.jpg"
      },
      { 
        question: "Quelle est une caractéristique clé d’un Red Teaming ?", 
        options: ["Un audit de sécurité classique", "Une simulation d’attaque réaliste contre une entreprise", "Une simple analyse de vulnérabilité"], 
        answer: 1, 
        explanation: "Le Red Teaming simule des attaques avancées et persistantes pour tester la réactivité des défenses.",
        image: "https://example.com/red-team.jpg"
      },
      { 
        question: "Qu'est-ce qu'un honeypot en cybersécurité ?", 
        options: ["Un piège conçu pour attirer et détecter les attaquants", "Un type de malware", "Une technique de chiffrement avancée"], 
        answer: 0, 
        explanation: "Un honeypot est un leurre conçu pour attirer les cybercriminels et analyser leurs méthodes d’attaque.",
        image: "https://example.com/honeypot.jpg"
      },
      { 
        question: "Quel outil est couramment utilisé pour l'exploitation de vulnérabilités ?", 
        options: ["Metasploit", "Wireshark", "BitLocker"], 
        answer: 0, 
        explanation: "Metasploit est un framework puissant utilisé par les pentesters pour exploiter des failles de sécurité.",
        image: "https://example.com/metasploit.jpg"
      },
      { 
        question: "Pourquoi l'authentification multifactorielle (MFA) est-elle essentielle dans Zero Trust ?", 
        options: ["Pour simplifier l'accès des employés", "Pour garantir qu’un utilisateur est bien celui qu’il prétend être", "Pour remplacer les mots de passe"], 
        answer: 1, 
        explanation: "Le MFA ajoute une couche de sécurité essentielle en obligeant les utilisateurs à prouver leur identité avec plusieurs méthodes.",
        image: "https://example.com/mfa-security.jpg"
      },
      { 
        question: "Quelle attaque peut contourner une authentification basée uniquement sur un mot de passe ?", 
        options: ["Ransomware", "Phishing", "DDoS"], 
        answer: 1, 
        explanation: "Le phishing est une technique courante qui vise à voler des mots de passe via des e-mails frauduleux.",
        image: "https://example.com/phishing-attack.jpg"
      },
      { 
        question: "Qu'est-ce qu'une attaque par 'Credential Stuffing' ?", 
        options: ["L'utilisation de mots de passe compromis sur plusieurs sites", "Un type de virus informatique", "Une attaque par force brute sur un site web"], 
        answer: 0, 
        explanation: "Le Credential Stuffing consiste à tester automatiquement des identifiants volés sur plusieurs plateformes.",
        image: "https://example.com/credential-stuffing.jpg"
      },
      { 
        question: "Pourquoi est-il important de surveiller les logs en temps réel ?", 
        options: ["Pour détecter rapidement les menaces et répondre aux incidents", "Pour réduire la taille des bases de données", "Pour empêcher l'accès aux hackers"], 
        answer: 0, 
        explanation: "L'analyse des logs en temps réel permet d'identifier des activités suspectes avant qu'un attaquant ne cause des dommages.",
        image: "https://example.com/log-monitoring.jpg"
      }
    ]
  }
]);

const progress = ref([100, 0, 0]); // Niveau 1 toujours débloqué (100%)

const currentQuiz = ref<number | null>(null);
const currentQuestionIndex = ref(0);
const userAnswers = ref<number[]>([]);
const quizCompleted = ref(false);
const showRecap = ref(false);
const score = ref(0);
const feedback = ref("");
const explanation = ref("");

// Démarrer un quiz
const startQuiz = (index: number) => {
  currentQuiz.value = index;
  currentQuestionIndex.value = 0;
  userAnswers.value = new Array(quizzes.value[index].questions.length).fill(null);
  quizCompleted.value = false;
  showRecap.value = false;
};

// Passer à la question suivante
const nextQuestion = () => {
  currentQuestionIndex.value++;
};

// Soumettre le quiz
const submitQuiz = () => {
  let correctAnswers = 0;
  
  quizzes.value[currentQuiz.value!].questions.forEach((question, index) => {
    if (userAnswers.value[index] === question.answer) {
      correctAnswers++;
    }
  });

  score.value = correctAnswers;
  quizCompleted.value = true;

  // Calcul du pourcentage de réussite
  const successRate = (correctAnswers / quizzes.value[currentQuiz.value!].questions.length) * 100;
  
  // Mettre à jour la progression si le joueur a réussi à au moins 80%
  if (successRate >= 80 && currentQuiz.value! < quizzes.value.length - 1) {
    progress.value = [...progress.value]; // Force la réactivité
    progress.value[currentQuiz.value! + 1] = 100; // Débloque le niveau suivant
  }
};


// Réinitialiser le quiz
const resetQuiz = () => {
  currentQuiz.value = null;
  currentQuestionIndex.value = 0;
  quizCompleted.value = false;
  showRecap.value = false;
};

function quitQuiz() {
  {
    resetQuiz(); // Ferme le quiz et revient à la liste des quiz
  }
}

</script>
