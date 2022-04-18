import request from "@/utils/request";

//获取特价商品
export function getUnit() {
  return request({
    url: `/myUnit/getUnit`,
    method: 'get',
  })
}
