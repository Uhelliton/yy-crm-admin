import { SessionStorage, LocalStorage } from 'quasar'

const sessionUserPrefix = 'user'
const UserStorage = {
  store: (data) => {
    SessionStorage.set('user', JSON.stringify(data))
    LocalStorage.set('app_version', process.env.PACKAGE_VERSION)
  },

  getUser: () => {
    const hasUser = (SessionStorage.has(sessionUserPrefix))
    if (hasUser) {
      const data = JSON.parse(SessionStorage.getItem(sessionUserPrefix))
      return data.user
    }
    return {
      name: '',
      email: ''
    }
  },

  getToken: () => {
    const hasUser = (SessionStorage.has(sessionUserPrefix))
    if (hasUser) {
      const data = JSON.parse(SessionStorage.getItem(sessionUserPrefix))
      return data.token
    }
    return ''
  },

  clearSession: () => {
    SessionStorage.remove(sessionUserPrefix)
  }
}

export default UserStorage
