import { defineStore } from 'pinia'
import { getItem } from '@/utils/storage.js'

export const loginDataInfo = defineStore('loginDataInfo', {
  state: () => {
    return {
      code: '12344',
      login: false,
      loginState: 'phone',
      registerState: 'other',
      token: getItem('token'),
      userId: getItem('userId'),
      cossUrl: 'http://cardjing.oss-cn-qingdao.aliyuncs.com/'
    }
  },

  // getters:{
  //   login:()=>false,
  //   register:()=>true
  // }
})
