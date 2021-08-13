import axios from 'axios'

const clientApi = axios.create({
  baseURL: process.env.API_URL
})

clientApi.interceptors.request.use((config) => {
  // config.headers['Content-Type'] = 'application/json'
  return config
}, (error) => {
  return Promise.reject(error)
})

export default clientApi
