import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'


const routes = [

  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/Home',
    name: '/Home',
    component: () => import( '../views//Home.vue')
  },

  
  
  {
    path: '/Register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (Register.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Register" */ '../views/Register.vue')
  },
  {
    path: '/Project',
    name: 'Project',
    component: () => import(/* webpackChunkName: "Project" */ '../views/Project.vue'),
    meta: {
      keepAlive: true // 需要缓存
    }

  },
  {
    path: '/Confirm',
    name: 'Confirm',
    component: () => import(/* webpackChunkName: "Project" */ '../views/Confirm.vue'),
    meta: {
      isConfirm: true
    }

  },

  {
    path: '/Manager',
    name: 'Manager',
    component: () => import( '../views/Manager.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
