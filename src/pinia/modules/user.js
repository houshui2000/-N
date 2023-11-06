import { defineStore } from 'pinia'
import { registermobile } from '@/network/userInterface.js'

/**
 * 更新个人信息

 get const { userInfo } = storeToRefs(userData)
 set const { setUserInfoStore } = userData
 */

export const userDataInfo = defineStore('userData', {
  state: () => {
    return {
      userInfo: {
        "username": "",
        "mobile": "",
        "nickname": "",
        "avatar": null,
        "invitationCode": "",
        "ownerInvitationCode": "",
        "wxNickname": "",
        "qqNickname": "",
        "steamUrl": "",
        "transformPlatformCode": null,
        "dbalance": "",
        "cbalance": "",
        "boundQQ": false,
        "realAuthentication": false,
        "boundWx": false
      },
      passwordPopup: false,
      authenticationPopup: false,
      authenticationConFirmPopup: false,
      realNameZFBPopup: false,
      passwordEdit: {
        "certNo": '',
        "username": ''
      },
      realNameQRCode:''
    }
  },
  actions: {
    //获取用户信息
    async handleUserInfo () {
      let result = await registermobile()

      if (result.code === 200) {
        this.userInfo = result.data
        
      } else {
        alert(result.msg)
      }
    },
    //初始化userinfo
    handleUserInfoInit () {

      this.userInfo = {
        avatar: null,
        boundQQ: false,
        boundWx: false,
        cbalance: '0.00',
        dbalance: '0.00',
        invitationCode: '',
        mobile: '',
        nickname: '',
        ownerInvitationCode: '',
        qqNickname: '',
        realAuthentication: false,
        steamUrl: '',
        transformPlatformCode: null,
        username: null,
        wxNickname: ''
      }
    }
  }
})
