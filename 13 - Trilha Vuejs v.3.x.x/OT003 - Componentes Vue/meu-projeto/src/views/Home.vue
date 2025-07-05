<template>
  <div>
    <h1>Home</h1>
    <HelloWorld />
    <Pai />
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue';
import Pai from '../components/Pai.vue';

export default {
  components: { HelloWorld, Pai }
};
</script>
