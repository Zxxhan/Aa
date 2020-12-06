import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index'
import Detail from '../views/detail/index'


Vue.use(VueRouter)

const routes = [
  {
    path:'/index',
    component:Home,
  },
  {
    path:'/detail',
    component:Detail
  },
  {
    path:'/',
    component:Home,
  },
]

const router = new VueRouter({
  routes
})

export default router
