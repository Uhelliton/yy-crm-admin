import Page404 from 'src/app/presentation/pages/error/Error404.vue'
const routes = [
  {
    path: '/dashboard',
    component: () => import('src/app/presentation/pages/panel/dashboard/views/Dashboard.vue'),
    name: 'dashboard.index',
    meta: {
      requiresAuth: true,
      route: { title: 'Painel' },
      layout: 'admin'
    }
  },
  { path: '/404', component: Page404 },
  { path: '*', redirect: '/404' }
]

export default routes
