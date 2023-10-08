<template>
  <div>
    <NavVue />
    <div class="center">
      <router-view />
    </div>
    <FooterVue />
  </div>
</template>
<script setup lang="ts">
import NavVue from './components/top/index.vue'
import FooterVue from './components/footer/index.vue'
</script>
<style lang="scss" scoped>
.center {
  min-height: 1000px;
  background-color: sandybrown;
}
</style>
