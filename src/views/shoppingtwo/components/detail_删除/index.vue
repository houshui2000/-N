<template>
  <div class="eror_all">
    <!-- 表格详情 -->
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
        <div @click="$emit('update:errDialoVueUpdate', false)" class="close">
          <SvgIcon size="20px" icon-class="close" />
        </div>
        <div class="title">{{ props.title }}</div>
        <div v-if="props.title !== '查证'" class="section_left">
          <p>查证信息</p>
          <div class="ziliao">
            <div v-for="(item, index) in 12" :key="index" class="zi_xin">
              <div class="zili_left">{{ item }}</div>
              <div class="ziliao_right">小数点大家阿达四点三</div>
            </div>
            <div v-for="(item, index) in 1" :key="index" class="zi_xin">
              <div class="zili_left">xx11sadasx</div>
              <div class="ziliao_right">
                小数点大家阿达四点三小数点大家阿达四点三小数点大家阿达四点三小数点大家阿达四点三小数点大家阿达四点三小数点大家阿达四点三
              </div>
            </div>
          </div>
        </div>
        <div v-else class="section_left">
          <div class="img"></div>
        </div>
        <!-- <div class="section_right"></div> -->
      </section>
    </el-dialog>
  </div>
</template>
<script setup>
import { toRefs } from "vue"
// import SvgIcon from '@/components/SvgIcon/index.vue'

// import { ref } from 'vue'
// import { ElMessageBox } from 'element-plus'

// const dialogVisible = ref(false)
const props = defineProps({
  errDialoVueUpdate: { type: Boolean, required: true },
  detail: { type: Object, default: () => {} },
  img: { type: String, default: "" },
  title: { type: String, default: "查证" }
})
const { errDialoVueUpdate } = toRefs(props)
const $emit = defineEmits(["update:errDialoVueUpdate"])
</script>
<style lang="scss" scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
.eror_all {
  :deep(.el-dialog) {
    // background: linear-gradient(180deg, #122743 -1.45%, #030d15 100%);
    border-radius: 8px;
    // border: 2px solid turquoise;
    width: 600px;
    height: 660px;
    padding: 0;
    header {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
}
section {
  width: 100%;
  height: 660px;
  position: relative;
  // @include Myflex(flex-start);
  border-radius: 4px;
  background-color: #040917;
  overflow: hidden;
  // padding: 0 51px;
  @include bordergradientMY(
    linear-gradient(180deg, rgba(158, 100, 218, 0.5) 0%, rgba(93, 141, 218, 0.3) 100%),
    linear-gradient(180deg, rgba(18, 39, 67, 0.9) 0%, rgba(3, 13, 21, 0.9) 100%)
  );
  .close {
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 15px;
    width: 20px;
    height: 19px;
    z-index: 9;
  }
  .title {
    position: absolute;
    left: 50%;
    top: 30px;
    transform: translateY(-50%);
    font: normal normal 700 18px "PingFang SC";
    color: white;
    z-index: 9;
    &::after {
      display: block;
      content: "";
      position: absolute;
      left: 50%;
      bottom: -8px;
      transform: translateX(-50%);
      border-radius: 7px;
      width: 50px;
      height: 2px;
      background: linear-gradient(90deg, #646dff 35.67%, #dd0246 99.97%);
    }
  }
  .section_left {
    position: relative;
    height: 100%;
    border-right: 0;
    padding: 90px 67px 0 67px;
    > p {
      font: normal normal 700 16px "PingFang SC";
      color: white;
    }
    .ziliao {
      margin-top: 29px;
      font: normal normal 400 12px "PingFang SC";
      color: white;
      opacity: 0.8;
      .zi_xin {
        width: 100%;
        @include Myflex();
        margin-bottom: 18px;
        .zili_left {
          width: 166px;
        }
        .ziliao_right {
          width: calc(100% - 166px);
        }
      }
    }
    .img {
      width: 338px;
      height: 479px;
      background-color: wheat;
      margin: auto;
    }
  }
}
</style>
