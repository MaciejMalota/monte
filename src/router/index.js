import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nextstep from '../views/Nextstep.vue'
import Laststep from '../views/Laststep.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    props: true
  },
  {
    path: "/Nextstep",
    name: "Nextstep",
    component: Nextstep,
    props: true
  },

  {
    path: "/Laststep",
    name: "Laststep",
    component: Laststep,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
