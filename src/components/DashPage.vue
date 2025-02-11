<script setup lang="ts">
import { ref, computed } from "vue";
import MDP from "./MDP.vue";

const password = ref("");
const passwordStrength = ref(0);
const strengthMessage = ref("");
const crackTime = ref("Instantané");

const securityClass = computed(() => {
  if (passwordStrength.value < 30) return "weak";
  if (passwordStrength.value < 50) return "medium";
  if (passwordStrength.value < 70) return "strong";
  return "extremely-strong";
});

const progressBarColor = computed(() => {
  if (passwordStrength.value < 30) return "red";
  if (passwordStrength.value < 50) return "orange";
  if (passwordStrength.value < 70) return "yellow";
  return "green";
});

const evaluatePassword = () => {
  let pass = password.value;
  let score = 0;

  if (pass.length >= 12) score += 20;
  if (pass.length >= 14) score += 20;
  if (pass.length >= 16) score += 10;
  if (/[A-Z].*[A-Z]/.test(pass)) score += 15;
  if (/[a-z].*[a-z]/.test(pass)) score += 10;
  if (/\d.*\d/.test(pass)) score += 15;
  if (/[!@#$%^&*(),.?":{}|<>].*[!@#$%^&*(),.?":{}|<>]/.test(pass)) score += 25;
  if (!/(.)\1{2}/.test(pass)) score += 10;
  if (/(123|abc|password|qwerty|salut|hello)/i.test(pass)) score -= 30;

  const commonWords = ["salut", "password", "1234", "qwerty", "admin", "welcome"];
  for (let word of commonWords) {
    if (new RegExp(word, "i").test(pass)) {
      score -= 30;
    }
  }

  passwordStrength.value = Math.max(0, Math.min(score, 100));
  updateMessageAndTime();
};

const updateMessageAndTime = () => {
  let score = passwordStrength.value;
  if (score < 30) {
    strengthMessage.value = "Très faible";
    crackTime.value = "Instantané";
  } else if (score < 50) {
    strengthMessage.value = "Faible";
    crackTime.value = "Quelques secondes";
  } else if (score < 70) {
    strengthMessage.value = "Moyen";
    crackTime.value = "Quelques minutes";
  } else if (score < 90) {
    strengthMessage.value = "Fort";
    crackTime.value = "Plusieurs heures à jours";
  } else {
    strengthMessage.value = "Extrêmement sécurisé";
    crackTime.value = "Plusieurs siècles";
  }
};
</script>

<template>
  <div class="password-security">
      <h1 class="text-white font-maPolice">Testez la Sécurité de votre Mot de Passe</h1>

    <input type="text" v-model="password" placeholder="Entrez un mot de passe" @input="evaluatePassword" />

    <div class="progress-bar" :style="{ width: passwordStrength + '%', backgroundColor: progressBarColor }"></div>

    <div :class="securityClass">
      <p>{{ strengthMessage }}</p>
      <p class="font-maPolice">Estimation du temps de piratage : {{ crackTime }}</p>
    </div>
  </div>
  <div class="flex">
    <MDP />
  </div>
</template>

<style>
.password-security {
  max-width: 500px;
  margin: auto;
  font-family: Arial, sans-serif;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.progress-bar {
  height: 10px;
  transition: width 0.3s, background-color 0.3s;
}

p {
  font-weight: bold;
}

.weak {
  color: red;
}

.medium {
  color: orange;
}

.strong {
  color: green;
}

.extremely-strong {
  color: darkgreen;
}

</style>
