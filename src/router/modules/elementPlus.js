import Layout from '@/layout/index.vue';
export default {
  path: '/elementPlus',
  name: 'elementPlus',
  component: Layout,
  meta: { title: 'ElementPlus', icon: 'ElementPlus' },
  children: [
    {
      path: '/elementPlus/table',
      name: 'table',
      meta: { title: '虚拟化表格', icon: 'Files' },
      component: () => import('@/views/ElementPlus/table.vue')
    },
    {
      path: '/elementPlus/other',
      name: 'other',
      meta: { title: '其他虚拟化组件', icon: 'Files' },
      component: () => import('@/views/ElementPlus/other.vue')
    }
  ]
};
