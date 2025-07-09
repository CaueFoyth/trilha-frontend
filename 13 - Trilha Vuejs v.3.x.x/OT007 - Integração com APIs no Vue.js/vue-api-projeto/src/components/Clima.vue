<template>
  <div>
    <input v-model="cidade" placeholder="Cidade" />
    <select v-model="unidade">
      <option value="metric">Celsius</option>
      <option value="imperial">Fahrenheit</option>
    </select>
    <button @click="buscarClima">Buscar Clima</button>

    <p v-if="loading">Carregando...</p>
    <p v-if="erro" style="color: red">{{ erro }}</p>
    <pre v-if="clima">{{ clima }}</pre>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      cidade: '',
      unidade: 'metric',
      clima: null,
      erro: '',
      loading: false
    };
  },
  methods: {
    async buscarClima() {
      this.loading = true;
      this.erro = '';
      this.clima = null;
      try {
        const apiKey = 'API_KEY';
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.cidade}&units=${this.unidade}&appid=${apiKey}`
        );
        this.clima = res.data;
      } catch (err) {
        this.erro = 'Erro ao buscar clima.';
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
