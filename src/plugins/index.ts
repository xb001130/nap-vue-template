import type { App } from 'vue'
import { setupI18n } from './i18n'
import { setupStore } from '~/store/index'
import { setupRouter } from '~/router/index'

export function setupApp(app: App<Element>) {
  setupI18n(app)
  setupStore(app)
  setupRouter(app)
  app.mount('#app')
}
