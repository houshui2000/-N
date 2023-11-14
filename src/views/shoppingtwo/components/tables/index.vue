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
              <span>{{ item.nickname ? item.nickname : "---" }}</span>
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
              <div @click="PayFun(item)" v-else class="zhiFU_one_mai">{{ item.status }}买入</div>
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
  </div>
</template>
<script setup name="tablesasdsa">
import MissWakeupPage from "@/components/missingWakeupPage/index.vue"

import SvgIcon from "@/components/SvgIcon/index.vue"
// import { ref } from 'vue'
import MessageBoxVue from "@/components/MessageBox/index.js"
import { shopquickbuy } from "@/network/shoppingCentre/shoppingtwo"

// import detailVue from '../detail/index.vue'
const drops = defineProps({
  records: { type: Array, required: true }
})

// const errDialoVueUpdate = ref(false) //详情弹框
// const errDialoVueXinagqing = ref({}) //详情弹框
const $emit = defineEmits(["PayFun"])
/**
 * 表格操作按钮
 * status : true 买入 || false : 支付中
 */
const PayFun = async (item) => {
  if (item.payStatus) {
    // logger.log(item.payStatus)
    MessageBoxVue({
      title: "该卡牌在支付中，请选择可买入的卡牌叭~"
    })
    return
  }
  //
  const res = await shopquickbuy({
    cardId: item.cardId, // 跳转页面的id 1
    payChanelId: 3 // 支付通道 1 是支付宝
  })
  window.location.href = res.data

  $emit("PayFun")
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
          width: 70%;
          padding-left: 70px;
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
              background-color: salmon;
            }
            &:last-child {
              text-align: left;
            }
          }
        }
        .kapaiming_bina {
          // padding-left: -15px;
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
            padding: 0 3px;
            height: 25px;
            @include Myflex();
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
