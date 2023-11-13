<template>
  <div id="personal">
    <div class="personalBg">
      <div class="content">
        <div class="title">账号管理</div>
        <div class="inputBox marginTop28" :class="{ active: !adminInput.nickName }">
          <div class="label">用户昵称</div>
          <div>
            <input
              class="inputSumnickName"
              v-model="admin.nickName"
              :disabled="adminInput.nickName"
              placeholder="请输入昵称"
            />
          </div>
          <div class="inputBtn" :class="{ active: !adminInput.nickName }">
            <div class="inputBtn2" @click="handleEditInput('nickName')">
              {{ adminInput.nickName ? "修改" : "保存" }}
            </div>
          </div>
        </div>
        <div class="inputBox">
          <div class="label">绑定手机号</div>
          <div>
            <input class="inputSum" v-model="mobileValue" disabled @blur="handleEditInput('nickName')" />
          </div>
        </div>
        <div class="inputBox">
          <div class="label">登录密码</div>
          <div>
            <input class="inputSum" v-model="admin.password" disabled />
          </div>
          <div class="inputBtn">
            <div class="inputBtn2" @click="handleEditPassword">修改</div>
          </div>
        </div>
        <div class="inputBox">
          <div class="label">实名认证</div>
          <div>
            <input class="inputSumnickName" v-model="admin.authentication" disabled />
          </div>

          <div class="inputBtn" v-if="useUsersStore.userInfo.tradePermission <= 0">
            <div class="inputBtn2" @click="handleAuthenticationPopupShow">去实名</div>
          </div>
        </div>
        <div class="inputBox">
          <div class="label">添加银行卡</div>
          <div></div>
          <div class="inputBtn">
            <div class="inputBtn2" @click="handleBankCardPopupShow">编辑</div>
          </div>
        </div>
      </div>
    </div>
    <div class="personalBg">
      <div class="content">
        <div class="title">邀请码</div>
        <div class="inputBox_box">
          <div class="inputBox marginTop28" :class="{ active: !adminInput.invitationCode }">
            <div class="label">邀请码</div>
            <div style="display: flex">
              <input
                ref="inputRef"
                class="inputSuminvitationCode"
                v-model="admin.invitationCode"
                :disabled="adminInput.invitationCode"
              />
              <div class="copyIcon" @click="handleCopyIcon"></div>
            </div>
            <div class="inputBtn">
              <div
                class="inputBtn2"
                @click="handleEditInput('invitationCode')"
                :class="{ active: !adminInput.invitationCode }"
              >
                {{ adminInput.invitationCode ? "修改" : "保存" }}
              </div>
            </div>
          </div>
          <div v-copy="'adminInputinvitationCode'" class="prompt">
            *只可以修改一次
            <span style="display: none" id="adminInputinvitationCode">{{ admin.invitationCode }}</span>
            <div class="text">
              <SvgIcon size="50px" Height="100%" icon-class="personalPromotion" />
            </div>
          </div>
        </div>
        <div class="inputBox_box">
          <div class="inputBox" :class="{ active: !adminInput.bindingCode }">
            <div class="label">绑定邀请码</div>
            <div>
              <input
                class="inputSumbindingCode"
                v-model="admin.bindingCode"
                :disabled="adminInput.bindingCode"
                placeholder="请输入邀请码"
              />
            </div>
            <div class="inputBtn" v-if="!useUsersStore.userInfo.invitationCode">
              <div
                class="inputBtn2"
                @click="handleEditInput('bindingCode')"
                :class="{ active: !adminInput.bindingCode }"
              >
                {{ adminInput.bindingCode ? "修改" : "保存" }}
              </div>
            </div>
            <div class="bindingPrompt">*只可以绑定一次</div>
          </div>
        </div>
      </div>
    </div>
    <!--    绑定银行卡列表弹窗    -->
    <BankCardPopup
      :bankCardShow="bankCardShow"
      @handleCloseEmit="handleBankCardCloseEmit"
      @handleUnBindingEmit="handleUnBindingEmit"
      @handleBankCardEmit="handleBankCardEmit"
    ></BankCardPopup>
    <!--  解绑银行卡  -->
    <BankCardUnBindingPopup
      :bankCardUnBindingShow="bankCardUnBindingShow"
      @handleBankCardUnBindingCloseEmit="handleBankCardUnBindingCloseEmit"
      @handleBankCardUnBindingConfirmEmit="handleBankCardUnBindingConfirmEmit"
    ></BankCardUnBindingPopup>
    <!--  绑定银行卡  -->
    <BankCardBindingPopup
      :bankCardBindingShow="bankCardBindingShow"
      @handleBankCardBindingCloseEmit="handleBankCardBindingCloseEmit"
      @handleBankCardBindingConfirm="handleBankCardBindingConfirm"
    ></BankCardBindingPopup>
    <bank-card-binding-code-popup
      :bankCardBindingCodeShow="bankCardBindingCodeShow"
      :ids="orderId"
      @handleBankCardBindingCodeCloseEmit="handleBankCardBindingCodeCloseEmit"
    ></bank-card-binding-code-popup>
  </div>
</template>

<script setup>
import { reactive, nextTick, computed, ref, onUnmounted, watch, onMounted } from "vue"

// import { ElMessage } from "element-plus"
import { useStore } from "@/pinia/index.js"
import { bindInvitationCodePost, invitationCodePost, nicknameEdit } from "@/network/personalCenter.js"
import MessageBoxVue from "@/components/MessageBox/index.js"
import SvgIcon from "@/components/SvgIcon/index.vue"
import BankCardPopup from "@/views/personalCenter/components/bankCardPopup.vue"
import BankCardUnBindingPopup from "@/views/personalCenter/components/bankCardUnBindingPopup.vue"
import BankCardBindingPopup from "@/views/personalCenter/components/bankCardBindingPopup.vue"
import BankCardBindingCodePopup from "@/views/personalCenter/components/bankCardBindingCodePopup.vue"

const { useUsersStore } = useStore()
let bankCardShow = ref(false) //控制绑定银行卡列表弹窗
let bankCardUnBindingShow = ref(false) //控制绑定银行卡
let bankCardBindingShow = ref(false) //绑定银行卡
let bankCardBindingCodeShow = ref(false) //控制验证码显示
let orderId = ref("") //订单id
watch(
  () => useUsersStore,
  (newVal) => {
    admin.value = {
      nickName: newVal.userInfo.nickname,
      mobile: newVal.userInfo.mobile,
      password: "******",
      authentication: newVal.userInfo.tradePermission > 0 ? "已实名" : "未实名",
      invitationCode: newVal.userInfo.ownerInvitationCode, //自己邀请码
      bindingCode: newVal.userInfo.invitationCode //绑定邀请码
    }
    // mobileInfo.mobile = ""
    // mobileInfo.code = ""
    // passwordInfo.mobile = ""
    // passwordInfo.password = ""
  },
  {
    deep: true
  }
)
const inputRef = ref(null)
onMounted(() => {
  let div = document.querySelector("div")
  div.addEventListener("click", () => {})
})
let admin = ref({
  nickName: useUsersStore.userInfo.nickname,
  mobile: useUsersStore.userInfo.mobile,
  password: "******",
  authentication: useUsersStore.userInfo.tradePermission > 0 ? "已实名" : "未实名",
  invitationCode: useUsersStore.userInfo.ownerInvitationCode, //自己邀请码
  bindingCode: useUsersStore.userInfo.invitationCode //绑定邀请码
})
let adminInput = reactive({
  nickName: true,
  invitationCode: true,
  bindingCode: true
})
const mobileValue = computed(() => {
  let mobile = ""
  mobile += admin.value.mobile.substring(0, 3)
  mobile += admin.value.mobile ? "****" : ""
  mobile += admin.value.mobile.substring(7)
  return mobile
})
// 修改接口
const handleEditInput = async (item) => {
  for (let adminInputKey in adminInput) {
    if (adminInputKey === item) {
      // 未选中状态
      if (adminInput[item]) {
        adminInput[item] = false
        let dom = document.querySelector(".inputSum" + adminInputKey)
        nextTick(() => {
          dom.focus()
        })
        //   选中状态
      } else {
        if (item === "nickName") {
          const res = await nicknameEdit({ nickname: admin.value.nickName })
          if (res.code === 200) {
            await useUsersStore.handleUserInfo()
            adminInput[item] = true
            MessageBoxVue({
              title: "修改成功"
            })
          }
        }
        if (item === "invitationCode") {
          const res = await invitationCodePost({ invitationCode: admin.value.invitationCode })
          if (res.code === 200) {
            MessageBoxVue({
              title: res.msg
            })
            await useUsersStore.handleUserInfo()
          } else {
            admin.value.ownerInvitationCode = useUsersStore.userInfo.ownerInvitationCode
          }
        }
        if (item === "bindingCode") {
          const res = await bindInvitationCodePost({ invitationCode: admin.value.bindingCode })
          if (res.code === 200) {
            MessageBoxVue({
              title: res.msg
            })
            await useUsersStore.handleUserInfo()
          } else {
            admin.value.ownerInvitationCode = useUsersStore.userInfo.invitationCode
          }
        }

        // ElMessage({
        //   message: '修改成功',
        //   type: 'success',
        // })
        // adminInput[item] = true
      }
    }
  }
}
const handleEditPassword = () => {
  useUsersStore.passwordPopup = true
}
/**去实名认证 */
const handleAuthenticationPopupShow = () => {
  useUsersStore.authenticationPopup = true
  useUsersStore.certNo = ""
  useUsersStore.username = ""
}
//打开银行卡列表
const handleBankCardPopupShow = () => {
  bankCardShow.value = true
}
//打开银行卡子组件传值
const handleUnBindingEmit = () => {
  bankCardShow.value = false
  bankCardUnBindingShow.value = true
}
//打开添加银行卡绑定弹窗
const handleBankCardEmit = () => {
  bankCardShow.value = false
  bankCardBindingShow.value = true
}
//添加银行卡弹窗关闭按钮
const handleBankCardBindingCloseEmit = () => {
  bankCardShow.value = true
  bankCardBindingShow.value = false
}
//添加银行卡成功传参
const handleBankCardBindingConfirm = (val) => {
  orderId.value = val
  bankCardBindingCodeShow.value = true
  bankCardBindingShow.value = false
}
//关闭验证码弹窗
const handleBankCardBindingCodeCloseEmit = () => {
  bankCardShow.value = true
  bankCardBindingCodeShow.value = false
}
// //绑定银行卡短信验证成功
// const handleBankCardBindingCodeConfirmEmit =()=>{
//   bankCardShow.value = true
//   bankCardBindingCodeShow.value = false
// }
const handleCopyIcon = () => {
  const textField = document.createElement("textarea")
  textField.innerText = admin.value.invitationCode
  document.body.appendChild(textField)
  textField.select()
  document.execCommand("copy")
  textField.remove()
  MessageBoxVue({
    title: "复制成功"
  })
}
//关闭绑定银行卡列表弹窗
const handleBankCardCloseEmit = (val) => {
  bankCardShow.value = val
}
//关闭/取消弹窗
const handleBankCardUnBindingCloseEmit = (val) => {
  bankCardShow.value = true
  bankCardUnBindingShow.value = val
}
//确认解绑
const handleBankCardUnBindingConfirmEmit = () => {}
onUnmounted(() => {})
</script>

<style lang="scss" scoped>
@import "index.scss";
</style>
