import { $router } from 'src/router'

/**
 * @param {string|number} target
 * @param {*} options
 */
export default (target, options = undefined) => {
    if (typeof target === 'undefined') {
        return
    }

    if (typeof target === 'string' && options && options.blank) {
        window.location.assign(target)
        return
    }

    if (typeof target === 'string' && typeof options === 'string' && options === 'replace') {
        $router.replace(target)
        return
    }

    if (typeof target === 'number') {
        $router.go(target)
        return
    }

    if (typeof target === 'string' && !!options) {
        const { query = {}, meta = {}, ...params } = options
        target = { name: target, query, meta, params }
    }

    if (options === true || (options && typeof options === 'object' && options.query)) {
        target.query = {
            ...target.query,
            ...$router.currentRoute.query
        }
    }
    $router.push(target)
}
