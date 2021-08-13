import { Notify } from 'quasar'

const NotifyMessage = {
  /*!
   * Notificacao do tipo sucess
   *
   * @param {string} message
   * @param {string} position
   */
  success: (message: string, position: any = 'top-right') => {
    return Notify.create({
      message: message,
      color: 'positive',
      position: position
    })
  },

  /*!
   * Notificacao do tipo aviso
   *
   * @param {string} message
   * @param {string} position
   */
  warning: (message: string, position: any = 'top-right') => {
    return Notify.create({
      message: message,
      color: 'warning',
      position: position
    })
  },

  /*!
  * Notificacao do tipo error
  *
  * @param {string} message
  * @param {string} position
  */
  error: (message: string, position: any = 'top-right') => {
    return Notify.create({
      message: message,
      color: 'negative',
      position: position
    })
  }
}

export default NotifyMessage
