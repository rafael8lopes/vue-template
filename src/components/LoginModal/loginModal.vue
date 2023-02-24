<template>
  <modal title="Autenticação" @close-modal="closeModal">
    <v-form v-model="valid">
      <v-container>
        <v-row>
          <v-text-field
            v-model="userName"
            :rules="rules"
            label="Nome de utilizador"
            required
          />
        </v-row>
        <v-row>
          <v-text-field
            v-model="password"
            :rules="rules"
            label="Palavra passe"
            required
          />
        </v-row>
      </v-container>
    </v-form>

    <v-btn @click="handleLogin" type="submit" class="mt-2"> Entrar </v-btn>

    <v-snackbar
      v-model="hasErrorMessage"
      :timeout="2000"
      location="top right"
      color="red-darken-2"
    >
      {{ errorMessage }}
    </v-snackbar>
  </modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from "../shared/Modal/modal.vue";

export default defineComponent({
  name: "LoginModal",
  components: {
    Modal,
  },
});
</script>

<script lang="ts" setup>
import { loginUser } from "@/api/users";

const emit = defineEmits(["close-modal"]);
const closeModal = () => emit("close-modal");

const handleLogin = () => {
  if (userName && password) {
    loginUser().then((resp) => {
      if (resp.success) {
        closeModal();
        // TODO composable updating user
      } else {
        hasErrorMessage.value = true;
        errorMessage.value = "Error message";
      }
    });
  }
};

const valid = ref(false);
const userName = ref("");
const password = ref("");

const hasErrorMessage = ref(false);
const errorMessage = ref("");

const rules = [
  (value: string) => {
    if (value) return true;

    return "Campo obrigatorio";
  },
];
</script>

<style lang="scss"></style>
