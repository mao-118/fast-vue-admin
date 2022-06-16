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
    name: 'login',
    component: () => import('@/views/login/index.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes: [...constantRoutes, ...routes]
});
router.beforeResolve(beforeResolve);
router.afterEach(afterEach);

export default router;
