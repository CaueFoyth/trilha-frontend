<template>
  <div class="container my-3">
    <h5>Ex 4 - Card com alerta</h5>
    <div class="card" style="width: 18rem;">
      <img src="logo.png" class="card-img-top" alt="Imagem">
      <div class="card-body">
        <h5 class="card-title">Título do Card</h5>
        <button @click="showAlert" class="btn btn-primary">Ação</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showAlert() {
      alert('Botão do Card clicado!')
    }
  }
}
</script>
