// import originAxios from 'axios'
// export default function axios (option) {
//   return new Promise((resolve, reject) => {
//     const instance = originAxios.create({
//       baseURL: import.meta.env.VITE_APP_API_URL,
//       timeout: 5000
//     });
//     instance.interceptors.request.use(config => {
//       //token
//       config.headers.Authorization = sessionStorage.getItem('token')
//       return config
//     }, error => {
//       return error
//     })
//     // 接口错误拦截
//     instance.interceptors.response.use(res => {
//       console.log(res)
//       if (res.data.status == 200) {
//         return res.data
//       }
//       // if (res.data.status == 200) {
//       //   return res.data
//       // } else {
//       //   //报错信息
//       //   return Promise.reject(res)
//       // }
//     }, (err) => {
//       console.log(err.response)
//       return Promise.reject(err)
//     })
//     //传入对象进行网络请求
//     instance(option).then(res => {
//       resolve(res)
//     }).catch(err => {
//       reject(err)
//     })
//   })
// }

import axios from 'axios'
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 5000 // request timeout
})

// request interceptor 请求拦截器
service.interceptors.request.use((config) => {
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

service.interceptors.response.use((res) => {
  const { status, data } = res
  if (status == 200) {
    return data.data
  } else {
    alert(data.msg)
    return Promise.reject(new Error(data.msg))
  }
}, (err) => {
  console.log(err, 'err')
  return Promise.reject(err)
}
)

export default service
