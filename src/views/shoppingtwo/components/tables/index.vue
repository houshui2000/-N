<template>
  <div class="tbable">
    <table>
      <thead>
        <tr>
          <td>资产</td>
          <td>资产编号</td>
          <td>昵称</td>
          <td>价格</td>
          <td>操作</td>
        </tr>
      </thead>

      <tbody v-if="drops.records?.length > 0">
        <tr v-for="(item, index) in drops.records" :key="index">
          <td>
            <div class="img">
              <img :src="item.productUrl" alt="" />
            </div>
          </td>

          <td style="width: 30%">
            <p style="padding-left: 25px" class="kapaiming_bina">
              <SvgIcon size="25px" Height="25px" icon-class="bianhao" />
              <el-tooltip class="box-item" effect="dark" :content="item.cardNo" placement="top-start">
                <span class="bianhao danyi">{{ item.cardNo }}</span>
              </el-tooltip>
            </p>
          </td>
          <td>
            <p class="kapaiming">
              <span>
                <!-- <img :src="item.avatar" alt="" /> -->
                <img src="@/assets/images/all/defaultavatar.png" alt="" />
              </span>
              <el-tooltip class="box-item" effect="dark" :content="item.nickname" placement="top-start">
                <span class="name danyi">
                  {{ item.nickname ? item.nickname : "---" }}
                </span>
              </el-tooltip>
            </p>
          </td>
          <td>
            <p class="kapaiming_bina">
              <span style="color: white">{{ item.price ? "￥" + item.price : "---" }}</span>
            </p>
          </td>
          <td>
            <div class="zhifu">
              <!-- payStatus : 0 买入 || 1 : 支付中 -->

              <div @click="PayFun(item)" v-if="item.payStatus" class="zhiFU_one">{{ item.status }}支付中</div>
              <div
                @click="onePieceBuyin(item)"
                :class="{
                  zhiFU_one_mai_time: !creatData.canBuy
                }"
                id="zhiFU_one_mai"
                v-else
                class="zhiFU_one_mai"
              >
                买入
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <slot></slot>
        </tr>
      </tbody>
    </table>
    <div class="quxing">
      <MissWakeupPage :title="'暂无数据'" v-if="drops.records?.length == 0" titleTwo="" />
    </div>
    <!-- <detailVue v-model:errDialoVueUpdate="errDialoVueUpdate" :errDialoVueXinagqing="errDialoVueXinagqing" /> -->
    <payVue
      v-if="Gethelowestprice"
      :payFun="payFun"
      :creatDataAll="Gethelowestprice"
      v-model:dialogVisiblePay="dialogVisiblePay"
    />
  </div>
</template>
<script setup name="tablesasdsa">
import MissWakeupPage from "@/components/missingWakeupPage/index.vue"
import { inject, ref } from "vue"
import payVue from "../pay/index.vue"
import SvgIcon from "@/components/SvgIcon/index.vue"
import MessageBoxVue from "@/components/MessageBox/index.js"
import { useStore } from "@/pinia"
import { shopquickbuy } from "@/network/shoppingCentre/shoppingtwo.js"
import { shopbuyPay } from "@/network/personalCenter.js"
import { useRoute } from "vue-router"

const creatData = inject("creatData")
const { loginStore } = useStore()
const route = useRoute()

const drops = defineProps({
  records: { type: Array, required: true }
})
const $emit = defineEmits(["PayFun"])
/**
 * 表格操作按钮
 * status : true 买入 || false : 支付中
 */
const PayFun = async (item) => {
  // if (true) {
  //   MessageBoxVue({
  //     title: "别忘了加事件 -- 即将开售"
  //   })
  //   return
  // }
  if (item.payStatus) {
    MessageBoxVue({
      title: "该卡牌在支付中，请选择可买入的卡牌叭~"
    })
    $emit("PayFun")
    return
  }
  //
  // const res = await shopquickbuy({
  //   cardId: item.cardId, // 跳转页面的id 1
  //   payChanelId: 3 // 支付通道 1 是支付宝
  // })

  // if (!res.data) {
  //   MessageBoxVue({
  //     title: "此卡牌已售出"
  //   })
  //   $emit("PayFun")
  //   return
  // }

  // window.location.href = res.data
}

const Gethelowestprice = ref({}) // 支付弹框 获取最低价
const dialogVisiblePay = ref(false) // 支付弹框弹出

/**购买信息 -- 知道商品还能不能购买 */
const initminimumPice = async (item) => {
  const res = await shopquickbuy({
    cardVaultId: Number(route.query.vaultId), // 系列的id
    cardId: item.cardId // 订单的id
  })
  Gethelowestprice.value = res.data
  $emit("PayFun")
}

/**一件买入 */
const onePieceBuyin = async (item) => {
  // Gethelowestprice.value = item

  await initminimumPice(item)

  const Mymap = new Map([
    [
      !loginStore.token,
      () => {
        MessageBoxVue({
          title: "请先登录"
        })
        loginStore.login = true
      }
    ],
    [
      !creatData.value.canBuy,
      () => {
        MessageBoxVue({
          title: creatData.value.publishTime + "即将开售"
        })
      }
    ],
    [
      !Gethelowestprice.value,
      () => {
        MessageBoxVue({
          title: "当前暂无可购买资产"
        })
      }
    ]
  ])
  let Myreturn = false
  for (let [key, value] of Mymap) {
    if (key) {
      $emit("PayFun")

      Myreturn = true
      value()
    }
  }

  if (Myreturn) return
  dialogVisiblePay.value = true
}

/**
 * 支付
 * @param {*} payId
 */
const payFun = async (payId, creatDataAll) => {
  try {
    // const res = await shopquickbuy({
    //   cardId: Gethelowestprice.value.cardId, // 跳转页面的id 1
    //   payChanelId: payId // 支付通道 1 是支付宝
    // })
    console.log(creatDataAll)

    const res = await shopbuyPay({
      orderNo: creatDataAll.cardId, // 订单列表
      payChanelId: payId.payId // 支付的编号
    })
    window.location.href = res.data
  } catch (err) {
    return false
  }
}
</script>
<style lang="scss" scoped>
table {
  margin-top: 20px;
  width: 1470px;
  flex-shrink: 0;
  border-radius: 61px;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  @include bordergradientMY(
    linear-gradient(180deg, rgba(83, 56, 119, 0.5) 0%, rgba(53, 81, 125, 0.3) 100%),
    linear-gradient(149deg, #070d13 45.99%, #070d13 85.48%)
  );
  thead {
    height: 56px;
    font: normal normal 400 14px "PingFang SC";
    text-align: center;
    color: #fefefe;
    tr {
      display: block;
      border-bottom: 1px solid rgba(39, 49, 85, 1);
      background: linear-gradient(180deg, #241328 0%, #000c2c 100%);
      td {
        width: 20%;
        display: inline-block;
        text-align: center;
        height: 56px;
        line-height: 56px;
      }
    }
  }
  tbody {
    width: 1470px;
    display: block;
    tr {
      height: 116px;
      position: relative;
      display: block;
      margin: auto;
      &:last-child {
        height: 55px;
      }
      &:not(:last-child) {
        &::after {
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          content: "";
          display: block;
          width: calc(1470px - 160px);
          height: 1px;
          // border-bottom: 1px solid #414971;
          border-bottom: 1px solid rgba(51, 56, 80, 1);
        }
      }
      td {
        display: inline-block;

        width: 20% !important;
        height: 100%;
        .img {
          width: 100%;
          height: 100%;
          @include Myflex(flex-start);
          padding-left: 110px;
          img {
            width: 69px;
            height: 83.114px;
            border-radius: 3.136px;
            border: 0.784px solid #f59eff;
          }
        }
        .kapaiming {
          font: normal normal 400 14px "PingFang SC";
          color: #fefefe;
          height: 100%;
          width: 100%;
          padding-left: 10px;
          @include Myflex(center);
          span {
            display: block;
            padding-top: 45px;
            padding-left: 5px;
            height: 100%;
            > img {
              width: 20px;
              height: 20px;
              margin-right: 5px;
              border-radius: 50%;
            }

            &:last-child {
              text-align: left;
            }
          }
          .name {
            // width: 300px;
          }
        }
        .kapaiming_bina {
          transform: translateX(-25px);
          width: 100%;
          height: 100%;
          margin-left: 20px;
          @include Myflex();
          color: white;
          font: normal normal 400 14px "PingFang SC";
          .bianhao {
            display: block;
            max-width: 400px;
            padding: 0 5px 0 8px;
            height: 20px;
            transform: translateX(-3px);
            @include Myflex();
            z-index: -1;
            border-radius: 3.256px;
            background: linear-gradient(269deg, #ffbb4d 0.83%, #815821 101.44%);
          }
        }
        .zhifu {
          font: normal normal 400 12px "PingFang SC";
          color: #fefefe;
          @include Myflex(flex-start);
          padding-left: 110px;
          height: 100%;
          > div {
            width: 74px;
            height: 30px;
            @include Myflex();
          }

          .zhiFU_one {
            cursor: pointer;
            border-radius: 2px;
            background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
          }
          #zhiFU_one_mai.zhiFU_one_mai_time {
            cursor: not-allowed !important;
            &:hover {
              @include bordergradientMY(linear-gradient(90deg, rgba(46, 65, 255, 0.8) 0%, rgba(223, 1, 201, 0.8) 100%));
            }
          }
          .zhiFU_one_mai {
            cursor: pointer;
            position: relative;
            border-radius: 2px;
            transition: all 1s;
            @include bordergradientMY(linear-gradient(90deg, rgba(46, 65, 255, 0.8) 0%, rgba(223, 1, 201, 0.8) 100%));
            &:hover {
              border: 0;
              background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
            }
          }
        }
      }
    }
  }
}
</style>
