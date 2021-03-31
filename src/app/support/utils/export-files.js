import { exportFile } from 'quasar'
export { exportFile }

/**
 * @param val
 * @param formatFn
 * @returns {string}
 */
export const wrapCsvValue = (val, formatFn) =>  {
  let formatted = formatFn !== void 0
    ? formatFn(val)
    : val

  formatted = formatted === void 0 || formatted === null
    ? ''
    : String(formatted)

  formatted = formatted.split('"').join('""')
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

/**
 * codificação para o formato csv
 * @param {Array} columns
 * @param {Array} rows
 * @returns {string}
 */
export const encodingToCsv = (columns, rows) => {
  return [ columns.map(col => wrapCsvValue(col.label)) ].concat(
    rows.map(row => columns.map(col => wrapCsvValue(
      typeof col.field === 'function'
        ? col.field(row)
        : row[col.field === void 0 ? col.name : col.field],
      col.format
    )).join(','))
  ).join('\r\n')
}
