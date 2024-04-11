import { createRouter, createWebHistory } from 'vue-router'
import CategoryView from '../views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/categories',
      name: 'categorieView',
      component: CategoryView
    }
  ]
})


export default router
