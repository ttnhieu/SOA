<template>
  <v-form @submit.prevent="submitForm" class="form mt-6">
    <!-- Họ và Tên -->
    <v-row class="form-group">
      <v-col sm="2" cols="3">
        <v-label for="name">Nom:</v-label>
      </v-col>
      <v-col sm="10" cols="9">
        <v-text-field
          id="name"
          v-model="formData.name"
          placeholder="Entrez votre nom"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Email -->
    <v-row class="form-group">
      <v-col sm="2" cols="3">
        <v-label for="email">Email:</v-label>
      </v-col>
      <v-col sm="10" cols="9">
        <v-text-field
          id="email"
          v-model="formData.email"
          placeholder="Entrez votre e-mail"
          variant="outlined"
        ></v-text-field>
      </v-col>
    </v-row>

    <!-- Message: -->
    <v-row class="form-group">
      <v-col sm="2" cols="3">
        <v-label for="email">Message:</v-label>
      </v-col>
      <v-col sm="10" cols="9">
        <TextEditorComponent />
      </v-col>
    </v-row>

    <!-- Email -->
    <v-row class="form-group">
      <v-col sm="2" cols="3">
        <v-label for="file">Fichier:</v-label>
      </v-col>
      <v-col sm="10" cols="9">
        <v-btn class="btn-file"
          ><img src="@/assets/icons/icon-paperclip.svg" alt="" />Pièce
          jointe</v-btn
        >
        <span class="d-sm-inline d-block" :style="{ color: '#999' }">
          (*fichiers pdf uniquement)</span
        >
      </v-col>
    </v-row>

    <!-- Button Actions -->
    <v-row class="form-actions">
      <v-col class="d-flex justify-end">
        <v-btn class="mr-2 btn-default btn--size-default" @click="submitForm"
          >Clear All</v-btn
        >
        <v-btn
          class="btn--size-default"
          color="primary"
          variant="flat"
          @click="resetForm"
          >envoyer <img class="ml-1" src="@/assets/icons/icon-send.svg" alt=""
        /></v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
  file: "",
});

const submitForm = () => {
  console.log("Data Form:", formData.value);
};

const resetForm = () => {
  formData.value = { name: "", email: "", message: "", file: "" };
};
</script>

<style scoped lang="scss">
.form-container {
  max-width: 500px;
  margin: auto;
}
.form-actions {
  margin-top: 20px;
}

.form {
  .v-field__overlay {
    border-radius: 100px;
  }

  .v-label {
    font-size: 24px;
  }
}

.btn-file {
  color: #1e88f9;
  font-size: 20px;
  font-weight: 500;
  text-transform: capitalize;
}

// Breakpoint Mobi
@media (max-width: 599px) {
  .form {
    .v-label {
      font-size: 16px;
    }
  }

  .btn-file {
    font-size: 16px;
    padding: 0;
  }
}
</style>
