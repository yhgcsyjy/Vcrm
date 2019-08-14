//app.js
const _HTTP = require('/utils/HTTP.js')
import {
  config
} from 'config.js';

App({
  onLaunch: function (option) {
   console.log(option)
   console.log(option.scene);
   /*
    if(wx.canIUse('wx.login')){
      wx.showToast({
        title: config.tips[1016],
        icon:'/image/loginlose.png',
        duration:3000
      })
    }*/
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    wx.getSystemInfo({
      success: function(res) {
       config.systemInfo=res;
      },
    })
    this.onlogin();
    // 获取用户信息
    wx.getSetting({
      success: res => {
      if (res.authSetting['scope.userInfo']) {
        // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
        wx.qy.getEnterpriseUserInfo({
          success: res => {
            // 可以将 res 发送给后台解码出 unionId
            this.globalData.userInfo = res.userInfo

            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            if (this.userInfoReadyCallback) {
              this.userInfoReadyCallback(res)
            }
          }
        })
      }
    }
  })
  },
  onlogin:function(){
    wx.qy.login({
      success: log_res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log(log_res.code);
        // 登录
        wx.request({
          url: config.api_base_url+ 'api/Login/onLogin',
          data: { code: log_res.code },
          header:config.header,
          success:function(loginres){
            let code = loginres.statusCode.toString();
            if (code.startsWith('2') || code === '304') { 
              config.jscode2sessionModel = loginres.data;
              wx.qy.checkSession({
                success: function (res) {
                  console.log('有效session')
                  //获取api授权
                  wx.request({
                    url: config.api_base_url + 'api/System/Token',
                    data: { Uid: loginres.data.userid, Role: 'Client', Project: 'VCRM', TokenType: 'MiniProgram' },
                    header: config.header,
                    success: function (res) {
                      config.serverToken = res.data;
                    },
                    fail: function (fres) {
                      wx.showToast({
                        title: fres.errMsg,
                        icon: 'none',
                        duration: 2000
                      })
                    }
                  });
                },
                fail: function (res) {
                  this.onlogin(); //重新登录
                }
              });
            }
            else
            {
              wx.showToast({
                title: loginres.data.Msg,
                icon:"none",
                duration:3000
              })
            }
          },
          fail:function(res){
            wx.showToast({
              title: config.tips[1015],
              icon: 'none',
              duration: 2000
            })
          }
        })
      },
      fail: function (res) {
        wx.showToast({
          title: config.tips[1015],
          icon: 'none',
          duration: 3000
        })
      }
    })
  },
  globalData: {
    userInfo: null,
  }
})