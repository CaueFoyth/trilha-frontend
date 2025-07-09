<template>
  <div>
    <h1>Vue + APIs</h1>
    <BuscaCep />
    <Clima />
    <CrudItens />
    <Login />
  </div>
</template>

<script>
import BuscaCep from './components/BuscaCep.vue';
import Clima from './components/Clima.vue';
import CrudItens from './components/CrudItens.vue';
import Login from './components/Login.vue';

export default {
  components: { BuscaCep, Clima, CrudItens, Login }
};
</script>
