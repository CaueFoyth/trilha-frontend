<template>
  <v-form ref="form">
    <v-text-field
      label="Email"
      v-model="email"
      :rules="[v => !!v || 'Campo obrigatório', v => /.+@.+/.test(v) || 'Email inválido']"
    />
    <v-text-field
      label="Senha"
      type="password"
      v-model="senha"
      :rules="[v => !!v || 'Campo obrigatório']"
    />
    <v-btn @click="login">Entrar</v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      senha: ''
    }
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        alert('Login válido!')
      }
    }
  }
}
</script>
