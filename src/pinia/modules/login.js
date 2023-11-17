import { defineStore } from 'pinia'
import { getItem } from '@/utils/storage.js'

export const loginDataInfo = defineStore('loginDataInfo', {
  state: () => {
    return {
      code: '12344',
      login: false, // false 关闭 true 打开
      loginState: 'phone',
      registerState: 'other',
      token: getItem('token'),
      userId: getItem('userId'),
      cossUrl: 'http://cardjing.oss-cn-qingdao.aliyuncs.com/', // 给 商城二级也 图片地址添加前缀
      firstView: {}, // 个人中心的资产库是否查看 -- 数据
      // cossUrl: ''

    }
  },

  // getters:{
  //   login:()=>false,
  //   register:()=>true
  // }
})
