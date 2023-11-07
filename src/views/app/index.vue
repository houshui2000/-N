<template>
  <NavVue />
  <div @mousemove="MymouseMove($event)" @mouseenter="Mymouseenter" @mouseleave="Mymouseleave" class="app">
    <div ref="ren_mie" class="img_left">
      <img src="@/assets/images/all/Photodisc.png" alt="" />
    </div>
    <div ref="ren" class="img_right">
      <img src="@/assets/images/all/ren.png" alt="" />
    </div>
    <!-- 子 -->
    <div class="kajing">
      <p class="kajing_p">卡竞</p>
      <div class="chaoliu">引领中国电竞数字卡潮流</div>
    </div>
    <!--  -->
    <div class="saoma">
      <div class="xiazai">扫码下载APP</div>
      <div class="img"></div>
      <div class="wenti">
        赋能电竞产业生态，打造电竞数字版权资产卡的零售模式和使用场景，带来数字版权资产卡的传播与增值，激发数字创作者的创作热情，促进电竞文化繁荣发展。
      </div>
    </div>
  </div>
</template>
<script setup>
import NavVue from '@/layout/components/top/index.vue'
import { ref } from 'vue'
let pagex = 0,
  pageY = 0,
  yidongY = 0,
  yidongX = 0
const ren = ref()
const ren_mie = ref()
let mo = 1920,
  lef = 100
const MymouseMove = (e) => {
  yidongX = e.clientX
  const disx = yidongX - pagex
  const move = (lef * disx) / mo
  //
  yidongY = e.clientY
  const disxY = yidongY - pageY
  const moveY = (lef * disxY) / mo

  ren_mie.value.style.transform = `translate(${move * -1}px, ${moveY * -1}px)`
  ren.value.style.transform = `translate(${move}px,${moveY}px)`
}

const Mymouseleave = () => {
  ren.value.style.transition = `all 0.3s ease-in-out 0s`
  ren.value.style.transform = `translate(0,0)`
  ren_mie.value.style.transition = `all 0.3s ease-in-out 0s`
  ren_mie.value.style.transform = `translate(0,0)`
}
const Mymouseenter = (e) => {
  // console.log(e.offsetX)
  pagex = e.clientX
  pageY = e.clientY

  ren.value.style.transition = `none`
  ren_mie.value.style.transition = `none`
}
</script>
<style lang="scss" scoped>
.app {
  background: url('@/assets/images/all/backgrou.png') no-repeat scroll left bottom/ 100% 100%;
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  .img_right {
    width: 680px;
    height: 1080px;
    position: absolute;
    bottom: -50px;
    right: 258px;
    z-index: 0;
  }
  img {
    width: 100%;
    height: 100%;
  }
  .img_left {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  .kajing {
    position: absolute;
    top: 100px;
    left: 130px;
    width: 700px;
    color: white;
    height: 280px;
    @include Myflex();
    .kajing_p {
      font: normal normal 800 200px 'PingFang SC';
    }
    .chaoliu {
      font: normal normal 400 20px 'PingFang SC';
    }
  }
  .saoma {
    position: absolute;
    padding: 0 35px;
    left: 145px;
    bottom: 45px;
    width: 710px;
    height: 195px;
    background: rgba(34, 23, 46, 0.4);
    color: white;
    @include Myflex();
    .xiazai {
      width: 14px;
      height: 140px;
      font: normal normal 400 14px 'PingFang SC';
      letter-spacing: 5px;
      writing-mode: vertical-lr;
    }
    .img {
      margin: 0 15px;
      width: 140px;
      height: 140px;
      background-color: seagreen;
    }
    .wenti {
      color: rgba(255, 255, 255, 0.8);
      width: 486px;
      height: 100%;
      @include Myflex();
      font: normal normal 400 14px 'PingFang SC';
    }
  }
}
</style>
