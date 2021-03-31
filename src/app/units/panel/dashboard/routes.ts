import Page404 from 'src/app/support/common/pages/error/Error404'
const routes = [
  {
    path: '/dashboard',
    component: () => import('src/app/units/panel/dashboard/views/Dashboard'),
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
