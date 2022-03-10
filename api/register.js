import request from '@/utils/request'

export function registerUser(data) {
  return request({
    url: 'register',
    method: 'post',
    data: data
  })
}

export function sendMail(mail) {
  return request({
    url: `register?mail=${mail}`,
    method: 'get'
  })
}
