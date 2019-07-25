// pages/Visit/AddVisit/AddVisit.js
const _HTTP=require('../../../utils/HTTP.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visitEntity: {
      VisitId: "",
      CustomerId: "",
      Customer_Code: "",
      Customer_Name: "",
      Customer_Address: "",
      Visit_Objective: "",
      Planning_Time:'',
      Actual_Time:'',
      Peer_Personnel: "",
      Visit_Address: "",
      Vehicle: "",
      IsActive: 1,
      Remark: "",
      },
     visitId: "",
     AlreadySave:false,
     vehicleList:[],
     customerList:[],
     customerIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadComboxData();
  },
  loadComboxData(){
    this.setData({
      vehicleList: ['公交车', '出租车', '高铁', '飞机', '公车','自驾']
    })
    _HTTP.Get({ url: "api/MDTCRM_Customer/GetPageList", data: { pagelist: 0, pagesize: 200, isClaim:1}}).then(res=>{
      this.setData({
        customerList:res.data.data
      })
    }).catch(res=>{
      wx.showToast({
        title: res.data,
        icon:'none',
        duration:2000
      });
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
 saveClick:function(e){
  // this.data.visitEntity=e.data;
   if (this.data.AlreadySave==false)
   {
     this.setData({
       ['visitEntity.VisitId']:Date.now()
     })
     var parms = {
       url: 'api/Visit/AddVisit',
       data: this.data.visitEntity,
     }
     _HTTP.Post(parms).then(res => {
       if(res.data){
         wx.showToast({
           title:"保存完成",
           icon:'none',
           duration:2000
         })
       }
       this.setData({
         AlreadySave:true
       })
     }).catch(res => {
       wx.showToast({
         title: "保存遇到问题"+res.data,
         icon: 'none',
         duration: 2000
       })
     })
   }
 
 },
  formReset:function(){
    if(this.data.AlreadySave)
    {
      this.setData({
        ['visitEntity.VisitId']:Date.now()
      })
    }
  },
  //日期事件
  bindDateChange:function(e){
    var value = e.detail.value;
    var name = 'visitEntity.' + e.target.dataset.name
    this.setData({
      planning_Time: e.detail.value,
      [name]: value
    })
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
  //小程序不支持实体对象双向绑定，只能通过input事件名称拼接赋值实体
  //也算是另外一种方式
  visInput:function(e){
    var value = e.detail.value;
    var name ='visitEntity.'+e.target.dataset.name;
    this.setData({
      [name]: value,
    })
  },
  customerChange:function(e){
    var name = 'visitEntity.' + e.target.dataset.name;
    var value = this.data.customerList[e.detail.value];
    var customer_Code = value.customer_Code;
    var customerId= value.customerId;
    var customer_Name = value.customer_Name;
    var customer_Address = value.customer_Address
    this.setData({
      customerIndex:e.detail.value,
      ['visitEntity.Customer_Name']: customer_Name,
      ['visitEntity.Customer_Code']: customer_Code,
      ['visitEntity.CustomerId']: customerId,
      ['visitEntity.Customer_Address']: customer_Address,

    })
  },
  //选择交通工具
  vehicleChange:function(e){
    var name = 'visitEntity.' +e.target.dataset.name;
    var value = this.data.vehicleList[e.detail.value];
    this.setData({
      [name]: value,
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function (e) {
    console.log(e);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})