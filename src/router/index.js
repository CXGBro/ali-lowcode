import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/home',
    name: 'home',
    component: ()=>import('@/views/home/index')
  },
  {
    path:'/login',
    name:'login',
    component:()=>import('@/views/login/index')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
