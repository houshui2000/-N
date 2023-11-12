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

// //
// //
// //
// /**
//  * 关于我们
//  *
// */
// export function shopcarddetail (params) {
//   return service({
//     url: '/other/aboutUs',
//     method: 'GET', params
//   })
// }

/**
 * 常见问题
 *
*/
export function otherstatement (params) {
  return service({
    url: '/other/statement',
    method: 'GET', params
  })
}



/**
 * 相关教程
 *
*/
export function otherhelper (params) {
  return service({
    url: '/other/helper',
    method: 'GET', params
  })
}





