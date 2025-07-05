<template>
  <div>
    <input v-model="cep" @blur="buscarCEP" placeholder="Digite o CEP" />
    <p v-if="endereco.logradouro">Rua: {{ endereco.logradouro }}</p>
    <p>Bairro: {{ endereco.bairro }}</p>
    <p>Cidade: {{ endereco.localidade }}</p>
    <p>Estado: {{ endereco.uf }}</p>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      cep: '',
      endereco: {}
    };
  },
  methods: {
    buscarCEP() {
      axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then(res => this.endereco = res.data)
        .catch(() => alert("CEP inválido"));
    }
  }
}
</script>
