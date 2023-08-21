<script setup lang="ts"></script>

<template>
  <router-view name="Header"></router-view>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <!-- <keep-alive> -->
      <div :key="route.path">
        <component :is="Component" />
      </div>
      <!-- </keep-alive> -->
    </transition>
  </router-view>
  <router-view name="Footer"></router-view>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
/* 路由切换动画 */

/* 进入动画 */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
