// 入口文件
import { childrenCase } from './modules/case/index.js'
import shoppingCentrechildren from './modules/shoppingCentre'
import gxsChildrenRouter from './modules/gxsChildrenRouter/index.js'
/**有登陆 */
export const ToLogin = [
  ...gxsChildrenRouter
]

// 无登陆
export const NoLogin = [
  ...childrenCase,
  ...shoppingCentrechildren
]