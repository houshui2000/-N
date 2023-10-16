import { defineStore } from 'pinia'
import { ref } from 'vue'

export const loginDataInfo = defineStore('loginDataInfo', {
  state: () => {
    return {
      code: '12344',
      loginWX: true
    }
  },
})
