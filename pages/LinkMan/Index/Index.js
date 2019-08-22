// pages/Visit.js
const _HTTP = require('../../../utils/HTTP.js');
const config = require('../../../config.js');
var loadMoreView;
const app = getApp;
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
    linkManList: [],
    addflag: true,  //判断是否显示搜索框右侧部分
    addimg: '/image/activity_add.png',
    searchstr: '',
    pagelist: config.config.pagelist,
    pagesize: config.config.pagesize,
    linManUrl:'../Detail/Detail?liaison_ManId=',
    scrollHeight: 400,
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  onLoad() {
    loadMoreView = this.selectComponent("#loadmoreview")
    this.getData(this.data.searchstr);
    var syst = config.config.systemInfo;
    this.setData({
      scrollHeight: syst.windowHeight,
    })
  },
  getData(_where) {
    var data = {
      pagelist: this.data.pagelist,
      pagesize: this.data.pagesize,
    }
    if (_where != null) {
      data["_where"] = _where;
    }
    _HTTP.Get({
      url: "api/MDTCRM_Liaison_Man/GetPageList", data: data }).then(res => {
        var items = this.data.linkManList
        if (this.data.pagelist == 0) {
          items = res.data.data;
        }
        else {
          items = items.concat(res.data.data)
        }
        this.setData({
          linkManList: items
        })
        loadMoreView.loadMoreComplete(res, this.data.pagesize);
    }).catch(res => {
      console.log(res.data);
    })
  },
  // 搜索框右侧 事件
  addhandle() {
    console.log('触发搜索框右侧事件')
    wx.navigateTo({
      url: "/pages/LinkMan/Add/Add",
    })
  },
  //搜索框输入时触发
  searchList(ev) {
    let e = ev.detail;
    this.setData({
      searchstr: e.detail.value,
      pagelist: 0,
      linkManList: []
    })
    this.getData(this.data.searchstr);
  },
  //搜索回调
  endsearchList(e) {
    console.log('查询数据')
  },
  // 取消搜索
  cancelsearch() {
    this.setData({
      searchstr: '',
      pagelist: 0,
    })
    this.getData(this.data.searchstr);
  },
  //清空搜索框
  activity_clear(e) {
    this.setData({
      searchstr: '',
      pagelist: 0,
    })
    this.getData(this.data.searchstr);
  },
  _onScrollToLower: function () {
    loadMoreView.loadMore()
  },
  loadMoreListener: function (e) {
    this.setData({
      pagelist: this.data.pagelist + 1,
    })
    this.getData()
  },
  clickLoadMore: function (e) {
    this.getData()
  },
})
