
// 存储数据
export const setItem = (key: string, value: any) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}
// 获取数据
export const getItem = (key: string) => {
  const data: any = window.localStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
// 删除数据
export const removeItem = (key: string) => {
  window.localStorage.removeItem(key)
}
//
// sessionStorage存储数据
export const sessionStoragesetItem = (key: string, value: any) => {

  if (typeof value === 'object') {
    value = JSON.stringify(value)
  }
  window.sessionStorage.setItem(key, value)
}
// sessionStorage获取数据
export const sessionStoragegetItem = (key: string) => {
  const data: any = window.sessionStorage.getItem(key)
  try {
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
// sessionStorage删除数据
export const sessionStorageremoveItem = (key: string) => {
  window.sessionStorage.removeItem(key)
}