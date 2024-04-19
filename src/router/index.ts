import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import pdp from '../views/pdp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: async () => await import('../views/AboutView.vue')
    },
    {
      path: '/plp',
      name: 'plp',
      component: async () => await import('../views/plp.vue')
    },
    {
      path: '/anime/:id(\\d+)',
      name: 'pdp',
      component: pdp
    }

  ]
})

export default router
