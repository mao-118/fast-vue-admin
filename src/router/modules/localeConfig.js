import Layout from '@/layout/index.vue';
export default {
  path: '/localeConfig',
  name: 'localeConfig',
  component: Layout,
  meta: { title: '国际化', icon: 'DocumentCopy' },
  sort: 9,
  children: [
    {
      path: '/localeConfig/index',
      name: 'localeConfigIndex',
      meta: { title: '国际化', icon: 'Baseball' },
      component: () => import('@/views/localeConfig/index.vue')
    }
  ]
};
