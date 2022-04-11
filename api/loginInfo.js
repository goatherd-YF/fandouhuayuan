import request from '@/utils/request'
import cookie from "js-cookie";

export function getLoginInfo() {
  var jsonStr = cookie.get('loginUser')
  console.log(typeof jsonStr)
  if (jsonStr) {
    const loginInfo = JSON.parse(jsonStr)
    return loginInfo
  }
}

