import router from "@/router";
import { getItem } from '@/utils/storage.js'
import { useStore } from '@/pinia'



// 白名单路由 -- 里面都是不用登陆
const WhitelistedRouting = []


router.beforeEach(async (to, from, next) => {

  if (getItem('token')) {// 判断有没有 token
    next()
  } else {
    // next()
    if (WhitelistedRouting.includes(to.name)) { // 在不在白名单
      next()
    } else {
      next('/')
      const { loginStore } = useStore()
      loginStore.login = true
    }
  }


});

router.afterEach(() => {
});
