<template>
  <v-data-table :headers="headers" :items="produtos" class="elevation-1" />
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: 'Nome', value: 'nome' },
        { text: 'Preço', value: 'preco' },
        { text: 'Estoque', value: 'estoque' }
      ],
      produtos: [
        { nome: 'Produto A', preco: 'R$ 10,00', estoque: 15 },
        { nome: 'Produto B', preco: 'R$ 20,00', estoque: 8 },
        { nome: 'Produto C', preco: 'R$ 30,00', estoque: 5 }
      ]
    }
  }
}
</script>
