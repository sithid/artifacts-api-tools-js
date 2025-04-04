<template>
  <div class="test">
    <h1>Test</h1>
    <Counter />
    <button @click="storeCounter.increaseCount">+</button>
    <button @click="storeCounter.decreaseCount">-</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import Counter from '@/components/Counter.vue';

const storeCounter = useCounterStore();
</script>

<style scoped>
.count {
  font-size: 64px;
  margin-bottom: 10px;
}
.test {
  background-color: rgb(255, 153, 0);
  color: black;
  border: 2px solid black;
  margin-top: 10px;
  height: 100vh;
  text-align: center;
}

h1 {
  text-align: center;
}
</style>