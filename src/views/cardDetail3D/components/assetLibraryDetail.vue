<template>
  <transition name="transition05s">
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
            <SvgIcon Height="15px" size="20px" icon-class="close" />
          </div>
          <div class="title">{{ props.title }}</div>
          <div v-if="props.title == '查证'" class="section_left">
            <p>查证信息</p>
            <div class="ziliao">
              <div class="zi_xin">
                <div class="zili_left">产品名称</div>
                <div class="ziliao_right">{{ props.detail.productName }}</div>
              </div>
              <!--  -->
              <!-- <div class="zi_xin">
                <div class="zili_left">发行价格</div>
                <div class="ziliao_right">No -- {{ props.detail.prevBlockHash }}</div>
              </div> -->
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">发行批次</div>
                <div class="ziliao_right">{{ props.detail.releaseBatch }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">资产序号</div>
                <div class="ziliao_right">{{ props.detail.productNumber }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">持有人姓名</div>
                <div class="ziliao_right">{{ props.detail.prevBlockHash }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">发行年份</div>
                <div class="ziliao_right">{{ props.detail.releaseYear }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">发行数量</div>
                <div class="ziliao_right">{{ props.detail.releaseTotal }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">区块Hash</div>
                <div class="ziliao_right">{{ props.detail.blockHash }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">区块高度</div>
                <div class="ziliao_right">{{ props.detail.blockHeight }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">上一区块Hash</div>
                <div class="ziliao_right">{{ props.detail.prevBlockHash }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">发行权力介绍</div>
                <div class="ziliao_right">{{ props.detail.releaseRight }}</div>
              </div>
              <!--  -->
              <div class="zi_xin">
                <div class="zili_left">备注</div>
                <div class="ziliao_right">{{ props.detail.issueContent }}</div>
              </div>
            </div>
          </div>
          <div v-else class="section_left">
            <div class="img">
              <img src="@/assets/images/ka/zheng.png" alt="" />
            </div>
          </div>
          <!-- <div class="section_right"></div> -->
        </section>
      </el-dialog>
    </div>
  </transition>
</template>
<script setup>
import { toRefs } from "vue"
// import SvgIcon from '@/components/SvgIcon/index.vue'

// import { ref } from 'vue'
// import { ElMessageBox } from 'element-plus'

// const dialogVisible = ref(false)
const props = defineProps({
  errDialoVueUpdate: { type: Boolean, required: true },
  detail: {
    type: Object,
    default: () => {}
  },
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
    background: transparent;
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
  border-radius: 4px;
  // overflow: hidden;
  @include bordergradientMY(
    linear-gradient(180deg, rgba(158, 100, 218, 0.5) 0%, rgba(93, 141, 218, 0.3) 100%),
    linear-gradient(180deg, rgba(18, 39, 67, 0.9) 0%, rgba(3, 13, 21, 0.9) 100%)
  );

  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  // background: url('@/assets/images/shoppingCentre/pay_load.png') no-repeat scroll left bottom/ 100% 100%;

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
    transform: translateX(-50%);
    font: normal normal 700 20px "PingFang SC";
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
    font: normal normal 400 16px "PingFang SC";

    > p {
      font: normal normal 400 16px "PingFang SC";
      color: white;
    }

    .ziliao {
      margin-top: 29px;
      font: normal normal 400 12px "PingFang SC";
      color: white;
      padding-bottom: 20px;
      opacity: 0.9;
      height: 480px;
      overflow: auto;
      padding-right: 10px;

      .zi_xin {
        width: 100%;
        @include Myflex();
        margin-bottom: 18px;

        .zili_left {
          width: 166px;
        }

        .ziliao_right {
          width: calc(100% - 166px);

          word-wrap: break-word;
          word-break: normal;
        }
      }
    }

    .img {
      width: 338px;
      height: 479px;
      margin: auto;
      img {
        max-width: 100%;
      }
    }
  }
}
</style>
