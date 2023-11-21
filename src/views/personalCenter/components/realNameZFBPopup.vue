<template>
  <transition name="transition05s">
    <div class="realNameZFBPopup-nopx">
      <div class="content">
        <div class="close" @click="useUsersStore.realNameZFBPopup = false"></div>
        <div class="text">
          实名认证
          <div class="border"></div>
        </div>
        <div class="message">请打开支付宝扫一扫下方二维码，完成实名认证</div>
        <div class="qrcodeBox">
          <div class="qrcode">
            <div id="realNameQRCodeBox"></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from "vue"
import { useStore } from "@/pinia/index.js"
import QRCode from "qrcodejs2-fix"
import { getRealName } from "@/network/personalCenter.js"
import MessageBoxVue from "@/components/MessageBox/index.js"
//在需要使用的vue文件中导入即可

const { useUsersStore } = useStore()
const getTime = ref(null)
const handleRealName = async () => {
  new QRCode(document.getElementById("realNameQRCodeBox"), {
    //需要编码的文字内容或者URL
    text: useUsersStore.realNameQRCode,
    width: 150, //二维码宽
    height: 150, //二维码高
    colorLight: "transparent",
    colorDark: "#D9D9D9",
    correctLevel: 0
  })
  setTimeout(() => {
    getTime.value = setInterval(async () => {
      let res
      try {
        res = await getRealName(useUsersStore.passwordEdit)
        if (res.data === "T") {
          await useUsersStore.handleUserInfo()
          useUsersStore.realNameZFBPopup = false
          MessageBoxVue({
            title: "认证成功"
          })
          clearInterval(getTime.value)
        }
      } catch (err) {
        useUsersStore.realNameZFBPopup = false
        clearInterval(getTime.value)
      }
    }, 2000)
    // RenZhengdiGui()
  }, 2000)
}
// 后端说要降定时器改成 递归 先不用 2023-11-201934
// /**认证递归 */
// const RenZhengdiGui = async () => {
//   let res
//   try {
//     res = await getRealName(useUsersStore.passwordEdit)
//     if (res.data === "T") {
//       await useUsersStore.handleUserInfo()
//       useUsersStore.realNameZFBPopup = false
//       MessageBoxVue({
//         title: "认证成功"
//       })
//       // clearInterval(getTime.value)
//       return
//     } else {
//       // 进行轮训
//       RenZhengdiGui()
//     }
//   } catch (err) {
//     useUsersStore.realNameZFBPopup = false
//     // clearInterval(getTime.value)
//     return
//   }
// }
// 后端说要降定时器改成 递归 先不用 2023-11-201934 end

onMounted(() => {
  nextTick(() => {
    handleRealName()
  })
})
onUnmounted(() => {
  if (getTime.value !== null) {
    clearInterval(getTime.value)
  }
})
</script>

<style lang="scss" scoped>
.realNameZFBPopup-nopx {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.8);
  z-index: 10005;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;

  .content {
    width: 554px;
    height: 400px;
    background: url($gxsrealNameZFBPopup) no-repeat center;
    background-size: contain;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(2px);

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

    .text {
      width: 600px;
      height: 26px;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      margin-top: 32px;
      position: relative;

      .border {
        width: 50px;
        height: 2px;
        background: url($gxspupupborderBottom) no-repeat center;
        background-size: contain;
        position: absolute;
        margin-left: -25px;
        left: 50%;
        margin-top: 3px;
      }
    }

    .message {
      margin-top: 30px;
    }

    .qrcodeBox {
      width: 186px;
      height: 186px;
      background-clip: padding-box, border-box;
      background-origin: padding-box, border-box;
      background: url($gxsborderrealNameqrcode) no-repeat center;
      background-size: contain;
      overflow: hidden;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: scale(1.3);
      .qrcode {
        width: 168px;
        height: 168px;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        overflow: hidden;
        background: url($gxsborderrealNameqrcode2) no-repeat center;
        background-size: contain;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
