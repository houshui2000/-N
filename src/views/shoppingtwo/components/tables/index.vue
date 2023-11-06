<template>
  <div class="tbable">
    <table>
      <thead>
        <tr>
          <td>资产</td>
          <td>用户昵称</td>
          <td>资产编号</td>
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
          <td>
            <p class="kapaiming">
              <span>
                <img :src="item.avatar" alt="" />
              </span>
              <span>{{ item.nickname ? item.nickname : '---' }}</span>
            </p>
          </td>

          <td>
            <p class="kapaiming_bina">
              <SvgIcon size="20px" icon-class="bianhao" />
              <span class="bianhao">{{ item.cardNo }}</span>
            </p>
          </td>
          <td>
            <p style="" class="kapaiming_bina">
              <span style="color: white">{{ item.price ? '￥' + item.price : '---' }}</span>
            </p>
          </td>
          <td>
            <div class="zhifu">
              <!-- status : true 买入 || false : 支付中 -->
              <div @click="PayFun(item)" v-if="!item.status" class="zhiFU_one">支付中</div>
              <div @click="PayFun(item)" v-else class="zhiFU_one_mai">买入</div>
            </div>
          </td>
        </tr>
        <tr>
          <slot></slot>
        </tr>
      </tbody>
    </table>
    <!-- <detailVue v-model:errDialoVueUpdate="errDialoVueUpdate" :errDialoVueXinagqing="errDialoVueXinagqing" /> -->
  </div>
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
// import { ref } from 'vue'
import MessageBoxVue from '@/components/MessageBox/index.js'

// import detailVue from '../detail/index.vue'
const drops = defineProps({
  records: { type: Array, required: true }
})
// console.log(drops.records, 'drops.records')

// const errDialoVueUpdate = ref(false) //详情弹框
// const errDialoVueXinagqing = ref({}) //详情弹框
const $emit = defineEmits(['PayFun'])
/**
 * 表格操作按钮
 * status : true 买入 || false : 支付中
 */
const PayFun = (item) => {
  if (!item.status) {
    MessageBoxVue({
      title: '该卡牌在支付中，请选择可买入的卡牌叭~'
    })
    return
  }
  //
  $emit('PayFun')
}
</script>
<style lang="scss" scoped>
table {
  margin-top: 20px;
  width: 1470px;
  flex-shrink: 0;
  border-radius: 61px;
  // border: 1px solid var(--Linear, #9f62db);
  background: #070d13;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;
  @include bordergradientMY();

  thead {
    height: 56px;
    font: normal normal 400 14px 'PingFang SC';
    text-align: center;
    color: #fefefe;
    tr {
      display: block;
      border-bottom: 1px solid #414971;
      background: linear-gradient(180deg, #241328 0%, #000c2c 100%);
      td {
        width: 20% !important;
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
          content: '';
          display: block;
          width: calc(1470px - 160px);
          height: 1px;
          border-bottom: 1px solid #414971;
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
          padding-left: 125px;
          img {
            width: 69px;
            height: 83.114px;
            border-radius: 3.136px;
            border: 0.784px solid #f59eff;
          }
        }
        .kapaiming {
          font: normal normal 400 14px 'PingFang SC';
          color: #fefefe;
          height: 100%;
          width: 70%;
          padding-left: 70px;
          @include Myflex(center);
          span {
            display: block;
            @include Myflex(center);
            height: 100%;
            > img {
              width: 20px;
              height: 20px;
              margin-right: 5px;
            }
            &:last-child {
              text-align: left;
            }
          }
        }
        .kapaiming_bina {
          padding-left: 35px;
          width: 70%;
          height: 100%;
          margin-left: 20px;
          @include Myflex();
          color: white;
          font: normal normal 400 14px 'PingFang SC';
          .bianhao {
            background-color: saddlebrown;
            max-width: 122px;
            padding: 0 3px;
            height: 18px;

            border-radius: 3.256px;
            background: linear-gradient(269deg, #ffbb4d 0.83%, #815821 101.44%);
          }
          // span {
          //   display: block;
          //   // margin-left: 10px;
          //   background-color: saddlebrown;
          // }
        }
        .zhifu {
          font: normal normal 400 12px 'PingFang SC';
          color: #fefefe;
          @include Myflex(flex-start);
          padding-left: 100px;
          height: 100%;
          > div {
            width: 74px;
            height: 30px;
            @include Myflex();
          }

          .zhiFU_one {
            cursor: pointer;
            border-radius: 6px;
            background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
          }

          .zhiFU_one_mai {
            cursor: pointer;

            position: relative;
            border-radius: 5px;
            @include bordergradientMY(
              linear-gradient(180deg, rgba(157, 102, 217, 0.5) 0%, rgba(102, 152, 227, 0.5) 100%)
            );
          }
        }
      }
    }
  }
}
</style>
