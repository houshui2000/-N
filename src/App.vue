<template>
  <div class="App_template">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.App_template {
  width: 1920px;
  background-color: cadetblue;
  .logo {
    height: 1000px;
    padding: 15px;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}
</style>
