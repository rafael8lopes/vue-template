<template>
  <div>
    <v-toolbar prominent :elevation="8">
      <v-toolbar-title @click="handleHome" id="app-name">
        Vue template
      </v-toolbar-title>

      <v-btn v-if="userName === ''" @click="onOpenLogin">
        Entrar &nbsp;
        <v-icon>mdi-export</v-icon>
      </v-btn>

      <v-menu v-if="userName !== ''" open-on-hover>
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props"> {{ userName }} </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in accountLinks"
            :key="index"
            @click="item.action"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-dialog
      v-model="isLoginModalOpen"
      width="auto"
      transition="dialog-top-transition"
    >
      <login-modal @close-modal="onCloseLogin" />
    </v-dialog>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { defineComponent, ref } from "vue";
import LoginModal from "../../LoginModal/loginModal.vue";

export default defineComponent({
  name: "AppHeader",
  components: {
    LoginModal,
  },
  setup() {
    let userName = ref("RAFAEL");
    let isLoginModalOpen = ref(false);

    const onOpenLogin = () => {
      isLoginModalOpen.value = true;
      console.log("isLoginModalOpen", isLoginModalOpen.value);
      // userName.value = "Rafael Lopes";
    };

    const onCloseLogin = () => {
      isLoginModalOpen.value = false;
      // userName.value = "Rafael Lopes";
    };

    const handleLogout = () => {
      userName.value = "";
    };

    const handleHome = () => {
      router.push("/");
    };

    const handleProfile = () => {
      router.push("profile");
    };

    const accountLinks = [
      { title: "Perfil", action: handleProfile },
      { title: "Encerrar", action: handleLogout },
    ];

    return {
      userName,
      accountLinks,
      onOpenLogin,
      onCloseLogin,
      handleHome,
      isLoginModalOpen,
    };
  },
});
</script>

<style lang="scss">
#app-name {
  cursor: pointer;
}
</style>
