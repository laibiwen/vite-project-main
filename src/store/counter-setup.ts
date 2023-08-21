import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStoreSetup = defineStore("countersetup", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
