import router from "@/router";
import { getItem } from '@/utils/storage.js'
import { useStore } from '@/pinia'
import { NoLogin } from '@/router/InputTransfer.js'



// 白名单路由 -- 里面都是不用登陆
const WhitelistedRouting = [
  '/',
  ...NoLogin
]



router.beforeEach(async (to, from, next) => {

  if (getItem('token')) {// 有 token
    // 更新个人信息
    const { useUsersStore } = useStore()
    useUsersStore.handleUserInfo()
    next()
  } else {   // 没有token
    const routMy = WhitelistedRouting.some(item => item.name == to.name)
    if (routMy) { // 在白名单
      next()
    } else { // 不在在白名单
      // console.log('不在在白名单--')
      next('/')
      const { loginStore } = useStore()
      loginStore.login = true
    }

  }


});

router.afterEach(() => {
});
