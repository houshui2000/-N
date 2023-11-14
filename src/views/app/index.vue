<template>
  <NavVue />
  <div class="app-nopx">
    <video preload="auto" loop autoplay muted><source src="@/assets/images/all/app.mp4" type="video/mp4" /></video>
    <!--  -->
    <div class="saoma">
      <div class="xiazai">扫码下载APP</div>
      <div class="img">
        <!-- <img :src="img" alt="" /> -->
        <canvas id="erweima" class="erweima" ref="erweima"></canvas>
      </div>
      <div class="wenti">
        赋能电竞产业生态，打造电竞数字版权资产卡的零售模式和使用场景，带来数字版权资产卡的传播与增值，激发数字创作者的创作热情，促进电竞文化繁荣发展。
      </div>
    </div>
  </div>
</template>
<script setup>
import NavVue from "@/layout/components/top/index.vue"
import QRCode from "qrcode"
import { onMounted, ref } from "vue"
const erweima = ref("")
const int = async () => {
  if (!erweima.value) return
  QRCode.toCanvas(erweima.value, import.meta.env.VITE_APP_MOBLIC_URL + "/downLoad")
}
onMounted(() => {
  int()
})
</script>
<style lang="scss" scoped>
.app-nopx {
  position: relative;
  overflow: hidden;
  width: 1920px;
  height: 1080px;

  .saoma {
    z-index: 2;
    position: absolute;
    padding: 0 35px;
    left: 145px;
    bottom: 45px;
    width: 710px;
    height: 195px;
    background: rgba(34, 23, 46, 0.4);
    // background-color: saddlebrown;
    color: white;
    @include Myflex();
    .xiazai {
      width: 14px;
      height: 140px;
      font: normal normal 400 14px "PingFang SC";
      letter-spacing: 5px;
      writing-mode: vertical-lr;
    }
    .img {
      margin: 0 15px;
      width: 140px;
      height: 140px;
      background-color: seagreen;
      // margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .wenti {
      margin-left: 12px;
      color: rgba(255, 255, 255, 0.8);
      width: 486px;
      height: 100%;
      @include Myflex();
      font: normal normal 400 14px "PingFang SC";
    }
  }
  // source {
  video {
    width: 100%;
    // height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }
  // }
}
</style>
