<template>
  <div class="game-container mt-20">
    <!-- Écran de bienvenue -->
    <div v-if="showWelcome" class="welcome-screen">
      <h1 class="font-maPolice text-4xl mb-16">Bienvenue dans le Jeu des Risques Informatiques</h1>
      <p class="text-lg text-center mb-10">
        Cliquez sur le bouton pour commencer le jeu. Ce jeu vous permettra de tester vos connaissances sur la cybersécurité.
        Vous saurez rapidement ce que sont les risques informatiques et comment les combattre. Bonne chance !
      </p>
      <button @click="startGame" class="font-maPolice rounded-sm bg-cyan-400 text-black">Commencer</button>
    </div>
    
    <!-- Jeu principal -->
    <div v-if="!showPCInterface && !showWelcome" class="game-area">
      <div class="background"></div>
      <img src="../assets/img/Laptop.png" class="pc" @click="interactWithPC" alt="Ordinateur" />
    </div>
    
    <!-- Interface PC -->
    <div v-if="showPCInterface" class="pc-interface">
      <div class="pc-header">
        <span>PC - Bureau</span>
        <button @click="exitPC" class="close-btn">X</button>
      </div>
      <div class="pc-options">
        <button @click="openSection('files')" class="text-white">📁 Fichiers</button>
        <button @click="openSection('mail')" class="text-white">📧 Mails</button>
        <button @click="openSection('quiz')" class="text-white">🧠 Quiz Sécurité</button>
      </div>
      
      <div v-if="activeSection === 'files'" class="pc-content">
        <h3>Sélectionne le fichier dangereux :</h3>
        <ul>
          <li @click="checkFile('virus.exe')">📄 v.exe (0.2 Ko, .exe)</li>
          <li @click="checkFile('document.pdf')">📄 document.pdf (850 Ko, .pdf)</li>
          <li @click="checkFile('photo.jpg')">📄 photo.jpg (2.3 Mo, .jpg)</li>
        </ul>
      </div>
      
      <div v-if="activeSection === 'mail'" class="pc-content">
        <h3>Identifie l'e-mail frauduleux :</h3>
        <ul>
          <li @click="selectedMail = 'Banque'">🏦 Mail de la banque</li>
          <li @click="selectedMail = 'Spam'">⚠️ Gagnez 1 million !</li>
          <li @click="selectedMail = 'Ami'">👤 Mail d'un ami</li>
        </ul>
        <div v-if="selectedMail" class="mail-content">
          <h4>Contenu de l'e-mail :</h4>
          <p v-if="selectedMail === 'Banque'">Bonjour, Nous avons détecté une activité suspecte sur votre compte. Veuillez cliquer sur ce lien pour vérifier vos informations. [Lien frauduleux]</p>
          <p v-if="selectedMail === 'Spam'">Félicitations ! Vous avez gagné 1.000.000€. Cliquez ici pour réclamer votre prix ! [Lien suspect]</p>
          <p v-if="selectedMail === 'Ami'">Salut ! Regarde cette photo marrante que j’ai trouvée. [Lien sûr]</p>
        </div>
      </div>
      
      <div v-if="activeSection === 'quiz'" class="pc-content">
        <h3>🧠 Quiz de Sécurité Informatique</h3>
        <p>Que devez-vous faire si vous recevez un e-mail suspect ?</p>
        <ul>
          <li @click="checkQuizAnswer('signaler')">🚨 Le signaler et ne pas cliquer sur les liens</li>
          <li @click="checkQuizAnswer('ignorer')">🚫 L'ignorer sans le signaler</li>
          <li @click="checkQuizAnswer('cliquer')">✅ Cliquer sur les liens pour voir</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPCInterface: false,
      activeSection: null,
      showWelcome: true,
      selectedMail: null
    };
  },
  methods: {
    startGame() {
      this.showWelcome = false;
    },
    interactWithPC() {
      this.showPCInterface = true;
    },
    exitPC() {
      this.showPCInterface = false;
      this.activeSection = null;
      this.selectedMail = null;
    },
    openSection(section) {
      this.activeSection = section;
    },
    checkFile(file) {
      alert(file === 'virus.exe' ? '🚨 Fichier dangereux détecté !' : '✅ Fichier sûr.');
    },
    checkQuizAnswer(answer) {
      alert(answer === 'signaler' ? '✅ Bonne réponse !' : '❌ Mauvaise réponse, soyez prudent !');
    }
  }
};
</script>

<style scoped>
.game-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px;
  box-sizing: border-box;
}

.welcome-screen {
  text-align: center;
  color: white;
}

button:hover {
  transform: scale(1.05);
}

button {
  transition: transform 0.2s ease;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}

.pc-interface {
  width: 100%;
  max-width: 600px;
  height: 400px;
  background: #333;
  border: 2px solid #666;
  border-radius: 8px;
  padding: 10px;
  position: absolute;
  overflow-y: auto;
}

.pc-header {
  display: flex;
  justify-content: space-between;
  background: #222;
  padding: 10px;
  color: white;
}

.pc-options button {
  margin: 10px;
  padding: 10px;
}

.pc-content {
  margin-top: 20px;
  color: white;
}

.close-btn {
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .game-container {
    height: auto;
    padding-top: 20px;
  }
  .pc-interface {
    max-width: 90%;
    height: auto;
  }
}
@media (max-width: 768px) {
  .game-container {
    position: relative; /* Permet à .pc-interface de s’y référer */
    min-height: 100vh;
    padding-top: 40px; /* Espacement supérieur pour éviter que le jeu soit collé en haut */
  }

  .pc {
    width: 80%; /* Ajuste la taille de l'image de l'ordinateur */
  }

  .pc-interface {
  width: 100%;
  height: 100%;
  background: #333;
  border: 2px solid #666;
  border-radius: 8px;
  position: absolute; /* Se place par rapport à .game-container */
  top: 0;
  left: 0;
  z-index: 10; /* Toujours au-dessus du contenu mais sous le header/footer */
  overflow-y: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}



  .pc-options {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .pc-options button {
    width: 90%;
    margin: 5px 0;
  }
  
  .pc-content {
    text-align: center;
    font-size: 14px;
  }

  .welcome-screen {
    padding: 20px;
    max-width: 90%;
  }
}

</style>
