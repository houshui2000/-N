import service from '../axios'

/**
 * 资产详情页
 *vaultId
*/
export function shopcardxdetail (params) {
  return service({
    url: '/shop/card-detail',
    method: 'GET', params
  })
}
/**
 * 该系列作品
 *cardVaultShopId=1&current=1&size=1
*/
export function shopcarddetail (params) {
  return service({
    url: '/shop/card-detail-list',
    method: 'GET', params
  })
}


/**
 * 其他系列资产
 *cardVaultShopId=1&current=1&size=1
*/
export function shopotherproducts (params) {
  return service({
    url: '/shop/other-products',
    method: 'GET', params
  })
}



/**
 * 快速购买
 *{
   cardVaultId: 1, // 跳转页面的id
    payChanelId: 1 // 支付通道 1 是支付宝
}
*/
export function shopquickbuy (data) {
  return service({
    url: '/shop/quick-buy',
    method: 'POST', data
  })
}

// /**
//  * 快速购买
//  *{
//    cardVaultId: 1, // 跳转页面的id
//     payChanelId: 1 // 支付通道 1 是支付宝
// }
// */
// export function shopquickbuy (data) {
//   return service({
//     url: '/shop/quick-buy',
//     method: 'POST', data
//   })
// }


/**
 * 购买须知
*/
export function shopbuynotice () {
  return service({
    url: '/shop/buy-notice',
    method: 'GET'
  })
}
