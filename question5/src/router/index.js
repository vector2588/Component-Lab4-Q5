import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Layout from '../views/Detail/Layout.vue'
import Passenger from '../views/Detail/Passenger.vue'
import Airline from '../views/Detail/Airline.vue'
import NotFound from '../views/NotFound.vue'
import EditPassenger from '../views/Detail/EditPassenger.vue'
import NProgress from 'nprogress'
import PassengerService from '../services/Service.js'
import GStore from '@/store'


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
    beforeEnter: (to) => {
      return PassengerService.getEvent(to.params.id) // Return and params.id
      .then((response) => {
        // Still need to set the data here
        GStore.passenger = response.data // <--- Store the event
      })
      .catch((error) => {
        if (error.response && error.response.status == 404) {
          return { // <--- Return
            name: '404Resource',
            params: { resource: 'event' }
          }
        } else {
          return { name: 'NetworkError' } // <--- Return
        }
      })
    },
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {top:0}
    }
  }
})
router.beforeEach(() => {
  NProgress.start()
})
router.afterEach(() => {
  NProgress.done()
})

export default router