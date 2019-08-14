// pages/CustomerDetail/CustomerDetail.js
const _HTTP = require('../../../utils/HTTP.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    CustomerId: "",
    tabs: ["详情", "联系人", "客户联系", "商机", "合同", "开支"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    sliderWidth:65,

    customerEntity: [],
    linkManList: [],
    visitList: [],

    businessChance: [],
    businessPayList: [],
    contractBasicList: [],
    linManUrl: '../../LinkMan/Detail/Detail?liaison_ManId=',
    visitUrl:'../../Visit/Detail/VisitDetail?visitId=',
    busChanceUrl: '../../BusinessChance/Detail/Index?businessChanceId=',
    contractBaseUrl: '../../ContractBasic/Detail/Index?contractId=',
    busPayUrl: '../../BusinessPay/Detail/Index?businessPayId=',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      CustomerId: options.CustomerId
    })
    this.loadData();
    this.setTabSize();
  },
  //加载客户详情
  loadData: function () {
    if (this.data.CustomerId != '') {
      this.loadCustomer();
      this.loadLinkMan();
      this.loadVisit();
      this.loadBusinessChance();
      this.loadBusinessPay();
      this.loadContractBasic();
    }
  },
  /**加载客户详情
   * 
   */
  loadCustomer:function(){
    var parms = {
      url: 'api/MDTCRM_Customer/GetMDTCRM_CustomByID/' + this.data.CustomerId,
      data: null
    }
    _HTTP.Get(parms).then(res => {
      this.setData({
        customerEntity: res.data.data,
      })
    }).catch(res => {
      console.log(res.data);
    });
  },
  /**加载客户联系人
   * 
   * 
   */
  loadLinkMan:function(){
    var parms = {
      url: 'api/MDTCRM_Liaison_Man/GetLinkMan/' + this.data.CustomerId,
      data: null
    }
    _HTTP.Get(parms).then(res => {
      this.setData({
        linkManList: res.data.data
      })
    }).catch(res => {
      wx.showToast({
        title: res.Msg,
        icon: 'none',
        duration: 3000
      })
    })
 
  },
  /**加载客户拜访记录
   */
  loadVisit:function(){
    let parms = {
      url: 'api/Visit/GetVisitByCustomerId/' + this.data.CustomerId,
      data: null
    }
    _HTTP.Get(parms).then(res => {
      this.setData({
        visitList: res.data.data
      })
    }).catch(res => {
      wx.showToast({
        title: res.Msg,
        icon: 'none',
        duration: 3000
      })
    })
  },
  /**加载客户商机
   */
  loadBusinessChance: function () {
    let parms = {
      url: 'api/BusinessChance/GetByCustomerId/' + this.data.CustomerId,
      data: null
    }
    _HTTP.Get(parms).then(res => {
      this.setData({
        businessChance: res.data.data
      })
    }).catch(res => {
      wx.showToast({
        title: res.Msg,
        icon: 'none',
        duration: 3000
      })
    })
  },
  /**加载客户业务开支
   */
  loadBusinessPay: function () {
    let parms = {
      url: 'api/BusinessPay/GetByCustomerId/' + this.data.CustomerId,
      data: null
    }
    _HTTP.Get(parms).then(res => {
      this.setData({
        businessPayList: res.data.data
      })
    }).catch(res => {
      wx.showToast({
        title: res.Msg,
        icon: 'none',
        duration: 3000
      })
    })
  },
  /**加载客户合同
   */
  loadContractBasic: function () {
    let parms = {
      url: 'api/ContractBasic/GetByCustomerId/' + this.data.CustomerId,
      data: null
    }
    _HTTP.Get(parms).then(res => {
      this.setData({
        contractBasicList: res.data.data
      })
    }).catch(res => {
      wx.showToast({
        title: res.Msg,
        icon: 'none',
        duration: 3000
      })
    })
  },
  setTabSize: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length -that.data.sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex,
          sliderWidth: res.windowWidth / that.data.tabs.length 
        });
      }
    });
  },
  callphone:function(e){
    wx.makePhoneCall({
      phoneNumber:e.currentTarget.dataset.phone,
      success:function(){
        console.log('拔打成功');
      }
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

  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  }
})