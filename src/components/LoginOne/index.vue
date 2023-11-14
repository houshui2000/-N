<template>
  <Transition name="transition05s">
    <div id="login" v-if="loginStore.login">
      <div class="content">
        <div class="close" @click="() => (loginStore.login = false)"></div>
        <div class="contentLogin">
          <div class="left"></div>
          <div class="right">
            <div class="rightContent">
              <!--      logo      -->
              <div class="loginIcon" v-if="otherBtn === 'other'"></div>
              <!--      密码和验证码切换      -->
              <div class="LoginText" v-if="otherBtn === 'other'">
                <div class="text" @click="handleStateBtn(1)">
                  密码登录
                  <div class="borderText" :class="{ active: stateBtn === 1 }"></div>
                </div>
                <div class="text" @click="handleStateBtn(2)">
                  验证码登录
                  <div class="borderText" :class="{ active: stateBtn === 2 }"></div>
                </div>
              </div>
              <!--      input框      -->
              <div class="loginBox">
                <!--      密码        -->
                <div class="password" v-if="stateBtn === 1 && otherBtn === 'other'">
                  <div class="inputBox">
                    <input
                      v-model="passwordInfo.mobile"
                      placeholder="请输入手机号"
                      @blur="handlePasswordInfoAdminBlur"
                      maxlength="11"
                      onkeyup="value=value.replace(/[^0-9]/g,'')"
                    />
                    <div class="verification">{{ passwordInfoVerificationAdmin }}</div>
                  </div>
                  <div class="inputBox marginTop18">
                    <input
                      v-model="passwordInfo.password"
                      type="password" 
                      placeholder="请输入密码"
                      maxlength="16"
                      onkeyup="value=value.replace(/[\W]/g,'')"
                      @blur="handlePasswordInfoPasswordBlur"
                    />
                    <div class="verification">{{ passwordInfoVerificationPassword }}</div>
                  </div>
                </div>
                <!--       手机验证码       -->
                <div class="mobileCode" v-if="stateBtn === 2 && otherBtn === 'other'">
                  <div class="inputBox">
                    <input
                      v-model="mobileInfo.mobile"
                      placeholder="请输入手机号"
                      @blur="handleMobileInfoBlur"
                      maxlength="11"
                      onkeyup="value=value.replace(/[^0-9]/g,'')"
                    />
                    <div class="verification">{{ mobileInfoVerification }}</div>
                  </div>
                  <div class="inputBox codeBox marginTop18">
                    <input
                      v-model="mobileInfo.code"
                      placeholder="请输入验证码"
                      maxlength="6"
                      onkeyup="value=value.replace(/[^0-9]/g,'')"
                    />
                    <div class="code" @click="handleCodeTime()">
                      {{ codeTime >= 0 ? codeTime + "s" : "获取验证码" }}
                    </div>
                  </div>
                </div>
                <!--      注册      -->
                <div class="registerBox" v-if="otherBtn === 'register'">
                  <div class="title">
                    <span>注册账号</span>
                    <div class="border"></div>
                  </div>
                  <div class="inputBox marginTop21">
                    <input
                      v-model="registerInfo.mobile"
                      type="number"
                      placeholder="请输入手机号"
                      maxlength="11"
                      onkeyup="value=value.replace(/[^0-9]/g,'')"
                      @blur="handleRegisterInfoBlur"
                    />
                    <div class="verification">{{ registerInfoVerification }}</div>
                  </div>
                  <div class="inputBox codeBox marginTop18">
                    <input v-model="registerInfo.code" type="number" placeholder="请输入验证码" maxlength="6" />
                    <div class="code" @click="handleCodeTime()">
                      {{ registerCodeTime >= 0 ? registerCodeTime + "s" : "获取验证码" }}
                    </div>
                  </div>
                  <div class="inputBox marginTop18">
                    <input
                      v-model="registerInfo.password"
                      placeholder="请输入不超过16位的密码"
                      maxlength="16"
                      type="password"
                    />
                    <!--                    onkeyup="value=value.replace(/\W/g,'')"-->
                  </div>
                  <div class="inputBox marginTop18">
                    <input
                      v-model="registerInfo.nickname"
                      placeholder="请输入昵称（选填）"
                      minlength="2"
                      maxlength="11"
                    />
                    <!--                    onkeyup="value=value.replace(/[^\w\u4E00-\u9FA5]/g, '')"-->
                  </div>
                  <div class="inputBox marginTop18">
                    <input
                      oninput="if(/[\u4E00-\u9FA5]/g.test(value)){value=''}"
                      v-model="registerInfo.invitationCode"
                      placeholder="请输入推荐码（选填）"
                      maxlength="11"
                    />
                    <!--                    onkeyup="value=value.replace(/[\W]/g,'')"-->
                  </div>
                </div>
                <!--      找回密码          -->
                <div class="registerBox" v-if="otherBtn === 'resetting'">
                  <div class="title">
                    <span>找回密码</span>
                    <div class="border"></div>
                  </div>
                  <div class="inputBox marginTop21">
                    <input
                      v-model="resettingInfo.mobile"
                      placeholder="请输入手机号"
                      maxlength="11"
                      onkeyup="value=value.replace(/[^0-9]/g,'')"
                      @blur="handleResettingInfoBlur"
                    />
                    <div class="verification">{{ resettingInfoVerification }}</div>
                  </div>
                  <div class="inputBox codeBox marginTop18">
                    <input
                      v-model="resettingInfo.code"
                      placeholder="请输入验证码"
                      maxlength="6"
                      onkeyup="value=value.replace(/[^0-9]/g,'')"
                    />
                    <div class="code" @click="handleCodeTime()">
                      {{ resettingCodeTime >= 0 ? resettingCodeTime + "s" : "获取验证码" }}
                    </div>
                  </div>
                  <div class="inputBox marginTop18">
                    <input
                      v-model="resettingInfo.password"
                      placeholder="请输入不超过16位的密码"
                      @blur="handleResettingInfoPassWordBlur"
                      type="password"
                      maxlength="16"
                    />
                    <div class="verification">{{ resettingInfoVerificationPassword }}</div>
                  </div>
                  <div class="inputBox marginTop18">
                    <input
                      v-model="resettingInfo.passwordAgain"
                      placeholder="请输入再次输入密码"
                      @blur="handleResettingInfoPassWordAgainBlur"
                      type="password"
                      maxlength="16"
                      onkeyup="value=value.replace(/[\W]/g,'')"
                    />
                    <div class="verification">{{ resettingInfoVerificationPasswordAgain }}</div>
                  </div>
                </div>
                <!--        其他按钮      -->
                <div class="otherBtnBox" v-if="stateBtn === 1 && otherBtn === 'other'">
                  <div class="text" @click="handleResettingShow">忘记密码?</div>
                  <div>
                    <span class="spanText">还没账号?</span>
                    <span class="text" @click="handleRegisterShow">去注册</span>
                  </div>
                </div>
                <div class="registerBtnBox" v-if="otherBtn === 'register'">
                  <div>
                    <span class="spanText">已有账号?</span>
                    <span class="text" @click="handleOtherShow">去登录</span>
                  </div>
                </div>
                <div class="resettingBtnBox" v-if="otherBtn === 'resetting'">
                  <div>
                    <span class="text" @click="handleOtherShow">返回登录页面</span>
                  </div>
                </div>
                <div class="otherBtnBox" v-if="stateBtn === 2"></div>
                <!--      登录        -->
                <div class="loginBtnBox" v-if="otherBtn === 'other'" @click="handleLoginBtn">登 录</div>
                <div class="registerBtn marginTop31" v-if="otherBtn === 'register'" @click="handleLoginBtn">注 册</div>
                <div class="resettingBtn marginTop31" v-if="otherBtn === 'resetting'" @click="handleLoginBtn">
                  确 定
                </div>
                <!--       用户协议       -->
                <div
                  class="checkboxBox"
                  style="font-size: 12px"
                  :class="{ 'apply-shake': agreementShow }"
                  v-if="otherBtn !== 'resetting'"
                >
                  <el-checkbox v-model="agreement" class="checkboxBox-checkbox"></el-checkbox>
                  我已满18周岁，并且同意
                  <span
                    style="color: #42bbff; font-size: 12px"
                    @click="() => ((loginStore.login = false), $router.push('/helpCenter/userUs'))"
                  >
                    《用户协议》
                  </span>
                  和
                  <span
                    style="color: #42bbff; font-size: 12px"
                    @click="() => ((loginStore.login = false), $router.push('/helpCenter/privacyUs'))"
                  >
                    《隐私协议》
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup name="loginMyad">
import MessageBoxVue from "@/components/MessageBox/index.js"
import { useStore } from "@/pinia"
import { ref, reactive, watch } from "vue"
import {
  codeloginmobile,
  logincode,
  loginmobile,
  registermobile,
  registernormal,
  resetpasswordBtn,
  resetpassword
} from "@/network/user.js"
import { setItem } from "@/utils/storage.js"
const { loginStore, useUsersStore } = useStore()
import { useRoute } from "vue-router"
// 校验规则
const phoneRegex = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
let stateBtn = ref(1) //密码登录 1 or验证码登录 2
//密码和验证码选择切换
const handleStateBtn = (res) => {
  if (stateBtn.value === res) return
  stateBtn.value = res
  handleLoginShowInit()
}
const route = useRoute()
let otherBtn = ref("other")
let codeTime = ref(-1)
let registerCodeTime = ref(-1)
let resettingCodeTime = ref(-1)
let agreement = ref(false) //是否同意协议
let agreementShow = ref(false)
// 手机号密码登录接口数据
let passwordInfo = reactive({
  mobile: "",
  password: ""
  // mobile: '',
  // password: ''
})
// 手机验证码登录接口数据
let mobileInfo = reactive({
  mobile: "",
  code: ""
})
// 注册接口数据初始化函数
const registerInfoInit = () => ({
  mobile: "",
  password: "",
  code: "",
  nickname: "",
  invitationCode: ""
})
// 注册接口数据
let registerInfo = reactive(registerInfoInit())
// 找回密码
const resettingInfoInit = () => ({
  mobile: "",
  password: "",
  code: "",
  passwordAgain: ""
})
//重置密码接口数据
let resettingInfo = reactive(resettingInfoInit())
// registerInfo.invitationCode = "xxx"

//协议校验
const handleAgreement = () => {
  if (!agreement.value && !(otherBtn.value === "resetting")) {
    MessageBoxVue({
      title: "请勾选协议"
    })
    agreementShow.value = true
    setTimeout(() => {
      agreementShow.value = false
    }, 820)
    return true
  }
}
//登录按钮
const handleLoginBtn = async () => {
  // 手机密码登录
  if (stateBtn.value === 1 && otherBtn.value === "other") {
    if (passwordInfo.mobile === "" || passwordInfo.password === "") {
      MessageBoxVue({
        title: "请输入手机号或密码"
      })
      return
    }
    if (handleAgreement()) return
    let result = await loginmobile(passwordInfo)
    if (result.code === 200) {
      setItem("token", result.data.token)
      loginStore.token = result.data.token
      setItem("userId", result.data.userId)
      loginStore.userId = result.data.userId
      loginStore.login = false
      await useUsersStore.handleUserInfo()
      MessageBoxVue({
        title: "登录成功"
      })
    } else {
      // alert(result.msg)
      MessageBoxVue({
        title: result.msg
      })
    }
  }
  // 手机验证码登录
  if (stateBtn.value === 2 && otherBtn.value === "other") {
    if (mobileInfo.mobile === "" || mobileInfo.code === "") {
      MessageBoxVue({
        title: "请输入手机号或验证码"
      })
      return
    }
    if (handleAgreement()) return
    let result = await logincode(mobileInfo)
    if (result.code === 200) {
      setItem("token", result.data.token)
      loginStore.token = result.data.token
      setItem("userId", result.data.userId)
      loginStore.userId = result.data.userId
      loginStore.login = false
      await useUsersStore.handleUserInfo()
      MessageBoxVue({
        title: "登录成功"
      })
    } else {
      // alert(result.msg)
      MessageBoxVue({
        title: result.msg
      })
    }
  }
  // 注册账号
  if (otherBtn.value === "register") {
    // for (let val of Object.values(registerInfo)) {
    //   if(val==='') {
    //     handleRegisterInfoBlur()
    //     return
    //   }
    // }
    // if(registerInfo.mobile===)
    if (handleAgreement()) return
    const result = await registernormal(registerInfo)
    if (result.code === 200) {
      MessageBoxVue({
        title: "注册成功"
      })
      otherBtn.value = "other"
      Object.assign(registerInfo, registerInfoInit())
    }
  }
  //忘记密码
  if (otherBtn.value === "resetting") {
    // 请后续人员优化
    const mobile =
      /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/

    if (!mobile.test(resettingInfo.mobile)) {
      MessageBoxVue({
        title: "请输入正确的手机号"
      })
      return
    }
    if (!resettingInfo.code) {
      MessageBoxVue({
        title: "请输入验证码"
      })
      return
    }

    if (resettingInfo.password.length >= 16) {
      MessageBoxVue({
        title: "请输入不超过16位的密码"
      })
      return
    }
    if (resettingInfo.password !== resettingInfo.passwordAgain) {
      MessageBoxVue({
        title: "俩次密码不一致"
      })
      return
    }
    // 请后续人员优化end

    const result = await resetpasswordBtn(resettingInfo)
    if (result.code === 200) {
      otherBtn.value = "other"
      Object.assign(resettingInfo, resettingInfoInit())
    }
  }
}
// 格式化本地
const handleLoginShowInit = () => {
  passwordInfo.mobile = ""
  passwordInfo.password = ""
  mobileInfo.mobile = ""
  mobileInfo.code = ""
  mobileInfoVerification.value = ""
  registerInfoVerification.value = ""
  passwordInfoVerificationAdmin.value = ""
  passwordInfoVerificationPassword.value = ""
}

//注册页面显示
const handleRegisterShow = () => {
  otherBtn.value = "register"
  handleLoginShowInit()
}
//注册返回
const handleOtherShow = () => {
  otherBtn.value = "other"
  Object.assign(registerInfo, registerInfoInit())
  registerInfoVerification.value = ""
}
// 忘记密码
const handleResettingShow = () => {
  otherBtn.value = "resetting"
  Object.assign(resettingInfo, resettingInfoInit())
  resettingInfoVerification.value = ""
  resettingInfoVerificationPassword.value = ""
  resettingInfoVerificationPasswordAgain.value = ""
  handleLoginShowInit()
}
// 倒计时
const handleCodeTime60 = () => {
  if (codeTime.value >= 0) {
    codeTime.value--
    setTimeout(handleCodeTime60, 1000)
  }
}
const handleRegisterCodeTime60 = () => {
  if (registerCodeTime.value >= 0) {
    registerCodeTime.value--
    setTimeout(handleRegisterCodeTime60, 1000)
  }
}
const handleResettingCodeTime60 = () => {
  if (resettingCodeTime.value >= 0) {
    resettingCodeTime.value--
    setTimeout(handleResettingCodeTime60, 1000)
  }
}
//验证码组件
const handleCodeTime = async () => {
  if (stateBtn.value === 2 && otherBtn.value === "other") {
    //手机号登录
    const mobile =
      /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/

    if (!mobile.test(mobileInfo.mobile)) {
      MessageBoxVue({
        title: "请输入正确的手机号"
      })
      return
    }
    if (phoneRegex.test(mobileInfo.mobile)) {
      if (codeTime.value >= 0) {
        return
      }
      codeloginmobile({ mobile: mobileInfo.mobile })
      codeTime.value = 60
      setTimeout(handleCodeTime60, 1000)
    }
  } else if (otherBtn.value === "register") {
    //注册
    if (phoneRegex.test(registerInfo.mobile)) {
      if (registerCodeTime.value >= 0) {
        return
      }
      registermobile({ mobile: registerInfo.mobile })
      registerCodeTime.value = 60
      setTimeout(handleRegisterCodeTime60, 1000)
    }
  } else if (otherBtn.value === "resetting") {
    // 修改密码
    if (phoneRegex.test(resettingInfo.mobile)) {
      if (resettingCodeTime.value >= 0) {
        return
      }
      resetpassword({ mobile: resettingInfo.mobile })
      resettingCodeTime.value = 60
      setTimeout(handleResettingCodeTime60, 1000)
    }
  }
}

//    ===================   校验  =========================
// 账号密码校验
let passwordInfoVerificationAdmin = ref("")
let passwordInfoVerificationPassword = ref("")
const isNumber = /^\d+$/;

const handlePasswordInfoAdminBlur = () => {
  
  if (!isNumber.test(passwordInfo.mobile)) passwordInfo.mobile = ''
  if (passwordInfo.mobile === "") {
    passwordInfoVerificationAdmin.value = "手机号不能为空"
  } else if (!phoneRegex.test(passwordInfo.mobile)) {
    passwordInfoVerificationAdmin.value = "手机号输入错误"
  } else {
    passwordInfoVerificationAdmin.value = ""
  }
}
const handlePasswordInfoPasswordBlur = () => {
  if (passwordInfo.password === "") {
    passwordInfoVerificationPassword.value = "密码不能为空"
  } else {
    passwordInfoVerificationPassword.value = ""
  }
}

//    手机验证码登录
let mobileInfoVerification = ref("")
// 校验规则
const handleMobileInfoBlur = () => {
  if (mobileInfo.mobile === "") {
    mobileInfoVerification.value = "手机号不能为空"
  } else if (!phoneRegex.test(mobileInfo.mobile)) {
    mobileInfoVerification.value = "手机号输入错误"
  } else {
    mobileInfoVerification.value = ""
  }
}
let registerInfoVerification = ref("")
const handleRegisterInfoBlur = () => {
  if (registerInfo.mobile === "") {
    registerInfoVerification.value = "手机号不能为空"
  } else if (!phoneRegex.test(registerInfo.mobile)) {
    registerInfoVerification.value = "手机号输入错误"
  } else {
    registerInfoVerification.value = ""
  }
}
let resettingInfoVerification = ref("")
const handleResettingInfoBlur = () => {
  if (resettingInfo.mobile === "") {
    resettingInfoVerification.value = "手机号不能为空"
  } else if (!phoneRegex.test(resettingInfo.mobile)) {
    resettingInfoVerification.value = "手机号输入错误"
  } else {
    resettingInfoVerification.value = ""
  }
}
let resettingInfoVerificationPassword = ref("")
let resettingInfoVerificationPasswordAgain = ref("")
const handleResettingInfoPassWordBlur = () => {
  if (resettingInfo.password === "") {
    resettingInfoVerificationPassword.value = "密码不能为空"
  } else if (!(resettingInfo.password === resettingInfo.passwordAgain)) {
    resettingInfoVerificationPassword.value = "两次密码不一致"
    resettingInfoVerificationPasswordAgain.value = "两次密码不一致"
  } else {
    resettingInfoVerificationPasswordAgain.value = ""
    resettingInfoVerificationPassword.value = ""
  }
}
const handleResettingInfoPassWordAgainBlur = () => {
  if (resettingInfo.passwordAgain === "") {
    resettingInfoVerificationPasswordAgain.value = "密码不能为空"
  } else if (!(resettingInfo.password === resettingInfo.passwordAgain)) {
    resettingInfoVerificationPassword.value = "两次密码不一致"
    resettingInfoVerificationPasswordAgain.value = "两次密码不一致"
  } else {
    resettingInfoVerificationPassword.value = ""
    resettingInfoVerificationPasswordAgain.value = ""
  }
}
/**
 * 判断有没有推荐码
 */
const referralcode = () => {
  if (!route.query.code) return
  registerInfo.invitationCode = route.query.code
}
referralcode()
watch(
  () => loginStore.login,
  (newVal) => {
    if (newVal) {
      referralcode()
      return
    }
    handleOtherShow()
    stateBtn.value = 1
    handleLoginShowInit()
  },
  {
    deep: true
  }
)
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
<!-- translate(-50%,-50%) rotate(45deg) scaleY(1) -->
