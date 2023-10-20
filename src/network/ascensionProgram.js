import service from './axios'

/**
 * 分页获取可进行飞升的卡片片
 *size
 current
*/
export function exchangecards (params) {
  return service({
    url: '/exchange/cards',
    method: 'GET', params
  })
}

/**
 * 获取单张卡片可兑换的饰品
 *
*/
export const exchangegood = (params) => {
  return service({
    url: `exchange/good`,
    method: 'get', params
  })
}
