// 统一导入

import { userDataInfo } from './modules/user.js'
import { loginDataInfo } from './modules/login.js'
export const useStore = () => {
  // export const appStore = {
  return {
    useUsersStore: userDataInfo(),
    loginStore: loginDataInfo(),
  }
}
// export default useStore
