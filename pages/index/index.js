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
        title: 'VCRM',
        items: [
          {
            isBind: true,
            name: '商机',
            url: '/pages/BusinessChance/Index/Index',
            icon: '/image/icon_nav_cell.png',
            code: '11'
          },
          {
          name: '拜访计划',
          url: '/pages/VisitPlan/Index/Index',
          icon: '/image/deployment.png',
          code: '11'
        },
        {
          isBind: true,
          name: '公海客户',
          url: '/pages/Customer/ClientHighSeas/ClientHighSeas',
          icon: '/image/piechart.png',
          code: '11'
        },
        {
            isBind: true,
            name: '我的客户',
           url: '/pages/Customer/Index/Customer',
           icon: '/image/avatar.png',
            code: '11'
          },
          {
            isBind: true,
            name: '客户联系',
            url: '/pages/Visit/Index/Visit',
            icon: '/image/visit.png',
            code: '11'
          }
          ,
          {
            isBind: true,
            name: '合同',
            url: '/pages/ContractBasic/Index/Index',
            icon: '/image/Contract.png',
            code: '11'
          },
          {
            isBind: true,
            name: '联系人',
            url: '/pages/LinkMan/Index/Index',
            icon: '/image/LinkMan.png',
            code: '11'
          },
          {
            isBind: true,
            name: '黑名单',
            url: '/pages/BlackList/Index/Index',
            icon: '/image/blackList.png',
            code: '11'
          }
        ]
      },

      {
        title: '密云助手',
        items: [{
          name: '拜访签到',
          url: '',
          icon: '/image/icon_nav_dialog.png',
          code: '11'
        },
        {
          isBind: true,
          name: '工作报告',
          url: '',
          icon: '/image/icon_nav_icons.png',
          code: '11'
        }, {
          isBind: true,
          name: '成本发布',
          url: '',
          icon: '/image/icon_nav_layout.png',
          code: '11'
        },
          {
            isBind: true,
            name: '询价',
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