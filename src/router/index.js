import { createRouter, createWebHistory } from 'vue-router'
import CategoryCarrouselView from '../views/CategoryCarrouselView.vue'
import CategoryView from '../views/CategoryView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/categories',
      name: 'categorieCarrouselView',
      component: CategoryCarrouselView
    },
    {
      path: '/categories/:category',
      name: 'categoryView',
      component: CategoryView
    }
  ]
})


export default router
