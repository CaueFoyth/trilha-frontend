<template>
  <div>
    <h2>Lista de Produtos</h2>
    <ul>
      <li v-for="produto in produtos" :key="produto.id">
        {{ produto.nome }} - R$ {{ produto.preco }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProdutoStore } from '../stores/produtoStore'

const store = useProdutoStore()

onMounted(() => {
  store.carregarProdutos()
})

const produtos = store.produtos
</script>