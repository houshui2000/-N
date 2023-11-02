const childrenCase = [


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
  // {
  //   path: '/helpCenter',
  //   name: 'helpCenter',
  //   component: () => import('@/views/helpCenter/index.vue'),
  //   props: true,
  //   meta: {
  //     gundong: false // 实时左侧滚动组件false 开启，true关闭
  //   }
  // },
  {
    path: '/app',
    name: 'app',
    component: () => import('@/views/app/index.vue'),
    props: true,
    meta: {
      name: 'app下载',
      immediate: false, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  },
];

export default childrenCase
