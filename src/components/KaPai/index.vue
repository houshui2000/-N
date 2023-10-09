<template>
  <div class="kapai">
    <img src="@/assets/images/test.png" alt="" />
    <div class="kapai_bottom">
      <span>xx</span>
      <span>xx</span>
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss" scoped>
.kapai {
  width: 100%;
  height: 100%;
  padding: 10px 20px;
  background-color: seagreen;
  img {
    // width: ;
    height: 80%;
  }
  .kapai_bottom {
    margin-top: 20px;
    background-color: saddlebrown;
    @include Myflex();
  }
}
</style>
