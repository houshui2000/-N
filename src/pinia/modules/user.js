// import { defineStore } from 'pinia'


// // 第一个参数是应用程序中 store 的唯一 id
// export const useUsersStore = defineStore('useindeStore', {
//   state: () => {
//     return {
//       name: "小猪课堂",
//       age: 25,
//       sex: "男",
//     };
//   },
//   // 请求
//   // 调用 userStore.saveName('dasda');
//   actions: {
//     saveName (name) {
//       this.name = name;
//     },
//   },

// })
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
