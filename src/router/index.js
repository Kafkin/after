import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'

import store from '@/store/index.js'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { isAuth: false }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/AboutView.vue'),
    meta: { isAuth: false }
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('./views/AdminView.vue'),
    meta: { isAuth: true, isAdmin: true }
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: () => import('./views/CatalogView.vue'),
    meta: { isAuth: false }
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('./views/CartView.vue'),
    meta: { isEmpty: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/LoginView.vue'),
    meta: { isAuth: false, isAuthShow: true }
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('./views/RegistrationView.vue'),
    meta: { isAuth: false, isAuthShow: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(( to, from, next ) => {
  const arr = store.getters.getAllProductInCart
  const isAdmin = store.getters.isAdmin
  const isAuth = store.getters.isAuth

  if( to.meta.isAuth && !isAuth ) next('/')
  else if( to.meta.isAdmin && !isAdmin ) next('/')
  else if( to.meta.isAuthShow && isAuth ) next('/')
  else if( to.meta.isEmpty && !arr.length ) next('/')
  else next()
})

export default router
