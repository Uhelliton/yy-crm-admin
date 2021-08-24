const routes = [
  {
    path: '/public/dashboard',
    component: () => import('src/app/presentation/pages/public/views/PublicPanel'),
    name: 'public.dashboard',
    meta: {
      requiresAuth: true,
      route: { title: 'Publico' },
      layout: 'admin'
    }
  },
  {
    path: '/public',
    component: () => import('src/app/presentation/pages/public/views/PublicIndex'),
    name: 'public.index',
    meta: {
      requiresAuth: true,
      route: { title: 'Publico' },
      layout: 'admin'
    }
  }
]

export default routes
