// pages/Visit/Detail/VisitDetail.js
const _HTTP=require("../../../utils/HTTP.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitId: "",
    visitEntity:[],
    vehicleList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadComboxData();
    this.setData({
        visitId:options.visitId
      })
      if(this.data.visitId && this.data.visitId!='')
      {
        var parms={
          url:"api/Visit/GetModel",
          data: { visitId:this.data.visitId}
        }
        _HTTP.Get(parms).then(res=>{
          this.setData({
            visitEntity:res.data
          })
        }).catch(res=>{
          wx.showToast({
            title: res.msg,
            icon: 'none',
            duration: 2000
          })
        })
      }
      
  },
  loadComboxData() {
    this.setData({
      vehicleList: ['公交车', '出租车', '高铁', '飞机', '公车', '自驾']
    })
  },
  //选择交通工具
  vehicleChange: function (e) {
    var name = 'visitEntity.' + e.target.dataset.name;
    var value = this.data.vehicleList[e.detail.value];
    this.setData({
      [name]: value,
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