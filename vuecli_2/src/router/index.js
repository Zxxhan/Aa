import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../views/page1.vue'
import Page2 from '../views/page2.vue'
import Page3 from '../views/page3.vue'
import A from '../views/a.vue'
import B from '../views/b.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/page1',
    name:'page1',
    // 别名
    alias:'/bieming',
    component:Page1
  },
  {
    path:'/page2',
    name:'page2',
    component:Page2
  },
  {
    path:'/page3/:id',
    name:'page3',
    component:Page3,
    children:[{
      path:'a',
      component:A
    },{
      path:'b',
      component:B
    }]
  },
  {
    path:'/',

    // 重定向
    redirect:'/page2'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
