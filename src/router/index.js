import { createRouter, createWebHistory } from 'vue-router'
import CategoryCarrouselView from '../views/CategoryCarrouselView.vue'
import CategoryView from '../views/CategoryView.vue'
import CharactersView from '../views/CharactersView.vue'

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
    },
    {
      path: '/characters',
      name: 'charactersView',
      component: CharactersView
    },
    {
      path: '/score',
      name:'scoreView',
      component: () => import('../views/ScoreView.vue')
    }
  ]
})


export default router
