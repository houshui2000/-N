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
        <div class="section_left">
          <p class="title">{{ errDialoVueXinagqing.productName }}</p>
          <div class="img_zheng">
            <img src="" alt="" />
          </div>
          <div class="jiehsoa duoyi">
            {{ errDialoVueXinagqing }}
          </div>
        </div>
        <div class="section_right">
          <p class="title">{{ errDialoVueXinagqing.productName }}</p>
          <div class="img_zheng">
            <img src="" alt="" />
          </div>
          <div class="jiehsoa duoyi">
            {{ errDialoVueXinagqing }}
          </div>
        </div>
      </section>
    </el-dialog>
  </div>
</template>
<script setup>
import { toRefs } from 'vue'
// import SvgIcon from '@/components/SvgIcon/index.vue'

// import { ref } from 'vue'
// import { ElMessageBox } from 'element-plus'

// const dialogVisible = ref(false)
const props = defineProps({
  errDialoVueUpdate: { type: Boolean, required: true },
  errDialoVueXinagqing: { type: Object, required: true }
})
const { errDialoVueUpdate } = toRefs(props)
const $emit = defineEmits(['update:errDialoVueUpdate'])
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
    width: 826px;
    height: 569px;
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
  height: 100%;
  position: relative;
  @include Myflex(flex-start);
  border-radius: 4px;
  background-color: #040917;
  overflow: hidden;
  // padding: 0 51px;
  %border_my {
    border: 1px solid rgba(104, 53, 203, 0.5);
    width: 413px;
    height: 569px;
    background: url('@/assets/images/shoppingCentre/xiangqing.png') no-repeat scroll left top/ 100% 100%;
  }

  .close {
    cursor: pointer;
    position: absolute;
    right: 30px;
    top: 25px;
    width: 20px;
    height: 19px;
  }

  .section_left {
    position: relative;
    @extend %border_my;
    border-right: 0;
  }
  .section_right {
    @extend %border_my;
  }
  .title {
    padding: 50px 49px 40px 49px;
    font: normal normal 400 14px 'Microsoft YaHei';
    color: rgba(235, 235, 235, 1);
    text-align: center;
  }
  .img_zheng {
    width: 202.238px;
    height: 310px;
    margin: 25px auto 49px auto;
    border: 1px solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(159deg, #610083 -0.54%, #010030 101.45%),
      linear-gradient(180deg, rgba(56, 71, 249, 0.8) 0%, rgba(216, 3, 204, 0.8) 100%);
    @include Myflex();
    > img {
      width: 180.095px;
      height: 288.595px;
      border: 0.738px solid #9f62db;
    }
  }
  .jiehsoa {
    width: 315px;
    height: 51px;
    font: normal normal 400 12px 'Microsoft YaHei';
    color: rgba(235, 235, 235, 1);
    margin: auto;
    -webkit-line-clamp: 3;
    opacity: 0.7;
  }
}
</style>
