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
        'avatar': null,
        'bind': false,
        'boundQQ': false,
        'boundWx': false,
        'cBalance': '0.00',
        'changedInvitationCode': false,
        'dBalance': '0.00',
        'invitationCode': null,
        'mobile': '',
        'nickname': '',
        'ownerInvitationCode': '',
        'qqNickname': '',
        'steamUrl': '',
        'tradePermission': -1,
        'transformPlatformCode': null,
        'username': null,
        'wxNickname': ''
      },
      passwordPopup: false,
      authenticationPopup: false,
      authenticationConFirmPopup: false,
      realNameZFBPopup: false,
      passwordEdit: {
        'certNo': '',
        'username': ''
      },
      realNameQRCode: ''
    }
  },
  actions: {
    //获取用户信息
    async handleUserInfo() {
      let result = await registermobile()

      if (result.code === 200) {
        this.userInfo = result.data
      } else {

      }
    },
    //初始化userinfo
    handleUserInfoInit() {
      this.userInfo = {
        'avatar': null,
        'bind': false,
        'boundQQ': false,
        'boundWx': false,
        'cBalance': '0.00',
        'changedInvitationCode': false,
        'dBalance': '0.00',
        'invitationCode': null,
        'mobile': '13187653423',
        'nickname': '',
        'ownerInvitationCode': '',
        'qqNickname': '',
        'steamUrl': '',
        'tradePermission': -1,
        'transformPlatformCode': null,
        'username': null,
        'wxNickname': ''
      }
    }
  }
})
