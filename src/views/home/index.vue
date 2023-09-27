<template>
  <div>
    <div class="scrollbar">
      <div class="content-list">
        <div>this is a item hahahahahahahahahahahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
        <div>this is a item hahaha</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
// css
.scrollbar {
  height: 180px;
  width: 165px;
  background: yellow;
  // 这里设成auto/scroll的话，滚动条会占据列表的宽度，导致列表内容被挤压。
  // 设成overlay的话滚动条会浮在内容是，不会被挤压。
  overflow: auto;
  //overflow: auto;
  > div {
    width: 165px;
    overflow: hidden;
    background-color: saddlebrown;
  }
  &:hover {
    &::-webkit-scrollbar {
      display: block;
      background-color: gainsboro;
    }
  }
  &::-webkit-scrollbar {
    display: none;
    background-color: gainsboro;
  }
  &::-webkit-scrollbar-track {
    // background-color: ;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #008aff;
    border-radius: 12px;
  }
  &::-webkit-scrollbar-button {
    background-color: rebeccapurple;
  }
  &::-webkit-scrollbar-corner {
    background-color: #018ef8;
  }
}

// .scrollbar::-webkit-scrollbar {
//   // -webkit-appearance: none;
//   display: none;
//   background: rgba(255, 0, 0, 0);
//   width: 8x;
//   height: 8x;
// }
// .scrollbar::-webkit-scrollbar-thumb {
//   background: rgba(255, 0, 0, 0.6);
//   width: 8x;
//   display: none;
// }
// .scrollbar:hover::-webkit-scrollbar-thumb {
//   display: block;
//   width: 8x;
// }
// // .scrollbar::-webkit-scrollbar-track {
// //   background-color: transparent;
// //   display: none;
// // }
// .scrollbar:hover::-webkit-scrollbar-track {
//   display: block;
// }

// // .content-list > div {
// //   border-bottom: 1px solid;
// // }
</style>
