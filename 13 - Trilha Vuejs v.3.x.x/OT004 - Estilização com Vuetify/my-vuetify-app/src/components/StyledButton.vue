<template>
  <v-btn color="#ff5722" @click="log">Clique Aqui</v-btn>
</template>

<script>
export default {
  methods: {
    log() {
      console.log('Botão clicado!')
    }
  }
}
</script>
