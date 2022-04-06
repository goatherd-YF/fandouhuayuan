import request from '@/utils/request'

// 获取类别列表
export function orderList(current, limit, order) {
  return request({
    url: `/order/list/${current}/${limit}`,
    method: 'post',
    data: order
  })
}

export function listByOrder(order) {
  return request({
    url: `/order/listByOrder`,
    method: 'post',
    data: order
  })
}
// 根据id删除类别
export function removeOrderById(id) {
  return request({
    url: `/order/${id}`,
    method: 'delete'
  })
}

// 根据id获取类别
export function findById(id) {
  return request({
    url: `/order/${id}`,
    method: 'get'
  })
}

export function updateOrSaveOrder(order) {
  return request({
    url: `/order/saveAndUpdate`,
    method: 'post',
    data: order
  })
}
