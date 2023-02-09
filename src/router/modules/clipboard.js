import Layout from '@/layout/index.vue'
export default {
  path: '/clipboard',
  name: 'clipboard',
  component: Layout,
  meta: { title: 'clipboard', icon: 'DocumentCopy' },
  sort: 9,
  children: [
    {
      path: '/clipboard/index',
      name: 'clipboardIndex',
      meta: { title: 'copy', icon: 'DocumentCopy' },
      component: () => import('@/views/clipboard/index.vue'),
    },
  ],
}
