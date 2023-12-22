<template>
  <div class="header">
    <ul>
      <router-link v-for="item in linkList" :to="item.path" class="link">{{
        item.name
      }}</router-link>
    </ul>
    <p>storeCount {{ storeCount.count }}</p>
    <p>double storeCount {{ storeCount.double }}</p>
    <el-button type="primary">Primary</el-button>
  </div>
</template>

<script setup>
import { useCounterStore } from "@/stores/count-options.ts";
const storeCount = useCounterStore();

const linkList = [
  {
    path: "/",
    name: "首页",
  },
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
.header {
  position: fixed;
  top: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background-color: beige;
  .link {
    margin-right: 12px;
  }
}
</style>
@/stores/count-options
