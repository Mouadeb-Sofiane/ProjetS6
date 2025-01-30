<template>
  <div class="password-game">
    <h1>Créez un mot de passe robuste</h1>

    <!-- Niveau Normal -->
    <div class="level">
      <h2>Niveau Normal</h2>
      <p>Le mot de passe est trouvé en 30secondes</p>
      <p>Votre mot de passe doit contenir au moins 8 caractères.</p>
      <input type="text" v-model="normalPassword" placeholder="Entrez un mot de passe" />
      <button @click="validateNormal">Vérifier</button>
      <p v-if="normalMessage" :class="{ success: normalSuccess, error: !normalSuccess }">
        {{ normalMessage }}
      </p>
    </div>

    <!-- Niveau Intermédiaire -->
    <div class="level">
      <h2>Niveau Intermédiaire</h2>
      <p>Votre mot de passe doit contenir au moins 12 caractères, un chiffre, une lettre majuscule, et un caractère spécial.</p>
      <input type="text" v-model="intermediatePassword" placeholder="Entrez un mot de passe" />
      <button @click="validateIntermediate">Vérifier</button>
      <p v-if="intermediateMessage" :class="{ success: intermediateSuccess, error: !intermediateSuccess }">
        {{ intermediateMessage }}
      </p>
    </div>

    <!-- Niveau Avancé -->
    <div class="level">
      <h2>Niveau Avancé</h2>
      <p>Votre mot de passe doit contenir au moins 16 caractères, un chiffre, une lettre majuscule, une lettre minuscule, et une séquence aléatoire sans répétition immédiate de caractères.</p>
      <input type="text" v-model="advancedPassword" placeholder="Entrez un mot de passe" />
      <button @click="validateAdvanced">Vérifier</button>
      <p v-if="advancedMessage" :class="{ success: advancedSuccess, error: !advancedSuccess }">
        {{ advancedMessage }}
      </p>
    </div>

    <!-- Niveau Extrême -->
    <div class="level">
      <h2>Niveau Extrême</h2>
      <p>
        Votre mot de passe doit contenir au moins 20 caractères, incluant :
        <ul>
          <li>Au moins 2 lettres majuscules</li>
          <li>Au moins 2 chiffres</li>
          <li>Au moins 2 caractères spéciaux</li>
          <li>Une séquence aléatoire sans répétition immédiate de caractères</li>
        </ul>
      </p>
      <input type="text" v-model="extremePassword" placeholder="Entrez un mot de passe" />
      <button @click="validateExtreme">Vérifier</button>
      <p v-if="extremeMessage" :class="{ success: extremeSuccess, error: !extremeSuccess }">
        {{ extremeMessage }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      normalPassword: "",
      intermediatePassword: "",
      advancedPassword: "",
      extremePassword: "",
      normalMessage: "",
      intermediateMessage: "",
      advancedMessage: "",
      extremeMessage: "",
      normalSuccess: false,
      intermediateSuccess: false,
      advancedSuccess: false,
      extremeSuccess: false,
    };
  },
  methods: {
    validateNormal() {
      if (this.normalPassword.length >= 8) {
        this.normalSuccess = true;
        this.normalMessage = "Mot de passe valide !";
      } else {
        this.normalSuccess = false;
        this.normalMessage = "Mot de passe trop court.";
      }
    },
    validateIntermediate() {
      const hasUpperCase = /[A-Z]/.test(this.intermediatePassword);
      const hasDigit = /\d/.test(this.intermediatePassword);
      const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(this.intermediatePassword);
      if (this.intermediatePassword.length >= 12 && hasUpperCase && hasDigit && hasSpecialChar) {
        this.intermediateSuccess = true;
        this.intermediateMessage = "Mot de passe valide !";
      } else {
        this.intermediateSuccess = false;
        this.intermediateMessage = "Mot de passe non conforme.";
      }
    },
    validateAdvanced() {
      const hasUpperCase = /[A-Z]/.test(this.advancedPassword);
      const hasLowerCase = /[a-z]/.test(this.advancedPassword);
      const hasDigit = /\d/.test(this.advancedPassword);
      const isUniqueSequence = !/(.)\1{1}/.test(this.advancedPassword); // No immediate repetition
      if (
        this.advancedPassword.length >= 16 &&
        hasUpperCase &&
        hasLowerCase &&
        hasDigit &&
        isUniqueSequence
      ) {
        this.advancedSuccess = true;
        this.advancedMessage = "Mot de passe valide !";
      } else {
        this.advancedSuccess = false;
        this.advancedMessage = "Mot de passe non conforme.";
      }
    },
    validateExtreme() {
      const hasTwoUpperCase = (this.extremePassword.match(/[A-Z]/g) || []).length >= 2;
      const hasTwoDigits = (this.extremePassword.match(/\d/g) || []).length >= 2;
      const hasTwoSpecialChars = (this.extremePassword.match(/[!@#$%^&*(),.?":{}|<>]/g) || []).length >= 2;
      const isUniqueSequence = !/(.)\1{1}/.test(this.extremePassword); // No immediate repetition

      if (
        this.extremePassword.length >= 20 &&
        hasTwoUpperCase &&
        hasTwoDigits &&
        hasTwoSpecialChars &&
        isUniqueSequence
      ) {
        this.extremeSuccess = true;
        this.extremeMessage = "Mot de passe valide et ultra sécurisé !";
      } else {
        this.extremeSuccess = false;
        this.extremeMessage = "Mot de passe non conforme aux critères extrêmes.";
      }
    },
  },
};
</script>

<style>
.password-game {
  max-width: 600px;
  margin: auto;
  font-family: Arial, sans-serif;
}
.level {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
button {
  padding: 8px 12px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
.success {
  color: green;
}
.error {
  color: red;
}
</style>
