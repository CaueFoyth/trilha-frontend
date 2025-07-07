<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app></v-navigation-drawer>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title class="text-center w-100">Título Centralizado</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>Conteúdo aqui</v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>
