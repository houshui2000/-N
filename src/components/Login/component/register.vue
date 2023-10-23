<template>
  <div id='registerBox'>
    <div class='inputBox'>
      <div class='inputs'>
        <el-input v-model='phone' placeholder='请输入手机号' type='number' />
      </div>
      <div class='inputs'>
        <el-input v-model='phoneCode' placeholder='请输入验证码' type='number' />
        <div class='text' @click='handleCodeTime()'>{{ codeTime >= 0 ? codeTime + 's' : '获取验证码' }}</div>
      </div>
      <div class='inputs'>
        <el-input v-model='password' placeholder='请输入不超过16位密码' type='number' />
      </div>
      <div class='inputs' v-if='loginStore.registerState==="register"'>
        <el-input v-model='nickName' placeholder='请输入昵称（选填）' type='number' />
      </div>
      <div class='inputs' v-if='loginStore.registerState==="register"'>
        <el-input v-model='recommendCode' placeholder='请输入推荐码（选填）' type='number' />
      </div>
      <div class='agreementBox' v-if='loginStore.registerState==="register"'>
        <el-checkbox v-model='agreement'></el-checkbox>
        <div class='text'>我已满18周岁，并同意《<span>用户协议</span>》《<span>隐私协议</span>》</div>
      </div>
      <div class='registerBtn' v-if='loginStore.registerState==="register"' @click='handleRegisterBtn'>注册</div>
      <div class='registerBtn' v-if='loginStore.registerState==="retrievePassword"'>确认</div>
      <div></div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/pinia'

const { loginStore } = useStore()
let agreement = ref(false)

let phone = ref('')
let phoneCode = ref('')
let password = ref('')
let nickName = ref('')
let recommendCode = ref('')
let codeTime = ref(-1)

// 倒计时
const handleCodeTime60 = () => {
  if (codeTime.value >= 0) {
    codeTime.value--
    setTimeout(handleCodeTime60, 1000)
  }
}
//验证码组件
const handleCodeTime = () => {
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
}

const handleRegisterBtn = () => {

}
</script>

<style lang='scss' scoped>
#registerBox {
  .inputBox {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .inputs {
      width: 300px;
      margin-top: 20px;
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

    .agreementBox {
      display: flex;
      align-items: center;
      height: 30px;
      margin-top: 20px;

      .text {
        margin-left: 5px;

        span {
          color: #018ef8;
        }
      }
    }

    .registerBtn {
      width: 160px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background: #018ef8;
      border-radius: 10px;
      font-size: 20px;
      color: white;
      font-weight: bold;
      margin-top: 40px;
    }
  }
}
</style>
