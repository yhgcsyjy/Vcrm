// pages/VisitPlan/Detail/Index.js
const _HTTP=require('../../../utils/HTTP.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitPlanId:'',
    visitPlanDetailList:[],
    visitPlanDetailUrl:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      visitPlanId:options.visitPlanId
    })
    this.loadData();
  },

  loadData:function(){
    if ( this.data.visitPlanId!='' )
    {
      var parms = {
        url: 'api/VisitPlan/GetVisitPlanDetail/' + this.data.visitPlanId,
        data: null
      }
      _HTTP.Get(parms).then(res => {
        this.setData({
          visitPlanDetailList: res.data.data
        })
      }).catch(res => {
        wx.showToast({
          title: res.Msg,
          icon: 'none',
          duration: 3000
        })
      })
    }
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