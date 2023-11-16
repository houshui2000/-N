import axios from 'axios'
import { getItem } from '@/utils/storage.js'
import MessageBoxVue from '@/components/MessageBox/index.js'
// import { useRouter } from 'vue-router'
import { useStore } from '@/pinia'
import { removeItem } from '@/utils/storage.js'


const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 5000 // request timeout
})


// 防抖
const debounceTokenCancel = new Map()
// request interceptor 请求拦截器
service.interceptors.request.use((config) => {

  // 获取接口敏成
  const tokenKey = `${config.method}-${config.url}`
  // debounceTokenCancel.set(tokenKey, null)
  // 判断 map 数据是否有无 防抖
  const cancel = debounceTokenCancel.get(tokenKey)


  if (cancel) {


    return
  }
  // 没有值的话 在 map 中添加数据
  debounceTokenCancel.set(tokenKey, null)


  let timer = setTimeout(() => {
    // 清空数据
    debounceTokenCancel.set(tokenKey, null)
  }, 500)

  // 在 map 数据中添加 防抖 timer 时间
  debounceTokenCancel.set(tokenKey, timer)

  if (getItem('token')) {
    config.headers.Authorization = getItem('token')
  }
  config.headers['Client-Type'] = 'pc'
  return config

  // (cancel)


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
      initialize()

    }
    return Promise.reject(new Error(msg))
  }
}, (err) => {
  // (err.response.data.msg, 'err.response.data')

  if (err.response.status == 401) {
    initialize()
  }
  MessageBoxVue({
    title: err.response.data.msg
  })

  return Promise.reject(err)
}
)
const initialize = () => {

  const { loginStore, useUsersStore } = useStore()
  // 清理token
  // const router = useRouter()
  removeItem('token')
  // router.push('/shoppingCentre')
  useUsersStore.handleUserInfoInit()
  loginStore.token = ''
  loginStore.login = true
}
export default service
