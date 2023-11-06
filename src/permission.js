import router from "@/router";
import { getItem } from '@/utils/storage.js'
import { useStore } from '@/pinia'
import { NoLogin } from '@/router/InputTransfer.js'



// 白名单路由 -- 里面都是不用登陆
let WhitelistedRouting = ['/']
/**数组打平 */
const tie = (arr) => {
  arr.forEach(item => {
    WhitelistedRouting.push(item)
    if (item.children?.length > 0) {
      tie(item.children)
    }
  })
}
tie(NoLogin)

router.beforeEach(async (to, from, next) => {

  if (getItem('token')) {// 有 token
    // console.log('token')

    // 更新个人信息
    const { useUsersStore } = useStore()
    useUsersStore.handleUserInfo()
    next()
  } else {   // 没有token
    const routMy = WhitelistedRouting.some(item => {
      if (to.name == item.name) {
        return item
      }

    })

    if (routMy) { // 在白名单
      next()
    } else { // 不在在白名单
      console.log('不在在白名单--')
      next('/shoppingCentre')
      const { loginStore } = useStore()
      loginStore.login = true
    }

  }


});

router.afterEach(() => {
});
