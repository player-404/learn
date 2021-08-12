import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//全局路由守卫

//全局前置守卫
router.beforeEach((to, from ,next) => {
  console.log('全局前置守卫');
  console.log('to', to, 'from', from, 'next', next);
})

//全局解析守卫
router.beforeResolve((to, from, next) => {
  console.log('全局解析守卫');
  next();
})

//全局后置钩子
router.afterEach((to, from) => {
  console.log('全局后置钩子')
})
export default router
