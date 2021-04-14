import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import('@/layouts/home/Index.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/Index.vue'),
        meta: { scrollToTop: true }
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('@/views/about/Index.vue')
      },
      {
        path: 'animation',
        name: 'Animation',
        component: () => import('@/views/animation/Index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  // 控制滚动
  scrollBehavior (to, from, savedPosition){
    // savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    if (savedPosition) {
      return savedPosition
    } else {
      const position: any = {};

      // 通过返回选择器滚动到锚点
      if (to.hash) {
        position['selector'] = to.hash;
        position['behavior'] = 'smooth';

        // 验证锚点
        if (/^#\d/.test(to.hash) || document.querySelector(to.hash)) {
          return position
        }

        // 如果返回的位置是虚假的或空的对象，将保留当前滚动位置。
        return false;
      }

      // 回到顶部
      position.x = 0;
      position.y = 0;
      return position
    }
  }
})

export default router
