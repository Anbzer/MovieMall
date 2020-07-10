// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593773732783&di=9b580cae10b7168c9c1ae50dfa89dc7c&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180802%2F32f20996b6434075b626efba72e65f3f.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593773763491&di=8cfb60ce28c45afc69ea6b3605d24e6d&imgtype=0&src=http%3A%2F%2Fi4.3conline.com%2Fimages%2Fpiclib%2F201404%2F04%2Fbatch%2F1%2F221420%2F1396601426330rem53m1uhh_medium.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593773783150&di=ca7344a09a244619662934cb71d1bfd0&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190711%2F4a958b677726445e8f5543028404be21.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593773822474&di=740e14cdc39cdd67c833f622161f3231&imgtype=0&src=http%3A%2F%2Fimage12.m1905.cn%2Fmapps%2Fuploadfile%2Fedu%2F2014%2F1010%2F2014101009575932844.jpg"],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    goodsData:[
      {
        "id":1,
        "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594118529193&di=c2868f8a3e51b92192bc10107cc40095&imgtype=0&src=http%3A%2F%2Fimg1.km.com%2Fdianyingimg%2FposterImg%2Fdy%2Fmainposters%2F139006%2F1.jpg",
        "title":"X战警:天启 强者生存 144分钟 3DIMAX 动作 科幻 冒险",
        "made":"美国",
        "price":40
      },
      {
        "id":2,
        "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594119978239&di=3c2d09f55a83a69faf665c1c4e13b95a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fe%2Fbc%2Fd5ba101c3b_250_350.jpg",
        "title":"流浪地球 125分钟 3D 科幻",
        "made":"中国大陆",
        "price":56
      },
      {
        "id":3,
        "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594120048782&di=58808cc9897714cbcfa9ca79abc2ac5b&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F12009206964%2F641.jpg",
        "title":"我不是药神 116分钟 2DIMAX 剧情 喜剧",
        "made":"中国大陆",
        "price":49
      },
      {
        "id":4,
        "img":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594120277286&di=9f00d475ec14092b1579cf10fd529442&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190807%2F9753d4a10a714e8fb2708cec3714c947.jpeg",
        "title":"哪吒之魔童降世 110分钟 动画 剧情 喜剧 奇幻",
        "made":"中国大陆",
        "price":27
      }
    ]
  },
// getGoodsData:function(){
//   wx.request({
//     url: '', //仅为示例，并非真实的接口地址
//     data: {
//       pageNo: 1,
//       pageSize: 2
//     },
//     header: {
//     'content-type': 'application/json' // 默认值
//     },
//     success (res) {
//       console.log(res.data);
//     }
//   })
// },
jumpDetail:function(e){
  //console.log(e);
  let id = e.currentTarget.dataset.id;
  console.log(id);
  wx.navigateTo({
    url: "/pages/detail/detail?id=" + id,
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //this.getGoodsData();
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
    console.log("正在请求数据...");
  //  wx.showNavigationBarLoading();
  //  this.data.pageNo = 1;
  //  this.data.goodsData = [];
  //  this.getGoodsData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("我是有底线的！(lll￢ω￢)");

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})