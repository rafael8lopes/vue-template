<template>
  <modal title="Login" @close-modal="closeModal">
    <p>input</p>
  </modal>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Modal from "../shared/Modal/index.vue";

export default defineComponent({
  name: "LoginModal",
  components: {
    Modal,
  },
});
</script>

<script lang="ts" setup>
const emit = defineEmits(["close-modal"]);
const closeModal = () => emit("close-modal");
</script>

<style lang="scss"></style>
