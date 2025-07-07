<template>
  <v-data-table :headers="headers" :items="usuarios" />
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      headers: [
        { text: 'Nome', value: 'name' },
        { text: 'Email', value: 'email' }
      ],
      usuarios: []
    }
  },
  mounted() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        this.usuarios = response.data
      })
  }
}
</script>
