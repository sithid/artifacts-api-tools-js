<template>
  <div class="Test">
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
