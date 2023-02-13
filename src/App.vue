<template>
  <v-app>
    <app-header />

    <div id="page-container">
      <RouterView />
    </div>

    <app-footer />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import AppHeader from "./components/shared/Header/index.vue";
import AppFooter from "./components/shared/Footer/index.vue";

export default defineComponent({
  components: {
    AppHeader,
    AppFooter,
    RouterView,
  },
});
</script>

<style scoped>
#page-container {
  height: 100%;
  padding: 2rem 10rem;
}
</style>
