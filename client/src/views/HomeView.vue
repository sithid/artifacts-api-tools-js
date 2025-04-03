<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr>
    <div>
      The count is: {{ storeCounter.isEven }}
    </div>
    <hr>
    <input
      type="number"
      v-model="storeCounter.count"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';
import Counter from '@/components/Counter.vue';

const storeCounter = useCounterStore();
</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button{
  font-size: 40px;
  margin: 10px;
}
</style>
