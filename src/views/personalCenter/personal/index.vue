<template>
  <div id="personal">
    <div class="personalBg">
      <div class="content">
        <div class="title">账号管理</div>
        <div class="inputBox" :class="{ active: !adminInput.nickName }">
          <div class="label">用户昵称</div>
          <div>
            <input
              class="inputSumnickName"
              v-model="admin.nickName"
              :disabled="adminInput.nickName"
              placeholder="请输入昵称"
            />
          </div>
          <div class="inputBtn">
            <div class="inputBtn2" @click="handleEditInput('nickName')" :class="{ active: !adminInput.nickName }">
              {{ adminInput.nickName ? '修改' : '保存' }}
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
          <div class="inputBtn">
            <div class="inputBtn2" @click="handleAuthenticationPopupShow">去实名</div>
          </div>
        </div>
      </div>
    </div>
    <div class="personalBg">
      <div class="content">
        <div class="title">邀请码</div>
        <div class="inputBox" :class="{ active: !adminInput.invitationCode }">
          <div class="label">邀请码</div>
          <div style="display: flex">
            <input
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
              {{ adminInput.invitationCode ? '修改' : '保存' }}
            </div>
          </div>
        </div>
        <div class="prompt">
          *只可以修改一次
          <span class="text">去推广</span>
        </div>
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
          <div class="inputBtn">
            <div class="inputBtn2" @click="handleEditInput('bindingCode')" :class="{ active: !adminInput.bindingCode }">
              {{ adminInput.bindingCode ? '修改' : '保存' }}
            </div>
          </div>
        </div>
        <div class="bindingPrompt">*只可以绑定一次</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, nextTick, computed, ref, onUnmounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useStore } from '@/pinia/index.js'
import { bindInvitationCodePost, invitationCodePost, nicknameEdit } from '@/network/personalCenter.js'
import MessageBoxVue from '@/components/MessageBox/index.js'

const { useUsersStore } = useStore()
let admin = ref({
  nickName: useUsersStore.userInfo.nickname,
  mobile: useUsersStore.userInfo.mobile,
  password: '******',
  authentication: useUsersStore.userInfo.realAuthentication ? '已实名' : '未实名',
  invitationCode: useUsersStore.userInfo.ownerInvitationCode, //自己邀请码
  bindingCode: useUsersStore.userInfo.invitationCode //绑定邀请码
})
let adminInput = reactive({
  nickName: true,
  invitationCode: true,
  bindingCode: true
})
const mobileValue = computed(() => {
  return admin.value.mobile.substring(0, 3) + '****' + admin.value.mobile.substring(7)
})
// 修改接口
const handleEditInput = async (item) => {
  for (let adminInputKey in adminInput) {
    if (adminInputKey === item) {
      // 未选中状态
      if (adminInput[item]) {
        adminInput[item] = false
        let dom = document.querySelector('.inputSum' + adminInputKey)
        nextTick(() => {
          dom.focus()
        })
        //   选中状态
      } else {
        if (item === 'nickName') {
          const res = await nicknameEdit({ nickname: admin.value.nickName })
          console.log(res)
          if (res.code === 200) {
            await useUsersStore.handleUserInfo()
            adminInput[item] = true
          }
        }
        if (item === 'invitationCode') {
          console.log(admin.value.invitationCode)
          const res = await invitationCodePost({ invitationCode: admin.value.invitationCode })
          if (res.code === 200) {
            console.log(res.msg)
            MessageBoxVue({
              title: res.msg
            })
            await useUsersStore.handleUserInfo()
          } else {
            admin.value.ownerInvitationCode = useUsersStore.userInfo.ownerInvitationCode
          }
        }
        if (item === 'bindingCode') {
          console.log(admin.value.bindingCode)
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
const handleAuthenticationPopupShow = () => {
  useUsersStore.authenticationPopup = true
  useUsersStore.certNo = ''
  useUsersStore.username = ''
}
// if(item==='password'){
//
// }

const handleCopyIcon = () => {
  const textField = document.createElement('textarea')
  textField.innerText = admin.value.invitationCode
  document.body.appendChild(textField)
  textField.select()
  document.execCommand('copy')
  textField.remove()
  ElMessage({
    message: '复制成功',
    type: 'success'
  })
}
onUnmounted(() => {})
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
