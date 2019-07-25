//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        var lis ='';
         wx.getSystemInfo({
          success: function(res) {
            lis+=res.model;
            lis+=res.language;
            lis+=res.version;
            lis+=res.system;
          },
        })
        return util.formatTime(new Date(log))+lis;
      })
    })
  }
})
