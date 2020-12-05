import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'


Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:Home,
  },
]

const router = new VueRouter({
  routes
})

export default router
