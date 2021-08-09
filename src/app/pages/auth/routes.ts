// @ts-ignore
import Auth from './views/AuthIndex'
const routes = [
  {
    path: '/',
    redirect: '/',
    component: () => import('src/components/layouts/Login.vue'),
    children: [
      {
        path: '/',
        component: Auth,
        name: 'index',
        meta: {
          requiresAuth: false,
          hidden: true,
          layout: 'login'
        }
      }
    ]
  }
]

export default routes
