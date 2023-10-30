<template>
  <div class="top_nav">
    <div class="section_left">
      <div
        class="S_L_Left"
        :style="{
          color: 'red',
          background: `url(${creatData.productUrl}) no-repeat scroll left top/ 100% 100%`
        }"
      >
        <div class="fenxiang"><SvgIcon size="45px" icon-class="fenxiang" /></div>
        <img :src="creatData.effectFrontUrl" alt="" />
        <div class="di_guang"></div>
      </div>
      <div class="S_L_right">
        <div class="S_L_Top">
          <p>{{ creatData.productName }}</p>
          <div class="S_l_center">
            <p>发行方：{{ creatData.issueName }}</p>
            <p>发行方：{{ creatData.buyRestrict }}</p>

            <p>发行价：￥{{ creatData.buyRestrict }}</p>
          </div>
        </div>
        <!-- 支付 -->
        <div class="S_L_Zhi">
          <p>
            * 该系列每人限购
            <span>{{ creatData.buyRestrict }}</span>
            份
          </p>
          <div class="maifu">一键买入</div>
        </div>
      </div>
    </div>
    <div class="section_right">
      <p>其他系列</p>
      <div class="S_R_XIlie">
        <div v-for="(item, index) in 6" :class="{ Xilie_da: index === 1 }" :key="index" class="XIlie_one">
          <div class="left_one">
            <img src="@/assets/images/carggo/ceshi.png" alt="" />
          </div>
          <div class="right_one">
            <p>赛博朋克2077-边缘行者</p>
            <p>
              在售
              <span>988</span>
            </p>
            <div class="mounch">
              ￥100
              <span>起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { shopcardxdetail } from '@/network/shoppingCentre/shoppingtwo.js'
const route = useRoute()
const creatData = ref({})
const init = async () => {
  const res = await shopcardxdetail({
    vaultId: route.params.vaultId
  })
  // const shopcarddetailRes =await shopcarddetail({
  // })
  creatData.value = res.data
}
init()
</script>
<style lang="scss" scoped>
.top_nav {
  @include Myflex(space-between, flex-start);
  width: 100%;
  height: 612px;
}
.section_left {
  width: 1094px;
  height: 612px;
  border-radius: 6px;
  @include Myflex(space-between, flex-start);
  border: 1.213px solid #9f62db;
  background: linear-gradient(180deg, rgba(18, 39, 67, 0.59) 0%, rgba(3, 13, 21, 0.59) 100%);
  box-shadow: 0px 4.85072px 15.76483px 0px rgba(0, 0, 0, 0.43);
  .S_L_Left {
    position: relative;
    width: 609px;
    height: 608px;
    // background-color: salmon;
    @include Myflex();
    // shopp_TWo.png
    // background: url('@/assets/images/shoppingCentre/shopp_TWo.png') no-repeat scroll left top/ 100% 100%;
    .fenxiang {
      position: absolute;
      right: 23px;
      top: 19px;
    }
    > img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 120px;
      height: 253px;
    }
    .di_guang {
      width: 414px;
      height: 407px;
      background: url('@/assets/images/shoppingCentre/Di_zuo.png') no-repeat scroll left top/ 100% 100%;
    }
  }
  .S_L_right {
    width: calc(100% - 609px);
    height: 100%;
    // padding-right: 84px;
    padding: 48px 84px 45px 51px;
    // padding-left: 51px;
    border-radius: 6px;
    @include Myflex(space-between);
    flex-direction: column;
    border-left: 1.213px solid #9f62db;
    background: linear-gradient(180deg, rgba(18, 39, 67, 0.59) 0%, rgba(3, 13, 21, 0.59) 100%);
    box-shadow: 0px 4.85072px 15.76483px 0px rgba(0, 0, 0, 0.43);
    .S_L_Top {
      > p {
        color: white;
        font: normal normal 700 23px 'Microsoft YaHei';
      }
      .S_l_center {
        @include Myflex(flex-start);
        flex-wrap: wrap;
        > p {
          font: normal normal 400 14px 'Microsoft YaHei';
          color: rgba(235, 235, 235, 18);
          margin-right: 12px;
          margin-top: 21px;
          line-height: 55px;
          height: 55px;
          display: inline-block;
          padding: 0 18px;
          border-radius: 6px;
          border: 1.213px solid #9f62db;
          background: linear-gradient(180deg, rgba(18, 39, 67, 0.59) 0%, rgba(3, 13, 21, 0.59) 100%);
          box-shadow: 0px 4.85072px 15.76483px 0px rgba(0, 0, 0, 0.43);
        }
      }
    }
    .S_L_Zhi {
      width: 100%;
      > p {
        color: rgba(255, 255, 255, 0.56);
        font: normal normal 400 14px 'PingFang SC';
        span {
          color: white;
        }
      }
      .maifu {
        margin-top: 17px;
        width: 100%;
        height: 38px;
        color: white;
        @include Myflex();
        font: normal normal 600 14px 'Alibaba PuHuiTi';
        border-radius: 5.36px;
        background: linear-gradient(141deg, #b8009a 15.76%, #1615f2 79.59%);
      }
    }
  }
}
.section_right {
  width: 324.48px;
  height: 100%;

  > p {
    background: linear-gradient(90deg, #eb57dc 0%, rgba(65, 81, 253, 0) 100%);
    width: 138px;
    font: normal normal 600 14px 'Microsoft YaHei';
    color: white;
    height: 32px;
    // line-height: 32px;
    @include Myflex(flex-start);
    &::before {
      content: '';
      display: inline-block;
      width: 5px;
      height: 100%;
      background-color: #d00a75;
      margin-right: 10px;
    }
  }
  .S_R_XIlie {
    height: calc(100% - 40px);
    margin-top: 19px;
    overflow: auto;
    display: flex;
    padding-right: 12px;
    flex-direction: column;
    align-items: flex-end;
    /*滚动条样式*/
    &::-webkit-scrollbar {
      width: 10px;
    }

    // 滚轮样式
    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      background: linear-gradient(180deg, #de01ca 0%, #3340fe 100%);
    }

    // 滚轮背景
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
      border-radius: 0;
      // background: rgba(0, 0, 0, 0.1);
      background-color: #282a52;
    }
    .Xilie_da {
      transform: scale(1.1) translateX(-10px);
    }
    .XIlie_one {
      margin-top: 15px;
      border-radius: 5px;
      border: 0.96px solid #9f64db;
      background: linear-gradient(149deg, #200924 45.99%, #0e1045 69.44%, #000a2c 85.48%);
      width: 278.4px;
      height: 150px;
      @include Myflex(space-between);
      padding: 10px 14px;
      .left_one {
        width: 93px;
        height: 130px;
      }
      .right_one {
        width: 148px;
        p {
          &:first-child {
            font: normal normal 600 14px 'PingFang SC';
            color: #fff;
          }
          &:nth-child(2) {
            font: normal normal 500 14px 'PingFang SC';
            color: #fff;
            margin: 10px 0 30px 0;
            span {
              color: #bafbff;
            }
          }
        }
        .mounch {
          font: normal normal 800 14px 'HYYakuHei';
          color: white;
          border-radius: 4px;
          border: 1px solid #000;
          background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
          width: 96px;
          height: 28px;
          padding: 6px 10px;
          @include Myflex(space-between);
          span {
            font: normal normal 400 12px 'PingFang SC';
          }
        }
      }
    }
  }
}
</style>
