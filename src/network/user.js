import service from './axios'

/**手机号注册
 *
 * {
  "mobile": "1",
  "password": "123456",
  "code": "123456"
}
 */
export const registernormal = (data) => {
  return service({
    url: '/register/normal',
    method: 'post',
    data
  })
}

/**手机号密码登陆
 *
 * {
  "mobile": "17686742621",
  "password": "111111",
 }
*/
export const loginmobile = (data) => {
  return service({
    url: '/login/mobile',
    method: 'post',
    data
  })
}


/**手机号密码登陆
 *
 * {
  "mobile": "17686742621",
  "code": "123456"
 }
*/
export const logincode = (data) => {
  return service({
    url: '/login/code',
    method: 'post',
    data
  })
}

/**
 * qq登陆
 *
 * {
  "mobile": "17686742621",
  "password": "12312312312"
 }
*/
export const loginqq = (data) => {
  return service({
    url: '/login/qq',
    method: 'post',
    data
  })
}

/**
 * 绑定vx验证码
 *
*/
export const bindwx = (params) => {
  return service({
    url: `/verification-code/bind-wx`,
    method: 'get',
    params
  })
}

/**
 * 注册验证码
 *
*/
export const registermobile = (params) => {
  return service({
    url: `/verification-code/register`,
    method: 'get',
    params
  })
}


/**
 * 登陆验证码
 *
*/
export const codeloginmobile = (params) => {
  return service({
    url: `/verification-code/login`,
    method: 'get',
    params
  })
}



/**
 * 发送修改密码验证码
 *
*/
export const codepassword = (params) => {
  return service({
    url: `/verification-code/password`,
    method: 'get',
    params
  })
}



/**
 * 发送重置密码验证码
 *mobile
*/
export const resetpassword = (params) => {
  return service({
    url: `/verification-code/reset-password`,
    method: 'get',
    params
  })
}







