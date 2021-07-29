import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Layout from '../views/Detail/Layout.vue'
import Passenger from '../views/Detail/Passenger.vue'
import Airline from '../views/Detail/Airline.vue'
import NotFound from '../views/NotFound.vue'
import EditPassenger from '../views/Detail/EditPassenger.vue'

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
    component: Layout,
    children: [
      {
        path: '',
        name: 'Passenger',
        component: Passenger
      },
      {
        path: 'airline',
        name: 'Airline',
        props: true,
        component: Airline
      },
      {
        path: 'editPassenger',
        name: 'EditPassenger',
        props: true,
        component: EditPassenger
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFound,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router