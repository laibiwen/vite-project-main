<template>
  <div>user{{ route.params.id }}</div>
</template>

<script lange="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
