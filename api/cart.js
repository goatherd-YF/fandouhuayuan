import request from '@/utils/request'

// 获取类别列表
export function cartList(current, limit, cart) {
  return request({
    url: `/cart/list/${current}/${limit}`,
    method: 'post',
    data: cart
  })
}

// 根据id删除类别
export function removeCartById(id) {
  return request({
    url: `/cart/${id}`,
    method: 'delete'
  })
}

// 根据id获取类别
export function findById(id) {
  return request({
    url: `/cart/${id}`,
    method: 'get'
  })
}

export function updateOrSaveCart(cart) {
  return request({
    url: `/cart/saveAndUpdate`,
    method: 'post',
    data: cart
  })
}