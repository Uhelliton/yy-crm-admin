import validation from '../locales/validation'
/**
 * @param message
 * @returns {function(*=): *}
 */
export const required = (message: string) => {
  if (!message) message = validation.required
  return (val: any) =>   !!val || message
}
/**
 * @param {number} min
 * @param {string} message
 * @returns {Function}
 */
export const min = (min: number, message: string) => {
  if (!message) message = validation.minLength
  return (val: any) => val && val.length >= min || message
}

/**
 * @param {number} max
 * @param {string} message
 * @returns {Function}
 */
export const max = (max: number, message: string) => {
  if (!message) message = validation.maxLength
  return (val: any) => val && val.length <= max || message
}

/**
 * @param min
 * @param message
 * @returns {Function}
 */
export const minValue = (min: number, message: string) => {
  if (!message) message = validation.minValue
  return (val: any) => val && Number(val) >= min || message
}

/**
 * @param max
 * @param message
 * @returns {Function}
 */
export const maxValue = (max: number, message: string) => {
  if (!message) message = validation.maxValue
  return (val: any) => val && Number(val) <= max || message
}
