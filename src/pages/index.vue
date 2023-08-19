<template>
  <div>首页</div>
  <ul>
    <router-link v-for="item in linkList" :to="item.path" class="link">{{
      item.name
    }}</router-link>
  </ul>
</template>

<script setup lang="ts">
const linkList = [
  {
    path: "/HelloWorld",
    name: "HelloWorld",
  },
  {
    path: "/users/d99d9d/profile",
    name: "profile",
  },
  {
    path: "/users/d99d9d/posts",
    name: "posts",
  },
];
</script>

<style lang="scss" scoped>
.link {
  margin-right: 12px;
}
</style>
