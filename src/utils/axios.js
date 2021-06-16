import axios from 'axios'
import _ from 'lodash'
import config from '../config'
import history from '../history'

const instance = axios.create({
  baseURL: config.hahow_baseURL,
  timeout: config.api_timeout, // default 5000ms
  headers: {
    'Content-Type': 'application/json',
  },
})

const successHandler = (resp) => {
  return resp
}
const errorHandler = (error) => {
  const status = _.get(error, 'response.status')

  if (!status) {
    return Promise.reject(error)
  }

  switch (error.response.status) {
    case 404:
      history.replace('/404')
      history.go(0)
      break
    default:
      history.replace('/500')
      history.go(0)
      break
  }

  return Promise.reject(error)
}

instance.interceptors.response.use(successHandler, errorHandler)

const get = (url, header) => instance.get(url, header)
const post = (url, data, header) => instance.post(url, data, header)
const patch = (url, data, header) => instance.patch(url, data, header)

export { get, post, patch }
