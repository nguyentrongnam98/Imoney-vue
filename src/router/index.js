import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from "firebase/auth";
import { app } from '../config/firebase';
import HomeView from '../views/HomeView.vue'

const requiredAuth = (to,from,next) => {
  const auth = getAuth(app)
  const user = auth.currentUser;
  if (!user) next({name:'login',params:{}})
  next()
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      meta:{
        layout:'default-layout',
      },
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        layout:'auth-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout:'auth-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Login.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Profile.vue'),
      beforeEnter: requiredAuth
    },
    {
      path: '/wallet',
      name: 'wallet',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Wallet.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue')
    },
    {
      path: '/private',
      name: 'private',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Private.vue')
    },
    {
      path: '/tools',
      name: 'tools',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Tools.vue')
    },
    {
      path: '/bug',
      name: 'bug',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Bug.vue')
    },
    {
      path: '/budget',
      name: 'budget',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Budget.vue')
    },
    {
      path: '/report',
      name: 'report',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Report.vue')
    },
    {
      path: '/logout',
      name: 'logout',
      meta: {
        layout:'default-layout'
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Logout.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      name:'Not found',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
