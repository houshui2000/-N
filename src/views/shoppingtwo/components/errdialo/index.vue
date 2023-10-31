<template>
  <div class="eror_all">
    <!-- 支付弹框 -->
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
        <div class="img"></div>
        <p class="spice">￥100.00</p>
        <p class="chenggong">恭喜您购买成功！</p>
        <p class="shuomimnh">您使用支付宝完成了本次资产交易，该资产您可在 个人中心-资产库板块查看。</p>
        <div @click="$emit('update:errDialoVueUpdate', false)" class="close">关闭</div>
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
  errDialoVueUpdate: { type: Boolean, required: true }
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
    width: 400px;
    height: 395px;
    border: 1px solid transparent;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(180deg, #122743 -1.45%, #030d15 100%),
      linear-gradient(0deg, rgb(174, 111, 255) 0%, rgb(46, 179, 255) 100%);
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
  %ziti {
    color: #fff;
    font: normal normal 400 14px 'Microsoft YaHei';
  }
  .img {
    width: 139.394px;
    height: 133px;
    background-color: rebeccapurple;
  }
  .spice {
    font: normal normal 700 20px 'Microsoft YaHei';
    color: white;
    margin-top: 33px;
  }
  .chenggong {
    @extend %ziti;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
  }
  .shuomimnh {
    font: normal normal 400 12px 'Microsoft YaHei';
    margin-top: 27px;
    color: rgba(255, 255, 255, 0.5);
  }
  .close {
    margin-top: 25px;
    width: 150px;
    height: 33.99px;
    @include Myflex();
    border: 1px solid transparent;
    border-radius: 8px;
    @extend %ziti;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(180deg, #122743 -1.45%, #030d15 100%),
      linear-gradient(0deg, rgb(174, 111, 255) 0%, rgb(46, 179, 255) 100%);
  }
}
</style>
