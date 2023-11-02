import service from './axios'

// 修改昵称
export function nicknameEdit(data) {
  return service({
    url: 'user/nickname',
    method: 'post',
    data
  })
}

// 修改密码验证码
export function passwordEditCode(params) {
  return service({
    url: 'verification-code/password',
    method: 'get',
    params
  })
}

//修改密码
export function updatePassword(data) {
  return service({
    url: 'user/update-password',
    method: 'post',
    data
  })
}

//实名认证
export function realNamePost(data) {
  return service({
    url: 'user/auth/real-name',
    method: 'post',
    data
  })
}

//修改自己的邀请码
export function invitationCodePost(data) {
  return service({
    url: 'user/invitation-code',
    method: 'post',
    data
  })
}

//邀请码
export function bindInvitationCodePost(data) {
  return service({
    url: 'user/bind-invitation-code',
    method: 'post',
    data
  })
}
