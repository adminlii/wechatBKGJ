// baseinfoAccount.js
var utils=require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    form.name = e.detail.value.name;
    form.country = e.detail.value.country;
    form.province = e.detail.value.province;
    form.city = e.detail.value.city;
    form.address = e.detail.value.address;
    form.province = e.detail.value.province;
    form.mobile = e.detail.value.mobile
    var formComplete = utils.IsComplete(form)

    // if(){ 逻辑判断 表单处理

    // }
    if (formComplete) {
      wx.showToast({
        title: '修改成功',
        icon: 'success',
        mask: true,
        duration: 3000,
        complete: function () {
          console.log('complete'+form)
          wx.switchTab({
            url: '../member/member',
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

    // wx.switchTab({
    //   url: '../member/member',
    // })
  },
})