import { createRouter, createWebHashHistory } from 'vue-router'
import TodoIst from '@/views/TodoIst.vue'

const routes = [
  {
    path: '/',
    name: 'TodoIst',
    component: TodoIst
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
