//index.js
Page({
  /**
   * 页面的初始数据
   */
    data: {
      servers: []
    },
    imageError: function (e) {
      console.log('image3发生error事件，携带值为', e.detail.errMsg)
    },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('ee');
   // console.log(getApp().globalData.serverUrl);   获取全局配置
    var listService = [
      {
        title: 'CRM',
        items: [{
          name: '线索',
          url: '/pages/Clue/Clue',
          icon: '/image/icon_nav_article.png',
          code: '11'
        },
        {
          isBind: true,
          name: '客户公海',
          url: '/pages/Customer/ClientHighSeas/ClientHighSeas',
          icon: '/image/icon_nav_actionSheet.png',
          code: '11'
        },
        {
            isBind: true,
            name: '客户',
          url: '/pages/Customer/Index/Customer',
          icon: '/image/avatar.png',
            code: '11'
          },
          {
            isBind: true,
            name: '商机',
            url: '/pages/BusinessOpportunity/BusinessOpportunity',
            icon: '/image/icon_nav_cell.png',
            code: '11'
          }
          ,
          {
            isBind: true,
            name: '拜访',
            url: '/pages/Visit/Index/Visit',
            icon: '/image/icon_nav_panel.png',
            code: '11'
          }
          ,
          {
            isBind: true,
            name: '合同',
            url: '/pages/Contract/Contract',
            icon: '/image/icon_nav_button.png',
            code: '11'
          },
          {
            isBind: true,
            name: '联系人',
            url: '/pages/Contract/Contract',
            icon: '/image/icon_nav_button.png',
            code: '11'
          },
          {
            isBind: true,
            name: '黑名单',
            url: '/pages/Contract/Contract',
            icon: '/image/icon_nav_button.png',
            code: '11'
          }
        ]
      },

      {
        title: '密云小站',
        items: [{
          name: '消息',
          url: '',
          icon: '/image/icon_nav_dialog.png',
          code: '11'
        },
        {
          isBind: true,
          name: '预约管理',
          url: '',
          icon: '/image/icon_nav_icons.png',
          code: '11'
        }, {
          isBind: true,
          name: '我的名片',
          url: '',
          icon: '/image/icon_nav_layout.png',
          code: '11'
        },
        ]
      },
       {
        title: '营销动态',
        items: []
      }
    ]
    this.setData({
      servers: listService
    })
  },

  /**
   * 当点击Item的时候传递过来
   */
  bindNavigator: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.path,
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})