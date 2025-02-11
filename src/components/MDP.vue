<template>
    <div class="password-security">
      <h1 class="text-white font-maPolice">Générer votre prochain mot de passe ?</h1>
  
      <input 
        type="text" 
        v-model="password" 
        placeholder="Générer un mot de passe" 
        @input="evaluatePassword" 
        readonly
      />
  
      <button @click="generateSecurePassword" class="generate-btn font-maPolice">
        Générer un mot de passe ultra sécurisé !
      </button>
  
      <div class="progress-bar" :style="{ width: passwordStrength + '%', backgroundColor: progressBarColor }"></div>
  
      <div :class="securityClass">
        <p>{{ strengthMessage }}</p>
        <p class="font-maPolice">Estimation du temps de piratage : {{ crackTime }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        password: "",
        passwordStrength: 0,
        strengthMessage: "",
        crackTime: "Instantané",
        progressBarColor: "red",
      };
    },
    computed: {
      securityClass() {
        if (this.passwordStrength < 30) {
          this.progressBarColor = "red";
          return "weak";
        } else if (this.passwordStrength < 50) {
          this.progressBarColor = "orange";
          return "medium";
        } else if (this.passwordStrength < 70) {
          this.progressBarColor = "yellow";
          return "strong";
        } else {
          this.progressBarColor = "green";
          return "extremely-strong";
        }
      },
    },
    methods: {
      evaluatePassword() {
        const pass = this.password;
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
  
        this.passwordStrength = Math.min(score, 100);
        this.updateMessageAndTime(score);
      },
      updateMessageAndTime(score) {
        if (score < 30) {
          this.strengthMessage = "Très faible";
          this.crackTime = "Instantané";
        } else if (score < 50) {
          this.strengthMessage = "Faible";
          this.crackTime = "Quelques secondes";
        } else if (score < 70) {
          this.strengthMessage = "Moyen";
          this.crackTime = "Quelques minutes";
        } else if (score < 90) {
          this.strengthMessage = "Fort";
          this.crackTime = "Plusieurs heures à jours";
        } else {
          this.strengthMessage = "Extrêmement sécurisé";
          this.crackTime = "Plusieurs siècles";
        }
      },
      generateSecurePassword() {
        const length = 16;
        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?";
        const allChars = uppercase + lowercase + numbers + specialChars;
  
        let password = "";
        password += this.getRandomChars(uppercase, 2);
        password += this.getRandomChars(specialChars, 2);
        password += this.getRandomChars(numbers, 2);
  
        for (let i = password.length; i < length; i++) {
          password += allChars[Math.floor(Math.random() * allChars.length)];
        }
  
        this.password = this.shuffleString(password);
        this.evaluatePassword();
      },
      getRandomChars(charSet, count) {
        let result = "";
        for (let i = 0; i < count; i++) {
          result += charSet[Math.floor(Math.random() * charSet.length)];
        }
        return result;
      },
      shuffleString(str) {
        return str.split("").sort(() => Math.random() - 0.5).join("");
      },
    },
  };
  </script>
  
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
    background: #1e1e1e;
    color: white;
  }
  .generate-btn {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  .generate-btn:hover {
    background-color: #0056b3;
  }
  .progress-bar {
    height: 10px;
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
