import Layout from '@/layout/index.vue';
export default {
  path: '/components',
  name: 'components',
  component: Layout,
  meta: { title: '组件', icon: 'HomeFilled' },
  sort: 2,
  children: [
    {
      path: '/components/swiper',
      name: 'swiper',
      meta: { title: 'swiper', icon: 'Location' },
      component: () => import('@/views/components/swiper.vue')
    },
    {
      path: '/components/map',
      name: 'map',
      hidden: true,
      meta: { title: 'map', icon: 'Location' },
      component: () => import('@/views/components/map.vue')
    },
    {
      path: '/components/markdown',
      name: 'markdown',
      meta: { title: 'markdown', icon: 'Location' },
      component: () => import('@/views/components/markdown.vue')
    },
    {
      path: '/components/richText',
      name: 'richText',
      meta: { title: '富文本', icon: 'Location' },
      component: () => import('@/views/components/richText.vue')
    }
  ]
};
