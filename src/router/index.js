import { createRouter, createWebHashHistory } from 'vue-router';
import { routes, beforeResolve, afterEach } from './installRouter';
import Layout from '@/layout/index.vue';
const constantRoutes = [
  {
    path: '/',
    redirect: '/dashboard/index'
  },
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/404',
    component: () => import('@/views/errorPage/404.vue')
  },
  {
    path: '/401',
    component: () => import('@/views/errorPage/401.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...routes]
});
router.beforeResolve(beforeResolve);
router.afterEach(afterEach);

export default router;
