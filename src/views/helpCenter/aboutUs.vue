<template>
  <div class="lianxi">
    <!-- 关于我们 -->
    <div class="lianx_left">
      <div class="left_one">关于我们</div>
    </div>
    <div class="linaxi_right" v-html="AboutUs"></div>
  </div>
</template>
<!-- <<<<<<< HEAD
<script setup>
import { shopcarddetail } from "@/network/api"
const init = async () => {
  const res = await shopcarddetail()
  console.log(res)
}
// init()
======= -->
<script setup lang="ts">
import { ref } from 'vue';
import { aboutUs } from '../../network/agreement';
const AboutUs = ref('')
const goAboutUs = () => {
  aboutUs().then(res=>{
    AboutUs.value = res.data
  })
}
goAboutUs()
// >>>>>>> 82d6bc4598a48a22b969b014e6bfe733ef37c632
</script>
<style lang="scss" scoped>
.lianxi {
  width: 100%;
  height: 100%;
  @include Myflex(space-between, flex-start);
  .lianx_left {
    width: 230px;
    height: 100%;
    .left_one {
      width: 100%;
      height: 50px;
      background: #fff;
      border-radius: 2px;

      @include bordergradientMY(
        linear-gradient(180deg, rgba(134, 87, 184, 0.9) 0%, rgba(99, 149, 231, 0.9) 100%),
        linear-gradient(180deg, #241328 0%, #000c2c 100%)
      );
      font: normal normal 400 14px "PingFang SC";
      color: white;
      @include Myflex();
    }
  }
  .linaxi_right {
    width: 1220px;
    height: 524px;
    padding: 25px;
    overflow: hidden;
    overflow-y: auto;
    color: white;
    border-radius: 8px;
    @include bordergradientMY(
      linear-gradient(180deg, rgba(44, 34, 68, 1) 0%, rgba(33, 44, 67, 0.9) 100%),
      linear-gradient(180deg, #241328 0%, #000c2c 100%)
    );
  }
}
</style>
