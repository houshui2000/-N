<template>
  <div class="pay_all">
    <!-- 支付弹框 -->
    <el-dialog
      :modelValue="dialogVisiblePay"
      @update:dialogVisiblePay="$emit('update:dialogVisiblePay', $event)"
      title="Tips"
      :lock-scroll="false"
      :close-on-click-modal="false"
      :showClose="false"
      @close="$emit('update:dialogVisiblePay', false)"
    >
      <template #header>
        <div class="top">
          选择支付方式
          <div @click="$emit('update:dialogVisiblePay', false)" class="close">
            <SvgIcon size="20px" Height="20px" icon-class="close" />
          </div>
        </div>
      </template>
      <section>
        <div class="sectoion_top">
          <div class="top_left">
            <!-- {{ props.creatDataAll.issuePrice }}-->
            <img v-if="creatDataAll.productUrl" class="equalProportions" :src="creatDataAll.productUrl" alt="" />
          </div>
          <div class="top_right">
            <p>{{ creatDataAll.productName }}</p>
            <div class="bianhao">
              <span><SvgIcon size="30px" Height="30px" icon-class="bianhao" /></span>
              <el-tooltip class="box-item" effect="dark" :content="creatDataAll.cardNo" placement="top-start">
                <span class="danyi">{{ creatDataAll.cardNo }}</span>
              </el-tooltip>
            </div>
            <div class="price">
              <span>价格：</span>
              <el-tooltip class="box-item" effect="dark" :content="`￥${creatDataAll.price}`" placement="top-start">
                <span class="">￥{{ creatDataAll.price }}</span>
              </el-tooltip>
            </div>
          </div>
        </div>
        <div class="section_bototm">
          <div v-for="(item, index) in listOfBanks" @click="payArrAdilo = item" :key="index" class="pay">
            <div class="img">
              <SvgIcon size="20px" Height="20px" icon-class="Unionpay" />
            </div>
            <p>{{ item.name }}</p>
            <div :class="{ radio_article: payArrAdilo.payId == item.payId }" class="radio"></div>
          </div>
        </div>
        <!--       用户协议       -->
        <div class="checkboxBox" style="font-size: 12px">
          <el-checkbox v-model="agreement" class="checkboxBox-checkbox"></el-checkbox>
          <div>
            <span>本人已满18周岁且具备完全行动能力，支付即代表阅</span>
            <span>读并同意</span>
            <span style="font-size: 12px">《购买须知》</span>
            和
            <span style="font-size: 12px">《用户协议》</span>
          </div>
        </div>
      </section>
      <template #footer>
        <div @click="shopquickbuyPay" class="footer">立即购买</div>
        <!--  @click="errDialoVueUpdate = true" -->
      </template>
    </el-dialog>
  </div>
  <!-- <errDialoVue v-model:errDialoVueUpdate="errDialoVueUpdate" /> -->
</template>
<script setup name="payLint">
import MessageBoxVue from "@/components/MessageBox/index.js"

import { toRefs, ref, watch } from "vue"
import SvgIcon from "@/components/SvgIcon/index.vue"
// import errDialoVue from "../errdialo/index.vue"
// import { useRoute } from "vue-router"
// import { shopquickbuy } from "@/network/shoppingCentre/shoppingtwo.js"
import { shoppaychannel } from "@/network/pay.js"
// import { useStore } from '@/pinia'
// const route = useRoute()
// const { loginStore } = useStore()

const props = defineProps({
  dialogVisiblePay: { type: Boolean, required: true },
  creatDataAll: { type: Object, required: true },
  payFun: {
    type: Function,
    required: true
    // default: async () => {
    //   const res = await shopquickbuy({
    //     cardId: creatDataAll.value.cardId, // 跳转页面的id 1
    //     payChanelId: payArrAdilo.value.payId // 支付通道 1 是支付宝
    //   })

    //   window.location.href = res.data
    // }
  }
})
// const errDialoVueUpdate = ref(false) //支付成功弹框
let agreement = ref(false) //是否同意协议
const { dialogVisiblePay, creatDataAll, payFun } = toRefs(props)

const $emit = defineEmits(["update:dialogVisiblePay"])

const payArrAdilo = ref()
/**支付 */
const shopquickbuyPay = async () => {
  if (!agreement.value) {
    MessageBoxVue({
      title: "请勾选协议"
    })
    agreement.value = true
    setTimeout(() => {
      agreement.value = false
    }, 820)
    return true
  }
  payFun.value(payArrAdilo.value.payId)
}
const listOfBanks = ref([]) // 支付列表
// const creatDataAll = ref({})
const init = async () => {
  // const res = await buyminxpricecard({ vaultId: route.query.vaultId })
  // creatDataAll.value = res.data
  const shoppaychannelRes = await shoppaychannel()
  listOfBanks.value = shoppaychannelRes.data
  payArrAdilo.value = shoppaychannelRes.data[0]
}
watch(
  dialogVisiblePay,
  (newVal) => {
    if (!newVal) return
    init()
  },
  {
    deep: true
  }
)
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.pay_all {
  :deep(.el-dialog) {
    position: relative;
    border-radius: 8px;
    width: 400px;
    height: 480px;
    -webkit-backdrop-filter: blur(2px);
    backdrop-filter: blur(2px);
    background: url("@/assets/images/shoppingCentre/pay_load.png") no-repeat scroll left bottom/ 100% 100%;
  }
}
.top {
  position: relative;
  text-align: center;
  font: normal normal 700 16px "PingFang SC";
  color: white;
  .close {
    cursor: pointer;
    position: absolute;
    right: -13px;
    top: 0;
    width: 20px;
    height: 19px;
  }
  &::after {
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
    content: "";
    display: inline-block;
    width: 50px;
    height: 2px;
    border-radius: 7px;
    background: linear-gradient(90deg, #646dff 35.67%, #dd0246 99.97%);
  }
}
section {
  padding: 30px 10px;
  width: 100%;
  height: 328px;
  .sectoion_top {
    @include Myflex(space-between);
    height: 141px;
    width: 100%;
    $top_leftWidth: 100px;
    .top_left {
      width: $top_leftWidth;
      height: 141px;
      border-radius: 8px;
      @include bordergradientMY(linear-gradient(90deg, rgb(52, 62, 252) 0%, rgb(223, 0, 201) 100%));

      box-shadow: 2px 2px 5px 0px #4a52ff;
    }
    .top_right {
      width: calc(100% - $top_leftWidth);
      height: 100%;
      padding: 0 0 0 35px;
      > p {
        font: normal normal 700 14px "PingFang SC";
        color: white;
      }
      .bianhao {
        @include Myflex(flex-start);
        margin: 19px 0;
        width: 100%;
        span {
          display: block;
          &:first-child {
            width: 30px;
            height: 30px;
            @include Myflex(flex-end);
          }
          &:last-child {
            font: normal normal 400 14px "PingFang SC";
            color: white;
            @include Myflex(flex-start);
            border-radius: 3.256px;
            width: calc(100% - 30px);
            transform: translateX(-3px);
            z-index: -1;
            height: 20px;
            padding-left: 5px;
            background: linear-gradient(269deg, #ffbb4d 0.83%, #815821 101.44%);
          }
        }
      }
      .price {
        padding: 0 9px;
        height: 24px;
        border-radius: 4px;
        background: rgba(197, 141, 57, 0.5);
        color: rgba(255, 206, 0, 0.93);
        display: inline-block;
        font: normal normal 400 14px "PingFang SC";
        span {
          display: inline-block;
          margin: auto;
          line-height: 24px;
          height: 100%;
          $fristWidth: 45px;
          &:first-child {
            // width: $fristWidth;
          }
          &:last-child {
            // width: calc(100% - $fristWidth);
          }
        }
      }
    }
  }
  .section_bototm {
    margin-top: 25px;
    height: 50px;
    padding-right: 10px;
    overflow: overlay;
    /*滚动条样式*/
    &::-webkit-scrollbar {
      width: 4px;
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
    .pay {
      position: relative;
      margin-bottom: 11px;
      width: 100%;
      height: 36px;
      border-radius: 4px;
      padding: 5px 12px;
      @include Myflex(flex-start);
      // border: 1px solid transparent;
      // background-clip: padding-box, border-box;
      // background-origin: padding-box, border-box;
      // background-image: linear-gradient(180deg, #122743 -1.45%, #030d15 100%),
      //   linear-gradient(0deg, rgba(157, 102, 217, 0.5) 0%, rgba(99, 149, 231, 0.8) 100%);
      @include bordergradientMY(
        linear-gradient(180deg, rgba(137, 95, 193, 0.5) 20%, rgba(52, 82, 124, 0.9) 80%),
        linear-gradient(180deg, #122743 -1.45%, #030d15 100%)
      );

      .img {
        width: 25px;
        height: 25px;
        margin-right: 13px;
        @include Myflex();
      }
      > p {
        font: normal normal 400 12px "PingFang SC";
        color: white;
      }
      .radio_article {
        width: 12px;
        height: 12px;
        &:after {
          content: "";
          display: block;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-45%, -50%);
          width: 80%;
          height: 80%;
          border-radius: 50%;
          background: linear-gradient(0deg, #d697ff 50%, #7b82ff);
        }
      }
      .radio {
        position: absolute;
        right: 12px;
        top: 50%;
        transform: translateY(-50%);
        width: 12px;
        height: 12px;
        border: 1px solid transparent;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        border-radius: 50%;
        background-image: linear-gradient(180deg, #122743 -1.45%, #030d15 100%),
          linear-gradient(0deg, rgba(157, 102, 217, 0.5) 0%, rgba(99, 149, 231, 0.8) 100%);
      }
    }
  }
}
.footer {
  cursor: pointer;
  transform: translateY(-40px);
  border-radius: 6.54px;
  background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
  width: 156px;
  height: 45.778px;
  // padding: 0px 46.952px 0px 46px;
  @include Myflex();
  font: normal normal 700 16px "PingFang SC";
  margin: auto;
  color: white;
}
.checkboxBox {
  width: 350px;
  height: 56px;
  margin-top: 0px;
  font-size: 12px;
  @include Myflex(flex-start); // align-items: center;
  // flex-wrap: wrap;
  word-wrap: break-word;
  // padding-left: 49px;
  word-break: normal;

  .checkboxBox-checkbox {
    margin-right: 10px;
  }

  &.apply-shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  span {
    cursor: pointer;
  }
}
</style>
<style lang="scss">
.el-checkbox__inner {
  background: rgba(#000000, 0) !important; /* 透明 */
  /* background:red 其他颜色 */
}
</style>
