import Layout from '@/layout/index.vue';
export default {
  path: '/websocket',
  name: 'websocket',
  component: Layout,
  meta: { title: 'websocket', icon: 'folder' },
  children: [
    {
      path: '/websocket/index',
      name: 'websocketIndex',
      meta: { title: 'websocket', icon: 'Cpu' },
      component: () => import('@/views/websocket/index.vue')
    }
  ]
};
