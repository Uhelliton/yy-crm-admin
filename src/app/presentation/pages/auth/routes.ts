// @ts-ignore
import Auth from './views/AuthIndex.vue'
const routes = [
  {
    path: '/',
    redirect: '/',
    component: () => import('src/app/presentation/components/layouts/Login.vue'),
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
