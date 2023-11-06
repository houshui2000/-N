<template>
  <div id='passwordPopup' v-if='useUsersStore.authenticationPopup'>
    <div class='content'>
      <div class='text'>实名认证信息
        <div class='border'></div>
      </div>
      <div class='close' @click='useUsersStore.authenticationPopup=false'></div>
      <div class='messageTop'>
        恨据中华人民共和国网络安全法》等相关法律法规要求，需要完成实名认证寸能进行数字资产的购买、转赠及内容发布等功能。进行实名认证前，需要你填写并授权姓名、身份证号等以要信息。
      </div>
      <div class='domInput marginTop28'>
        <div class='label'>姓名：</div>
        <div class='inputFrame '>
          <input placeholder='请输入姓名' v-model='passwordEdit.username'>
        </div>
      </div>
      <div class='domInput marginTop24'>
        <div class='label'>身份证：</div>
        <div class='inputFrame'>
          <input placeholder='请输入个人身份证号' v-model='passwordEdit.certNo'>
        </div>
      </div>
      <div class='domInput marginTop35'>
        <div class='label'>联系方式：</div>
        <div class='inputFrame' style='background:none'>{{ useUsersStore.userInfo.mobile.substring(0, 3)
          }}****{{ useUsersStore.userInfo.mobile.substring(7) }}
        </div>
      </div>
      <div class='messageTop marginTop9'>
        *实名认证仅限年满18周岁到60周岁（含)之间的中国大陆用户<br>
        *您填写的实名认证信息，须和您的注册手机号所绑定的身份信息一致<br>
        *未经您的授权，您的身份信息不会用于其他用途
      </div>
      <div class='passwordEditBtn' @click='handleEmpowerShow'>同意授权并认证</div>
    </div>
    <div class='confirmPopup'>
      <div class='content2'></div>
    </div>
    <authenticationConFirmPopup :info='passwordEdit' />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '@/pinia/index.js'
import authenticationConFirmPopup from '../components/authenticationConfirmPopup.vue'
import MessageBoxVue from '@/components/MessageBox/index.js'
import { realNamePost } from '@/network/personalCenter.js'
import QRCode from 'qrcodejs2-fix'

const { useUsersStore, loginStore } = useStore()

let passwordEdit = ref({
  certNo: '',
  username: ''
})
const handleEmpowerShow = async () => {
  if (!passwordEdit.value.username) {
    MessageBoxVue({
      title: '姓名不能为空'
    })
    return
  }
  if (!passwordEdit.value.certNo) {
    MessageBoxVue({
      title: '身份证为不能为空'
    })
    return
  }
  const res = await realNamePost(passwordEdit.value)
  if (res.code === 200) {
    useUsersStore.realNameQRCode=res.data
    useUsersStore.passwordEdit.certNo=passwordEdit.value.certNo
    useUsersStore.passwordEdit.username=passwordEdit.value.username
    useUsersStore.authenticationConFirmPopup = true
  }
}
</script>

<style lang='scss' scoped>
#passwordPopup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(#000, .8);
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  .content {
    width: 554px;
    height: 552px;
    background: url($gxsauthenticationPopup) no-repeat center;
    background-size: contain;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    backdrop-filter: blur(2px);

    .messageTop {
      width: 375px;
      height: 60px;
      margin-top: 27px;
      font-weight: 400;
      font-size: 12px;
      color: rgba(#fff, 0.5);
      line-height: 20px;
    }

    .marginTop9 {
      margin-top: 9px;
    }

    .passwordEditBtn {
      width: 160px;
      height: 32px;
      line-height: 32px;
      background: url($gxsauthenticationPopupBtn) no-repeat;
      background-size: 100% 100%;
      font-weight: 400;
      margin-top: 52px;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
    }

    .text {
      width: 600px;
      height: 26px;
      font-size: 20px;
      font-weight: 500;
      text-align: center;
      margin-top: 32px;
      position: relative;

      .border {
        width: 50px;
        height: 2px;
        background: url($gxspupupborderBottom) no-repeat center;
        background-size: contain;
        position: absolute;
        margin-left: -25px;
        left: 50%;
        margin-top: 3px;
      }
    }

    .close {
      width: 20px;
      height: 20px;
      background: url($gxspupupClose) no-repeat center;
      background-size: contain;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
    }

    .domInput {
      width: 372px;
      display: flex;
      height: 40px;
      font-weight: 400;
      align-items: center;
      position: relative;

      .label {
        width: 76px;
        text-align: left;
      }

      .textPass {
        width: 100px;
        height: 40px;
        line-height: 40px;
        color: #018ef8;
        position: absolute;
        top: 50%;
        margin-top: -20px;
        right: 10px;
        font-size: 20px;
        cursor: pointer;
        text-align: right;
      }

      &.marginTop35 {
        margin-top: 35px;
      }

      &.marginTop28 {
        margin-top: 28px;
      }

      &.marginTop24 {
        margin-top: 36px;
      }

      .inputFrame {
        width: 224px;
        height: 40px;
        line-height: 40px;
        background: url($gxspasswordpupupInputFrame) no-repeat center;
        background-size: 100% 100%;
        margin-left: 13px;

        input {
          width: 300px;
          height: 40px;
          line-height: 40px;
          padding-left: 13px;
          color: white;

          &::placeholder {
            color: rgba(#fff, .6);
          }
        }
      }
    }
  }
}
</style>
