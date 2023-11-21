<template>
  <div class="yuyue">
    <div v-copy="'fenxingDizhi'" class="fenxing">
      <span style="display: none" id="fenxingDizhi">{{ href }}</span>
      <SvgIcon size="55px" Height="55px" icon-class="fenxiang" />
    </div>
    <!-- form -->
    <div class="form">
      <div class="from_top">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" class="demo-ruleForm" :size="formSize" status-icon>
          <el-form-item label="手机号" prop="mobile">
            <el-input @keyup.enter="handleCodeTime" placeholder="请输入您的手机号" v-model.trim="ruleForm.mobile" />
          </el-form-item>

          <el-form-item label="验证码" prop="code">
            <div class="yanzm">
              <el-input
                @keyup.enter="submitForm(ruleFormRef)"
                placeholder="请输入验证码"
                v-model.trim="ruleForm.code"
              />
              <div class="yanzheng">
                <div class="text" @click="handleCodeTime()">{{ codeTime >= 0 ? codeTime + "s" : "获取验证码" }}</div>
                <!-- 获取验证码 -->
              </div>
            </div>
          </el-form-item>
        </el-form>
        <div class="yuyue_wenzi">
          已预约
          <span>{{ number || 0 }}</span>
          人
        </div>
      </div>
      <div class="fotm_bott">
        <div @click="submitForm(ruleFormRef)" class="aniu">提交预约</div>
        <div class="kai">提醒开售 准时抢购</div>
      </div>
    </div>
    <!-- form end-->
  </div>
</template>
<script setup>
import MessageBoxVue from "@/components/MessageBox/index.js"
import { reactive, computed, ref } from "vue"
import { shopreservation, shopreservationcount, verificationcodereservation } from "@/network/pay"
const formSize = ref("default")
const ruleFormRef = ref()

// 13075300312
const ruleForm = reactive({
  mobile: "",
  code: ""
})
const href = computed(() => {
  return window.location.href
})
const number = ref(0) //人数
const init = async () => {
  const res = await shopreservationcount()
  number.value = res.data
}

init()
// 请输入有效手机号
const validatePass2 = (rule, value, callback) => {
  let number =
    /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/

  if (!number.test(value)) {
    MessageBoxVue({
      title: "请输入有效手机号"
    })
    callback(new Error(""))
  } else {
    callback()
  }
}
// 请输入有效验证码
const validatePass = (rule, value, callback) => {
  let number = /^\d+$/
  if (!number.test(value)) {
    MessageBoxVue({
      title: "请输入有效验证码"
    })
    callback(new Error(""))
  } else if (value.length < 6) {
    MessageBoxVue({
      title: "验证码不正确"
    })

    callback(new Error(""))
  } else {
    callback()
  }
}
const rules = reactive({
  mobile: [{ required: true, validator: validatePass2, trigger: "blur" }],
  code: [{ required: true, validator: validatePass, message: "", trigger: "blur" }]
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
  //手机号登录
  const phoneRegex = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/
  // console.log(phoneRegex.test(ruleForm.mobile))

  if (phoneRegex.test(ruleForm.mobile)) {
    await verificationcodereservation({ mobile: ruleForm.mobile })
    MessageBoxVue({
      title: "发送成功"
    })
    codeTime.value = 60
    setTimeout(handleCodeTime60, 1000)
  } else {
    MessageBoxVue({
      title: "请输入有效手机号"
    })
  }
}
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      // try {
      await shopreservation(ruleForm)
      MessageBoxVue({
        title: "预约成功"
      })
      ruleForm.code = ""
      ruleForm.mobile = ""
      init()

      // } catch (e) {
      //   MessageBoxVue({
      //     title: "预约成功"
      //   })
      // }
    } else {
      return false
    }
  })
}
</script>
<style lang="scss" scoped>
%input {
  :deep(.el-input__suffix) {
    display: none;
  }
  :deep(.el-form-item__label) {
    display: flex;
    justify-content: space-between;
    font-size: 14px !important;
    @include Myflex();
    flex-flow: row-reverse;
    height: 40px !important;
  }
  :deep(.el-form-item__label) {
    font: normal normal 400 24px "PingFang SC";
    color: white;
  }
  :deep(.el-input__inner) {
    height: 40px;
    color: #ffe5b2;
    &::placeholder {
      color: #ffe5b2;
      /* 修改为你想要的颜色 */
      opacity: 0.8;
    }
  }
  :deep(.el-input__wrapper) {
    background: transparent;
    box-shadow: none;
    border-radius: 4px;
    background: #0e0a00;
    border: 2px solid #5e4837;
  }
}
.yuyue {
  position: relative;
  padding-top: 98px;
  width: 750px;
  height: 100vh;
  margin: auto;
  background: url("@/assets/images/shoppingCentre/yuyue.png") no-repeat scroll center top;
  background-size: contain;
  .fenxing {
    cursor: pointer;
    position: absolute;
    right: 150px;
    top: 0;
  }
  // form
  .form {
    padding-bottom: 34px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 458px;

    .from_top {
      padding: 40px 36px;
      margin-bottom: 44px;
      width: 100%;
      background-color: rgba(18, 16, 14, 0.7);
      border: 1px solid rgb(42, 34, 28);
      border-radius: 4px;
      @extend %input;

      .yanzm {
        width: 100%;
        @include Myflex(space-between);
        > div {
          &:first-child {
            width: calc(100% - 124px);
          }
        }
        .yanzheng {
          cursor: pointer;
          width: 104px;
          height: 40px;
          @include Myflex();
          font: normal normal 400 14px "PingFang SC";
          color: black;
          border-radius: 4px;
          background: linear-gradient(0deg, #976a43 0%, #fdd4b6 100%);
        }
      }
      .yuyue_wenzi {
        font: normal normal 400 14px "PingFang SC";
        color: white;
        span {
          color: #ffe5b2;
        }
      }
    }
    .fotm_bott {
      width: 100%;
      .aniu {
        cursor: pointer;
        margin: auto;
        @include Myflex();
        width: 80%;
        font: normal normal 600 16px "PingFang SC";
        color: white;
        height: 46px;
        border-radius: 8px;
        background: linear-gradient(90deg, #2d42ff 0%, #df00c9 96.64%);
      }
      .kai {
        margin-top: 29px;
        color: #d6ab8a;
        font: normal normal 500 18px "PingFang SC";
        text-align: center;
      }
    }
  }
}
</style>
