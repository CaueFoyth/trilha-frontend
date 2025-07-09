<template>
  <div>
    <h2>Usuários</h2>
    <ul>
      <li v-for="user in usuarios" :key="user.id">{{ user.nome }} - {{ user.email }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return { usuarios: [] };
  },
  mounted() {
    axios.get('http://localhost:3000/usuarios')
      .then(res => this.usuarios = res.data)
      .catch(err => console.error(err));
  }
};
</script>
