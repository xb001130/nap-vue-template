import { defineStore } from 'pinia'
import { store } from '~/store'

export const useAppStore = defineStore('nap-app', () => {
  const projectName = ref('nap-vue-template')
  return {
    projectName,
  }
})

export function useAppStoreHook() {
  return useAppStore(store)
}
