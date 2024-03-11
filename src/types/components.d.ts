import one from '@/components/HelloWorld.vue'

// declare module 'vue' works for vue2 + vue 3
declare module 'vue' {
  export interface GlobalComponents {
    one: typeof one
  }
}

export { }