import service from './axios'

// 修改昵称
export function nicknameEdit (data) {
  return service({
    url: 'user/nickname',
    method: 'post',
    data
  })
}
// 修改密码验证码
export function passwordEditCode (params) {
  return service({
    url: 'verification-code/password',
    method: 'get',
    params
  })
}
//修改密码
export function updatePassword (data) {
  return service({
    url: 'user/update-password',
    method: 'post',
    data
  })
}
