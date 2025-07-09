<template>
  <div>
    <input v-model="novoTitulo" placeholder="Novo item" />
    <button @click="adicionarItem">Adicionar</button>
    <ul>
      <li v-for="item in itens" :key="item.id">
        <input v-model="item.title" />
        <button @click="editarItem(item)">Salvar</button>
        <button @click="excluirItem(item.id)">Excluir</button>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      itens: [],
      novoTitulo: ''
    };
  },
  mounted() {
    this.listarItens();
  },
  methods: {
    async listarItens() {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
      this.itens = res.data;
    },
    async adicionarItem() {
      const res = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.novoTitulo
      });
      this.itens.push(res.data);
      this.novoTitulo = '';
    },
    async editarItem(item) {
      await axios.put(`https://jsonplaceholder.typicode.com/posts/${item.id}`, item);
    },
    async excluirItem(id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
      this.itens = this.itens.filter(i => i.id !== id);
    }
  }
};
</script>
