import { defineStore } from 'pinia'

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    carrinho: []
  }),
  actions: {
    adicionar(produto) {
      this.carrinho.push(produto)
    },
    remover(id) {
      this.carrinho = this.carrinho.filter(p => p.id !== id)
    }
  },
  getters: {
    total: (state) =>
      state.carrinho.reduce((soma, p) => soma + p.preco, 0)
  }
})