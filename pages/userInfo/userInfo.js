
// pages/userInfo.js
//获取应用实例
const app = getApp()
const _HTTP = require('../../utils/HTTP.js')
Page({
  data: {
    motto: 'CRM客户关系管理系统',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.qy.canIUse('button.open-type.getEnterpriseUserInfo'),
    isUser: "userInfo",
    UserName: "tesdee",
    headimageUrl:'',
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  getPhoneNumber: function (e) {
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  onLoad: function () {
    //wx.chooseInvoiceTitle({
    // })
   // _HTTP.Get({ url: 'api/Customer/Index', data: '' }).then(res=>{
   //    console.log(res.data);  
   // }).catch(res=>{
   //   console.log(res.data);
   // });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        UserName: "YuanHuiHui",
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.qy.getEnterpriseUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.qy.getAvatar({
      success :e=>{
        this.setData({
          headimageUrl: e.avatar,
        });
      },
      fail: function (res) {
        console.log(res.fail_reason)
        wx.showToast({
          title: '获取头像失败',
          icon:'none',
          duration:3000
        })
      }
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
