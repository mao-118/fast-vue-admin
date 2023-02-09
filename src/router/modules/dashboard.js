import Layout from '@/layout/index.vue'
export default {
  path: '/dashboard',
  name: 'Dashboard',
  component: Layout,
  hasOnlyOneChildren: true,
  meta: { title: '首页', icon: 'HomeFilled' },
  children: [
    {
      path: '/dashboard/index',
      name: 'DashboardIndex',
      meta: { title: 'Dashboard', icon: 'HomeFilled' },
      component: () => import('@/views/dashboard/index.vue'),
    },
  ],
}
