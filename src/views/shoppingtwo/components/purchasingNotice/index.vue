<template>
  <div class="IntroTpTheWorkVue">
    <!-- 购买须知 -->
    <div class="setction scrollStyle">购买须知</div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.IntroTpTheWorkVue {
  padding: 5px;
  height: 626px;
  margin-top: 15px;
  width: 100%;
  border-radius: 4px;
  @include bordergradientMY();
  .setction {
    width: 100%;
    overflow: auto; 
    height: 100%;
  }
}
.scrollStyle {
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: linear-gradient(180deg, #de01ca 0%, #3340fe 100%);
    // opacity: 0.5;
  }
}
img {
  width: 300px;
  height: 300px;
}
</style>
