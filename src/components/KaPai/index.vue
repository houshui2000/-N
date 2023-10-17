<template>
  <div class="kapai">
    <div class="xiaoxingxing"></div>
    <img :src="props.img" alt="" />
    <div class="kapai_bottom">
      <p>{{ props.title }}</p>
      <div class="kia_bort_bot">
        <div class="D_bi_bott">
          <div class="left_bott">
            <div class="D_bi">
              <SvgIcon size="18px" icon-class="DBi" />
            </div>
            <div class="jin">
              <i v-show="props.price !== ''">{{ props.price }}</i>
              {{ props.munch }}
            </div>
          </div>
        </div>
        <div v-show="props.percentage !== ''" class="jian">{{ props.percentage }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import SvgIcon from '@/components/SvgIcon/index.vue'
const props = defineProps({
  price: {
    type: String,
    default: ''
  }, // 降价
  percentage: {
    type: String,
    default: ''
  }, // 百分比
  munch: {
    type: String,
    default: ''
  }, //钱哦
  title: {
    type: String,
    default: 'adasd'
  },
  img: {
    type: String,
    default: ''
  }
})
</script>
<style lang="scss" scoped>
.kapai {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px 14px;
  border: 4px solid #000;
  border-image: linear-gradient(#8d5cc7, #6496e7) 2 2 2 2;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.6);
  // background-color: saddlebrown;
  .xiaoxingxing {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: none;
  }
  &:hover {
    transition: all 1s;
    border-image: linear-gradient(#3543fc, #c12fc7) 2 2 2 2;
    background: linear-gradient(0deg, #050133 0%, #540078 96.64%);
    .xiaoxingxing {
      z-index: 0;
      background: url('@/assets/images/carggo/xingxing.png') no-repeat scroll left bottom/ 100% 100%;
    }
  }
  img {
    border-radius: 6px;
    border: 1px solid #9f62db;
    height: 314px;
  }
  .kapai_bottom {
    margin-top: 16px;
    p {
      color: white;
      &:first-child {
        text-align: left;
        font: normal normal 600 16px 'PingFang SC';
      }
    }
    .kia_bort_bot {
      margin-top: 9px;
      height: 28px;
      @include Myflex(flex-start);
      font: normal normal 600 12px 'Inter';

      .D_bi_bott {
        display: inline-block;
        height: 28px;
        background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
        border-radius: 6px;
        @include Myflex();
      }
      .left_bott {
        padding: 2px 10px;
        @include Myflex();

        .D_bi {
          display: inline-block;
          height: 28px;
          width: 18px;
          margin-right: 15px;
          @include Myflex();
        }
        .jin {
          line-height: 28px;
          height: 100%;
          height: 28px;
          display: inline-block;
          color: white;
          > i {
            opacity: 0.6;
            color: white;
            text-decoration: line-through;

            margin-right: 6px;
          }
        }
      }
      .jian {
        padding: 5px;
        margin-left: 7px;
        height: 28px;
        border-radius: 4px;
        color: white;
        font: normal normal 600 12px 'Inter';
        background: linear-gradient(180deg, #ea3a52 0%, #c31d2c 100%);
      }
    }
  }
}
</style>
