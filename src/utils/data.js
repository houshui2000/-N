/**
 * @name 处理时间
 * @param {*} timestamp  时间戳
 */
export const Mydata = (timestamp) => {
  const date = new Date(timestamp) // 创建一个以时间戳为基准的 Date 对象

  const year = date.getFullYear() // 获取年份
  const month = date.getMonth() + 1 // 获取月份（返回值范围是 0-11，需要加 1）
  const day = date.getDate() // 获取日期
  const hours = date.getHours() // 获取小时
  const minutes = date.getMinutes() // 获取分钟
  const seconds = date.getSeconds() // 获取秒数

  const formattedTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}` // 格式化时间字符串

  console.log(formattedTime) // 输出格式化后的时间
}
