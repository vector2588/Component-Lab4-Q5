import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PassengerDetail from '../views/PassengerDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: (route) => ({ page: parseInt(route.query.page) || 0, size: parseInt(route.query.size) || 10 })
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/PassengerDetail/:id',
    name: 'PassengerDetail',
    props: true,
    component: PassengerDetail,
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router