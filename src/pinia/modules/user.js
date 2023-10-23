import { defineStore } from 'pinia'
import { ref } from 'vue'
import { registermobile } from '@/network/userInterface.js'

/**
 * 更新个人信息

 get const { userInfo } = storeToRefs(userData)
 set const { setUserInfoStore } = userData
 */

export const userDataInfo = defineStore('userData', {
  state: () => {
    return {
      ammoBalance: 324,
      userInfo: {
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
  },
  actions:{
    async handleUserInfo(){
      let result= await registermobile()
      console.log(result)
      this.userInfo=result
    },
    handleUserInfoInit(){

    }
  }
})
