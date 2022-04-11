import request from "@/utils/request";

export function pay(id) {
  return request({
    url: `/pay/money`,
    method: 'get',
    params: id
  })
}

export function payQuery(id) {
  return request({
    url: `/pay/query`,
    method: 'get',
    params: id
  })
}
