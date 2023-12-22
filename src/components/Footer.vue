<template>
  <div class="header">
    <p>这里是底部</p>
    <p>storeCount {{ storeCount.count }}</p>
    <p>double storeCount {{ storeCount.double }}</p>
  </div>
</template>

<script setup>
import { useCounterStoreSetup } from "@/stores/counter-setup.ts";
const storeCount = useCounterStoreSetup();
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background-color: beige;
}
</style>
@/stores/counter-setup