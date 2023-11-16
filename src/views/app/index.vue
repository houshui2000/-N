<template>
  <NavVue />
  <div class="app-nopx">
    <video preload="auto" loop autoplay muted><source src="@/assets/images/all/app.mp4" type="video/mp4" /></video>
    <!--  -->
    <div class="saoma">
      <div class="xiazai">扫码下载APP</div>
      <div class="img">
        <!-- <img :src="img" alt="" /> -->
        <!-- <div class="img_logo">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5413_15588)">
              <rect width="32" height="32" rx="3.09375" fill="url(#paint0_linear_5413_15588)" />
            </g>
            <g filter="url(#filter0_d_5413_15588)">
              <path
                d="M26.2405 14.587C26.7757 15.3679 26.5764 16.4348 25.7955 16.9699L12.494 26.0848C11.7131 26.6199 10.6462 26.4206 10.111 25.6397L5.75007 19.2757C5.21494 18.4947 5.41419 17.4278 6.19513 16.8927L19.4966 7.77785C20.2775 7.24271 21.3444 7.44197 21.8795 8.22291L26.2405 14.587Z"
                fill="url(#paint1_linear_5413_15588)"
              />
              <path
                d="M19.7758 7.69324C20.7475 7.97484 21.3069 8.99083 21.0253 9.96251L16.6733 24.9794C16.3917 25.951 15.3757 26.5105 14.404 26.2289L6.76134 24.014C5.78965 23.7324 5.23023 22.7164 5.51183 21.7447L9.86385 6.72784C10.1455 5.75615 11.1614 5.19673 12.1331 5.47833L19.7758 7.69324Z"
                fill="url(#paint2_linear_5413_15588)"
              />
              <path
                d="M10.0743 9.90039H12.3149L9.79035 23.0203H7.5498L10.0743 9.90039Z"
                fill="url(#paint3_linear_5413_15588)"
              />
              <path d="M15.584 9.90234H21.3848V11.7015H15.584V9.90234Z" fill="#DADADA" />
              <path d="M15.5967 9.90039H18.3956L10.3487 23.0203H7.5498L15.5967 9.90039Z" fill="white" />
              <path d="M20.0013 9.93164H22.8002L19.4926 15.1608H16.729L20.0013 9.93164Z" fill="white" />
              <path d="M19.5015 15.1455H16.7358L20.0105 23.0247H22.8115L19.5015 15.1455Z" fill="white" />
              <path d="M16.4086 20.0078H13.6077L14.9544 23.0239H17.7554L16.4086 20.0078Z" fill="white" />
              <path d="M14.25 21.2256H21.3847L22.0981 23.0248H14.9635L14.25 21.2256Z" fill="white" />
            </g>
            <defs>
              <filter
                id="filter0_d_5413_15588"
                x="4.07115"
                y="4.42573"
                width="23.8484"
                height="23.5052"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="0.167083" />
                <feGaussianBlur stdDeviation="0.355051" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.467269 0 0 0 0 0.45053 0 0 0 0 0.45053 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5413_15588" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5413_15588" result="shape" />
              </filter>
              <linearGradient
                id="paint0_linear_5413_15588"
                x1="16"
                y1="0"
                x2="16"
                y2="32"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#241328" />
                <stop offset="1" stop-color="#000C2C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5413_15588"
                x1="24.9901"
                y1="12.6241"
                x2="8.14972"
                y2="24.1639"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F600EC" />
                <stop offset="1" stop-color="#A501DF" stop-opacity="0.69" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_5413_15588"
                x1="16.0836"
                y1="6.39843"
                x2="11.1413"
                y2="25.4298"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2F42FF" />
                <stop offset="1" stop-color="#000B7B" stop-opacity="0.68" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_5413_15588"
                x1="11.0168"
                y1="9.90046"
                x2="8.74026"
                y2="23.0164"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#F9F9F9" />
                <stop offset="1" stop-color="#CDCDCD" />
              </linearGradient>
              <clipPath id="clip0_5413_15588">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>-->
        <!-- <canvas id="erweima" class="erweima" ref="erweima"></canvas> -->
        <img src="@/assets/images/all/appEr.png" alt="" />
      </div>
      <div class="wenti">
        赋能电竞产业生态，打造电竞数字版权资产卡的零售模式和使用场景，带来数字版权资产卡的传播与增值，激发数字创作者的创作热情，促进电竞文化繁荣发展。
      </div>
    </div>
  </div>
</template>
<script setup>
import NavVue from "@/layout/components/top/index.vue"
// import QRCode from "qrcode"
// import { onMounted, ref } from "vue"
// const erweima = ref("")
// const int = async () => {
//   if (!erweima.value) return
//   QRCode.toCanvas(erweima.value, import.meta.env.VITE_APP_MOBLIC_URL + "/downLoad")
// }
// onMounted(() => {
//   int()
// })
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
      position: relative;
      margin: 0 15px;
      width: 140px;
      height: 140px;
      background-color: seagreen;
      // margin-right: 20px;
      img {
        width: 100%;
        height: 100%;
      }
      .img_logo {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 30px;
        height: 30px;
        background-color: saddlebrown;
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
