import axios from 'axios'
import config from '../config'

const instance = axios.create({
  baseURL: config.hahow_baseURL,
  timeout: config.api_timeout, // default 3000ms
})

const successHandler = (resp) => {
  console.log(resp)
  return resp
}
const errorHandler = (error) => {
  switch (error.response.status) {
    case 404:
      console.log(404)
      break
    default:
      console.log(500)
      break
  }
  return Promise.reject(error)
}

instance.interceptors.response.use(successHandler, errorHandler)

const get = (url, header) => instance.get(url, header)
const post = (url, data, header) => instance.post(url, data, header)
const patch = (url, data, header) => instance.patch(url, data, header)

export { get, post, patch }
