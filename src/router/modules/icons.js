import Layout from '@/layout/index.vue';
export default {
  path: '/icons',
  name: 'icons',
  component: Layout,
  hasOnlyOneChildren:true,
  meta: { title: 'icons', icon: 'apple' },
  children: [
    {
      path: '/icons/index',
      name: 'index',
      meta: { title: 'Icons图标', icon: 'Food' },
      component: () => import('@/views/Icons/index.vue')
    }
  ]
};
