<template>
  <div id="myAccount">
    <div class="content">
      <!--   tabs    -->
      <transition name="transition05s">
        <div class="tabBox">
          <div class="bg">
            <div class="icons">
              <div class="iconsAfter"></div>
            </div>
            <div class="avatar">
              <div class="photo">
                <div class="photoBox">
                  <div @click="dianjiUpload" class="img">
                    <img v-if="useUsersStore.userInfo.avatar" :src="`${useUsersStore.userInfo.avatar}`" />
                  </div>
                  <el-upload
                    class="avatar-uploader"
                    action="#"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :http-request="uploadHttpRequest"
                    :before-upload="beforeAvatarUpload"
                  >
                    <!-- <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon> -->
                  </el-upload>
                </div>
              </div>
            </div>
            <div class="nickName">{{ useUsersStore?.userInfo.nickname }}</div>
            <div class="tabs">
              <div class="bg">
                <div class="tabsText">
                  <div
                    class="text"
                    v-for="(item, index) in tabList"
                    :style="{ color: indexActive === index ? 'white' : '#cccccc' }"
                    :key="'tabList' + item.id"
                  >
                    <div class="TabName" @click="handleTabShow(item, index)">
                      {{ item.name }}
                    </div>
                    <div class="icon" v-if="loginStore.hasNew"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="exitBtn" @click="handleLoginExit">退出登录</div>
          </div>
        </div>
      </transition>

      <!--  -->
      <div class="box">
        <router-view></router-view>
      </div>
      <passwordPopup />
      <authenticationPopup />
      <realNameZFBPopup v-if="useUsersStore.realNameZFBPopup" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, watchEffect, nextTick } from "vue"
import { useRoute } from "vue-router"
import { router } from "@/router/index.js"
import { useStore } from "@/pinia/index.js"
import { removeItem } from "@/utils/storage.js"
import passwordPopup from "./components/passwordPopup.vue"

import authenticationPopup from "./components/authenticationPopup.vue"
import realNameZFBPopup from "./components/realNameZFBPopup.vue"
import { userlogout } from "@/network/userInterface.js"
// import { Plus } from "@element-plus/icons-vue"
import { uploadavatar } from "@/network/userInterface"
import MessageBoxVue from "@/components/MessageBox/index.js"

const { loginStore, useUsersStore } = useStore()
const route = useRoute()
const imageUrl = ref("")
let indexActive = ref(0)
let tabList = reactive([
  {
    name: "资产库",
    id: 1,
    path: "/assetLibrary",
    pushLink: "assetLibrary"
  },
  {
    // &orderNo=1723984511501926400&payAmount=1.00
    name: "订单明细",
    id: 2,
    path: "/orderForm",
    pushLink: "orderForm"
  },
  {
    name: "个人资料",
    path: "/personal",
    id: 3,
    pushLink: "personal"
  }
])
//tab标签切换
const handleTabShow = (item, index) => {
  if (index !== -1) {
    if (index === indexActive.value) return

    indexActive.value = index
    router.push(item.pushLink)
  }
  iconYi()
}
const iconYi = () => {
  let tabDom = document.querySelector(".icons")
  let tab = tabDom.getBoundingClientRect()
  let tabBg = document.querySelector(".tabs .bg").getBoundingClientRect()
  let tabText = document.querySelectorAll(".TabName")[indexActive.value].getBoundingClientRect()
  let lefts = tabText.left - tabBg.left + tabText.width / 2 - tab.width / Math.sqrt(2) / 2
  tabDom.style.left = lefts + "px"
}
window.addEventListener("resize", function () {
  // 执行需要的操作
  handleTabShow(-1)
})
watchEffect(() => {
  indexActive.value = -1
  if (route.name === "assetLibrary") {
    nextTick(() => {
      indexActive.value = 0
      // handleTabShow(tabList[0], 0)
      iconYi()
    })
  }
  if (route.name === "orderForm") {
    nextTick(() => {
      // handleTabShow(tabList[1], 1)
      indexActive.value = 1
      iconYi()
    })
  }
  if (route.name === "personal") {
    nextTick(() => {
      // handleTabShow(tabList[2], 2)
      indexActive.value = 2
      iconYi()
    })
  }
})

const handleAvatarSuccess = (response, uploadFile) => {
  imageUrl.value = URL.createObjectURL(uploadFile.raw)
}

onMounted(() => {
  // useUsersStore.handleUserInfo()
})
//退出登录
const handleLoginExit = async () => {
  await userlogout()
  removeItem("token")
  loginStore.token = ""
  loginStore.userId = ""
  removeItem("userId")
  useUsersStore.handleUserInfoInit()
  loginStore.login = true
}
// const getToken = () => {
//   getItem('token')
// }

const uploadHttpRequest = async (params) => {
  console.log(params)

  const _file = params.file
  let formData = new FormData()
  formData.set("file", _file)
  await uploadavatar(formData)
  MessageBoxVue({ title: "修改成功!" })

  await useUsersStore.handleUserInfo()
}
const beforeAvatarUpload = (rawFile) => {
  if (rawFile.type !== "image/jpeg" && rawFile.type !== "image/png") {
    // ElMessage.error('请上传图片!')
    MessageBoxVue({ title: "请上传图片!" })

    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    // ElMessage.error('图片大小请控制在 2MB!')
    MessageBoxVue({ title: "图片大小请控制在 2MB!" })

    return false
  }
  return true
}
const dianjiUpload = () => {
  let eluploadinput = document.querySelector(".photoBox .el-upload__input")

  eluploadinput.click()
}
</script>

<style lang="scss" scoped>
@import "index.scss";

.photoBox {
  position: relative;

  .img {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: #0d0d14;
    z-index: 6;
    @include Myflex();
  }
}
</style>
