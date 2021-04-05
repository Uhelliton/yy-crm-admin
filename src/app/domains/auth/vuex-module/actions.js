// import AuthService from '../services/auth-service'
import UserStorage from '../storage/index'
const userMock = {
  user: {
    id: 1,
    name: 'Administrador',
    email: 'admin@admin.com',
    photo: null,
    rememberToken: null,
    createdAt: '2020-06-06T12:57:39.000Z',
    updatedAt: '2020-06-06T12:57:39.000Z',
    role: {
      id: 1,
      slug: 'master',
      name: 'Master',
      permissions: {
        'dashboard.index': true,
        'search.create': true,
        'search.index': true,
        'team.index': true,
        'team.edit': true,
        'team.create': true,
        'team.member.index': true,
        'user.index': true,
        'user.create': true,
        'user.edit': true,
        'user.profile': true,
        'user.permission.index': true,
        'user.permission.create': true,
        'user.permission.edit': true,
        'report.statistic.team': true,
        'report.statistic.search.keyword': true
      },
      createdAt: '2019-07-14T03:00:00.000Z',
      updatedAt: '2019-07-14T03:00:00.000Z'
    }
  },
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IkFkbWluaXN0cmFkb3IiLCJlbWFpbCI6ImFkbWluQHNpZ2kuY29tIiwicGhvdG8iOm51bGwsInJlbWVtYmVyVG9rZW4iOm51bGwsImNyZWF0ZWRBdCI6IjIwMjAtMDYtMDZUMTI6NTc6MzkuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMjAtMDYtMDZUMTI6NTc6MzkuMDAwWiIsInJvbGUiOnsiaWQiOjEsInNsdWciOiJtYXN0ZXIiLCJuYW1lIjoiTWFzdGVyIiwicGVybWlzc2lvbnMiOnsiZGFzaGJvYXJkLmluZGV4Ijp0cnVlLCJzZWFyY2guY3JlYXRlIjp0cnVlLCJzZWFyY2guaW5kZXgiOnRydWUsInRlYW0uaW5kZXgiOnRydWUsInRlYW0uZWRpdCI6dHJ1ZSwidGVhbS5jcmVhdGUiOnRydWUsInRlYW0ubWVtYmVyLmluZGV4Ijp0cnVlLCJ1c2VyLmluZGV4Ijp0cnVlLCJ1c2VyLmNyZWF0ZSI6dHJ1ZSwidXNlci5lZGl0Ijp0cnVlLCJ1c2VyLnByb2ZpbGUiOnRydWUsInVzZXIucGVybWlzc2lvbi5pbmRleCI6dHJ1ZSwidXNlci5wZXJtaXNzaW9uLmNyZWF0ZSI6dHJ1ZSwidXNlci5wZXJtaXNzaW9uLmVkaXQiOnRydWUsInJlcG9ydC5zdGF0aXN0aWMudGVhbSI6dHJ1ZSwicmVwb3J0LnN0YXRpc3RpYy5zZWFyY2gua2V5d29yZCI6dHJ1ZX0sImNyZWF0ZWRBdCI6IjIwMTktMDctMTRUMDM6MDA6MDAuMDAwWiIsInVwZGF0ZWRBdCI6IjIwMTktMDctMTRUMDM6MDA6MDAuMDAwWiJ9LCJpYXQiOjE2MTc2NTU2NDAsImV4cCI6MTYxNzY1NTY0M30.lKVy8Mb6qsf15j65ye7Pb44idhqgA0bwS5SksMLGyR0'
}

export default {
  /*!
   * Responsavel para efetivar a autenticacao de um usuario
   * @param context
   * @param payload
   *
   * @returns Promise
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  attemptLogin ({ commit, dispatch }, payload) {
    // return AuthService.authenticate(payload)
    //   .then(response => {
    //     commit('CHANGE_USER', response.user)
    //     commit('CHANGE_TOKEN', response.token)
    //     UserStorage.store(response)
    //     return response
    //   })
    //   .catch(error => {
    //     return error.response
    //   })

    commit('CHANGE_USER', userMock.user)
    commit('CHANGE_TOKEN', userMock.token)
    UserStorage.store(userMock)
    return userMock
  },

  /*!
   * Responsavel para deslogar um usuário
   * @param commit
   * @param dispatch
   * @param payload
   * @returns {boolean}
   */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logout ({ commit, dispatch }, payload) {
    commit('CLEAR_USER_SESSION', [])
    UserStorage.clearSession()
    return true
  }
}
