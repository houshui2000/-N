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
// /**
//  * 首页商品列表
//  *current=1&size=1&orderColumn=sort&asc=true&name=123123123
// */
// export function exchangecards (params) {
//   return service({
//     url: '/exchange/cards',
//     method: 'GET', params
//   })
// }
