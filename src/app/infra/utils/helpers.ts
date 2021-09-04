import { uid } from 'quasar'

export { uid }

export const numberOnly = (str: string) => {
  return str.replace(/[^0-9\.]+/g, '')
}

/**
 * Mantem apenas string de um texto
 * @param str
 */
export const stringOnly = (str: string) => {
  return str.replace(/\d+/g, '');
}

/**
 * transforma uma string em slug
 * @param string
 * @param separator
 */
export const slugify = (string: string, separator: string = '-') => {
  return string
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036F]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/\s+/g, separator)
}


/**
 * Replace todos os espaços de uma string
 * @param str
 * @param separator
 */
export const replaceSpace = (str: string, separator: string = '') => {
  return str.replace(/\s+/g, separator);
}

/**
 * Replace uma string por um string especifica
 * @param str
 * @param from
 * @param to
 */
export const replaceString = (str: string, from: string, to: string) => {
  return str.replace(new RegExp(from, 'g'), to);
}


/**
 * Formata moeda para o padrão default
 * @param str
 */
export const formatCurrencyDefault = (str: string) => {
  return replaceString(str.replace('.', ''), ',', '.');
}

/**
 * Formata numero para o padrão moeda brasileiro
 * @param value
 */
export const formatNumberToCurrencyBr = (value: number) => {
  const formatter = new Intl.NumberFormat('pt-br', {
    minimumFractionDigits: 2
  })

  return formatter.format(value)
}
