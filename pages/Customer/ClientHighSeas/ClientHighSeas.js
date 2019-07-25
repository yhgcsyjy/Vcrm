// pages/Customer.js
const _HTTP = require('../../../utils/HTTP.js')

Page({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    show: false,//控制下拉列表的显示隐藏，false隐藏、true显示
    index: 0,//选择的下拉列表下标
    customerList:[],
    addflag: true,  //判断是否显示搜索框右侧部分
    addimg: '/image/activity_add.png',
    searchstr: '',
  },
  onLoad(){
    this.getData(null);
  },
  getData(_where){
    var plist=0;
    var psize=10;
    var isClaim=0;
    var _url = 'api/MDTCRM_Customer/GetPageList?pagelist=' + plist + '&pagesize=' + psize + '&isClaim=' + isClaim;
    if(_where && _where!=null && _where!='')
      _url += "&_where=" + _where;
    _HTTP.Get({ url: _url, data: '' })      .then(res => {
      this.setData({
        customerList: res.data.data,
      })
    }).catch(res => {
      console.log(res.data);
    });
  },
  // 点击下拉显示框
  selectTap() {
    this.setData({
      show: !this.data.show,
    });
  },
  // 点击下拉列表
  optionTap(e) {
    let Index = e.currentTarget.dataset.index; //获取点击的下拉列表的下标
    this.setData({
      index: Index,
      show: !this.data.show
    });
  },
  tap(e) {

  },
  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
    wx.navigateTo({
      url: "/pages/Customer/AddCustomer/AddCustomer",
    })
  },

  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value
    })
    this.getData(e.detail.value);
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: ''
    })
    this.setData({
      customerList: this.getData(null),
    })
  },
  //清空搜索框
  activity_clear(e) {

    this.setData({
      searchstr: ''
    })
    this.setData({
      customerList: this.getCustomerList(),
    })
  },
})
