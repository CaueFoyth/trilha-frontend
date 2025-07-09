<template>
  <div>
    <input v-model="email" placeholder="Email">
    <input v-model="senha" type="password" placeholder="Senha">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { email: '', senha: '' };
  },
  methods: {
    login() {
      axios.post('http://localhost:3000/usuarios/login', {
        email: this.email, senha: this.senha
      })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        this.$router.push('/protegida');
      })
      .catch(() => alert("Login falhou"));
    }
  }
};
</script>
