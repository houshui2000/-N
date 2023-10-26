import service from './axios'

/**
 * 我的收益
 */
export const profitdetail = (params) => {
  return service({
    url: '/user/profit-detail',
    method: 'get',
    params
  })
}

/**
 * 绑定邀请码
 * {
  "invitationCode": "123123123"
 }
*/
export const invitationcode = (data) => {
  return service({
    url: '/user/bind-invitation-code',
    method: 'post',
    data
  })
}


/**
 *上传用户头像
 * {
  "file": "",
 }
*/
export const uploadavatar = (data) => {
  return service({
    url: '/user/upload/avatar',
    method: 'post',
    data
  })
}


/**
 * 修改昵称
 * 	"nickname": "111111"
*/
export const nickname = () => {
  return service({
    url: '/user/nickname',
    method: 'post',
  })
}

/**
 * 退出登录
*/
export const userlogout = () => {
  return service({
    url: '/user/logout',
    method: 'post',
  })
}

/**
 * 修改自己的邀请码
 * invitationCode
*/
export const invitationCode = (data) => {
  return service({
    url: '/user/invitation-code',
    method: 'post',
    data
  })
}

/**
 * 创建密码接口
*/
export const createpassword = (data) => {
  return service({
    url: `user/update-password`,
    method: 'post',
    data
  })
}


/**
 * 获取个人中心数据
 *
*/
export const registermobile = () => {
  return service({
    url: `user/info`,
    method: 'get',
  })
}


/**
 * 获取用户账户详情（D  原石的变动记录）
 *type 货币类型  0 D    1原石
 *size 2
 *current 1
*/
export const balancedetail = (params) => {
  return service({
    url: `user/balance-detail?type=${params.type}&size=${params.size}&current=${params.current}`,
    method: 'get',
  })
}










