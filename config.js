const config = {
  api_base_url: 'https://crmtest.mcpsystem.com/',
  //api_base_url:"https://localhost:44340/",
  tips: {
    1001: '对不起!找不到该用户,请联系管理员',
    1002: 'appkey无效',
    1003: '授权已过期,请重新授权',
    1004: '保存成功',
    1005: '保存失败',
    1006: '非法请求',
    1007: '参数有误,此次保存失败,请重新保存',
    1008: '提交成功',
    1009: '提交失败,请重新提交',
    1010: '保存失败,数据格式有误,请检查数据',
    1011: '请求无效',
    1012: '参数校验失败',
    1013: '请求授权失败',
    1014: '请求服务器失败',
    1015: '登录失败,服务器无应答',
    1016: '不支持微信登录,请使用企业微信登录'
  },
  header: {
   // 'content-type': 'application/x-www-form-urlencoded',
    'content-type': 'application/json;charset=utf-8',
    'appkey': 'wx8916aaa1d51ae8e7'
  },
  serverToken: "",
  jscode2sessionModel:"",
  systemInfo:"",
  pagelist: 1,
  pagesize: 4,
}

export {config}