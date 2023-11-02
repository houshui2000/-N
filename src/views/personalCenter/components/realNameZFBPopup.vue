<template>
  <div id='realNameZFBPopup'>
    <div class='content'>
      <div class='close' @click='useUsersStore.realNameZFBPopup=false'></div>
      <div class='title'>实名认证</div>
      <div class='message'>请打开支付宝扫一扫下方二维码，完成实名认证</div>
      <div class='qrcodeBox'>
        <div class='qrcode'>
          <div id='realNameQRCodeBox'></div>
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>
import { reactive, ref,onMounted,nextTick } from 'vue'
import { useStore } from '@/pinia/index.js'
import { codeloginmobile } from '@/network/user.js'
import { passwordEditCode, realNamePost, updatePassword } from '@/network/personalCenter.js'
import { removeItem } from '@/utils/storage.js'
import QRCode from 'qrcodejs2-fix';//在需要使用的vue文件中导入即可

const { useUsersStore, loginStore } = useStore()
// let props = defineProps(['info'])
let codeUrl = ref('')
const handleRealName = async () => {
  const res = await realNamePost(useUsersStore.passwordEdit)
  if (res.code === 200) {
    codeUrl.value=res.data
    new QRCode(document.getElementById("realNameQRCodeBox"), {
      //需要编码的文字内容或者URL
      text: codeUrl.value,
      width: 150, //二维码宽
      height: 150,//二维码高
      colorLight:'transparent',
      colorDark:'#D9D9D9',
      correctLevel:0
    });
  }

}
onMounted(()=>{
  nextTick(()=>{
    handleRealName()
  })

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
    font-family: "Alibaba PuHuiTi";
    font-weight: 700;
    color: white;
    font-size: 12px;

    .content {
      width: 600px;
      height: 400px;
      background: url($gxsrealNameZFBPopup) no-repeat center;
      background-size: contain;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;

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

      .title {
        margin-top: 25px;
      }

      .message {
        margin-top: 30px;
      }

      .qrcodeBox {
        width: 186px;
        height: 186px;
        background-clip: padding-box, border-box;
        background-origin: padding-box, border-box;
        background:url($gxsborderrealNameqrcode) no-repeat center;
        background-size:contain;
        overflow: hidden;
        margin-top: 39px;
        display: flex;
        justify-content: center;
        align-items: center;

        .qrcode {
          width: 168px;
          height: 168px;
          background-clip: padding-box, border-box;
          background-origin: padding-box, border-box;
         overflow: hidden;
          background:url($gxsborderrealNameqrcode2) no-repeat center;
          background-size:contain;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }


    }
  }
}
</style>

