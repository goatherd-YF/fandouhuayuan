import request from "@/utils/request";

export function pay(id) {
  return request({
    url: `/pay/money`,
    method: 'get',
    params: id
  })
}

export function payQuery(orderId) {
  return request({
    url: `/pay/query/${orderId}`,
    method: 'get'
  })
}
