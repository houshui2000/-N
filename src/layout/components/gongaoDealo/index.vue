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
        <div @click="$emit('update:errDialoVueUpdate', false)" class="close"></div>

        <div v-html="ScrollZiMuVueFRF" class="xinxi"></div>
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
    right: 45px;
    top: 10px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  .xinxi {
    margin-top: 200px;
    width: 399px;
    height: 420px;
    color: #fff;
    font: normal normal 400 12px "PingFang SC";
    overflow-y: auto;
    padding-right: 5px;
  }
}
</style>
