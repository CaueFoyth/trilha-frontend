<template>
  <div>
    <v-btn @click="dialog = true">Abrir Modal</v-btn>
    <v-dialog v-model="dialog" max-width="400">
      <v-card>
        <v-card-title>Aviso</v-card-title>
        <v-card-text>Mensagem do modal.</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="green" @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
