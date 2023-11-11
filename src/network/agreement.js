import service from './axios'

/**
 * 关于我们协议列表
*/
export const aboutUs = (params) => {
  return service({
    url: `/other/about-us`,
    method: 'get', params
  })
}

/**
 * 购买协议列表
*/
export const buyNotice = (params) => {
  return service({
    url: `/other/buy-notice`,
    method: 'get', params
  })
}

/**
 * 用户协议列表
*/
export const userStatement = (params) => {
  return service({
    url: `/other/user-statement`,
    method: 'get', params
  })
}

/**
 * 隐私协议列表
*/
export const privateStatement = (params) => {
  return service({
    url: `/other/private-statement`,
    method: 'get', params
  })
}