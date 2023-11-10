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
