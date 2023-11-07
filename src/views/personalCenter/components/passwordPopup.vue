<template>
  <transition name='transition05s'>
    <div id='passwordPopup' v-if='useUsersStore.passwordPopup'>
      <div class='content'>
        <div class='text'>修改密码
          <div class='border'></div>
        </div>
        <div class='close' @click='useUsersStore.passwordPopup=false'></div>
        <div class='domInput marginTop44'>
          <div class='pText'>当前手机号：</div>
          <div class='inputFrame' style='background:none'>{{ useUsersStore.userInfo.mobile.substring(0, 3)
            }}****{{ useUsersStore.userInfo.mobile.substring(7) }}
          </div>
        </div>
        <div class='domInput marginTop23'>
          <div class='pText'>手机验证码：</div>
          <div class='inputFrame '>
            <input placeholder='请输入手机验证码' v-model='passwordEdit.code' maxlength='6'
                   onkeyup="value=value.replace(/[^0-9]/g,'')">
          </div>
          <div class='textPass' @click='handleCodeTime()'>{{ codeTime >= 0 ? codeTime + 's' : '获取验证码' }}</div>
        </div>
        <div class='domInput marginTop23'>
          <div class='pText'>输入新密码：</div>
          <div class='inputFrame'>
            <input placeholder='请输入新密码' type='password' v-model='passwordEdit.password' maxlength='16'
                   onkeyup="value=value.replace(/[\W]/g,'')">
          </div>
        </div>
        <div class='domInput marginTop23'>
          <div class='pText'>确认密码：</div>
          <div class='inputFrame'>
            <input placeholder='请输入新密码' type='password' v-model='passwordEdit.passwordConfirm' maxlength='16'
                   onkeyup="value=value.replace(/[\W]/g,'')">
          </div>
        </div>
        <div class='passwordEditBtn' @click='handlePassword'>确认</div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useStore } from '@/pinia/index.js'
import { codeloginmobile } from '@/network/user.js'
import { passwordEditCode, updatePassword } from '@/network/personalCenter.js'
import { removeItem } from '@/utils/storage.js'
import MessageBoxVue from '@/components/MessageBox/index.js'

const { useUsersStore, loginStore } = useStore()

let passwordEdit = ref({
  code: '',
  password: '',
  passwordConfirm: ''
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
  MessageBoxVue({
    title: '发送成功'
  })
  codeTime.value = 60
  setTimeout(handleCodeTime60, 1000)
}
//修改密码按钮
const handlePassword = async () => {
  console.log(passwordEdit.value.code)
  if (!passwordEdit.value.code) {
    MessageBoxVue({
      title: '手机验证码不能为空'
    })
    return
  }
  if (!passwordEdit.value.password || !passwordEdit.value.passwordConfirm) {
    MessageBoxVue({
      title: '密码不能为空'
    })
    return
  }
  if (passwordEdit.value.password !== passwordEdit.value.passwordConfirm) {
    MessageBoxVue({
      title: '两次密码不一致'
    })
    return
  }
  const result = await updatePassword(passwordEdit.value)
  if (result.code === 200) {
    useUsersStore.passwordPopup = false
    loginStore.login = true
    removeItem('token')
  }
}
</script>

<style lang='scss' scoped>
#passwordPopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, .8);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .content {
    width: 554px;
    height: 454px;
    background: url($gxsPasswordPopup) no-repeat center;
    background-size: 100% 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(2px);

    .passwordEditBtn {
      width: 160px;
      height: 36px;
      background: url($gxspasswordPopupBtn) no-repeat;
      background-size: 100%;
      margin-top: 36px;
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
      font-weight: 400;
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
      width: 432px;
      display: flex;
      height: 40px;
      font-weight: 400;
      align-items: center;
      position: relative;

      .pText {
        width: 91px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;

      }

      .textPass {
        width: 93px;
        height: 40px;
        line-height: 40px;
        position: absolute;
        top: 50%;
        margin-top: -20px;
        right: 0px;
        font-size: 12px;
        cursor: pointer;
        text-align: center;
        background: url($gxsPersonalpasswordCodeBtn) no-repeat center;
        background-size: 100% 100%;

      }

      &.marginTop44 {
        margin-top: 44px;
      }

      &.marginTop23 {
        margin-top: 23px;
      }

      &.marginTop36 {
        margin-top: 36px;
      }

      .inputFrame {
        width: 224px;
        height: 40px;
        line-height: 40px;
        background: url($gxspasswordpupupInputFrame) no-repeat center;
        background-size: contain;
        margin-left: 14px;

        input {
          width: 224px;
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
