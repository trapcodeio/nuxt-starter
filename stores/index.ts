import { defineStore } from "pinia";

/**
 * Main Store
 */
export const useStore = defineStore("main", () => {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return { count, increment, decrement };
});
