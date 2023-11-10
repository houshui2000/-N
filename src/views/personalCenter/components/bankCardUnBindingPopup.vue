<template>
  <transition name='transition05s'>
    <div id='bankCardUnBindingPopup' v-if='props.bankCardUnBindingShow'>
      <div class='content'>
        <div class='title'>
          提示
          <div class='border'></div>
        </div>
        <div class='close' @click='handelClose'></div>
        <div class='text'>确认解除绑定此银行卡吗？</div>
        <div class='btnBox'>
          <div class='btnBox-close' @click='handelClose'>取消</div>
          <div class='btnBox-confirm' @click='handleBtn'>确认</div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, onMounted } from 'vue'

let bankCardUnBindingShow = ref(true)
const props = defineProps(['bankCardUnBindingShow'])
const emit = defineEmits(['handleBankCardUnBindingCloseEmit','handleBankCardUnBindingConfirmEmit'])
const handelClose = () => {
  emit('handleBankCardUnBindingCloseEmit')
}
const handleBtn=()=>{
  emit('handleBankCardUnBindingConfirmEmit')
}
onMounted(() => {

})

</script>

<style lang='scss' scoped>
#bankCardUnBindingPopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0, .8);
  z-index: 10000;
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
    background-image: linear-gradient(to bottom, rgba(18, 39, 67, 1), rgba(3, 13, 21, 1)), linear-gradient(155.92deg, rgba(159, 98, 219, 0.5) 0%, rgba(126, 172, 186, 0.5) 48.67%, rgba(99, 149, 231, 0.5) 96.71%);
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
    .text{
      margin-top: 42px;
      font-size: 12px;
      font-weight: 500;
    }
    .btnBox{
      width: 224px;
      height: 34px;
      display: flex;
      justify-content: space-between;
      margin-top: 47px;
      font-size: 14px;
      .btnBox-close{
        width: 100px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        background:url($gxsauthenticationConfirmPopupBack) no-repeat center;
        background-size:100% 100%;
      }
      .btnBox-confirm{
        width: 100px;
        height: 34px;
        line-height: 34px;
        text-align: center;
        border-radius: 4px;
        background-image: linear-gradient(to right, rgba(45, 66, 255, 1), rgba(223, 0, 201, 1));
      }
    }
  }

}
</style>
