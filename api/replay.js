import request from "@/utils/request";

export function getReply(goodsId) {
  return request({
    url: `/reply/getReply/${goodsId}`,
    method: 'get',
  })
}

export function addReply(reply) {
  return request({
    url: `/reply//addReply`,
    method: 'post',
    data:reply
  })
}
