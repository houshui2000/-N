<template>
  <div id='login' v-if='loginStore.login'>
    <div class='content' style='width: 800px;height: 400px'>
      <div class='close' @click='()=>loginStore.login=false'>X</div>
      <div class='contentLogin'>
        <div class='left'>
          <div class='title'>{{ state ? '账号密码登录' : '手机号验证码登录' }}</div>
          <div class='switch' @click='handleSwitchBtn'>切换</div>
          <div class='inputBox'>
            <div class='inputs' v-if='!state' >
              <el-input v-model='phone' placeholder='请输入手机号' oninput="if(value.length > 11) value=value.slice(0, 11)" type='number' />
            </div>
            <div class=''></div>
            <div class='inputs' v-if='!state'>
              <el-input v-model='code' type='number' oninput="if(value.length > 6) value=value.slice(0, 6)"  placeholder='请输入验证码'/>
              <div class='text' @click='handleCodeTime()'>{{ codeTime >= 0 ? codeTime + 's' : '获取验证码' }}</div>
            </div>
            <div class='inputs' v-if='state'>
              <el-input v-model='admin' placeholder='请输入账号' type='number' />
            </div>
            <div class='inputs' v-if='state'>
              <el-input v-model='password' placeholder='请输入密码' />
            </div>
          </div>
          <div class='registerBox'>
            <div v-if='state' @click="handleLoginBtn('retrievePassword')">忘记密码</div>
            <div v-if='state' @click="handleLoginBtn('register')">没账号？去注册</div>
          </div>
          <div class='loginBtn' v-if='!state' @click="handleLoginBtn('phone')">立即登录</div>
          <div class='loginBtn' v-if='state' @click="handleLoginBtn('password')">立即登录</div>
          <div class='otherLoginBox'>
            <div class='wxLogin' @click="handleLoginBtn('wx')">微信登录</div>
            <div class='qqLogin' @click="handleLoginBtn('qq')">QQ登录</div>
          </div>
        </div>
        <div class='right'>
          <registerPopup/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from '@/pinia'
import LoginQQ from '@/components/Login/component/Loginqq.vue'
import registerPopup from '@/components/Login/component/registerPopup.vue'
import { ref } from 'vue'

const { loginStore } = useStore()
let state = ref(false) //切换按钮 false手机号 、true密码账号
let phone = ref('')
let code = ref('')
let admin = ref('')
let password = ref('')
let codeTime = ref(-1)

const handleLoginBtn = (res) => {
  loginStore.registerState = res
}
//切换按钮
const handleSwitchBtn = () => {
  state.value = !state.value
  phone.value = ''
  code.value = ''
  admin.value = ''
  password.value = ''
}

// 倒计时
const handleCodeTime60 = () => {
  if (codeTime.value >= 0) {
    codeTime.value--
    setTimeout(handleCodeTime60, 1000)
  }
}
//验证码组件
const handleCodeTime = () => {
  if (!state.value) {
    //手机号登录
    const phoneRegex = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    if (phoneRegex.test(phone.value)) {
      console.log('手机号码格式正确')
      if (codeTime.value >= 0) {
        return
      }
      codeTime.value = 60
      setTimeout(handleCodeTime60, 1000)
    } else {
      console.log('手机号码格式不正确')
    }

  } else {
//密码登录
  }


}


</script>

<style lang='scss' scoped>
#login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, 0.8);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1200px) {
    .content {
      width: 800px;
      height: 400px;
      background: white;
      position: relative;

      .close {
        width: 40px;
        height: 40px;
        background: yellow;
        font-size: 40px;
        font-weight: 900;
        position: absolute;
        right: 10px;
        top: 5px;
        cursor: pointer;
        text-align: center;
        line-height: 40px;
      }

      .contentLogin {
        width: 800px;
        height: 360px;
        position: absolute;
        top: 40px;
        left: 0;
        display: flex;

        .left {
          width: 450px;
          height: 360px;
          background: #8d5cc7;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;

          .title {
            font-size: 20px;
            font-weight: bold;
            text-align: center;
            margin-top: 30px;
          }

          .switch {
            position: absolute;
            right: 20px;
            top: 20px;
            font-size: 20px;
            background: #cccccc;
          }

          .inputBox {
            width: 450px;
            height: 100px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            .inputs {
              width: 300px;
              position: relative;

              .text {
                width: 100px;
                color: #018ef8;
                position: absolute;
                top: 3px;
                right: 10px;
                font-size: 20px;
                cursor: pointer;
                text-align: right;
              }
            }

          }

          .registerBox {
            width: 300px;
            height: 40px;
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
            cursor: pointer;
          }

          .loginBtn {
            width: 160px;
            height: 40px;
            background: #018ef8;
            border-radius: 10px;
            line-height: 40px;
            color: white;
            font-size: 16px;
            text-align: center;
            margin: 20px auto 40px;
          }

          .otherLoginBox {
            width: 100%;
            height: 50px;
            background: yellow;
            display: flex;
            justify-content: center;
            align-items: center;

            .wxLogin, .qqLogin {
              width: 100px;
              height: 40px;
              border: 1px solid #ccc;
              margin: 0 20px;
              font-size: 20px;
              font-weight: bold;
              text-align: center;
              line-height: 40px;
            }
          }

        }

        .right {
          width: 350px;
          height: 360px;
          background: green;

        }
      }
    }
  }



}
</style>
