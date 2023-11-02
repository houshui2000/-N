<template>
  <div class="tbable">
    <table>
      <thead>
        <tr>
          <td>卡牌</td>
          <td>用户昵称</td>
          <td>卡牌编号</td>
          <td>价格</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody v-if="drops.records?.length > 0">
        <tr v-for="(item, index) in drops.records" :key="index">
          <td>
            <div class="img">
              <img
                @click="(errDialoVueUpdate = !errDialoVueUpdate), (errDialoVueXinagqing = item)"
                :src="item.productUrl"
                alt=""
              />
            </div>
          </td>
          <td>
            <p class="kapaiming">
              <span>
                <img src="@/assets/images/carggo/ceshi.png" alt="" />
              </span>
              <span>{{ item.productName }}</span>
              <!-- {{ item.productName }} -->
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
              <!-- <div class="zhiFU_one">支付中</div> -->
              <div class="zhiFU_one_mai">买入</div>
            </div>
          </td>
        </tr>
        <tr>
          <slot></slot>
        </tr>
      </tbody>
    </table>
    <detailVue v-model:errDialoVueUpdate="errDialoVueUpdate" :errDialoVueXinagqing="errDialoVueXinagqing" />
  </div>
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
import { ref } from 'vue'
import detailVue from '../detail/index.vue'
const drops = defineProps({
  records: { type: Array, required: true }
})

const errDialoVueUpdate = ref(false) //详情弹框
const errDialoVueXinagqing = ref({}) //详情弹框
</script>
<style lang="scss" scoped>
table {
  margin-top: 20px;
  width: 1470px;
  flex-shrink: 0;
  border-radius: 61px;
  border: 1px solid var(--Linear, #9f62db);
  background: #070d13;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 10px;

  thead {
    height: 56px;
    font: normal normal 400 14px 'PingFang SC';
    text-align: center;
    color: #fefefe;
    border-bottom: 1px solid #414971;
    tr {
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
    // width: 20px;
    // display: inline-block;
    width: 1470px;
    display: block;
    // padd
    tr {
      height: 116px;
      // width: calc(1470px - 160px);
      position: relative;
      display: block;
      margin: auto;
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
            border-radius: 6px;
            background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
          }

          .zhiFU_one_mai {
            position: relative;
            &::after {
              position: absolute;
              left: 0;
              top: 0;
              content: '';
              background: linear-gradient(90deg, rgba(47, 65, 254, 1) 0%, rgba(224, 1, 201, 1) 100%);
              width: 100%;
              height: 100%;
              z-index: 0;
              border-radius: 8px;
              -webkit-clip-path: polygon(
                1% 0%,
                1% 100%,
                6% 100%,
                6% 8%,
                93% 8%,
                93% 94%,
                0% 93%,
                0% 100%,
                97% 100%,
                97% 2%
              );
              clip-path: polygon(1% 0%, 1% 100%, 6% 100%, 6% 8%, 93% 8%, 93% 94%, 0% 93%, 0% 100%, 97% 100%, 97% 2%);
            }
          }
        }
      }
    }
  }
}
</style>
