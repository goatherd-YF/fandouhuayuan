import request from '@/utils/request'

export function goodsList(current, limit, goods) {
  return request({
    url: `/goods/list/${current}/${limit}`,
    method: 'post',
    data: goods
  })
}

export function removeGoodsById(id) {
  return request({
    url: `/goods/${id}`,
    method: 'delete'
  })
}

export function updateOrSaveGoods(goods) {
  return request({
    url: `/goods/saveAndUpdate`,
    method: 'post',
    data: goods
  })
}

export function findById(id) {
  return request({
    url: `/goods/${id}`,
    method: 'get'
  })
}
