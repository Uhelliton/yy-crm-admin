import { uid } from 'quasar'

export { uid }

export const numberOnly = (str: string) => {
  return str.replace(/[^0-9\.]+/g, '')
}
