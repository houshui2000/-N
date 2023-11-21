import service from './axios'

/**
 * 获取可用支付
 */
export function shoppaychannel (params) {
  return service({
    url: 'shop/pay-channel',
    method: 'GET',
    params
  })
}

/**
 * 预约页面 提交预约
*/
export function shopreservation (data) {
  return service({
    url: '/shop/reservation',
    method: 'post',
    data
  })
}


/**
 * 预约验证码
*/
export function verificationcodereservation (params) {
  return service({
    url: '/verification-code/reservation',
    method: 'get',
    params
  })
}


/**
 * 当前预约 人数
*/
export function shopreservationcount (params) {
  return service({
    url: '/shop/reservation/count',
    method: 'get',
    params
  })
}