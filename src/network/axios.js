
import axios from 'axios'
const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 5000 // request timeout
})

// request interceptor 请求拦截器
service.interceptors.request.use((config) => {
  // <<<<<<< HEAD
  //   // config.headers.Authorization = sessionStorage.getItem('token')
  //   config.headers.Authorization = 'f22bdc5e-178a-485e-82b6-5b89a3650ac7'

  // =======
  //   config.headers.Authorization = sessionStorage.getItem('token')
  // >>>>>>> 5aacceaefedd2887360384ef757d7f63102f7e27
  config.headers['Client-Type'] = 'pc'
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
