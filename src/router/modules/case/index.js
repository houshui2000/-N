const childrenCase = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home/index.vue'),
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
