
export const helpCenterArr = [

  {
    path: 'aboutUs',
    name: 'aboutUs',
    component: () => import('@/views/helpCenter/aboutUs.vue'),
    meta: {
      login: false, // true 需要登录， false 不需要登录
      name: '关于我们',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  }, {
    path: 'userUs',
    name: 'userUs',
    component: () => import('@/views/helpCenter/userUs.vue'),
    meta: {
      login: false, // true 需要登录， false 不需要登录
      name: '用户协议',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  }, {
    path: 'privacyUs',
    name: 'privacyUs',
    component: () => import('@/views/helpCenter/privacyUs.vue'),
    meta: {
      login: false, // true 需要登录， false 不需要登录
      name: '隐私协议',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  }, {
    path: 'statementUs',
    name: 'statementUs',
    component: () => import('@/views/helpCenter/statementUs.vue'),
    meta: {
      login: false, // true 需要登录， false 不需要登录
      name: '常见问题',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  }, {
    path: 'purchaseagreement',
    name: 'purchaseagreement',
    component: () => import('@/views/helpCenter/purchaseagreement.vue'),
    meta: {
      login: false, // true 需要登录， false 不需要登录
      name: '购买协议',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  }
]

export const childrenCase = [
  // {
  //   path: '/cardgo',
  //   name: 'cardgo',
  //   component: () => import('@/views/cardGO/index.vue'),
  //   props: true,
  //    meta: {
  // login: false, // true 需要登录， false 不需要登录
  //     name: '卡GO',
  //     immediate: true // 路由显示
  //   }
  // },
  // {
  //   path: '/unboxing',
  //   name: 'unboxing',
  //   component: () => import('@/views/unboxing/index.vue'),
  //   props: true,
  //    meta: {
  // login: false, // true 需要登录， false 不需要登录
  //     name: '卡GO二级页面',
  //     immediate: true // 路由显示
  //   }
  // },
  {
    path: '/helpCenter',
    name: 'helpCenter',
    redirect: '/helpCenter/contactUs',
    component: () => import('@/views/helpCenter/index.vue'),
    meta: {
      login: false, // true 需要登录， false 不需要登录
      name: '帮助中心',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    },
    children: [
      ...helpCenterArr
    ]
  },

  {
    path: '/information',
    name: 'information',
    component: () => import('@/views/information/index.vue'),
    meta: {
      login: false, // true 需要登录， false 不需要登录
      name: '首页',
      immediate: true, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: false // 滚动字幕 false 开启，true关闭
    }
  },

  {
    path: '/informationTwo',
    name: 'informationTwo',
    component: () => import('@/views/information/informationTwo.vue'),
    props: true,
    meta: {
      login: false, // true 需要登录， false 不需要登录
      name: '资讯信息二级',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  },
];

