import cookie from "js-cookie";

export function getLoginInfo() {
  var jsonStr = cookie.get('loginUser')
  if (jsonStr) {
    const loginInfo = JSON.parse(jsonStr)
    return loginInfo
  }
}

