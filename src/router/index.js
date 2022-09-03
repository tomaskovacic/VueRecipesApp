import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DemoButtons from '../views/DemoButtons.vue'
import DemoText from '../views/DemoText.vue'
import DemoImages from '../views/DemoImages.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/recipe/:id',
      name: 'about',
      component: AboutView,
      props: true
    },
    {
      path: '/buttons',
      name: 'buttons',
      component: DemoButtons
    },
    {
      path: '/text',
      name: 'text',
      component: DemoText
    },
    {
      path: '/images',
      name: 'images',
      component: DemoImages
    },
  ]
})

export default router
