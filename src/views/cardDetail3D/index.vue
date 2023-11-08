<template>
  <div class="cardDetail3D">
    <div class="anniu">
      <div class="cha">查证</div>
      <div class="zhengshu">证书</div>
    </div>
    <div class="xinix">
      <p class="title">毁灭者2000</p>
      <div class="bian">
        <SvgIcon size="20px" Height="20px" icon-class="bianhao" />
        <span>XXXXXX</span>
      </div>
      <div class="time">获得时间：2023.10.31 09:56:21</div>
    </div>
    <div class="cardDetail3D_cavas">
      <ThreeDVue />
    </div>
  </div>
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'

import ThreeDVue from './thereD.vue'
</script>
<style lang="scss" scoped>
.cardDetail3D {
  position: relative;
  width: 100vw;
  height: 100vh;
  .anniu {
    position: absolute;
    right: 60px;
    top: 50px;
    width: 220px;
    @include Myflex(space-between);
    z-index: 2;
    > div {
      width: 100px;
      height: 38px;
      font: normal normal 400 14px 'PingFang SC';
      color: white;
      @include Myflex();
      border-radius: 4px;
    }
    .cha {
      @include bordergradientMY(
        linear-gradient(180deg, rgba(124, 126, 154, 1) 0%, rgba(48, 49, 62, 1) 100%),
        linear-gradient(180deg, rgba(38, 42, 86, 1) 0%, rgba(4, 5, 6, 0.8) 100%)
      );
    }
    .zhengshu {
      @include bordergradientMY(
        linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(98, 98, 98, 1) 100%),
        linear-gradient(180deg, rgba(37, 43, 152, 1) 0%, rgba(18, 13, 34, 0.8) 100%)
      );
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
      font: normal normal 500 24px 'PingFang SC';
    }
    .bian {
      @include Myflex(flex-start);
      margin: 20px 0;
      span {
        padding: 2px 5px;
        border-radius: 3.256px;

        background: linear-gradient(269deg, #ffbb4d 0.83%, #815821 101.44%);
      }
      //
    }
    .time {
      font: normal normal 400 16px 'PingFang SC';
      color: #ccc;
    }
  }
  .cardDetail3D_cavas {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: salmon;
    overflow: hidden;
  }
}
</style>
