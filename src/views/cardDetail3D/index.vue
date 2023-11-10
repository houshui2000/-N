<template>
  <div v-if="ZiChanCha.productNumber !== undefined" class="cardDetail3D">
    <!-- v-if="ZiChanCha.productNumber !== undefined"  -->
    <div class="anniu">
      <div @click="dialoVue = { title: '查证', dialo: true }" class="cha">查证</div>
      <div @click="dialoVue = { title: '证书', dialo: true }" class="zhengshu">证书</div>
    </div>
    <div class="xinix">
      <p class="title">
        {{ ZiChanCha.productName }}
      </p>
      <div class="bian">
        <SvgIcon size="25px" Height="25px" icon-class="bianhao" />
        <p>{{ ZiChanCha.productNumber }}</p>
      </div>
      <div class="time">时间：{{ ZiChanCha.releaseYear }}</div>
    </div>
    <div class="cardDetail3D_cavas">
      <ThreeDVue :ThreeDKa="ThreeDKa" />
    </div>
    <assetLibraryDetailVue v-model:errDialoVueUpdate="dialoVue.dialo" :detail="ZiChanCha" :title="dialoVue.title" />
  </div>
  <div v-else class="wuxinxi">
    <MissWakeupPage :title="'正在加载中，请等候...'" titleTwo="" />
  </div>
</template>
<script setup>
// , {http://172.16.0.89:5173/cardDetail3D/WSAA0NuWi6Q
//   path: '/cardDetail3D/:WSAA0NuWi6Q',//3DWSA176VpJ1V
//   name: 'cardDetail3D',
//   component: () => import('@/views/cardDetail3D/index.vue'),
//   props: true,
//   meta: {
//     immediate: false, // 路由显示
//     name: '3D',
//     rightDao: true, // 右侧菜单栏 true 关闭 false 开启
//     scrollTheSubtitles: true // 滚动字幕开启，关闭
//   },
// },
import MissWakeupPage from "@/components/missingWakeupPage/index.vue"

import assetLibraryDetailVue from "./components/assetLibraryDetail.vue"
import SvgIcon from "@/components/SvgIcon/index.vue"
import ThreeDVue from "./thereD.vue"
import { ref } from "vue"
import { useRoute } from "vue-router"
import { assetcheck, asset3d, assetcert } from "@/network/shoppingCentre/shoppingCentre"
const route = useRoute()

const dialoVue = ref({
  dialo: false,
  title: "查证"
})
const ThreeDKa = ref({
  // productFrontUrl: new URL('@/assets/images/ka/zheng.png', import.meta.url).href, // 正
  // productOppositeUrl: new URL('@/assets/images/ka/bottom.png', import.meta.url).href // 正
  productFrontUrl: "", // 正
  productOppositeUrl: "" // 正
})
const ZiChanCha = ref({})
const Myimg = ref({})
const init = async () => {
  const assetcheckRes = await assetcheck({
    qrCodeId: route.query.id
  })
  ZiChanCha.value = assetcheckRes.data || {}

  //获取正反面
  const asset3dRes = await asset3d({ cardNo: "080-2023-B06-01-044" })
  // const asset3dRes = await asset3d({ cardNo: ZiChanCha.value.productNumber })
  ThreeDKa.value = asset3dRes.data
  //获取证书
  const assetcertRes = await assetcert({
    qrCodeId: route.query.id
  })
  Myimg.value = assetcertRes.data

  // Promise.allSettled([
  //   assetcheck({
  //     qrCodeId: route.query.id
  //   }),
  //   assetcert({
  //     qrCodeId: route.query.id
  //   })
  // ]).then((res) => {
  //   if (res[0].status !== 'fulfilled' && res[1].status !== 'fulfilled') return
  //   ZiChanCha.value = res[0].value.data || {}
  // })
}

init()
</script>
<style lang="scss" scoped>
.wuxinxi {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  // background-c
  background: url("@/assets/images/ka/earth.png") no-repeat;
  background-size: 100% 100%;
}
.cardDetail3D {
  position: relative;
  width: 100%;
  height: 100vh;
  .anniu {
    position: absolute;
    right: 60px;
    top: 50px;
    width: 220px;
    @include Myflex(space-between);
    z-index: 2;
    > div {
      cursor: pointer;
      width: 100px;
      height: 38px;
      font: normal normal 400 14px "PingFang SC";
      color: white;
      @include Myflex();
      border-radius: 4px;
      @include bordergradientMY(
        linear-gradient(180deg, rgba(124, 126, 154, 1) 0%, rgba(48, 49, 62, 1) 100%),
        linear-gradient(180deg, rgba(38, 42, 86, 1) 0%, rgba(4, 5, 6, 0.8) 100%)
      );
      transition: all 1s;
      &:hover {
        @include bordergradientMY(
          linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(98, 98, 98, 1) 100%),
          linear-gradient(180deg, rgba(37, 43, 152, 1) 0%, rgba(18, 13, 34, 0.8) 100%)
        );
      }
    }
    .cha {
      // @include bordergradientMY(
      //   linear-gradient(180deg, rgba(124, 126, 154, 1) 0%, rgba(48, 49, 62, 1) 100%),
      //   linear-gradient(180deg, rgba(38, 42, 86, 1) 0%, rgba(4, 5, 6, 0.8) 100%)
      // );
    }
    .zhengshu {
    }
  }
  .xinix {
    position: absolute;
    left: 121px;
    bottom: 100px;
    z-index: 2;
    color: white;
    width: 277px;
    height: 116px;
    .title {
      font: normal normal 500 24px "PingFang SC";
    }
    .bian {
      @include Myflex(flex-start);
      margin: 20px 0;
      p {
        padding: 0 5px;
        font: normal normal 400 12px "PingFang SC";
        border-radius: 3.256px;
        @include Myflex();
        background: linear-gradient(269deg, #ffbb4d 0.83%, #815821 101.44%);
      }
      //
    }
    .time {
      font: normal normal 400 16px "PingFang SC";
      color: #ccc;
    }
  }
  .cardDetail3D_cavas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }
}
</style>
