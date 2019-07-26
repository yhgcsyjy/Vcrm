import {
  config
} from '../config.js';

function Get(params) {
  if (!config.serverToken || config.serverToken == '') {
    return new Promise((resolve, reject) => {
      _show_error(1014)
    })
  }
  config.header["Authorization"] = "Bearer " + config.serverToken;
  var promise = new Promise((resolve, reject) => {
    wx.request({
      url: config.api_base_url + params.url,
      method: 'GET',
      data: params.data || {},
      header: config.header,
      datatype:'JSON',
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2') || code === '304') {
          resolve(res);
        } else {
          reject(res.data);
          let error_code = res.data.error_code
          _show_error(error_code)
        }
      },
      fail: (err) => {
        debugger
        reject(err.data);
        _show_error(1014)
      }
    })
  });
  return promise;
}
function Post(params) {
  if (!config.serverToken || config.serverToken == '') {
    return new Promise((resolve, reject) => {
      _show_error(1014)
    })
  }
  config.header["Authorization"] = "Bearer " + config.serverToken;
  var promise = new Promise((resolve, reject) => {
    wx.request({
      url: config.api_base_url + params.url,
      method: 'POST',
      data: params.data || {},
      header: config.header,
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2') || code === '304') {
          resolve(res);
        } else {
          reject(res.data);
          let error_code = res.data.error_code
          _show_error(error_code)
        }
      },
      fail: (err) => {
        reject(err.data);
        _show_error(1014)
      }
    })
  });
  return promise;
}
function JsonPost(params) {
  if (!config.serverToken || config.serverToken == '') {
    return new Promise((resolve, reject) => {
      _show_error(1014)
    })
  }
  config.header["Authorization"] = "Bearer " + config.serverToken;
  var promise = new Promise((resolve, reject) => {
    wx.request({
      url: config.api_base_url + params.url,
      method: 'POST',
      data: JSON.stringify(params.data) || {}, 
      header: config.header,
      success: (res) => {
        let code = res.statusCode.toString()
        if (code.startsWith('2') || code === '304') {
          resolve(res);
        } else {
          reject(res.data);
          let error_code = res.data.error_code
          _show_error(error_code)
        }
      },
      fail: (err) => {
        reject(err.data);
        _show_error(1014)
      }
    })
  });
  return promise;
}
// 私有方法，显示请求错误信息
function _show_error(error_code) {
  if (!error_code) {
    error_code = 1002
  }
  const tip = config.tips[error_code]
  wx.showToast({
    title: tip ? tip : tips[1013],
    icon: 'none',
    duration: 2000
  })
}

module.exports = {
  Get:Get,
  Post: Post,
  JsonPost: JsonPost,
}
