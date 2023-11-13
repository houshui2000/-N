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
        <div class="img">
          <svg width="145" height="145" viewBox="0 0 140 133" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5">
              <circle opacity="0.39" cx="48.8093" cy="62.0241" r="48.8093" fill="#00E67F" />
              <circle opacity="0.39" cx="70.1237" cy="48.8093" r="48.8093" fill="#00E67F" />
              <circle opacity="0.39" cx="89.8093" cy="66.8093" r="48.8093" fill="#00E67F" />
              <circle opacity="0.39" cx="67.5661" cy="80.3542" r="48.8093" fill="#00E67F" />
              <circle cx="40.4972" cy="12.3622" r="5.11538" fill="#00D756" />
              <circle cx="20.4615" cy="21.3141" r="3.83654" fill="#ADFFCE" />
              <circle cx="81.4195" cy="129.163" r="3.83654" fill="#ADFFCE" />
              <circle cx="18.7564" cy="38.3653" r="2.13141" fill="#ADFFCE" />
              <circle cx="116.801" cy="95.4871" r="2.13141" fill="#ADFFCE" />
              <circle cx="114.244" cy="110.833" r="2.13141" fill="#00D756" />
              <circle cx="16.6256" cy="110.833" r="2.13141" fill="#ADFFCE" />
            </g>
            <g clip-path="url(#clip0_3552_5019)">
              <path
                d="M70 111C45.6997 111 26 91.3003 26 67C26 42.6997 45.6997 23 70 23C94.3003 23 114 42.6997 114 67C114 91.3003 94.3003 111 70 111ZM50.3998 64.6002L46.8006 69.3998L66.0004 87.4002L95.1997 54.2004L92.4004 50.9998L66.0004 78.2006L50.3998 64.6002Z"
                fill="#00E67F"
              />
            </g>
            <defs>
              <clipPath id="clip0_3552_5019">
                <rect width="88" height="88" fill="white" transform="translate(26 23)" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p class="spice">￥100.00</p>
        <p class="chenggong">恭喜您购买成功!</p>
        <p class="shuomimnh">您使用完成了本次资产交易，该资产您可在 个人中心-资产库板块查看。</p>
        <div @click="$emit('update:errDialoVueUpdate', false)" class="close">关闭</div>
      </section>
    </el-dialog>
  </div>
</template>
<script setup>
import { toRefs } from "vue"
// import SvgIcon from '@/components/SvgIcon/index.vue'

const props = defineProps({
  errDialoVueUpdate: { type: Boolean, required: true }
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
    border-radius: 8px;
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
    font: normal normal 400 14px "PingFang SC";
  }
  .img {
    width: 139px;
    height: 133px;
    // background-color: saddlebrown;
    @include Myflex();
  }
  > p {
    // background-color: salmon;
    width: 100%;
    text-align: center;
  }
  .spice {
    font: normal normal 700 20px "PingFang SC";
    color: white;
    margin-top: 33px;
  }
  .chenggong {
    @extend %ziti;
    color: rgba(255, 255, 255, 0.8);
    margin-top: 10px;
  }
  .shuomimnh {
    font: normal normal 400 12px "PingFang SC";
    margin-top: 27px;
    text-align: left;
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
