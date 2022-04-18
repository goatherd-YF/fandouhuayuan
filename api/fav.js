import request from '@/utils/request'


export function queryFav(fav) {
  return request({
    url: `/fav/query`,
    method: 'post',
    data: fav
  })
}

export function removeFavById(fav) {
  return request({
    url: `/fav/remove`,
    method: 'post',
    data: fav
  })
}

export function addFav(fav) {
  return request({
    url: `/fav/add`,
    method: 'post',
    data: fav
  })
}

export function removeFav(fav) {
  return request({
    url: `/fav/removeFav`,
    method: 'post',
    data: fav
  })
}

export function listFav(data) {
  return request({
    url: `/fav/listFav`,
    method: 'post',
    data: data
  })
}

export function countFav() {
  return request({
    url: `/fav/count`,
    method: 'get'
  })
}
