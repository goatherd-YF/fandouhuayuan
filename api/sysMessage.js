import request from '@/utils/request'

// 获取类别列表
export function sysMessageList(current, limit, sysMessage) {
  return request({
    url: `/sysMessage/list/${current}/${limit}`,
    method: 'post',
    data: sysMessage
  })
}

// 根据id删除类别
export function removeSysMessageById(id) {
  return request({
    url: `/sysMessage/${id}`,
    method: 'delete'
  })
}

// 根据id获取类别
export function findById(id) {
  return request({
    url: `/sysMessage/${id}`,
    method: 'get'
  })
}

export function updateOrSaveSysMessage(sysMessage) {
  return request({
    url: `/sysMessage/saveAndUpdate`,
    method: 'post',
    data: sysMessage
  })
}
