import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getItem } from '@/utils/storage.js'
import { registermobile } from '@/network/userInterface.js'

export const loginDataInfo = defineStore('loginDataInfo', {
  state: () => {
    return {
      code: '12344',
      login: false,
      loginState: 'phone',
      registerState: 'other',
      token: getItem('token'),
      userId: getItem('userId'),
    }
  },

  // getters:{
  //   login:()=>false,
  //   register:()=>true
  // }
})
