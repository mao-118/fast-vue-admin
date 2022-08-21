import Layout from '@/layout/index.vue';
import Emptyout from '@/layout/Emptyout.vue';
export default {
  path: '/errorPage',
  name: 'errorPage',
  component: Layout,
  hasOnlyOneChildren:true,
  meta: { title: 'errorPage', icon: 'DocumentCopy' },
  children: [
    {
      path: '/errorPage/index',
      component: Emptyout,
      name: 'errorPageIndex',
      meta: { title: '错误引导页', icon: 'DocumentCopy' },
      children: [
        {
          path: '/errorPage/404',
          name: '404',
          meta: { title: '404', icon: 'Location' },
          component: () => import('@/views/errorPage/404.vue')
        },
        {
          path: '/errorPage/401',
          name: '401',
          meta: { title: '401', icon: 'Location' },
          component: () => import('@/views/errorPage/401.vue')
        }
      ]
    }
  ]
};