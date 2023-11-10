import service from './axios'

export function weixinLogin (data) {
  return service({
    url: '/login/wx',
    method: 'post',
    data
  })
}
// 获取首页banner
export function indexbanner () {
  return service({
    url: '/index/banner',
    method: 'GET',
  })
}

// 公告栏
// /
export function indexsysNotice () {
  return service({
    url: '/index/sysNotice',
    method: 'GET',
  })
}