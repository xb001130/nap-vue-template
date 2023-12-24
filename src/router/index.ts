import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: (routes as RouteRecordRaw[]),
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}
