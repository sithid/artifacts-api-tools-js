import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  // state
  const count = ref(0);

  // actions
  function increaseCount() {
    count.value++;
  }

  function decreaseCount() {
    count.value--;
  }

  const isEven = computed(() => {
    if (count.value % 2 === 0) return "even";
    else return "odd";
  });

  return {
    count, // state
    increaseCount, // action
    decreaseCount, // action
    isEven // getter
  }
})
