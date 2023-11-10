/**
 * 商城页面
 */
const shoppingCentrechildren = [
  {
    path: '/shoppingCentre',
    name: 'shoppingCentre',
    component: () => import('@/views/shoppingCentre/index.vue'),
    props: true,
    meta: {
      name: '商城',
      immediate: true, // 路由显示
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    },
  },
  {
    path: '/SCDetail',
    name: 'SCDetailName',
    component: () => import('@/views/shoppingtwo/index.vue'),
    props: true,
    meta: {
      immediate: false, // 路由显示
      name: '商城二级页',
      gundong: true, // 实时左侧滚动组件false 开启，true关闭
      scrollTheSubtitles: true // 滚动字幕 false 开启，true关闭
    }
  }
];

export default shoppingCentrechildren
