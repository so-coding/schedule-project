import { createRouter, createWebHistory,RouteRecordRaw } from 'vue-router'
// 还有 createWebHashHistory 和 createMemoryHistory
import Layout from '@/layout/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Layout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router