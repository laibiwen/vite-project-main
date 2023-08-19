<template>
  <h2>User {{ $route.params.id }}</h2>
  <router-view></router-view>
</template>

<script lange="ts" setup>
import { useRoute } from "vue-router";
const route = useRoute();
</script>

<style lang="scss" scoped></style>
