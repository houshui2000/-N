<template>
  <div id='authenticationConfirmPopup' v-if='!useUsersStore.authenticationConFirmPopup'>
    <div class='content'>
      <div class='text'>确认认证
        <div class='border'></div>
      </div>
      <div class=''>实名信息认证后不可修改，请检验信息无误后再提交。</div>
      <div class='close' @click='useUsersStore.authenticationPopup=false'></div>

      <div class='passwordEditBtn' @click='handlePassword'>同 意 授 权 并 认 证</div>
    </div>
  </div>

</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from '@/pinia/index.js'
import { codeloginmobile } from '@/network/user.js'
import { passwordEditCode, updatePassword } from '@/network/personalCenter.js'
import { removeItem } from '@/utils/storage.js'

const { useUsersStore, loginStore } = useStore()

let passwordEdit = reactive({
  code: '',
  password: ''
})
let codeTime = ref(-1)
// 倒计时
const handleCodeTime60 = () => {
  if (codeTime.value >= 0) {
    codeTime.value--
    setTimeout(handleCodeTime60, 1000)
  }
}
//验证码组件
const handleCodeTime = async () => {
  const result = await passwordEditCode({ mobile: useUsersStore.userInfo.mobile })
  codeTime.value = 60
  setTimeout(handleCodeTime60, 1000)
}
//修改密码按钮
const handlePassword = async () => {
  const result = await updatePassword(passwordEdit)
  if (result.code === 200) {
    useUsersStore.passwordPopup = false
    loginStore.login = true
    removeItem('token')
  }
}
</script>

<style lang='scss' scoped>
#authenticationConfirmPopup {
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
  font-weight: 400;
  color: white;

  .content {
    width: 398px;
    height: 239px;
    background: url($gxsauthenticationConfirmPopup) no-repeat center;
    background-size: contain;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    .messageTop {
      width: 375px;
      height: 60px;
      margin-top: 18px;
      font-weight: 400;
      font-size: 12px;
      color: rgba(#fff, 0.5);
      line-height: 20px;
    }

    .passwordEditBtn {
      width: 275px;
      height: 36px;
      background: url($gxsauthenticationPopupBtn) no-repeat;
      background-size: 100%;
      margin-top: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 4px;
      font-size: 16px;
    }

    .text {
      width: 600px;
      height: 26px;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      margin-top: 31px;
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

    .domInput {
      display: flex;
      height: 40px;
      font-weight: 400;
      align-items: center;
      position: relative;

      .label {
        width: 76px;
        text-align: left;
      }

      .textPass {
        width: 100px;
        height: 40px;
        line-height: 40px;
        color: #018ef8;
        position: absolute;
        top: 50%;
        margin-top: -20px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
        text-align: right;
      }

      &.marginTop35 {
        margin-top: 35px;
      }

      &.marginTop28 {
        margin-top: 28px;
      }

      &.marginTop24 {
        margin-top: 36px;
      }

      .inputFrame {
        width: 300px;
        height: 40px;
        line-height: 40px;
        background: url($gxspupupInputFrame) no-repeat center;
        background-size: contain;

        input {
          width: 300px;
          height: 40px;
          line-height: 40px;
          padding-left: 13px;
          color: white;

          &::placeholder {
            color: rgba(#fff, .6);
          }
        }
      }
    }
  }
}
</style>
