<template>
  <NavVue />
  <div class="app">
    <video preload="auto" loop autoplay muted><source src="@/assets/images/all/app.mp4" type="video/mp4" /></video>
  </div>
</template>
<script setup>
import NavVue from "@/layout/components/top/index.vue"
</script>
<style lang="scss" scoped>
.app {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  source {
    video {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      background-color: saddlebrown;
    }
  }
}
</style>
