import { Loading } from 'quasar'

export default class Preload {
  /*!
   * Inicializa o preload
   * @param message
   */
  public static show (msg: string = 'Processando, aguarde...') : any {
    return Loading.show({
      message: msg
    })
  }

  /*!
   * Fecha o preload
   * @param message
   */
  public static hide () : any {
    return Loading.hide()
  }
}
