import Layout from '@/layout/index.vue';
export default {
  path: '/demo',
  name: 'demo',
  component: Layout,
  alwaysShow: true,
  meta: { title: '用例', icon: 'PriceTag' },
  children: [
    {
      path: '/demo/index',
      name: 'demo1',
      meta: { title: '表格用例', icon: 'Postcard' },
      component: () => import('@/views/demo/index.vue')
    }
  ]
};
