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
              <span><SvgIcon size="25px" Height="25px" icon-class="bianhao" /></span>
              <el-tooltip class="box-item" effect="dark" :content="creatDataAll.cardNo" placement="top-start">
                <span class="danyi">{{ creatDataAll.cardNo }}</span>
              </el-tooltip>
            </div>
            <div class="price">
              <span>价格：</span>
              <!-- <el-tooltip class="box-item" effect="dark" :content="`￥${creatDataAll.price}`" placement="top-start"> -->
              <span class="">￥{{ creatDataAll.price }}</span>
              <!-- </el-tooltip> -->
            </div>
          </div>
        </div>
        <div class="section_bototm">
          <div v-for="(item, index) in listOfBanks" @click="payArrAdilo = item" :key="index" class="pay">
            <!-- <div class="img">
              <svg
                t="1699581324165"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4185"
                width="20"
                height="20"
              >
                <path
                  d="M200.704 182.989h256c34.816 0 57.344 28.672 49.152 65.536L387.072 758.477c-8.192 34.816-45.056 65.536-79.872 65.536h-256c-34.816 0-57.344-28.672-49.152-65.536l118.784-509.952c8.192-36.864 43.008-65.536 79.872-65.536"
                  fill="#E03333"
                  p-id="4186"
                ></path>
                <path
                  d="M434.586 182.989H727.45c34.816 0 20.48 28.672 10.24 65.536L620.954 758.477c-8.192 34.816-6.144 65.536-40.96 65.536H285.082c-34.816 0-57.344-28.672-49.152-65.536l118.784-509.952c8.192-36.864 45.056-65.536 79.872-65.536"
                  fill="#004889"
                  p-id="4187"
                ></path>
                <path
                  d="M717.373 182.989h256c34.816 0 57.344 28.672 49.152 65.536L903.741 758.477c-8.192 34.816-43.008 65.536-79.872 65.536h-256c-34.816 0-57.344-28.672-49.152-65.536l118.784-509.952c8.192-36.864 43.008-65.536 79.872-65.536"
                  fill="#008089"
                  p-id="4188"
                ></path>
                <path
                  d="M757.76 561.152l-30.72 102.4h8.192l-6.144 20.48h-8.192l-2.048 6.144h-28.672l2.048-6.144h-59.392l6.144-20.48h6.144l30.72-104.448 6.144-20.48h30.72l-4.096 10.24s8.192-6.144 16.384-8.192 51.2-2.048 51.2-2.048l-6.144 20.48H757.76z m-53.248 0l-8.192 26.624s8.192-4.096 14.336-6.144c4.096-2.048 12.288-2.048 12.288-2.048l6.144-18.432h-24.576z m-10.24 38.912l-8.192 26.624s8.192-4.096 14.336-6.144c4.096-2.048 12.288-2.048 12.288-2.048l6.144-18.432h-24.576z m-20.48 63.488h24.576l6.144-22.528h-24.576l-6.144 22.528z"
                  fill="#FFFFFF"
                  p-id="4189"
                ></path>
                <path
                  d="M772.096 538.624h32.768v12.288c0 2.048 2.048 2.048 6.144 2.048h6.144l-6.144 20.48h-16.384c-14.336 2.048-20.48-6.144-20.48-12.288l-2.048-22.528z m4.096 94.208h-30.72l6.144-18.432h34.816l4.096-16.384h-34.816l6.144-20.48h96.256l-6.144 20.48H819.2l-4.096 16.384h32.768l-6.144 18.432h-34.816l-6.144 8.192h14.336l4.096 22.528c0 2.048 0 4.096 2.048 4.096 0 0 4.096 2.048 8.192 2.048h4.096l-6.144 22.528H808.96c-4.096 0-6.144-2.048-8.192-4.096-2.048 0-4.096-4.096-6.144-8.192l-4.096-22.528-16.384 22.528c-4.096 6.144-12.288 12.288-22.528 12.288h-22.528l6.144-18.432h8.192c2.048 0 4.096 0 6.144-2.048 2.048 0 4.096-2.048 4.096-4.096l22.528-34.816zM440.32 585.728h81.92l-6.144 20.48h-32.768l-4.096 16.384H512l-6.144 20.48H471.04l-8.192 26.624c0 2.048 8.192 4.096 10.24 4.096l16.384-2.048-6.144 22.528h-36.864c-2.048 0-6.144 0-8.192-2.048-4.096 0-4.096-2.048-6.144-4.096s-4.096-4.096-2.048-8.192l10.24-34.816h-18.432l6.144-20.48h18.432l4.096-16.384h-18.432l8.192-22.528z m53.248-34.816h32.768l-6.144 20.48h-45.056l-4.096 4.096c-2.048 2.048-2.048 2.048-6.144 2.048-2.048 2.048-8.192 4.096-14.336 4.096h-14.336l6.144-20.48h4.096c4.096 0 6.144 0 8.192-2.048 2.048 0 2.048-2.048 4.096-6.144l8.192-14.336h32.768l-6.144 12.288z m49.152-12.288h28.672l-4.096 14.336s8.192-6.144 14.336-10.24c6.144-2.048 20.48-4.096 20.48-4.096h45.056l-16.384 53.248c-2.048 8.192-6.144 14.336-8.192 16.384l-8.192 8.192c-4.096 2.048-8.192 4.096-10.24 4.096h-59.392l-12.288 40.96c-2.048 4.096-2.048 6.144 0 6.144 0 0 2.048 2.048 4.096 2.048l20.48-2.048-6.144 22.528H512c-4.096 0-6.144 0-10.24-2.048-2.048-2.048-6.144-4.096-4.096-6.144 0-2.048 2.048-6.144 2.048-10.24l43.008-133.12z m59.392 53.248h-47.104l-2.048 10.24h47.104l2.048-10.24z m-43.008-8.192s8.192-8.192 24.576-10.24h26.624l4.096-10.24h-47.104l-8.192 20.48z"
                  fill="#FFFFFF"
                  p-id="4190"
                ></path>
                <path
                  d="M624.64 624.64l-2.048 12.288c-2.048 4.096-2.048 6.144-4.096 10.24-2.048 2.048-6.144 6.144-14.336 6.144h-16.384v14.336c0 4.096 0 4.096 2.048 4.096l2.048 2.048h18.432l-6.144 20.48h-16.384c-12.288 0-20.48 0-24.576-2.048-2.048-2.048-4.096-4.096-4.096-8.192l2.048-55.296h26.624v12.288h10.24l2.048-2.048 2.048-8.192h22.528zM231.424 346.112c0 4.096-18.432 86.016-18.432 86.016-4.096 16.384-6.144 28.672-16.384 36.864-6.144 4.096-12.288 6.144-18.432 6.144-12.288 0-18.432-6.144-20.48-16.384v-4.096l4.096-22.528s18.432-73.728 22.528-83.968v-2.048h-43.008l-2.048 6.144-18.432 83.968-2.048 6.144-4.096 22.528c0 6.144 2.048 12.288 4.096 16.384 8.192 14.336 32.768 16.384 47.104 16.384 18.432 0 34.816-4.096 47.104-10.24 20.48-12.288 24.576-30.72 28.672-47.104l2.048-8.192s18.432-77.824 22.528-88.064v-2.048c-24.576 6.144-32.768 4.096-34.816 4.096m104.448 153.6h-32.768v-2.048c2.048-6.144 2.048-12.288 4.096-16.384l2.048-8.192c2.048-12.288 6.144-26.624 6.144-30.72 0-2.048 2.048-8.192-6.144-8.192-4.096 0-6.144 2.048-10.24 2.048-2.048 6.144-6.144 24.576-8.192 32.768-4.096 18.432-4.096 18.432-6.144 28.672l-2.048 2.048h-32.768v-2.048c2.048-10.24 4.096-20.48 8.192-30.72 6.144-28.672 8.192-38.912 10.24-53.248h2.048c14.336-2.048 18.432-2.048 34.816-6.144l2.048 2.048-2.048 8.192c2.048-2.048 6.144-4.096 8.192-4.096 8.192-4.096 16.384-4.096 20.48-4.096 6.144 0 14.336 2.048 18.432 10.24 2.048 8.192 2.048 16.384-2.048 34.816l-2.048 8.192c-6.144 18.432-8.192 22.528-12.288 36.864z m53.248 0h-34.816c2.048-8.192 2.048-10.24 4.096-12.288 0-2.048 2.048-6.144 4.096-12.288 2.048-10.24 4.096-16.384 4.096-22.528 0-6.144 2.048-10.24 2.048-16.384 8.192-2.048 12.288-2.048 18.432-2.048 4.096 0 10.24-2.048 18.432-4.096-2.048 6.144-2.048 12.288-4.096 18.432-2.048 6.144-2.048 12.288-4.096 18.432-2.048 12.288-4.096 18.432-4.096 20.48-2.048 2.048-2.048 4.096-4.096 12.288z m114.688-43.008c4.096-20.48 2.048-28.672-4.096-34.816-6.144-10.24-16.384-12.288-28.672-12.288-8.192 0-24.576 0-38.912 14.336-10.24 8.192-14.336 22.528-16.384 32.768-2.048 12.288-6.144 34.816 14.336 43.008 6.144 2.048 14.336 4.096 20.48 4.096 14.336 0 30.72-4.096 40.96-16.384 8.192-10.24 12.288-26.624 12.288-30.72m-32.768-2.048c0 4.096-4.096 16.384-8.192 20.48-2.048 4.096-6.144 6.144-10.24 6.144-2.048 0-8.192 0-8.192-10.24 0-4.096 0-10.24 2.048-14.336 4.096-14.336 8.192-26.624 18.432-26.624 8.192 0 10.24 10.24 6.144 24.576m317.44 22.528c-2.048 4.096-8.192 6.144-12.288 6.144 0 0-8.192 0-8.192-10.24 0-4.096 0-10.24 2.048-14.336 4.096-14.336 8.192-26.624 18.432-26.624 6.144 0 10.24 6.144 8.192 16.384 0 2.048-2.048 6.144-2.048 8.192-2.048 4.096-2.048 8.192-4.096 12.288 0 4.096-2.048 6.144-2.048 8.192z m49.152-65.536c-16.384 2.048-20.48 4.096-34.816 6.144h-2.048v4.096c-2.048-4.096-6.144-8.192-10.24-10.24-6.144-2.048-22.528 0-36.864 14.336-10.24 8.192-14.336 20.48-16.384 32.768s-6.144 32.768 14.336 40.96c6.144 2.048 12.288 4.096 18.432 4.096 6.144 0 12.288-4.096 16.384-8.192 0 2.048 0 4.096-2.048 6.144v2.048H819.2l2.048-2.048c2.048-14.336 4.096-26.624 10.24-51.2 2.048-14.336 4.096-26.624 6.144-38.912z m-245.76 88.064h-32.768v-2.048c2.048-6.144 2.048-12.288 4.096-16.384l2.048-8.192c2.048-12.288 6.144-26.624 6.144-30.72 0-2.048 2.048-8.192-6.144-8.192-4.096 0-6.144 2.048-10.24 2.048-2.048 6.144-6.144 24.576-8.192 32.768-4.096 18.432-4.096 18.432-6.144 28.672l-2.048 2.048h-32.768v-2.048c2.048-10.24 4.096-20.48 8.192-30.72 6.144-28.672 8.192-38.912 10.24-53.248h2.048c14.336-2.048 18.432-2.048 34.816-6.144l2.048 2.048-2.048 8.192c2.048-2.048 6.144-4.096 8.192-4.096 8.192-4.096 16.384-4.096 20.48-4.096 6.144 0 14.336 2.048 18.432 10.24 2.048 8.192 0 16.384-2.048 34.816l-2.048 8.192c-8.192 18.432-8.192 22.528-12.288 36.864zM716.8 393.216c-2.048 10.24-8.192 18.432-18.432 22.528-6.144 4.096-16.384 4.096-24.576 4.096h-6.144v-2.048l10.24-45.056v-4.096h4.096l22.528 2.048c12.288 4.096 16.384 12.288 12.288 22.528m-12.288-47.104h-53.248c0 2.048-2.048 6.144-2.048 6.144l-10.24 47.104S614.4 497.664 614.4 501.76h38.912c0-4.096 6.144-32.768 6.144-32.768l4.096-20.48 2.048-2.048h2.048c20.48 0 45.056 0 63.488-14.336 12.288-10.24 20.48-22.528 24.576-38.912 0-4.096 2.048-8.192 2.048-14.336s-2.048-12.288-4.096-18.432c-10.24-14.336-28.672-14.336-49.152-14.336m-301.056 75.776c8.192-6.144 10.24-14.336 2.048-18.432-8.192-4.096-20.48-2.048-28.672 2.048-8.192 6.144-10.24 14.336-2.048 18.432 6.144 4.096 20.48 4.096 28.672-2.048m542.72-12.288c-16.384 2.048-20.48 2.048-34.816 4.096l-2.048 2.048c-10.24 24.576-10.24 20.48-18.432 38.912v-2.048l-2.048-43.008h-2.048c-16.384 4.096-16.384 4.096-32.768 6.144l-2.048 2.048v2.048c2.048 10.24 2.048 8.192 4.096 22.528 0 8.192 2.048 14.336 2.048 22.528 2.048 12.288 2.048 18.432 4.096 36.864-10.24 16.384-12.288 24.576-22.528 38.912l-6.144 10.24c0 2.048-2.048 2.048-2.048 2.048h-8.192l-6.144 20.48h20.48c12.288 0 18.432-6.144 22.528-12.288l12.288-20.48 2.048-2.048c8.192-18.432 71.68-129.024 71.68-129.024"
                  fill="#FFFFFF"
                  p-id="4191"
                ></path>
              </svg>
            </div> -->
            <p>{{ item.name }}</p>
            <div :class="{ radio_article: payArrAdilo.payId == item.payId }" class="radio"></div>
          </div>
        </div>
      </section>
      <template #footer>
        <div @click="shopquickbuyPay" class="footer">选择支付方式</div>
        <!--  @click="errDialoVueUpdate = true" -->
      </template>
    </el-dialog>
  </div>
  <errDialoVue v-model:errDialoVueUpdate="errDialoVueUpdate" />
</template>
<script setup name="payLint">
import { toRefs, ref, watch } from "vue"
import SvgIcon from "@/components/SvgIcon/index.vue"
import errDialoVue from "../errdialo/index.vue"
import { useRoute } from "vue-router"
import { shopquickbuy, buyminxpricecard } from "@/network/shoppingCentre/shoppingtwo.js"
import { shoppaychannel } from "@/network/pay.js"
// import { useStore } from '@/pinia'
const route = useRoute()
// const { loginStore } = useStore()

const props = defineProps({
  dialogVisiblePay: { type: Boolean, required: true }
  // creatDataAll: { type: Object, required: true }
})
const errDialoVueUpdate = ref(false) //支付成功弹框

const { dialogVisiblePay } = toRefs(props)
const $emit = defineEmits(["update:dialogVisiblePay"])
// const payArr = ref([
//   { title: '支付宝支付', payChanelId: 1 },
//   { title: '假的支付测试', payChanelId: 2 }
// ])
const payArrAdilo = ref()
/**支付 */
const shopquickbuyPay = async () => {
  console.log(creatDataAll.value.cardId)

  const res = await shopquickbuy({
    cardId: creatDataAll.value.cardId, // 跳转页面的id 1
    payChanelId: payArrAdilo.value.payId // 支付通道 1 是支付宝
  })

  window.location.href = res.data
}
const listOfBanks = ref([]) // 支付列表
const creatDataAll = ref({})
const init = async () => {
  const res = await buyminxpricecard({ vaultId: route.params.vaultId })
  creatDataAll.value = res.data
  const shoppaychannelRes = await shoppaychannel()
  listOfBanks.value = shoppaychannelRes.data
  payArrAdilo.value = shoppaychannelRes.data[0]
  console.log(shoppaychannelRes, "shoppaychannelRes")
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
    right: 0;
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
            width: 25px;
            height: 25px;
            @include Myflex(flex-end);
          }
          &:last-child {
            font: normal normal 400 14px "PingFang SC";
            color: white;
            @include Myflex(flex-start);
            border-radius: 3.256px;
            width: calc(100% - 28px);
            height: 25px;
            padding-left: 5px;
            background: linear-gradient(269deg, #ffbb4d 0.83%, #815821 101.44%);
          }
        }
      }
      .price {
        padding: 0 9px;
        height: 24px;
        min-width: 100px;
        border-radius: 4px;
        background: rgba(197, 141, 57, 0.5);
        color: rgba(255, 206, 0, 0.93);
        // @include Myflex(flex-start);
        display: inline-block;
        font: normal normal 400 14px "PingFang SC";
        span {
          // display: block;
          display: inline-block;
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
    margin-top: 30px;
    height: 120px;
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
  transform: translateY(-29px);
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
</style>
