<template>
  <h2>User {{ id }}</h2>
  <router-view></router-view>
</template>

<script lange="ts" setup>
import { useRoute } from "vue-router";

const props = defineProps({
  id: String,
});
const route = useRoute();
</script>

<style lang="scss" scoped></style>
