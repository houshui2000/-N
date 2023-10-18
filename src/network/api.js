import service from './axios'

// export function test() {
//     return axios({
//         url: '/index/getNumTotal',
//         method: 'post'
//     })
// }
// // https://www.95skins.com
export function weixinLogin (data) {
  return service({
    url: '/login/wx',
    method: 'post',
    data
  })
}
// 获取首页banner
export function indexbanner () {
  return service({
    url: '/index/banner',
    method: 'GET',
  })
}
/**分割 */
// // 手机号密码登陆
// export const loginmobile = (data) => {
//   return service({
//     url: '/register/normal',
//     // url: `verification-code/register?mobile=${data}`,
//     method: 'POST', data
//   })
// }
// //

// //
// export const indexbanner = (params) => {
//   return service({
//     // url: 'index/banner',
//     // url: `verification-code/register?mobile=${params}`,
//     url: 'index/banner',
//     method: 'get', params
//   })
// }
// // 注册

// // 手机号密码登陆
export const registernormal = (data) => {
  return service({
    url: 'login/mobile',
    method: 'post', data
  })
}

// // 手机号密码zhu
// export const code = (params) => {
//   return service({
//     // url: 'index/banner',
//     // url: `verification-code/register?mobile=${params}`,
//     url: `verification-code/register?mobile=${params}`,
//     method: 'get',
//   })
// }
// // 登陆
// // login/mobile
// export const loginmobasdasdile = (data) => {
//   return service({
//     // url: 'index/banner',
//     // url: `verification-code/register?mobile=${params}`,
//     url: `login/mobile`,
//     method: 'post', data
//   })
// }

export const userinfo = (data) => {
  return service({
    url: `user/info`,
    method: 'get', data
  })
}

export const getBannner = (params) => {
  return service({
    url: 'index/banner',
    method: 'get',
    params
  })
}
