// pages/mergeTrans/mergeTrans.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    methodindex: 0,
    area:

    ['请选择','泰国', '中国', '英国', '美国', '意大利'],

    method: 
      ["请选择","百事汇通", "京东商城", "快捷快递", "顺丰快递", "申通E物流", "EMS快递", "圆通快递", "天天快递", "国通快递", "一店通", "申通快递", '急宅送', '全峰速运', '中国邮政'],
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  bindAreaChange: function (e) {

    this.setData({
      index: e.detail.value
    })
  },
  bindMethodChange: function (e) {

    this.setData({
      methodindex: e.detail.value
    })
  },
  jump: function (e) {
    var url = e.currentTarget.dataset.url;
    if (url == "index" || url == "packagePredictTrans" || url == "member") {
      wx.switchTab({
        url: '../../pages/' + utl + '/' + url,
      })
    } else {
      wx.redirectTo({
        url: '../../pages/' + url + '/' + url,
      })
    }
  },
  formSubmit: function (e) {
    var form = {}
    form.area = e.detail.value.area;
    form.method = e.detail.value.method;
    form.remark = e.detail.value.remark;
    var formComplete = utils.IsComplete(form)
    if (formComplete) {
      wx.showToast({
        title: '支付中',
        icon: 'loading',
        mask: true,
        duration: 3000,
        complete: function () {
          wx.redirectTo({
            url: '../paySuccessTrans/paySuccessTrans',
          })
        }
      })
    } else {
      wx.showToast({
        mask: true,
        title: '所有字段必填',
        image: '../../icon/error.png'
      })
    }


  },

})