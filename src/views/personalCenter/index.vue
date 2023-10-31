<link rel='stylesheet' href='../../styles/all.scss'>
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
              <div class='photoBox'
                   style='background-image: url("https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8075fa62-cf88-420a-88f7-9a4a4d714bb0%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701238477&t=ca5cc4ad0b2dd15e855f3d44587044ba")'>
<!--                <el-upload-->
<!--                  class='avatar-uploader'-->
<!--                  action='https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15'-->
<!--                  :show-file-list='false'-->
<!--                  :on-success='handleAvatarSuccess'-->
<!--                  :before-upload='beforeAvatarUpload'-->
<!--                >-->
<!--                  <img v-if='imageUrl' :src='imageUrl' class='avatar' />-->
<!--                  <el-icon v-else class='avatar-uploader-icon'>-->
<!--                    <Plus />-->
<!--                  </el-icon>-->
<!--                </el-upload>-->
                <img
                  src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F8075fa62-cf88-420a-88f7-9a4a4d714bb0%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1701238477&t=ca5cc4ad0b2dd15e855f3d44587044ba'
                  alt=''>
              </div>
            </div>
          </div>
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
          <div class='exitBtn'>退出登录</div>
        </div>

      </div>
      <div class='box'>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import router from '@/router/index.js'

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
const handleTabShow = (item,index) => {
  if(index!==-1){
    if (index === indexActive) return
    indexActive.value = index
    router.push(item.pushLink)
  }
  let tabDom = document.querySelector('.icons')
  let tab = tabDom.getBoundingClientRect()
  let tabBg = document.querySelector('.tabs .bg').getBoundingClientRect()
  let tabText =document.querySelectorAll('.TabName')[indexActive.value].getBoundingClientRect()
  console.log(tab.width/Math.sqrt(2))
  let lefts = tabText.left-tabBg.left+(tabText.width/2)-(tab.width/Math.sqrt(2)/2)
  tabDom.style.left=lefts+'px'
}

window.addEventListener('resize', function() {
  // 执行需要的操作
  // console.log('窗口大小已改变');
  handleTabShow(-1)
});

const handleAvatarSuccess = (
  response,
  uploadFile
) => {
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
</script>

<style lang='scss' scoped>
@import "index.scss";
</style>
