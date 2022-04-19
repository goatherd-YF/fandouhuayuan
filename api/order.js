import request from '@/utils/request'




export function getOrdersInfoByIds(ids) {
  return request({
    url: `/order/getOrdersInfoByIds`,
    method: 'post',
    data: ids
  })
}

// 获取类别列表
export function createOrders(data) {
  return request({
    url: `/order/create`,
    method: 'get',
    params: data
  })
}


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
export function getOrdersInfo(id) {
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

//发
export function updateFaState(id) {
  return request({
    url: `/order/updateFaState/${id}`,
    method: 'get'
  })
}
//收
export function updateShouState(id) {
  return request({
    url: `/order/updateShouState/${id}`,
    method: 'get'
  })
}
