<template>
  <div class="kapai">
    <div v-if="props.KaParVueitem.hotPushStatus && props.KaParVueitem?.preemptionStatus != 1" class="hot">HOT</div>
    <div class="xiaoxingxing"></div>
    <div class="chinaKexo">可信版权资产</div>
    <!-- 优先购 -->
    <div class="youxiangou" v-if="props.KaParVueitem?.preemptionStatus == 1">
      <SvgIcon size="60px" Height="60px" icon-class="emptive" />
    </div>
    <!-- 优先购 end-->
    <div class="img">
      <!-- 优先购时间 -->
      <div v-if="!props.KaParVueitem?.canBuy && props.KaParVueitem?.preemptionStatus !== 1" class="time">
        {{ props.KaParVueitem?.publishTime.slice(5, props.KaParVueitem?.publishTime.length) }} 开售
      </div>
      <!-- 优先购时间 end-->
      <!-- -->
      <div v-if="props.KaParVueitem.hasAudio" class="voice">
        <SvgIcon size="18px" Height="18px" icon-class="voiceShang" />
      </div>
      <img class="equalProportions" :src="props.KaParVueitem.productUrl" alt="" />
    </div>
    <div class="kapai_bottom">
      <p class="txt_cut">
        {{ props.KaParVueitem.productName }}
        <!--  -->
      </p>
      <!-- 商城卡片 -->
      <div class="shoppingCentre">
        <div
          v-html="
            props.KaParVueitem.onSellingCount > 0
              ? `剩余<span style='margin: 5px;' >${props.KaParVueitem.onSellingCount}</span>份`
              : ` 已售罄`
          "
          class="right_bott"
        ></div>
        <!-- <!== 临时处理 22 ==>
        <div
          v-if="props.KaParVueitem.onSellingCount > -11"
          v-html="
            props.KaParVueitem.onSellingCount > 0
              ? `在售<span style='margin-left: 5px;' >${props.KaParVueitem.onSellingCount}</span>`
              : ` 已售罄`
          "
          class="right_bott"
        ></div>
        <!==  ==>
        <div v-else v-html="props.KaParVueitem.onSellingCount > 0 ? `已停售` : ` 已停售`" class="right_bott"></div>
        <!== 临时处理 22 end ==> -->
        <div
          class="left_bott"
          :class="{
            none: props.KaParVueitem.onSellingCount === 0
          }"
        >
          <!-- 临时处理 22 把 || props.KaParVueitem.onSellingCount < -11 删除 -->
          <span>￥</span>
          <span class="mounch">{{ props.KaParVueitem.minPrice }}</span>
          <!-- <span class="qi">起</span> -->
        </div>
      </div>
      <!-- 商城卡片 end-->
    </div>
  </div>
</template>
<script setup>
import SvgIcon from "@/components/SvgIcon/index.vue"
const props = defineProps({
  KaParVueitem: {
    type: Object,
    required: true
  }
})
</script>
<style lang="scss" scoped>
.kapai {
  cursor: pointer;
  position: relative;
  width: 100%;
  border-radius: 4px;
  height: 100%;

  background: linear-gradient(149deg, #200924 45.99%, #0e1045 69.44%, #000a2c 85.48%);
  border: 1px solid #303a66;
  transition: all 0.5s;
  &:hover {
    // border: 11px solid #303a66;
    transform: translateY(-12px);
    // background-color: saddlebrown !important;
    .xiaoxingxing {
      z-index: 0;
      background: url("@/assets/images/carggo/xingxing.png") no-repeat scroll left bottom/ 100% 100%;
    }
  }
  .chinaKexo {
    position: absolute;
    right: 0;
    top: 12px;
    padding: 9px;
    z-index: 2;
    // width: 87px;
    height: 28px;
    @include Myflex();
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
    font: normal normal 600 12px "PingFang SC";
    background: linear-gradient(96deg, #c4fbfe 0%, #99d2ff 31.55%, #fff 63.3%, #f295ff 103.92%);
  }

  //优先购

  .youxiangou {
    width: 69px;
    height: 72px;
    position: absolute;
    left: -2px;
    top: 0px;
    z-index: 2;
  }
  //优先购end

  .xiaoxingxing {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    background: url("@/assets/images/carggo/xingxing.png") no-repeat scroll left bottom/ 100% 100%;

    background: none;
  }
  .img {
    position: relative;
    width: 100%;
    border-bottom: 1px solid #303a66;
    height: 220px;
    padding-top: 5px;
    @include Myflex();
    background: url("@/assets/images/shoppingCentre/beijing.png") no-repeat scroll left top/ 100% 100%;
    img {
      height: 194px;
    }
    .voice {
      position: absolute;
      right: 20px;
      bottom: 15px;
      width: 18px;
      height: 18px;
    }

    .time {
      color: white;
      position: absolute;
      left: 0;
      bottom: 10px;
      display: flex;
      height: 28px;
      padding: 12px;
      justify-content: center;
      align-items: center;
      border-radius: 0px 4px 4px 0px;
      color: #31fca4;
      font: normal normal 500 12px "PingFang SC";
      background: rgba(0, 0, 0, 0.7);
      // background-image: linear-gradient(#3dff02, #c43312);
      // background-clip: text;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
    }
  }
  .kapai_bottom {
    padding: 15px 14px;
    > p {
      color: white;
      height: 46px;
      width: 100%;
      &:first-child {
        text-align: left;
        font: normal normal 600 16px "PingFang SC";
      }
    }
    .none {
      background: #4e4e4e !important;
      color: #a7a7a7;
    }
    .shoppingCentre {
      @include Myflex(space-between);
      color: white;
      height: 28px;
      margin-top: 11px;
      .left_bott {
        padding: 6px 19px;
        height: 100%;
        background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
        // fill: linear-gradient(270deg, rgba(220, 158, 0, 0.00) 0.09%, rgba(220, 158, 0, 0.54) 77.46%, #EFAD02 96.55%);

        border-radius: 2px;
        @include Myflex(space-between);
        span {
          color: rgba(255, 255, 255, 0.9);

          font: normal normal 800 16px "PingFang SC";
        }
        .mounch {
          margin: 0 1px 0 1px;
        }
        // .qi {
        //   color: rgba(255, 255, 255, 0.8);
        //   font: normal normal 400 12px "PingFang SC";
        // }
      }
      .right_bott {
        color: rgba(255, 255, 255, 0.8);

        font: normal normal 500 14px "PingFang SC";
      }
    }
  }
  .hot {
    // background-color: #ea3a52;
    position: absolute;
    left: 11px;
    top: 11px;
    width: 38px;
    z-index: 2;
    height: 30px;
    font: normal normal 600 12px "PingFang SC";
    color: white;
    @include Myflex();
    background: url("@/assets/images/all/hot.png") no-repeat scroll left top/ 100% 100%;

    // transform: rotate(30deg);
    // -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    // clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }
}
</style>
