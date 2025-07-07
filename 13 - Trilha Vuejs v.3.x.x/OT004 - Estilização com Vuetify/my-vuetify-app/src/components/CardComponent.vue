<template>
  <v-card>
    <v-img src="https://picsum.photos/200/150" height="150px" />
    <v-card-title>Meu Card</v-card-title>
    <v-card-actions>
      <v-btn @click="alerta">Clique</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  methods: {
    alerta() {
      alert('Você clicou no botão do card!')
    }
  }
}
</script>
