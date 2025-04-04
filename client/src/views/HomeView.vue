<template>
  <div class="home">
    <h1>Home Page</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import Counter from '@/components/Counter.vue';

const storeCounter = useCounterStore();
</script>

<style scoped>
.home {
  background-color: rgb(255, 153, 0);
  color: black;
  border: 2px solid black;
  margin-top: 10px;
  height: 100vh;
}

h1 {
  text-align: center;
}
</style>
