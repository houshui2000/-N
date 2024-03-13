// 统一导入

import { userDataInfo } from './modules/user.ts'
const useStore = () => {
  return {
    useUsersStore: userDataInfo(),
  }
}
export default useStore
