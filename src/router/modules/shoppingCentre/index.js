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
      name: '商城首页',
      gundong: false // 实时滚动组件关闭
    },
  },
  {
    path: '/shoppingtwo/:vaultId',
    name: ' ',
    component: () => import('@/views/shoppingtwo/index.vue'),
    props: true,
    meta: {
      name: '商城二级页',
      gundong: false // 实时滚动组件关闭
    }
  }
];

export default shoppingCentrechildren
