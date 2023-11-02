<template>
  <div id='myAccount'>
    <div class='content'>
      <!--   tabs    -->
      <div class='tabBox'>
        <div class='bg'>
          <div class='icons'>
            <div class='iconsAfter'></div>
          </div>
          <div class='avatar'>
            <div class='photo'>
              <div class='photoBox' @click='photoFileOpen'>
<!--                <el-upload-->
<!--                  class='avatar-uploader'-->
<!--                  action=''-->
<!--                  :show-file-list='false'-->
<!--                  :http-request='uploadFile'-->
<!--                />-->
            </div>
          </div>
        </div>
        <div class='nickName'>{{ useUsersStore.userInfo.nickname }}</div>
        <div class='tabs'>
          <div class='bg'>
            <div class='tabsText'>
              <div class='text' v-for='(item,index) in tabList' :key='"tabList"+item.id'>
                <div class='TabName' @click='handleTabShow(item,index)'>{{ item.name }}</div>
                <div class='icon' v-if='item.id===1'></div>
              </div>
            </div>
          </div>
        </div>
        <div class='exitBtn' @click='handleLoginExit'>退出登录</div>
      </div>
    </div>
    <div class='box'>
      <router-view></router-view>
    </div>
      <passwordPopup />
      <authenticationPopup />
      <realNameZFBPopup v-if='useUsersStore.realNameZFBPopup'/>
  </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router/index.js'
import { useStore } from '@/pinia/index.js'
import { getItem, removeItem } from '@/utils/storage.js'
import passwordPopup from './components/passwordPopup.vue'
import authenticationPopup from './components/authenticationPopup.vue'
import realNameZFBPopup from './components/realNameZFBPopup.vue'
import { userlogout } from '@/network/userInterface.js'

const { loginStore, useUsersStore } = useStore()
const imageUrl = ref('')
let indexActive = ref(0)
let tabList = reactive([
  {
    name: '资产库',
    id: 1,
    pushLink: 'assetLibrary'
  }, {
    name: '订单明细',
    id: 2,
    pushLink: 'orderForm'
  }, {
    name: '个人资料',
    id: 3,
    pushLink: 'personal'
  }
])
//tab标签切换
const handleTabShow = (item, index) => {
  if (index !== -1) {
    if (index === indexActive) return
    if (index === 2) {
      useUsersStore.handleUserInfo()
    }
    indexActive.value = index
    router.push(item.pushLink)

  }
  let tabDom = document.querySelector('.icons')
  let tab = tabDom.getBoundingClientRect()
  let tabBg = document.querySelector('.tabs .bg').getBoundingClientRect()
  let tabText = document.querySelectorAll('.TabName')[indexActive.value].getBoundingClientRect()
  console.log(tab.width / Math.sqrt(2))
  let lefts = tabText.left - tabBg.left + (tabText.width / 2) - (tab.width / Math.sqrt(2) / 2)
  tabDom.style.left = lefts + 'px'
}

window.addEventListener('resize', function() {
  // 执行需要的操作
  // console.log('窗口大小已改变');
  handleTabShow(-1)
})

const handleAvatarSuccess = (
  response,
  uploadFile
) => {
  console.log('上传地址', URL.createObjectURL(uploadFile.raw))
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
}

const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== 'image/jpeg') {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  return true
}
//打开上传框
const photoFileOpen = () => {
  const input = document.querySelector('.photoFileInput')
  input.click()
}

const getPhotoFile = (e) => {
  console.log(e, ...e.target.files)
}

const handleFile = (e) => {
  console.log(e)
}

onMounted(() => {
  useUsersStore.handleUserInfo()
  console.log('userInfo', useUsersStore.userInfo)
})
//退出登录
const handleLoginExit=async ()=>{
  let result = await userlogout()
  removeItem('token')
  loginStore.token=""
  loginStore.userId=""
  removeItem('userId')
  useUsersStore.handleUserInfoInit()
  loginStore.login=true
  console.log("退出登录")

}
const getToken = () => {
  getItem('token')
}
</script>

<style lang='scss' scoped>
@import "index.scss";
</style>
