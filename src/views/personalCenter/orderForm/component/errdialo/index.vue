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
          <svg width="183" height="111" viewBox="0 0 183 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_5300_7485)">
              <g opacity="0.24">
                <mask
                  id="mask0_5300_7485"
                  style="mask-type: alpha"
                  maskUnits="userSpaceOnUse"
                  x="20"
                  y="72"
                  width="157"
                  height="39"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M176.707 110.322L20 110.321C20.0001 89.1571 55.0801 72 98.3535 72C141.627 72 176.707 89.1571 176.707 110.322Z"
                    fill="url(#paint0_linear_5300_7485)"
                  />
                </mask>
                <g mask="url(#mask0_5300_7485)">
                  <rect
                    opacity="0.4"
                    x="-67.1484"
                    y="63.697"
                    width="270.24"
                    height="71.5335"
                    fill="url(#paint1_linear_5300_7485)"
                  />
                </g>
              </g>
              <g clip-path="url(#clip1_5300_7485)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M92 102C111.33 102 127 86.33 127 67C127 47.67 111.33 32 92 32C72.67 32 57 47.67 57 67C57 86.33 72.67 102 92 102ZM109.266 52.87C107.335 51.446 104.576 51.8079 103.105 53.6784L88.8481 71.8099L80.0539 65.3502C78.1195 63.9293 75.3617 64.2957 73.8941 66.1686C72.4266 68.0414 72.805 70.7115 74.7394 72.1323L86.9054 81.0687C87.1824 81.2721 87.4762 81.4389 87.7808 81.5699C89.6272 82.444 91.9136 81.9651 93.206 80.3216L110.101 58.8352C111.572 56.9647 111.198 54.294 109.266 52.87Z"
                  fill="url(#paint2_linear_5300_7485)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M150.518 36.375C152.054 33.8449 156.837 32 162.5 32C168.163 32 172.946 33.8449 174.482 36.375H178.188C180.845 36.375 183 38.5296 183 41.1875C183 43.8454 180.845 46 178.188 46H146.813C144.155 46 142 43.8454 142 41.1875C142 38.5296 144.155 36.375 146.812 36.375H150.518Z"
                  fill="url(#paint3_linear_5300_7485)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.51764 50.375C10.0543 47.8449 14.8375 46 20.5 46C26.1625 46 30.9457 47.8449 32.4824 50.375H36.1875C38.8454 50.375 41 52.5296 41 55.1875C41 57.8454 38.8454 60 36.1875 60H4.8125C2.15463 60 0 57.8454 0 55.1875C0 52.5296 2.15463 50.375 4.8125 50.375H8.51764Z"
                  fill="url(#paint4_linear_5300_7485)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M46.7607 6.25C48.8268 2.62445 54.8685 0 62 0C69.1315 0 75.1732 2.62445 77.2393 6.25H84.125C87.922 6.25 91 9.32804 91 13.125C91 16.922 87.922 20 84.125 20H39.875C36.078 20 33 16.922 33 13.125C33 9.32804 36.078 6.25 39.875 6.25H46.7607Z"
                  fill="url(#paint5_linear_5300_7485)"
                />
                <rect
                  x="130.57"
                  y="21"
                  width="7"
                  height="21.9137"
                  rx="3.5"
                  transform="rotate(25.8982 130.57 21)"
                  fill="#B08FFF"
                />
                <rect
                  x="150.961"
                  y="40.9219"
                  width="7"
                  height="21.9137"
                  rx="3.5"
                  transform="rotate(66.884 150.961 40.9219)"
                  fill="#898EFF"
                />
                <circle cx="143" cy="76.5" r="3" stroke="#7982FF" stroke-width="2" />
                <circle cx="41" cy="53.5" r="3" stroke="#BB91FF" stroke-width="2" />
                <rect x="107.5" y="3" width="8" height="1.5" rx="0.75" transform="rotate(90 107.5 3)" fill="#B08FFF" />
                <rect x="111" y="8" width="8" height="1.5" rx="0.75" transform="rotate(-180 111 8)" fill="#B08FFF" />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_5300_7485"
                x1="98.3535"
                y1="72"
                x2="98.3535"
                y2="148.643"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D9D9D9" />
                <stop offset="0.407613" stop-color="#D9D9D9" stop-opacity="0" />
                <stop offset="1" stop-color="#D9D9D9" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_5300_7485"
                x1="-67.1484"
                y1="96.5897"
                x2="208.288"
                y2="96.5897"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#20DDFF" />
                <stop offset="1" stop-color="#9373FF" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_5300_7485"
                x1="64.9545"
                y1="32"
                x2="110.295"
                y2="102"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0001" stop-color="#F59EFF" />
                <stop offset="1" stop-color="#637DFF" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_5300_7485"
                x1="162.5"
                y1="32"
                x2="162.5"
                y2="46"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2A3969" stop-opacity="0.58" />
                <stop offset="1" stop-color="#24266F" stop-opacity="0.01" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_5300_7485"
                x1="20.5"
                y1="46"
                x2="20.5"
                y2="60"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2A3969" stop-opacity="0.64" />
                <stop offset="1" stop-color="#24266F" stop-opacity="0.01" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_5300_7485"
                x1="62"
                y1="1.35465e-07"
                x2="62"
                y2="20"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#2A3969" stop-opacity="0.53" />
                <stop offset="1" stop-color="#24266F" stop-opacity="0.01" />
              </linearGradient>
              <clipPath id="clip0_5300_7485">
                <rect width="183" height="111" fill="white" />
              </clipPath>
              <clipPath id="clip1_5300_7485">
                <rect width="183" height="102" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <p class="spice">￥{{ mounchRef }}</p>
        <p class="chenggong">恭喜您购买成功!</p>
        <p class="shuomimnh">您完成了本次资产交易，该资产您可在 个人中心-资产库板块查看。</p>
        <div @click="close" class="close">关闭</div>
      </section>
    </el-dialog>
  </div>
</template>
<script setup>
import { toRefs } from "vue"
// import SvgIcon from '@/components/SvgIcon/index.vue'
import { useRouter } from "vue-router"
const router = useRouter()
const props = defineProps({
  errDialoVueUpdate: { type: Boolean, required: true },
  mounchRef: { type: String, required: true }
})
const { errDialoVueUpdate, mounchRef } = toRefs(props)
const $emit = defineEmits(["update:errDialoVueUpdate"])
const close = () => {
  $emit("update:errDialoVueUpdate", false)
  router.push("/orderForm")
}
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
  // transform: translateY(-10px);
  padding: 0 51px;
  %ziti {
    color: #fff;
    font: normal normal 400 14px "PingFang SC";
  }
  .img {
    width: 139px;
    height: 133px;
    @include Myflex();
  }
  > p {
    width: 100%;
    text-align: center;
  }
  .spice {
    font: normal normal 700 20px "PingFang SC";
    color: white;
    margin-top: 13px;
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
    cursor: pointer;
    margin-top: 40px;
    width: 100px;
    height: 34px;
    @include Myflex();
    border: 1px solid transparent;
    border-radius: 4px;
    @extend %ziti;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    background-image: linear-gradient(180deg, #122743 -1.45%, #030d15 100%),
      linear-gradient(270deg, rgb(222, 1, 200) 0%, rgb(45, 65, 255) 100%);
  }
}
</style>
