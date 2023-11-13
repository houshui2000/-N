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

//实名认证
export function realNamePost (data) {
  return service({
    url: 'user/auth/real-name',
    method: 'post',
    data
  })
}

//修改自己的邀请码
export function invitationCodePost (data) {
  return service({
    url: 'user/invitation-code',
    method: 'post',
    data
  })
}

//邀请码
export function bindInvitationCodePost (data) {
  return service({
    url: 'user/bind-invitation-code',
    method: 'post',
    data
  })
}

// 订单明细获取
export function GetorderList (params) {
  return service({
    url: 'shop/order',
    method: 'get',
    params
  })
}
//查询实名认证结果
export function getRealName (params) {
  return service({
    url: 'user/auth/result',
    method: 'get',
    params
  })
}
//取消支付
export function orderCancel (data) {
  return service({
    url: 'shop/order-cancel/' + data.orderNo,
    method: 'post',
    data
  })
}
//资产库
export function getAssetList (params) {
  return service({
    url: 'asset',
    method: 'get',
    params
  })
}
// 获取银行卡列表
export function GET_BankCardList (params) {
  return service({
    url: 'bank-card/list',
    method: 'get',
    params
  })
}
//获取银行id的列表
export function GET_BankIdList (params) {
  return service({
    url: 'bank-card/can-use-list',
    method: 'get',
    params
  })
}
//绑定银行卡
export function POST_bankCardBinding (data) {
  return service({
    url: 'bank-card/send/bind-code',
    method: 'post',
    data
  })
}
//绑定银行卡-短信验证码验证
export function POST_bankCardBindingCode (data) {
  return service({
    url: 'bank-card/check-code',
    method: 'post',
    data
  })
}



//去支付
export function shopbuyPay (data) {
  return service({
    url: '/shop/buy/pay',
    method: 'post',
    data
  })
}


// //订单信息
// export function shopbuyPay (data) {
//   return service({
//     url: '/shop/order-detail',
//     method: 'post',
//     data
//   })
// }