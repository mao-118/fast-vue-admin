import Layout from '@/layout/index.vue';
import Emptyout from '@/layout/Emptyout.vue';
export default {
  path: '/dashboard',
  name: 'Dashboard',
  component: Layout,
  meta: { title: '首页', icon: 'HomeFilled' },
  children: [
    {
      path: '/dashboard/index',
      name: 'DashboardIndex',
      meta: { title: '首页', icon: 'Location' },
      component: () => import('@/views/dashboard/index.vue')
    }
  ]
};
