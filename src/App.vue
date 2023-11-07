<template>
  <div class="CIjing">
<!--    <aside></aside>-->
    <router-view />
    <LoginOne />
    <MenyOnTheRightVue />
  </div>
</template>
<script setup>
import LoginOne from '@/components/LoginOne/index.vue'
import MenyOnTheRightVue from '@/components/menuOnTheRight/index.vue'
</script>
<style lang="scss">
:deep(.el-picker-panel__footer){
  background-color: red!important;
}

/* 禁止复制代码 */
pre {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* 禁止选择文字 */
body {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
body {
  overflow-x: hidden;
  width: 100vw;
}
body::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

// 滚轮样式
body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: rgba($color: #817d7d, $alpha: 0.6) !important;
}

// 滚轮背景
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}
</style>

<style scoped lang="scss">
body {
  width: 1920px;
}
.CIjing {
  width: 1920px;
  // background-color: cadetblue;
  background: url('@/assets/images/all/bei.png') no-repeat;
  position: relative;
  background-size: 100% 100%;
  aside {
    position: absolute;
    right: 0;
    top: 120px;
    z-index: 1;
    width: 358px;
    height: 899px;
    background: url('@/assets/images/carggo/aside.png') no-repeat scroll left top/ 100% 100%;
  }
}
</style>
