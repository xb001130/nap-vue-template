export default [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: () => import('~/layout/Main.vue'),
    children: [
      {
        path: '/home',
        component: () => import('~/views/home/index.vue'),
      },
    ],
  },
]
