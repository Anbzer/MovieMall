// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    totalPrice: 0,
    cartList:[],
    isCheckedAll: false,
    totalMovie:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    //this.getCartInfo();    
  },
getCartInfo:function()
{
  let getId = getApp().globalData.getId;
  console.log(getId)
  let getPrice = getApp().globalData.getPrice;
  let getTitle = getApp().globalData.getTitle;
  let getNum = getApp().globalData.getNum;
  let getImg = getApp().globalData.getImg;
  //console.log(getImg)
  //console.log(getNum)  
  var pos = this.data.cartList.length; 
  if(pos == 0 && getId!=null)
  {
    var obj = {getId, getPrice, getTitle, getNum, getImg};
    console.log(this.data.cartList.length)    
    var cartList = 'cartList[' + pos + ']';
    this.setData({
      [cartList]: obj,
    })
  }
  else if(getId!=null){
    var i;
    for(i = 0; i < pos; ++i)
    {
      if(this.data.cartList[i].getId == getId)
      {
        getNum = getNum + 1;
        var obj = {getId, getPrice, getTitle, getNum, getImg};
        console.log(this.data.cartList.length)    
        var cartList = 'cartList[' + i + ']';
        this.setData({
          [cartList]: obj,          
        })
        break;
      }      
    }
    if(i == pos)
    {
      var obj = {getId, getPrice, getTitle, getNum, getImg};
      console.log(this.data.cartList.length)    
      var cartList = 'cartList[' + pos + ']';
      this.setData({
        [cartList]: obj,
      })
    }    
  }  
  this.setData({
    totalMovie: this.data.cartList.length,
  })
  // console.log(getTitle)
  // console.log(getPrice)
},
// 购物车全选反选功能
checkAll:function(){
  let checkedAll = !this.data.isCheckedAll;
  this.setData({
    isCheckedAll: checkedAll
  })
  let list = this.data.cartList;
  let sum = 0;
  list.forEach((item)=>{
    if(checkedAll){
      item.isChecked = true;
      sum += item.getPrice * item.getNum;
    } else{
      item.isChecked = false;
    }
    
  })
  this.setData({
    cartList:list,
    totalPrice: sum,
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
    this.getCartInfo(); 
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