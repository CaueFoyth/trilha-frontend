<template>
  <div class="container my-3">
    <h5>Ex 3 - Botão que altera cor</h5>
    <button :class="btnClass" @click="toggleColor" class="btn">
      Clique em mim
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return { active: false }
  },
  computed: {
    btnClass() {
      return this.active ? 'btn-danger' : 'btn-primary'
    }
  },
  methods: {
    toggleColor() {
      this.active = !this.active
    }
  }
}
</script>
