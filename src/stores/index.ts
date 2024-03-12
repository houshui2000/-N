import {useStoreStore} from './modules/stores'

export function useStore() {
  return {
    stores: useStoreStore()
  }
}