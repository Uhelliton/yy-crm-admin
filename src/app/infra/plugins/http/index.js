import axios from 'axios'

const axiosHttpClient = axios.create({
  baseURL: process.env.API_URL
})

axiosHttpClient.interceptors.request.use((config) => {
  // config.headers['Content-Type'] = 'application/json'
  return config
}, (error) => {
  return Promise.reject(error)
})

export default axiosHttpClient
