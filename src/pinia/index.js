// 统一导入

import { userDataInfo } from './modules/user.js'
export const useStore = () => {
  // export const appStore = {
  return {
    useUsersStore: userDataInfo(),
  }
}
// export default useStore
