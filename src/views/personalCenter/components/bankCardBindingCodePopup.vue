<template>
  <transition name="transition05s">
    <div id="bankCardBindingCodePopup" v-if="bankCardBindingCodeShow">
      <div class="content">
        <div class="title">
          请输入验证码
          <div class="border"></div>
        </div>
        <div class="contain">
          <div class="addFrom">
            <div class="label">验证码：</div>
            <div class="addFromDom">
              <input v-model="codeInfo.code" placeholder="请输入手机验证码" />
            </div>
          </div>
        </div>

        <div class="close" @click="handelClose"></div>
        <div class="btnBox">
          <div class="btnBox-close" @click="handelClose">取消</div>
          <div class="btnBox-confirm" @click="handleBtn">确认</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue"
import { POST_bankCardBindingCode } from "@/network/personalCenter.js"

let codeInfo = ref({
  code: "",
  orderId: ""
})
const props = defineProps(["bankCardBindingCodeShow", "ids"])
const emit = defineEmits(["handleBankCardBindingCodeCloseEmit"])
const handelClose = () => {
  codeInfo.value.orderId = ""
  codeInfo.value.code = ""
  console.log(codeInfo.value)

  emit("handleBankCardBindingCodeCloseEmit")
}
const handleBtn = async () => {
  codeInfo.value.orderId = props.ids
  let result = await POST_bankCardBindingCode(codeInfo.value)
  if (result.code === 200) {
    codeInfo.value.orderId = ""
    codeInfo.value.code = ""
    emit("handleBankCardBindingCodeCloseEmit")
  }
}
</script>

<style lang="scss" scoped>
#bankCardBindingCodePopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10005;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  color: white;

  .content {
    width: 398px;
    height: 239px;
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    border: 1px solid transparent;
    background-image: linear-gradient(to bottom, rgba(18, 39, 67, 1), rgba(3, 13, 21, 1)),
      linear-gradient(
        155.92deg,
        rgba(159, 98, 219, 0.5) 0%,
        rgba(126, 172, 186, 0.5) 48.67%,
        rgba(99, 149, 231, 0.5) 96.71%
      );
    overflow: hidden;
    border-radius: 6px;
    backdrop-filter: blur(10px);
    position: relative;
    //opacity: .8;
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 18px;
      margin-top: 32px;

      .border {
        width: 50px;
        height: 2px;
        background: url($gxspupupborderBottom) no-repeat center;
        background-size: contain;
        position: absolute;
        margin-left: -25px;
        left: 50%;
        margin-top: 10px;
      }
    }

    .close {
      width: 20px;
      height: 20px;
      background: url($gxspupupClose) no-repeat center;
      background-size: contain;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }

    .contain {
      margin-top: 12px;
      display: flex;

      .addFrom {
        width: 398px;
        height: 40px;
        display: flex;
        font-weight: 500;
        margin-top: 25px;

        .label {
          width: 107px;
          height: 40px;
          line-height: 40px;
          text-align: right;
        }

        .addFromDom {
          margin-left: 10px;
          width: 240px;
          height: 40px;
          background: url($gxsBankCardPopupInput) no-repeat center;
          background-size: 100% 100%;

          input {
            width: 100%;
            height: 100%;
            padding-left: 13px;
            color: #fff;

            &::placeholder {
              color: rgba(#fff, 0.6);
            }
          }
        }
      }
    }

    .btnBox {
      width: 224px;
      height: 34px;
      display: flex;
      justify-content: space-between;
      margin-top: 47px;
      font-size: 14px;

      .btnBox-close {
        width: 100px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        // background: url($gxsauthenticationConfirmPopupBack) no-repeat center;
        border-radius: 4px; // background-size: 100% 100%;
        @include bordergradientMY(
          linear-gradient(90deg, rgba(41, 59, 231, 1) 0%, rgba(201, 1, 182, 1) 100%),
          linear-gradient(180deg, #241328 0%, #000c2c 100%)
        );
        cursor: pointer;
      }

      .btnBox-confirm {
        width: 100px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        border-radius: 4px;
        background-image: linear-gradient(to right, rgba(45, 66, 255, 1), rgba(223, 0, 201, 1));
        cursor: pointer;
      }
    }
  }
}
</style>
