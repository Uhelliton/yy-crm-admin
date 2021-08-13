import validation from '../locales/validation'
/**
 * @param message
 * @returns {function(*=): *}
 */
export const required = (message) => {
  if (!message) message = validation.required
  return val =>   !!val || message
}
/**
 * @param {number} min
 * @param {string} message
 * @returns {Function}
 */
export const min = (min, message) => {
  if (!message) message = validation.minLength
  return val => val && val.length >= min || message
}

/**
 * @param {number} max
 * @param {string} message
 * @returns {Function}
 */
export const max = (max, message) => {
  if (!message) message = validation.maxLength
  return val => val && val.length <= max || message
}

/**
 * @param min
 * @param message
 * @returns {Function}
 */
export const minValue = (min, message) => {
  if (!message) message = validation.minValue
  return val => val && Number(val) >= min || message
}

/**
 * @param max
 * @param message
 * @returns {Function}
 */
export const maxValue = (max, message) => {
  if (!message) message = validation.maxValue
  return val => val && Number(val) <= max || message
}
