<template>
  <aside class="right_aside">
    <p>最近火的</p>
    <div class="dundong">
      <div v-for="(item, index) in 20" :key="index" class="gundong">
        <span>
          <img src="@/assets/images/test.png" alt="" />
        </span>
        <span>价格</span>
        <span>卡名称</span>
      </div>
    </div>
  </aside>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
.right_aside {
  //
  width: 100%;
  height: 100%;
  border: 1px solid black;
  p {
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid black;
  }
  .dundong {
    height: calc(100% - 40px);
    background-color: red;
    // overflow: hidden;
    // overflow-y: hidden;
    // &:hover {
    //   overflow-y: overlay;
    // }
    overflow-y: scroll;

    .gundong {
      height: 40px;
      width: 100%;
      @include Myflex(space-between);
      span {
        display: block;
        width: 30%;
        height: 100%;
        background-color: aquamarine;
        @include Myflex();
      }
    }
  }
}
</style>
