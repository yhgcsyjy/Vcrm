// pages/LinkMan/Detail/Detail.js
const _HTTP=require('../../../utils/HTTP.js');
const config=require('../../../config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liaison_ManId:'',
    liaison_ManEntity: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      liaison_ManId: options.liaison_ManId,
    })
    if (this.data.liaison_ManId && this.data.liaison_ManId !='')
    {
      var parms={
        url: 'api/MDTCRM_Liaison_Man/GetMDTCRM_ByID/' + this.data.liaison_ManId,
        data:null
      }
      _HTTP.Get(parms).then(res => {
        this.setData({
          liaison_ManEntity:res.data.data
        })
      }).catch(res => {
         wx.showToast({
           title: res.Msg,
           icon:'none',
           duration:3000
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