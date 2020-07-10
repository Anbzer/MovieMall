// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取本地存取的用户信息
    let userInfo = wx.setStorageSync("userInfo");
    if(userInfo)
    {
      this.setData({
        user: userInfo
      })
    }
  },
  toOrder:function(){
    wx.switchTab({
      url: '/pages/order/order',
    })
  },
  //获取用户信息，授权 
  bindGetUserInfo(e){
    console.log(e.detail.userInfo)
    this.setData({
      user: e.detail.userInfo
    })
    wx.setStorageSync("userInfo", e.detail.userInfo)
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