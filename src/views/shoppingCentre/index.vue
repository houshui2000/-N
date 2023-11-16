<template>
  <div class="section">
    <LunBoVue />
    <sectionVue />
  </div>
</template>
<script setup>
import LunBoVue from "./components/LunBo/index.vue"
import sectionVue from "./section.vue"
</script>
<style lang="scss" scoped>
:deep(.el-carousel__indicators) {
  display: none;
}
.section {
}
</style>
