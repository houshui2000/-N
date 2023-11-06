<template>
  <div class="menuOnTheRight">
    <div
      v-for="(item, index) in Xin_xiArr"
      @mousemove="item.hover = false"
      @mouseleave="item.hover = true"
      :key="index"
      class="div"
      @click="item.MyFuncation"
    >
      <div class="div_img">
        <img v-show="item.hover" :src="item.icon" alt="" />
        <img v-show="!item.hover" :src="item.iconA" alt="" />
      </div>
      <p>{{ item.title }}</p>
    </div>
    <!--  -->
    <!-- <div class="div">
      <div class="div_img"></div>
      <p>官群</p>
    </div> -->
  </div>
</template>
<script setup name="menuOnTheRight">
import { ref } from 'vue'
const url = (img) => new URL(`../../assets/images/menuOnTheRight/${img}.png`, import.meta.url).href
const Xin_xiArr = ref([
  { title: '资产库', icon: url('wuti'), iconA: url('wuti_a'), hover: true },
  { title: '官群', icon: url('qun'), iconA: url('qun_a'), hover: true },
  { title: '客服', icon: url('ke'), iconA: url('ke_a'), hover: true },
  {
    title: '返回顶部',
    icon: url('fan'),
    iconA: url('fan_a'),
    hover: true,
    MyFuncation() {
      const miautumnFestival = document.querySelector(`body`)
      miautumnFestival.scrollIntoView({
        behavior: 'smooth', // 平滑过渡
        block: 'start' // 上边框与视窗顶部平齐。默认值
      })
    }
  }
])
</script>
<style lang="scss" scoped>
.menuOnTheRight {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  // width: 100px;
  padding-right: 11px;
  height: 300px;
  .div {
    margin-top: 12px;
    .div_img {
      width: 70px;
      height: 70px;
      border-radius: 8px;
      @include bordergradientMY();
      // background: url('@/assets/images/menuOnTheRight/wuti.png') no-repeat scroll left bottom/ 100% 100%;
      @include Myflex();
      > img {
        width: 42px;
        height: 42px;
      }
    }
    p {
      font: normal normal 400 12px;
      color: white;
      margin-top: 5px;
      text-align: center;
    }
    &:hover {
      .div_img {
        transition: all 0.5s;

        border: 0;
        background-image: none !important;
        background: linear-gradient(180deg, rgba(183, 0, 154, 1) 0%, rgba(22, 21, 242, 1) 100%) !important;
      }
    }
  }
}
//
// .wuti {
//   background: url('@/assets/images/menuOnTheRight/wuti.png') no-repeat scroll left bottom/ 100% 100%;
// }
</style>
