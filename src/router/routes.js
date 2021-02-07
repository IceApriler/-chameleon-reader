export default [
  {
    path: '/',
    name: 'h',
    meta: {
      title: '',
    },
    redirect: { name: 'Home' },
  },
  {
    path: '/home',
    name: 'Home',
    meta: {
      title: '首页',
    },
    component: () => import('@/views/home/index.vue'),
  },
]
