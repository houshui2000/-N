const gxsChildrenRouter = [


  {
    path: '/myAccount',//个人中心
    name: 'myAccount',
    component: () => import('@/views/personalCenter/index.vue'),
    props: true,
    redirect: 'assetLibrary',
    meta: {
      login: true, // true 需要登录， false 不需要登录
      immediate: false, // 路由显示
      name: '个人中心',
      scrollTheSubtitles: true // 滚动字幕开启，关闭
    },
    children: [
      // {
      //   path: '/myAccount',
      //   redirect: 'assetLibrary'
      // },
      {
        path: '/assetLibrary',//个人中心
        name: 'assetLibrary',
        component: () => import('@/views/personalCenter/assetLibrary/index.vue'),
        props: true,
        meta: {
          login: true, // true 需要登录， false 不需要登录
          immediate: false, // 路由显示
          gundong: true, // 实时左侧滚动组件false 开启，true关闭
          scrollTheSubtitles: true // 滚动字幕开启，关闭
        }
      },
      {
        path: '/orderForm',//订单详情
        name: 'orderForm',
        component: () => import('@/views/personalCenter/orderForm/index.vue'),
        props: true,
        meta: {
          login: true, // true 需要登录， false 不需要登录
          name: '订单明细',
          immediate: false, // 路由显示
          gundong: true, // 实时左侧滚动组件false 开启，true关闭
          scrollTheSubtitles: true // 滚动字幕开启，关闭
        },
      },
      {
        path: '/personal',//个人资料
        name: 'personal',
        component: () => import('@/views/personalCenter/personal/index.vue'),
        props: true,
        meta: {
          login: true, // true 需要登录， false 不需要登录
          immediate: false, // 路由显示
          gundong: true, // 实时左侧滚动组件false 开启，true关闭
          scrollTheSubtitles: true // 滚动字幕开启，关闭
        },
      }

    ]

  }
]
export default gxsChildrenRouter
