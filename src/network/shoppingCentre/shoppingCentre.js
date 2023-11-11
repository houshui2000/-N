import service from '../axios'

/**
 * 首页商品列表
 *current: '当前界面',
    size: '查几条',
    orderColumn: 'sort 事件，update_time 时间',
    asc: 升序降序,
    name: 搜索名字
*/

export function shopliscard (params) {
  return service({
    url: '/shop/list-card',
    method: 'GET', params
  })
}
/**
 * 首页获取分类
*/
export function shopcardcategories () {
  return service({
    url: '/shop/card-categories',
    method: 'GET',
  })
}

/**
 * 首页获取分类
*/
export function shopbulletcomment () {
  return service({
    url: '/shop/bullet-comment',
    method: 'GET',
  })
}


/**
 * 资产查证
 * qrCodeId
*/
export function assetcheck (params) {
  return service({
    url: '/asset/check',
    method: 'GET', params
  })
}


/**
 * 资产证书
 * qrCodeId
*/
export function assetcert (params) {
  return service({
    url: '/asset/cert',
    method: 'GET', params
  })
}



/**
 * 炫酷3D图
 * qrCodeId
*/
export function asset3d (params) {
  return service({
    url: '/asset/3d',
    method: 'GET', params
  })
}