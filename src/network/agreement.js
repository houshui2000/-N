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
    url: `/other/user-agreement`,
    method: 'get', params
  })
}

/**
 * 隐私协议列表
*/
export const privatePolicy = (params) => {
  return service({
    url: `/other/private-policy`,
    method: 'get', params
  })
}

/**
 * 联系我们列表
*/
export const contactUs = (params) => {
  return service({
    url: `/other/contact-us`,
    method: 'get', params
  })
}

/**
 * 相关教程列表
*/
export const tutorial = (params) => {
  return service({
    url: `/other/tutorial`,
    method: 'get', params
  })
}

/**
 * 合规声明列表
*/
export const statement = (params) => {
  return service({
    url: `/other/statement`,
    method: 'get', params
  })
}