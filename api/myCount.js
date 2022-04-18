import request from "@/utils/request";

//获取特价商品
export function getCount() {
  return request({
    url: `/count/getCount`,
    method: 'get',
  })
}
