import service from '../axios'

/**
 * 卡牌详情页
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
