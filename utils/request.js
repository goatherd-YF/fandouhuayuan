import axios from 'axios'
// import { Message } from 'element-ui'
import cookie from 'js-cookie'

// create an axios instance
const service = axios.create({
  baseURL: 'http://localhost:8160', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 * 1000 // request timeout
})

// http request 拦截器
service.interceptors.request.use(
  config => {
    if (cookie.get('MyToken')) {
      config.headers['token'] = cookie.get('MyToken')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })
// http response 拦截器
// service.interceptors.response.use(
//   response => {
//     // debugger
//     if (response.data.code === 28004) {
//       console.log('response.data.resultCode是28004')
//       // 返回 错误代码-1 清除ticket信息并跳转到登录页面
//       // debugger
//       window.location.href = '/login'
//       return
//     } else {
//       if (response.data.code !== 200) {
//         // 25000：订单支付中，不做任何提示
//         if (response.data.code != 25000) {
//           Message({
//             message: response.data.message || 'error',
//             type: 'error',
//             duration: 5000 * 1000
//           })
//         }
//       } else {
//         return response
//       }
//     }
//   },
//   error => {
//     return Promise.reject(error.response) // 返回接口返回的错误信息
//   })

export default service
