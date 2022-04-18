import request from "@/utils/request";

export function pay(ids) {
  return request({
    url: `/pay/money`,
    method: 'post',
    data: ids
  })
}

export function payIds(ids) {
  return request({
    url: `/pay/moneyIds`,
    method: 'post',
    data: ids
  })
}

export function payQuery(orderId,userId) {
  return request({
    url: `/pay/query/${orderId}/${userId}`,
    method: 'post'
  })
}
