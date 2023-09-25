import router from "@/router";



// 白名单路由

router.beforeEach(async (to, from, next) => {

  next()
});

router.afterEach(() => {
});
