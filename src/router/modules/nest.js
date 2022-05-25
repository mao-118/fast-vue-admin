import Layout from '@/layout/index.vue';
import Emptyout from '@/layout/Emptyout.vue';
export default {
  path: '/nest',
  name: 'nest',
  component: Layout,
  meta: { title: '路由嵌套', icon: 'Menu' },
  children: [
    {
      path: '/nest/menu1',
      name: 'menu1',
      meta: { title: '菜单1', icon: 'Menu' },
      component: Emptyout,
      children: [
        {
          path: '/nest/menu1/menu1-1',
          name: 'menu1-1',
          meta: { title: '菜单1-1', icon: 'Location' },
          component: () => import('@/views/nest/menu1/menu1-1/index.vue')
        },
        {
          path: '/nest/menu1/menu1-2',
          name: 'menu1-2',
          meta: { title: '菜单1-2', icon: 'Location' },
          component: Emptyout,
          alwaysShow: true,
          children: [
            {
              path: '/nest/menu1/menu1-2/menu1-2-1',
              name: 'menu1-2-1',
              meta: { title: '菜单1-2-1', icon: 'Location' },
              component: () => import('@/views/nest/menu1/menu1-2/menu1-2-1/index.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/nest/menu2',
      name: 'menu2',
      meta: { title: '菜单2', icon: 'Location' },
      component: () => import('@/views/nest/menu2.vue')
    }
  ]
};
