import request from '@/utils/request'

export function getInfo(token) {
  return request({
    url: '/admin/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/admin/logout',
    method: 'post'
  })
}

// 获取类别列表
export function userList(current, limit, user) {
  return request({
    url: `/user/list/${current}/${limit}`,
    method: 'post',
    data: user
  })
}

// 根据id删除类别
export function removeUserById(id) {
  return request({
    url: `/user/${id}`,
    method: 'delete'
  })
}

// 根据id获取类别
export function findById(id) {
  return request({
    url: `/user/${id}`,
    method: 'get'
  })
}

export function updateOrSaveUser(user) {
  return request({
    url: `/user/saveAndUpdate`,
    method: 'post',
    data: user
  })
}
