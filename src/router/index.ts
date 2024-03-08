import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '首页',
      component: () => import('../components/Index.vue')
    },
    {
      path: '/jobs',
      name: '任务列表',
      component: () => import('../components/QuartzJobList.vue')
    },
    {
      path: '/group',
      name: '任务组',
      component: () => import('../components/QuartzGroup.vue')
    },
    {
      path: '/task',
      name: '任务配置',
      component: () => import('../components/QuartzTasks.vue')
    },
    {
      path: '/notFind',
      name: '404',
      component: () => import('../components/common/PageNotFind.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 全局前置守卫逻辑 (没有找到路由，跳转NotFind页面)
  router.hasRoute(to.name || '') ? next() : next('/notFind')
});

export default router
