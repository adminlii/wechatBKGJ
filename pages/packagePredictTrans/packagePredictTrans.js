// pages/packagePredictTrans/packagePredictTrans.js
var app=getApp();
var utils=require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    submitDisable: true,
    index: 0,
    depotindex:0,
    depot:{},
    express:{},
    goods:[
      {"name":"时尚女装","count":2,"value":1285}
    ],
    textAreaWidth:20
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var url ="advancePush"
    var data={
      "op":"before"
    }
    wx.showLoading({
      title: '加载中',
      success:()=>{
        utils.allRequest(url, data, function (res) {
          if (res.error_code == 0) {
            that.setData({
              submitDisable: false,
              content: "已绑定",
              depot: res.result.depot,
              express: res.result.express
            })
            wx.hideLoading()
          }
        }, function (res) {
          console.log(res)
        }, true)
      }
    })
    // wx.getSystemInfo({
    //   success: function (res) {
    //     var windowWidth = res.windowWidth-30;
    //     that.setData({
    //       textAreaWidth:windowWidth
    //     })
        
    //   }
    // }) 
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
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindDepotChange: function (e) {
    this.setData({
      depotindex: e.detail.value
    })
  },
  jump: function (e) {
    utils.jump(e)
  },
 
  deleteGood:function(e){
    var that=this
    wx.showModal({
      title: '佰客国际',
      content: '确认删除商品',
      success: function (res) {
        if (res.confirm) {
          var id = e.currentTarget.dataset.id
          that.data.goods.splice(id - 1, 1)
          that.setData({
            goods: that.data.goods
          })
        } else if (res.cancel) {
         //do  nothing 
        }
      }
    })  
  },
  formSubmit: function (e) {
    var thatwx=wx
    var form = {}
    form.depotId = e.detail.value.depot;
    form.expressId = e.detail.value.express;
    form.waybill = e.detail.value.waybill;
    form.remark = e.detail.value.remark;
    
     var goods=[]
     for(var i=0;i<10;i++){
       var para=e.detail.value
       var name = "goodName" + i
       var count = "goodCount" + i
       var value ="goodValue"+i
       if (para[value] != undefined && para[name] != undefined && para[value]!=undefined){
         var arr = { "name": para[name], "count": para[count], "value": para[value]}   
        goods.push(arr)
       }
     }
    var formComplete = utils.IsComplete(form)
     var arr_complete=utils.arrJudge(goods)
     if (formComplete && arr_complete ) {
       form.packages = goods
       console.log(form)
       form.op="push"
       var url ="advancePush"
       utils.allRequest(url,form,function(res){
         console.log(res)
         wx.showLoading({
           title: '提交中',
         })
         var message = res.error_code == 0 ? "提交成功" : "操作错误"
         var image = res.error_code == 0 ? null : "../../icon/error.png"
         setTimeout(function () {
           wx.hideLoading()
           wx.showToast({
            title: message,
            image: image,
            duration:3000,
            complete:function(res){
              thatwx.switchTab({
                url: '../index/index',
              })
            }
           })
         }, 300)
        
       },
       function(res){
         wx.showToast({
           title: '网络错误,返回重试',
           image: '../../icon/error.png'
         })
       },true)
    } else {
      wx.showToast({
        mask: true,
        title: '所有字段必填',
        image: '../../icon/error.png'
      })
    }
  },
  addGood: function () {
    var add = {"name":"","count":"","value":""}
    this.data.goods.push(add)
    this.setData({
      goods: this.data.goods
    })
  },

})