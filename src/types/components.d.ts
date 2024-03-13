
/**
 * 组件进行实例化，进行ts 标注
 */

import SvgIcon from '@/components/SvgIcon/index.vue'

declare module 'vue' {
  export interface GlobalComponents {
    SvgIcon: typeof SvgIcon
  }
}

export { }