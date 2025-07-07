<template>
  <div class="container my-3">
    <h5>Ex 6 - Modal Bootstrap</h5>
    <button class="btn btn-primary" @click="showModal = true">Abrir Modal</button>

    <div 
      class="modal fade" 
      :class="{ show: showModal }" 
      style="display: block;" 
      tabindex="-1" 
      v-if="showModal" 
      @click.self="closeModal"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Título do Modal</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <p>Esta é a mensagem do modal.</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { showModal: false }
  },
  methods: {
    closeModal() {
      this.showModal = false
    }
  }
}
</script>

<style scoped>
.modal.show {
  display: block;
  background-color: rgba(0,0,0,0.5);
}
</style>
