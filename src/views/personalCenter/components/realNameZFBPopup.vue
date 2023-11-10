<template>
  <transition name='transition05s'>
    <div id='realNameZFBPopup'>
      <div class='content'>
        <div class='close' @click='useUsersStore.realNameZFBPopup=false'></div>
        <div class='text'>实名认证
          <div class='border'></div>
        </div>
        <div class='message'>请打开支付宝扫一扫下方二维码，完成实名认证</div>
        <div class='qrcodeBox'>
          <div class='qrcode'>
            <div id='realNameQRCodeBox'></div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import { useStore } from '@/pinia/index.js'
import QRCode from 'qrcodejs2-fix'
import { getRealName } from '@/network/personalCenter.js'
import MessageBoxVue from '@/components/MessageBox/index.js'
//在需要使用的vue文件中导入即可

const { useUsersStore, loginStore } = useStore()
const getTime = ref(null)
const handleRealName = async () => {
  new QRCode(document.getElementById('realNameQRCodeBox'), {
    //需要编码的文字内容或者URL
    text: useUsersStore.realNameQRCode,
    width: 150, //二维码宽
    height: 150,//二维码高
    colorLight: 'transparent',
    colorDark: '#D9D9D9',
    correctLevel: 0
  })
  getTime.value = setInterval(async () => {
    const res = await getRealName(useUsersStore.passwordEdit)
    if (res.code === 200) {
        if(res.data==="T"){
          await useUsersStore.handleUserInfo()
          useUsersStore.realNameZFBPopup=false
          MessageBoxVue({
            title: '认证成功'
          })
          clearInterval(getTime.value)
        }
    }
  }, 2000)
}
onMounted(() => {
  nextTick(() => {
    handleRealName()
  })


})
onUnmounted(() => {
  if(getTime.value!==null){
    clearInterval(getTime.value)
  }
})
</script>

<style lang='scss' scoped>
@media screen and (min-width: 1px) {
  #realNameZFBPopup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(#000, .8);
    z-index: 10005;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 12PX;

    .content {
      width: 554PX;
      height: 400PX;
      background: url($gxsrealNameZFBPopup) no-repeat center;
      background-size: contain;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      backdrop-filter: blur(2PX);

      .close {
        width: 20PX;
        height: 20PX;
        background: url($gxspupupClose) no-repeat center;
        background-size: contain;
        position: absolute;
        top: 20PX;
        right: 20PX;
        cursor: pointer;
      }

      .text {
        width: 600PX;
        height: 26PX;
        font-size: 20PX;
        font-weight: 500;
        text-align: center;
        margin-top: 32PX;
        position: relative;

        .border {
          width: 50PX;
          height: 2PX;
          background: url($gxspupupborderBottom) no-repeat center;
          background-size: contain;
          position: absolute;
          margin-left: -25PX;
          left: 50%;
          margin-top: 3PX;
        }
      }

      .message {
        margin-top: 30PX;
      }

      .qrcodeBox {
        width: 186PX;
        height: 186PX;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background: url($gxsborderrealNameqrcode) no-repeat center;
        background-size: contain;
        overflow: hidden;
        margin-top: 39PX;
        display: flex;
        justify-content: center;
        align-items: center;

        .qrcode {
          width: 168PX;
          height: 168PX;
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
}
</style>

