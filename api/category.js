import request from '@/utils/request'

// 获取类别列表
export function categoryList(current, limit, category) {
  return request({
    url: `/category/list/${current}/${limit}`,
    method: 'post',
    data: category
  })
}

// 根据id删除类别
export function removeCategoryById(id) {
  return request({
    url: `/category/${id}`,
    method: 'delete'
  })
}

// 根据id获取类别
export function findById(id) {
  return request({
    url: `/category/${id}`,
    method: 'get'
  })
}

export function updateOrSaveCategory(category) {
  return request({
    url: `/category/saveAndUpdate`,
    method: 'post',
    data: category
  })
}
