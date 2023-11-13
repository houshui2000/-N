<template>
  <div class="eror_all">
    <!-- 公告弹框 -->
    <el-dialog
      :modelValue="errDialoVueUpdate"
      @update:errDialoVueUpdate="$emit('update:errDialoVueUpdate', $event)"
      title="Tips"
      :lock-scroll="false"
      :close-on-click-modal="false"
      :showClose="false"
      @close="$emit('update:errDialoVueUpdate', false)"
    >
      <template #header>
        <div class="top"></div>
      </template>
      <section>
        <div @click="$emit('update:errDialoVueUpdate', false)" class="close">关闭</div>

        <div v-html="ScrollZiMuVueFRF" class="xinxi ql-editor"></div>
      </section>
    </el-dialog>
  </div>
</template>
<script setup>
import { toRefs } from "vue"
// import SvgIcon from '@/components/SvgIcon/index.vue'

const props = defineProps({
  errDialoVueUpdate: { type: Boolean, required: true },
  ScrollZiMuVueFRF: { type: String, required: true }
})
const { errDialoVueUpdate, ScrollZiMuVueFRF } = toRefs(props)

const $emit = defineEmits(["update:errDialoVueUpdate"])
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.eror_all {
  :deep(.el-dialog) {
    border-radius: 8px;
    width: 539px;
    height: 725px;
    // border: 1px solid transparent;
    // background-clip: padding-box, border-box;
    // background-origin: padding-box, border-box;
    // background-image: linear-gradient(180deg, #122743 -1.45%, #030d15 100%),
    //   linear-gradient(0deg, rgb(174, 111, 255) 0%, rgb(46, 179, 255) 100%);
    background: url("@/assets/images/all/gonggao.png") no-repeat scroll left top/ 100% 100%;

    header {
      display: none;
    }
  }
}
section {
  width: 100%;
  height: 100%;
  flex-direction: column;
  @include Myflex(flex-start);
  padding: 0 51px;

  .close {
    position: absolute;
    left: 47%;
    bottom: -5px;
    transform: translateX(-50%);
    width: 138px;
    padding: 10.199px;
    // border: 1.02px solid #fafafa;
    border-radius: 11.219px;
    font: normal normal 700 16px "PingFang SC";
    color: white;
    @include Myflex();
    transition: all 0.3s ease 0s;
    height: 50px;
    // background-color: #1f2124;
    @include bordergradientMY(
      linear-gradient(180deg, rgba(133, 133, 133, 1) 0%, rgba(55, 55, 55, 0.4) 100%),
      linear-gradient(180deg, rgba(54, 54, 54, 1) 0%, rgba(54, 54, 54, 1) 100%)
    );
    &:hover {
      @include bordergradientMY(
        linear-gradient(180deg, rgba(128, 131, 154, 1) 0%, rgba(57, 57, 57, 0.8) 100%),
        linear-gradient(180deg, rgba(57, 64, 125, 1) 0%, rgba(4, 5, 6, 1) 100%)
      );
    }
    cursor: pointer;
  }
  .xinxi {
    margin-top: 200px;
    width: 399px;
    height: 420px;
    color: #fff;
    font: normal normal 400 12px "PingFang SC";
    overflow-y: auto;
    // padding-right: 5px;
  }
}
</style>
