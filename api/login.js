import request from '@/utils/request'

export function loginUser(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data: data
  })
}

export function getUserLoginInfo() {
  return request({
    url: 'getUserLoginInfo',
    method: 'get'
  })
}

export function weChatLogin() {
  return request({
    url: '/api/ucenter/wx/login',
    method: 'get'
  })
}
