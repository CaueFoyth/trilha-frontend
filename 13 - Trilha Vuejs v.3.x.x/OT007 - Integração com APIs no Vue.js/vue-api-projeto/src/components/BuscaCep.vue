<template>
  <div>
    <input v-model="cep" placeholder="Digite o CEP" />
    <button @click="buscarCep">Buscar</button>
    <p v-if="erro" style="color: red">{{ erro }}</p>
    <pre v-if="endereco">{{ endereco }}</pre>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      cep: '',
      endereco: null,
      erro: ''
    };
  },
  methods: {
    async buscarCep() {
      this.erro = '';
      this.endereco = null;
      try {
        const res = await api.get(`${this.cep}/json`);
        if (res.data.erro) throw new Error('CEP inválido');
        this.endereco = res.data;
      } catch (err) {
        this.erro = 'CEP inválido ou erro na requisição.';
      }
    }
  }
};
</script>
