import service from './axios'

/**
 * 分页获取站内信
*/
export const getstationmessage = () => {
  return service({
    url: `station-message`,
    method: 'get',
  })
}

/**
 * 修改站内信状态为已读
 * "ids": [1]
*/
export const poststationmessage = (data) => {
  return service({
    url: `station-message`,
    method: 'post', data
  })
}

/**
 * 新增数据
 * createTime :[]
*/
export const userincrementdata = (params) => {
  return service({
    url: `user/increment-data`,
    method: 'get', params
  })
}

/**
 * 单笔收益提取
 * outTradeNo :
*/
export const userdrawprofit = (data) => {
  return service({
    url: `user/draw-profit`,
    method: 'post', data
  })
}


/**
 * 提取全部收益
*/
export const userdrawprofits = () => {
  return service({
    url: `user/draw-profits`,
    method: 'post',
  })
}


/**
 * 收益详情-推广明细
*/
export const userpromotiodetail = () => {
  return service({
    url: `user/promotion-detail`,
    method: 'get',
  })
}

/**
 * 收益详情-推广明细
 * 	"code": "123456",
  "password": "123456",
  "mobile": "17686742621"
*/
export const resetpassword = (data) => {
  return service({
    url: `user/reset-password`,
    method: 'get', data
  })
}
