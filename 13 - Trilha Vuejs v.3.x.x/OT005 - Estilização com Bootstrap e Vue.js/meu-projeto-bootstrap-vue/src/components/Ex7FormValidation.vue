<template>
  <div class="container my-3">
    <h5>Ex 7 - Formulário responsivo com validação</h5>
    <form @submit.prevent="submitForm">
      <div class="mb-3">
        <label class="form-label">Nome</label>
        <input v-model="nome" type="text" class="form-control" :class="{ 'is-invalid': errors.nome }" required>
        <div class="invalid-feedback" v-if="errors.nome">Nome é obrigatório.</div>
      </div>
      <div class="mb-3">
        <label class="form-label">E-mail</label>
        <input v-model="email" type="email" class="form-control" :class="{ 'is-invalid': errors.email }" required>
        <div class="invalid-feedback" v-if="errors.email">E-mail inválido.</div>
      </div>
      <div class="mb-3">
        <label class="form-label">Senha</label>
        <input v-model="senha" type="password" class="form-control" :class="{ 'is-invalid': errors.senha }" required minlength="6">
        <div class="invalid-feedback" v-if="errors.senha">Senha deve ter ao menos 6 caracteres.</div>
      </div>
      <button type="submit" class="btn btn-primary">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: '',
      email: '',
      senha: '',
      errors: {}
    }
  },
  methods: {
    submitForm() {
      this.errors = {}
      if (!this.nome) this.errors.nome = true
      if (!this.email || !this.validEmail(this.email)) this.errors.email = true
      if (!this.senha || this.senha.length < 6) this.errors.senha = true

      if (Object.keys(this.errors).length === 0) {
        alert('Formulário enviado com sucesso!')
      }
    },
    validEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
  }
}
</script>
