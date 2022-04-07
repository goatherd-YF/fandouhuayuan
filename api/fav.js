import request from '@/utils/request'


export function queryFav(fav) {
  return request({
    url: `/fav/query`,
    method: 'post',
    data: fav
  })
}

export function removeFavById(id) {
  return request({
    url: `/fav/remove`,
    method: 'get',
    params: id
  })
}

export function addFav(fav) {
  return request({
    url: `/fav/add`,
    method: 'post',
    data: fav
  })
}

export function countFav() {
  return request({
    url: `/fav/count`,
    method: 'get'
  })
}
