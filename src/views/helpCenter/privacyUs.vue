<template>
  <div class="lianxi">
    <!-- 隐私协议 -->
    <div class="lianx_left">
      <div class="left_one">隐私协议</div>
    </div>
    <div class="linaxi_right">
      <div class="ql-editor" v-html="privatePolicyText"></div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue"
import { privatePolicy } from "../../network/agreement"
const privatePolicyText = ref("")
const goAboutUs = () => {
  privatePolicy().then((res) => {
    console.log(res)
    privatePolicyText.value = res.data
  })
}
goAboutUs()
</script>
<style lang="scss" scoped>
.lianxi {
  width: 100%;
  height: 100%;
  color: white;
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
    border-radius: 8px;
    overflow: hidden;
    overflow-y: auto;
    @include bordergradientMY(
      linear-gradient(180deg, rgba(44, 34, 68, 1) 0%, rgba(33, 44, 67, 0.9) 100%),
      linear-gradient(180deg, #241328 0%, #000c2c 100%)
    );
  }
}
</style>
