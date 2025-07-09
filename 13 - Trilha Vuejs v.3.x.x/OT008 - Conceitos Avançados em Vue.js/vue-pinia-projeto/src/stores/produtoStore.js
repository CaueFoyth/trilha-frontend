import { defineStore } from 'pinia'
import { getProdutos } from '../services/api'

export const useProdutoStore = defineStore('produto', {
  state: () => ({
    produtos: []
  }),
  actions: {
    async carregarProdutos() {
      this.produtos = await getProdutos()
    }
  }
})