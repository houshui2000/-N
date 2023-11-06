import service from './axios'

/**
 * 资讯列表
*/
export const shopnews = (params) => {
  return service({
    url: `/shop/news`,
    method: 'get', params
  })
}

/**
* 新闻详情(banner跳转携带id)
*/
export const shopnewsdetail = (params) => {
  return service({
    url: `/shop/news/detail`,
    method: 'get', params
  })
}



/**
* 新闻详情(banner跳转携带id)shop/news/category
*/
export const shopnewscategory = () => {
  return service({
    url: `/shop/news/category`,
    method: 'get',
  })
}

