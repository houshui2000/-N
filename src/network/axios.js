import axios from 'axios'
import { getItem } from '@/utils/storage.js'
import MessageBoxVue from '@/components/MessageBox/index.js'

import { useStore } from '@/pinia'



const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  // baseURL: 'http://172.16.1.137:8081',
  // baseURL: 'http://8.140.20.79/api',
  timeout: 5000 // request timeout
})

// request interceptor 请求拦截器
service.interceptors.request.use((config) => {
  if (getItem('token')) {
    config.headers.Authorization = getItem('token')
  }

  config.headers['Client-Type'] = 'pc'
  return config
}, function (error) {
  return Promise.reject(error)
})

service.interceptors.response.use((res) => {

  const { code, msg } = res.data

  if (code >= 200 && code < 300) {
    return res.data
  } else {
    MessageBoxVue({
      title: msg
    })
    if (code == 401) {
      const { loginStore } = useStore()
      loginStore.login = true
    }
    return Promise.reject(new Error(msg))
  }
}, (err) => {
  console.log(err, 'err')
  return Promise.reject(err)
}
)

export default service
