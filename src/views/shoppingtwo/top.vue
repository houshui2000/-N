<template>
  <div class="top_nav">
    <div class="section_left">
      <div
        class="S_L_Left"
        :style="{
          color: 'red'
        }"
      >
        <!-- background: `url(${props.creatData.productUrl}) no-repeat scroll left top/ 100% 100%` -->
        <div style="cursor: pointer" @click="fenxiangdialog = !fenxiangdialog" class="fenxiang">
          <SvgIcon size="55px" icon-class="fenxiang" />
        </div>
        <div class="img">
          <img class="equalProportions" :src="props.creatData.productUrl" alt="" />
        </div>
        <div class="di_guang"></div>
      </div>
      <div class="S_L_right">
        <div class="S_L_Top">
          <p>{{ props.creatData.productName }}</p>
          <div class="S_l_center">
            <p>发行方：{{ props.creatData.issueName }}</p>
            <p>发行数：{{ props.creatData.issueNum }}</p>

            <p>发行价：￥{{ props.creatData.issuePrice }}</p>
          </div>
        </div>
        <!-- 支付 -->
        <div class="S_L_Zhi">
          <p>
            * 该系列每人限购
            <span>{{ props.creatData.buyRestrict }}</span>
            份
          </p>
          <div @click="onePieceBuyin" class="maifu">一键买入</div>
        </div>
      </div>
    </div>
    <div class="section_right">
      <p>
        其他系列
        <!-- https://excashier.alipay.com/standard/auth.htm?payOrderId=ffd84132fad64030b1a34086b98f085e.00 -->
      </p>
      <div class="S_R_XIlie">
        <div
          v-for="(item, index) in creatDataAll.records"
          @click="router.push(`/SCDetail/${item.id}`)"
          :class="{ Xilie_da: item.id == route.params.vaultId }"
          :key="index"
          class="XIlie_one"
        >
          <div class="left_one">
            <img class="equalProportions" :src="item.productUrl" alt="" />
          </div>
          <div class="right_one">
            <p>{{ item.productName }}</p>
            <p>
              在售
              <span>{{ item.onSellingCount }}</span>
            </p>
            <div class="mounch">
              <span>￥{{ item.minPrice }}</span>
              <span>起</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--  :creatDataAll="creatDataAll"  -->
    <payVue v-model:dialogVisiblePay="dialogVisiblePay" />
    <ShareVue :creatData="creatData" v-model:dialogVisiblePay="fenxiangdialog" />
  </div>
</template>
<script setup>
import payVue from './components/pay/index.vue'
import ShareVue from './components/share/index.vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRoute, useRouter } from 'vue-router'
import MessageBoxVue from '@/components/MessageBox/index.js'

import { ref } from 'vue'
import { useStore } from '@/pinia'
const { loginStore } = useStore()
const route = useRoute()
const router = useRouter()
const props = defineProps({
  creatData: { type: Object, required: true },
  creatDataAll: { type: Object, required: true }
})
const dialogVisiblePay = ref(false) //支付弹框
const fenxiangdialog = ref(false) // 分享弹框
/**一件买入 */
const onePieceBuyin = () => {
  if (!loginStore.token) {
    MessageBoxVue({
      title: '请先登陆'
    })
    loginStore.login = true
    return
  }
  dialogVisiblePay.value = true
}
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

  @include bordergradientMY(linear-gradient(180deg, rgba(157, 104, 217, 0.7) 0%, rgba(99, 149, 231, 0.7) 100%));

  box-shadow: 0px 4.85072px 15.76483px 0px rgba(0, 0, 0, 0.43);
  .S_L_Left {
    position: relative;
    width: 609px;
    height: 608px;
    @include Myflex();
    background: url('@/assets/images/shoppingCentre/shopp_TWo.png') no-repeat scroll left top/ 100% 100%;
    .fenxiang {
      position: absolute;
      right: 33px;
      top: -10px;
      width: 72px;
      height: 30px;
    }
    .img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 420px;
      height: 353px;
      transform-style: preserve-3d;
      // perspective: 200px;
      perspective: 1000px;

      > img {
        animation: infinite shiver 10s linear;
        @keyframes shiver {
          0% {
            transform: rotateY(0);
          }
          30% {
            transform: rotateY(25deg);
          }
          55% {
            transform: rotateY(0);
          }
          75% {
            transform: rotateY(-25deg);
          }
          100% {
            transform: rotateY(0);
          }
        }
      }
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
    border-left: 1.213px solid rgba(159, 98, 219, 0.5);
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
          position: relative;
          font: normal normal 400 14px 'Microsoft YaHei';
          color: rgba(235, 235, 235, 1);
          margin-right: 12px;
          margin-top: 21px;
          line-height: 55px;
          height: 55px;
          padding: 0 12px;
          border-radius: 8px;
          @include bordergradientMY(
            linear-gradient(180deg, rgba(157, 102, 217, 0.5) 0%, rgba(102, 152, 227, 0.5) 100%)
          );
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
        cursor: pointer;
        margin-top: 17px;
        width: 100%;
        height: 38px;
        color: white;
        @include Myflex();
        font: normal normal 600 14px 'Alibaba PuHuiTi';
        border-radius: 5.36px;
        background: linear-gradient(-5deg, #1615f2 15.76%, #b8009a 79.59%);
      }
    }
  }
}
.section_right {
  width: calc(100% - 1094px);
  height: 100%;

  > p {
    background: linear-gradient(90deg, rgba(235, 87, 220, 0.4) 30%, rgba(65, 81, 253, 0) 100%);
    width: 138px;
    font: normal normal 600 14px 'Microsoft YaHei';
    color: white;
    height: 32px;
    transform: translateX(85px);
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
      position: relative;
      transform: scale(1.1) translateX(-10px);
      opacity: 1 !important;
      &::after {
        content: '';
        display: inline-block;
        width: 46px;
        height: 150px;
        // border-radius: 50%;
        position: absolute;
        left: -46px;
        top: 0;
        // margin-left: 10px;qita_zhi.png
        background: url('@/assets/images/shoppingCentre/qita_zhi.png') no-repeat scroll left top/ 100% 100%;
      }
    }
    .XIlie_one {
      cursor: pointer;
      margin-top: 15px;
      opacity: 0.5;
      border-radius: 5px;
      border: 1px solid transparent;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      background-image: linear-gradient(149deg, #200924 45.99%, #0e1045 69.44%, #000a2c 85.48%),
        linear-gradient(180deg, rgba(196, 1, 176, 0.3) 0%, rgba(40, 58, 226, 0.3) 100%);

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
