<template>
  <div id="sub-container"></div>
</template>

<script>
import { start } from "qiankun";
import { registerApps } from "@/qiankun/app.js";
export default {
  mounted() {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      registerApps();
      console.log("qiankunStarted");
    }
  },
};
</script>
