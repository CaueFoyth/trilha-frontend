<template>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="senha" type="password" placeholder="Senha" />
    <button @click="login">Entrar</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { email: '', senha: '' };
  },
  methods: {
    async login() {
      try {
        const res = await axios.post('http://localhost:3000/login', {
          email: this.email,
          senha: this.senha
        });
        localStorage.setItem('token', res.data.token);
        alert("Login bem-sucedido!");
      } catch (err) {
        alert("Erro ao fazer login");
      }
    }
  }
};
</script>
