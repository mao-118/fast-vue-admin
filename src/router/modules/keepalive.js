import Layout from '@/layout/index.vue';
import Emptyout from '@/layout/Emptyout.vue';
export default {
  path: '/keepalive',
  name: 'keepalive',
  component: Layout,
  meta: { title: 'KeepAlive', icon: 'ElementPlus' },
  children: [
    {
      path: '/keepalive/menu1',
      name: 'menu1',
      meta: { title: 'Menu1', icon: 'Files' },
      component: () => import('@/views/keepalive/menu1/index.vue')
    },
    {
      path: '/keepalive/menu1to1',
      name: 'menu1to1',
      alwaysShow: true,
      meta: { title: 'Menu1To1', icon: 'Files' },
      component: Emptyout,
      children: [
        {
          path: '/keepalive/menu1-1',
          name: 'menu1-1',
          meta: { title: 'Menu1-1', icon: 'Files' },
          component: () => import('@/views/keepalive/menu1-1/index.vue')
        }
      ]
    }
  ]
};
