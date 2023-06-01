import Vue from 'vue'
import VueRouter from 'vue-router'
import LogInMain from '@/views/LogInMain.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/LogIn'
  },
  {
    path: '/LogIn',
    name: 'LogIn',
    component: LogInMain,
    meta: {
      title: '登录'
    }
  },
  {
    path: '/Home',
    name: 'Home',
    meta: {
      // title: '主体'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children: [
      {
        path: '',
        redirect: 'Main'
      },
      {
        path: 'Main',
        component: () => import('../views/home/Main.vue'),
        meta: {
          module: '首页',
          title: '首页'
        }
      },
      {
        path: 'QueryA',
        component: () => import('../views/home/Query.vue'),
        meta: {
          title: '任务查询',
          module: '任务查询'
        }
      },
      {
        path: 'ConfigurationA',
        component: () => import('../views/home/Configuration.vue'),
        meta: {
          title: '外呼信息配置',
          module: '外呼信息配置'
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.localStorage.getItem('token') // 获取token值
  if (!tokenStr) return next('/login')
  next()
})

export default router
