import { defineStore } from 'pinia'
import { getItem } from '@/utils/storage.js'

export const loginDataInfo = defineStore('loginDataInfo', {
  state: () => {
    return {
      token: getItem('token'),
      // cossUrl: ''

    }
  },

  // getters:{
  //   login:()=>false,
  //   register:()=>true
  // }
})
