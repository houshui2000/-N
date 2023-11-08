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
            <p>{{ creatDataAll.cardId }}</p>
            <div class="bianhao">
              <span><SvgIcon size="20px" icon-class="bianhao" /></span>
              <el-tooltip class="box-item" effect="dark" :content="creatDataAll.cardNo" placement="top-start">
                <span class="danyi">{{ creatDataAll.cardNo }}</span>
              </el-tooltip>
            </div>
            <div class="price">
              <span>价格：</span>
              <el-tooltip class="box-item" effect="dark" :content="`￥${creatDataAll.price}`" placement="top-start">
                <span class="danyi">￥{{ creatDataAll.price }}</span>
              </el-tooltip>
            </div>
          </div>
        </div>
        <div class="section_bototm">
          <div v-for="(item, index) in payArr" @click="payArrAdilo = item" :key="index" class="pay">
            <div class="img">
              <!-- <img class="equalProportions" src="" alt="" /> -->
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 25 25" fill="none">
                <g clip-path="url(#clip0_3552_4950)">
                  <rect width="25" height="25" rx="5" fill="white" />
                  <path
                    d="M25.0012 17.115V4.80625C25.0006 3.53154 24.4938 2.30925 23.5924 1.40801C22.6909 0.506769 21.4685 0.00033118 20.1938 0L4.80625 0C3.53176 0.000662419 2.30965 0.507246 1.40845 1.40845C0.507246 2.30965 0.000662419 3.53176 0 4.80625V20.1938C0.000331365 21.4683 0.506809 22.6906 1.40808 23.5919C2.30936 24.4932 3.53165 24.9997 4.80625 25H20.1938C21.3212 24.9992 22.4126 24.6026 23.2775 23.8793C24.1424 23.156 24.7259 22.152 24.9263 21.0425C23.6513 20.49 18.1263 18.105 15.2475 16.73C13.0575 19.3838 10.7625 20.9762 7.305 20.9762C3.8475 20.9762 1.53875 18.8463 1.81625 16.2388C1.99875 14.5288 3.1725 11.7325 8.26875 12.2112C10.9563 12.4637 12.185 12.965 14.3763 13.6888C14.9425 12.6488 15.4138 11.505 15.7713 10.2887H6.05625V9.32625H10.8638V7.59625H5V6.5375H10.8625V4.04375C10.8625 4.04375 10.915 3.65375 11.3463 3.65375H13.75V6.5375H20V7.5975H13.75V9.325H18.8488C18.409 11.1456 17.7115 12.8941 16.7775 14.5175C18.2588 15.055 25 17.115 25 17.115H25.0012ZM6.9225 19.3263C3.26875 19.3263 2.69125 17.02 2.885 16.0562C3.07625 15.0962 4.135 13.8437 6.16625 13.8437C8.5 13.8437 10.5913 14.4413 13.1013 15.6638C11.3388 17.9587 9.1725 19.3263 6.9225 19.3263Z"
                    fill="#009FE8"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_3552_4950">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <p>{{ item.title }}</p>
            <div :class="{ radio_article: payArrAdilo.payChanelId == item.payChanelId }" class="radio"></div>
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
import { toRefs, ref, watch } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
import errDialoVue from '../errdialo/index.vue'
import { useRoute } from 'vue-router'
import { shopquickbuy, buyminxpricecard } from '@/network/shoppingCentre/shoppingtwo.js'
// import { useStore } from '@/pinia'
const route = useRoute()
// const { loginStore } = useStore()

const props = defineProps({
  dialogVisiblePay: { type: Boolean, required: true }
  // creatDataAll: { type: Object, required: true }
})
const errDialoVueUpdate = ref(false) //支付成功弹框

const { dialogVisiblePay } = toRefs(props)
const $emit = defineEmits(['update:dialogVisiblePay'])
const payArr = ref([
  { title: '支付宝支付', payChanelId: 1 },
  { title: '假的支付测试', payChanelId: 2 }
])
const payArrAdilo = ref({ title: '支付宝支付', payChanelId: 1 })
/**支付 */
const shopquickbuyPay = async () => {
  const res = await shopquickbuy({
    cardVaultId: route.params.vaultId, // 跳转页面的id 1
    payChanelId: payArrAdilo.value.payChanelId // 支付通道 1 是支付宝
  })

  window.location.href = res.data
}
const creatDataAll = ref({})
const init = async () => {
  // route.params.vaultId
  const res = await buyminxpricecard({ vaultId: route.params.vaultId })
  creatDataAll.value = res.data
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
    background: url('@/assets/images/shoppingCentre/pay_load.png') no-repeat scroll left bottom/ 100% 100%;
  }
}
.top {
  position: relative;
  text-align: center;
  font: normal normal 700 16px 'PingFang SC';
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
    content: '';
    display: inline-block;
    width: 50px;
    height: 2px;
    border-radius: 7px;
    background: linear-gradient(90deg, #646dff 35.67%, #dd0246 99.97%);
  }
}
section {
  padding: 30px 49px;
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
        font: normal normal 700 14px 'PingFang SC';
        color: white;
      }
      .bianhao {
        @include Myflex(flex-start);
        margin: 19px 0;
        width: 100%;
        span {
          display: block;
          &:first-child {
            width: 20px;
            height: 20px;
            @include Myflex(flex-end);
          }
          &:last-child {
            font: normal normal 400 14px 'PingFang SC';
            color: white;
            border-radius: 3.256px;
            width: calc(100% - 28px);
            height: 18px;
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
        @include Myflex();
        color: rgba(255, 206, 0, 0.93);
        font: normal normal 400 14px 'PingFang SC';
        span {
          display: block;
          line-height: 24px;
          height: 100%;
          $fristWidth: 45px;
          &:first-child {
            width: $fristWidth;
          }
          &:last-child {
            width: calc(100% - $fristWidth);
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
        font: normal normal 400 12px 'PingFang SC';
        color: white;
      }
      .radio_article {
        width: 12px;
        height: 12px;
        &:after {
          content: '';
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
  font: normal normal 700 16px 'PingFang SC';
  margin: auto;
  color: white;
}
</style>
