import axios from 'axios'
// import _ from 'lodash'
import config from '../config'

const instance = axios.create({
  baseURL: config.hahow_baseURL,
  timeout: config.api_timeout, // default 10000ms
})

const successHandler = (resp) => {
  console.log('resp', resp)
  return resp
}
const errorHandler = (error) => {
  console.log('error', error.response)
  // const status = _.get(error, 'response.status')
  // console.log('status', status)

  // if (!status) {
  //   return Promise.reject(error)
  // }

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
