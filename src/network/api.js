import service from './axios'

// export function test() {
//     return axios({
//         url: '/index/getNumTotal',
//         method: 'post'
//     })
// }
// https://www.95skins.com
export function weixinLogin (data) {
  return service({
    url: '/login/wx',
    method: 'post',
    data
  })
}
// 手机号密码登陆
export const loginmobile = (data) => {
  return service({
    url: '/login/mobile',
    method: 'post',
    data
  })
}