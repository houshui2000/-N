
export const helpCenterArr = [
  {
    path: 'contactUs',
    name: 'contactUs',
    component: () => import('@/views/helpCenter/contactUs.vue'),
    meta: {
      name: '联系我们',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  }, {
    path: 'aboutUs',
    name: 'aboutUs',
    component: () => import('@/views/helpCenter/aboutUs.vue'),
    meta: {
      name: '关于我们',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  },
]

export const childrenCase = [
  // {
  //   path: '/cardgo',
  //   name: 'cardgo',
  //   component: () => import('@/views/cardGO/index.vue'),
  //   props: true,
  //   meta: {
  //     name: '卡GO',
  //     immediate: true // 路由显示
  //   }
  // },
  // {
  //   path: '/unboxing',
  //   name: 'unboxing',
  //   component: () => import('@/views/unboxing/index.vue'),
  //   props: true,
  //   meta: {
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
      name: '首页',
      immediate: true, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: false // 滚动字幕 false 开启，true关闭
    }
  },
  {
    path: '/informationTwo/:id',
    name: 'informationTwo',
    component: () => import('@/views/information/informationTwo.vue'),
    props: true,
    meta: {
      name: '资讯信息二级',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  },
];
