import { defineStore } from 'pinia'
import { ref } from 'vue'
/**
 * 更新个人信息

   get const { userInfo } = storeToRefs(userData)
   set const { setUserInfoStore } = userData
 */

export const userDataInfo = defineStore('userData', {
  state: () => {
    return {
      ammoBalance: 324
    }
  }
})
