<template>
  <div class="card_bottom">
    <xilieVue v-for="(item, index) in 5" class="xielie_di" :key="index" :xilie="'系列壹号'" />
    <aside class="img_aside"></aside>
    <!--  -->
  </div>
</template>
<script setup>
import xilieVue from './components/xiLie/index.vue'
</script>
<style lang="scss" scoped>
.card_bottom {
  width: 1480px;
  position: relative;
  margin: auto;
  padding-bottom: 211px;
  transform: translateY(-240px);
  .xielie_di {
    &:nth-child(n + 2) {
      margin-top: 65px;
    }
  }
  .img_aside {
    position: absolute;
    top: 0;
    right: -193px;
    z-index: -1;
    // background-color: saddlebrown;
    background: url('@/assets/images/carggo/aside.png') no-repeat scroll left top/ 100% 100%;
    // @include Myflex();
    width: 358px;
    height: 889px;
  }
}
</style>
