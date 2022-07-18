import Layout from '@/layout/index.vue';
export default {
  path: '/vueuse',
  name: 'vueuse',
  component: Layout,
  alwaysShow: true,
  meta: { title: 'vueuse', icon: 'PriceTag' },
  children: [
    {
      path: '/vueuse/draggable',
      name: 'draggable',
      meta: { title: '拖拽', icon: '' },
      component: () => import('@/views/vueuse/draggable.vue')
    },
    {
      path: '/vueuse/base64',
      name: 'base64',
      meta: { title: 'base64', icon: '' },
      component: () => import('@/views/vueuse/base64.vue')
    },
    {
      path: '/vueuse/useIcon',
      name: 'useIcon',
      meta: { title: 'useIcon', icon: '' },
      component: () => import('@/views/vueuse/useIcon.vue')
    }
  ]
};
