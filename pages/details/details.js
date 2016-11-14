//index.js
Page({
  data: {
    films: [],
    loading: false,
    title: '正在热映',
  },
  onLoad: function (options) {
    var id = 'http://m.maoyan.com/movie/' + options.id + '.json'
    this.setData({
      title: options.titles
    })
    var that = this
    wx.request({
      url: id, //仅为示例，并非真实的接口地址
      data: {
      },
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        that.setData({
          films: res.data.data,
          loading: true
        })
      }
    })
  },
  onReady: function(){
    var that = this
    wx.setNavigationBarTitle({
      title: that.data.title
    })
  },
  pay: function(){
    wx.requestPayment({
       'timeStamp': '',
       'nonceStr': '',
       'package': '',
       'signType': 'MD5',
       'paySign': '',
       'success':function(res){
       },
       'fail':function(res){
       }
    })
  }
})
