<template>
  <Transition name='transition05s'>
    <div id='login' v-if='loginStore.login'>
      <div class='content'>
        <div class='close' @click='()=>loginStore.login=false'></div>
        <div class='contentLogin'>
          <div class='left'></div>
          <div class='right'>
            <div class='rightContent'>
              <!--      logo      -->
              <div class='loginIcon' v-if='otherBtn==="other"'></div>
              <!--      密码和验证码切换      -->
              <div class='LoginText' v-if='otherBtn==="other"'>
                <div class='text' @click='handleStateBtn(1)'>
                  密码登录
                  <div class='borderText' :class='{active:stateBtn===1}'></div>
                </div>
                <div class='text' @click='handleStateBtn(2)'>验证码登录
                  <div class='borderText' :class='{active:stateBtn===2}'></div>
                </div>
              </div>
              <!--      input框      -->
              <div class='loginBox'>
                <!--      密码        -->
                <div class='password' v-if='stateBtn===1 && otherBtn==="other"'>
                  <div class='inputBox'>
                    <input v-model='passwordInfo.mobile' placeholder='请输入手机号'>
                  </div>
                  <div class='inputBox marginTop18'>
                    <input v-model='passwordInfo.password' type='password' placeholder='请输入密码'>
                  </div>
                </div>
                <!--       手机验证码       -->
                <div class='mobileCode' v-if='stateBtn===2 && otherBtn==="other"'>
                  <div class='inputBox'>
                    <input v-model='mobileInfo.mobile' placeholder='请输入手机号'>
                  </div>
                  <div class='inputBox codeBox marginTop18'>
                    <input v-model='mobileInfo.code' placeholder='请输入验证码'>
                    <div class='code' @click='handleCodeTime()'>{{ codeTime >= 0 ? codeTime + 's' : '获取验证码' }}
                    </div>
                  </div>
                </div>
                <!--      注册      -->
                <div class='registerBox' v-if='otherBtn==="register" '>
                  <div class='title'>
                    <span>注册账号</span>
                    <div class='border'></div>
                  </div>
                  <div class='inputBox marginTop21'>
                    <input v-model='registerInfo.mobile' placeholder='请输入手机号'>
                  </div>
                  <div class='inputBox codeBox marginTop18'>
                    <input v-model='registerInfo.code' placeholder='请输入验证码'>
                    <div class='code' @click='handleCodeTime()'>{{ codeTime >= 0 ? codeTime + 's' : '获取验证码' }}
                    </div>
                  </div>
                  <div class='inputBox marginTop18'>
                    <input v-model='registerInfo.password' placeholder='请输入不超过16位的密码'>
                  </div>
                  <div class='inputBox marginTop18'>
                    <input v-model='registerInfo.nickname' placeholder='请输入昵称（选填）'>
                  </div>
                  <div class='inputBox marginTop18'>
                    <input v-model='registerInfo.invitationCode' placeholder='请输入推荐码（选填）'>
                  </div>
                </div>
                <!--      找回密码          -->
                <div class='registerBox' v-if='otherBtn==="resetting" '>
                  <div class='title'>
                    <span>找回密码</span>
                    <div class='border'></div>
                  </div>
                  <div class='inputBox marginTop21'>
                    <input v-model='resettingInfo.mobile' placeholder='请输入手机号'>
                  </div>
                  <div class='inputBox codeBox marginTop18'>
                    <input v-model='resettingInfo.code' placeholder='请输入验证码'>
                    <div class='code' @click='handleCodeTime()'>{{ codeTime >= 0 ? codeTime + 's' : '获取验证码' }}
                    </div>
                  </div>
                  <div class='inputBox marginTop18'>
                    <input v-model='resettingInfo.password' placeholder='请输入不超过16位的密码'>
                  </div>
                  <div class='inputBox marginTop18'>
                    <input v-model='resettingInfo.passwordAgain' placeholder='请输入再次输入密码'>
                  </div>
                </div>
                <!--        其他按钮      -->
                <div class='otherBtnBox' v-if='stateBtn===1 && otherBtn==="other"'>
                  <div class='text' @click='handleResettingShow'>忘记密码?</div>
                  <div>
                    <span class='spanText'>还没账号?</span>
                    <span class='text' @click='handleRegisterShow'>去注册</span>
                  </div>
                </div>
                <div class='registerBtnBox' v-if='otherBtn==="register"'>
                  <div>
                    <span class='spanText'>已有账号?</span>
                    <span class='text' @click='handleOtherShow'>去登录</span>
                  </div>
                </div>
                <div class='registerBtnBox' v-if='otherBtn==="register"'>
                  <div>
                    <span class='spanText'>已有账号?</span>
                    <span class='text' @click='handleOtherShow'>去登录</span>
                  </div>
                </div>
                <div class='resettingBtnBox' v-if='otherBtn==="resetting"'>
                  <div>
                    <span class='text' @click='handleOtherShow'>返回登录页面</span>
                  </div>
                </div>
                <div class='otherBtnBox' v-if='stateBtn===2'></div>
                <!--      登录        -->
                <div class='loginBtnBox' v-if='otherBtn==="other"' @click='handleLoginBtn'>登 录</div>
                <div class='registerBtn marginTop31' v-if='otherBtn==="register"' @click='handleLoginBtn'>注 册</div>
                <div class='resettingBtn marginTop31' v-if='otherBtn==="resetting"' @click='handleLoginBtn'>确 定</div>
                <!--       用户协议       -->
                <div class='checkboxBox' v-if='otherBtn!=="resetting"'>
                  <el-checkbox v-model='agreement' class='checkboxBox-checkbox'></el-checkbox>
                  我已满18周岁，并且同意<span>《用户协议》</span>和<span>《隐私协议》</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { useStore } from '@/pinia'
import { ref, reactive } from 'vue'
import {
  codeloginmobile,
  logincode,
  loginmobile,
  registermobile,
  registernormal,
  resetpasswordBtn,
  resetpassword
} from '@/network/user.js'
import { setItem } from '@/utils/storage.js'

const { loginStore, useUsersStore } = useStore()

let stateBtn = ref(1) //密码登录 1 or验证码登录 2
//密码和验证码选择切换
const handleStateBtn = (res) => {
  if (stateBtn.value === res) return
  stateBtn.value = res
  passwordInfo.password = ''
  passwordInfo.mobile = ''
  mobileInfo.mobile = ''
  mobileInfo.code = ''
}

let otherBtn = ref('other')
let codeTime = ref(-1)
let agreement = ref(false) //是否同意协议
// 手机号密码登录接口数据
let passwordInfo = reactive({
  mobile: '15650053503',
  password: '123456'
})
// 手机验证码登录接口数据
let mobileInfo = reactive({
  mobile: '',
  code: ''
})
// 注册接口数据初始化函数
const registerInfoInit = () => ({
  mobile: '',
  password: '',
  code: '',
  nickname: '',
  invitationCode: ''
})
// 注册接口数据
let registerInfo = reactive(registerInfoInit())
// 找回密码
const resettingInfoInit = () => ({
  mobile: '',
  password: '',
  code: '',
  passwordAgain: '',
})
//重置密码接口数据
let resettingInfo=reactive(resettingInfoInit())
//登录按钮
const handleLoginBtn = async () => {
  if (!agreement.value && !(otherBtn.value === 'resetting')) {
    return
  }
  // 手机密码登录
  if (stateBtn.value === 1 && otherBtn.value === 'other') {
    let result = await loginmobile(passwordInfo)
    if (result.code === 200) {
      setItem('token', result.data.token)
      loginStore.token = result.data.token
      setItem('userId', result.data.userId)
      loginStore.userId = result.data.userId
      loginStore.login = false
      await useUsersStore.handleUserInfo()
    } else {
      alert(result.msg)
    }
  }
  // 手机验证码登录
  if (stateBtn.value === 2 && otherBtn.value === 'other') {
    let result = await logincode(mobileInfo)
    if (result.code === 200) {
      setItem('token', result.data.token)
      loginStore.token = result.data.token
      setItem('userId', result.data.userId)
      loginStore.userId = result.data.userId
      loginStore.login = false
      await useUsersStore.handleUserInfo()
    } else {
      alert(result.msg)
    }
  }
  // 注册账号
  if (otherBtn.value === 'register') {
    const result = await registernormal(registerInfo)
    if (result.code === 200) {
      console.log('注册成功')
      otherBtn.value = 'other'
      Object.assign(registerInfo, registerInfoInit())
    }
  }
  //忘记密码
  if (otherBtn.value === 'resetting') {
    console.log("34534")
    const result = await resetpasswordBtn(resettingInfo)
    if (result.code === 200) {
      console.log('修改成功')
      otherBtn.value = 'other'
      Object.assign(resettingInfo, resettingInfoInit())
    }
  }
}
//注册页面显示
const handleRegisterShow = () => {
  otherBtn.value = 'register'
}
//注册返回
const handleOtherShow = () => {
  otherBtn.value = 'other'
  Object.assign(registerInfo, registerInfoInit())
}
// 忘记密码
const handleResettingShow = () => {
  otherBtn.value = 'resetting'
}
// 倒计时
const handleCodeTime60 = () => {
  if (codeTime.value >= 0) {
    codeTime.value--
    setTimeout(handleCodeTime60, 1000)
  }
}
//验证码组件
const handleCodeTime = async () => {
  console.log(mobileInfo)
  if (stateBtn.value === 2 && otherBtn.value === 'other') {
    //手机号登录
    // const phoneRegex = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    // if (phoneRegex.test(mobileInfo.mobile)) {
    //   console.log('手机号码格式正确')
    if (codeTime.value >= 0) {
      return
    }
    const result = await codeloginmobile({ mobile: mobileInfo.mobile })
    codeTime.value = 60
    setTimeout(handleCodeTime60, 1000)

    // }
    // else {
    //   console.log('手机号码格式不正确')
    // }

  } else if (otherBtn.value === 'register') {
    //注册
    const phoneRegex = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    if (phoneRegex.test(registerInfo.mobile)) {
      console.log('手机号码格式正确')
      if (codeTime.value >= 0) {
        return
      }
      const result = await registermobile({ mobile: registerInfo.mobile })
      codeTime.value = 60
      setTimeout(handleCodeTime60, 1000)
    } else {
      console.log('手机号码格式不正确')
    }
  }else if (otherBtn.value === 'resetting') {
    //注册
    const phoneRegex = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
    if (phoneRegex.test(resettingInfo.mobile)) {
      console.log('手机号码格式正确')
      if (codeTime.value >= 0) {
        return
      }
      const result = await resetpassword({ mobile: resettingInfo.mobile })
      codeTime.value = 60
      setTimeout(handleCodeTime60, 1000)
    } else {
      console.log('手机号码格式不正确')
    }
  }


}

</script>

<style lang='scss' scoped>
@import "./index.scss";
</style>
