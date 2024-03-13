import { defineStore } from "pinia"

/**
 * 更新个人信息

 get const { userInfo } = storeToRefs(userData)
 set const { setUserInfoStore } = userData
 */

export const userDataInfo = defineStore("userData", {
  state: () => {
    return {
      userInfo: {
        ce: '测试'
      },
    }
  },
  actions: {
    //获取用户信息
    handleUserInfo() {
      return new Promise((resolve) => {
        resolve(this.userInfo)
      })
    },

  }
})
