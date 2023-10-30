<template>
  <div class="tbable">
    <table>
      <thead>
        <tr>
          <td>卡牌</td>
          <td>卡牌名称</td>
          <td>卡牌编号</td>
          <td>价格</td>
          <td>操作</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in drops.records" :key="index">
          <td>
            <div class="img">
              <img :src="item.s" alt="" />
            </div>
          </td>
          <td>
            <p class="kapaiming">{{ item.productName }}</p>
          </td>
          <td>
            <p class="kapaiming_bina">
              <SvgIcon size="15px" icon-class="bianhao" />
              <span>{{ item.cardNo }}</span>
            </p>
          </td>
          <td>
            <p style="padding-left: 70px" class="kapaiming_bina">
              <span>{{ item.price ? item.price : '---' }}</span>
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
  </div>
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
const drops = defineProps({
  records: { type: Array, required: true }
})
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

    tr {
      height: 116px;
      width: calc(1470px - 160px);
      display: block;
      margin: auto;
      border-bottom: 1px solid #414971;
      td {
        display: inline-block;

        width: 20% !important;
        height: 100%;
        .img {
          width: 100%;
          height: 100%;
          @include Myflex(flex-start);
          padding-left: 35px;
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
          @include Myflex(center);
        }
        .kapaiming_bina {
          padding-left: 65px;
          width: 70%;
          height: 100%;
          margin-left: 20px;
          @include Myflex(flex-start);
          color: #00d1ff;
          font: normal normal 400 14px 'PingFang SC';
          span {
            margin-left: 10px;
          }
        }
        .zhifu {
          font: normal normal 400 12px 'PingFang SC';
          color: #fefefe;
          @include Myflex();
          padding-left: 100px;
          height: 100%;
          > div {
            width: 74px;
            height: 30px;
            @include Myflex();
          }

          .zhiFU_one {
            border-radius: 2px;
            background: var(--6, linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%));
          }
          .zhiFU_one_mai {
            border-radius: 2px;
            // border: 1px solid var(--6, #2d42ff);
            border-radius: 6px;
            // border: 1px solid #9f62db;

            border: 1.213px solid #8720e3;
            // background: ;
            box-shadow: linear-gradient(180deg, rgba(46, 65, 255, 0.59) 0%, rgba(223, 1, 201, 0.59) 100%);
          }
        }
      }
    }
  }
}
</style>
