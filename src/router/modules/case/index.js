const childrenCase = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
    props: true,
    meta: {}
  },
  {
    path: '/cardgo',
    name: 'cardgo',
    component: () => import('@/views/cardGO/index.vue'),
    props: true,
    meta: {}
  },
  {
    path: '/unboxing',
    name: 'unboxing',
    component: () => import('@/views/unboxing/index.vue'),
    props: true,
    meta: {}
  },
  {
    path: '/helpCenter',
    name: 'helpCenter',
    component: () => import('@/views/helpCenter/index.vue'),
    props: true,
    meta: {
      gundong: false // 实时滚动组件关闭
    }
  },
  {
    path: '/app',
    name: 'app',
    component: () => import('@/views/app/index.vue'),
    props: true,
    meta: {
      gundong: false // 实时滚动组件关闭
    }
  },
];

export default childrenCase
