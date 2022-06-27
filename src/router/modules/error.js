import Layout from '@/layout/index.vue';
export default {
  path: '/error',
  name: 'error',
  component: Layout,
  meta: { title: '错误捕获', icon: 'DocumentDelete' },
  children: [
    {
      path: '/error/index',
      name: 'errorIndex',
      meta: { title: '错误捕获', icon: 'DocumentDelete' },
      component: () => import('@/views/error/index.vue')
    }
  ]
};
