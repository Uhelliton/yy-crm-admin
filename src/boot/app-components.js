// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default ({ app, router, Vue }) => {
  Vue.component('MLinkButton',
    () => import('src/app/support/common/components/button/LinkButton')
  )
  Vue.component('MButton',
    () => import('src/app/support/common/components/button/Button')
  )
  Vue.component('MButtonIcon',
    () => import('src/app/support/common/components/button/ButtonIcon')
  )
}
