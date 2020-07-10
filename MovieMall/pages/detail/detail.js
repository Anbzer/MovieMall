// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nowId:0,
    nowTitle:"",
    nowText:"",
    nowMade:"",
    nowPublic:"",
    nowPrice: 0,
    nowSwiperImg: ['', ''],

    readmore: {
      status: false,
      tip: '查看更多'
    },
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    interval: 2000,
    duration: 500,
    current: 0,
    info:[
      {
        "id":1,        
        "title":"X战警:天启 强者生存 / 144分钟 / 3DIMAX / 动作 科幻 冒险",
        "text":"　　变种人天启（奥斯卡·伊萨克 Oscar Isaac 饰）诞生于人类文明的最开端，被人类当做神一般敬仰膜拜，然而，这样的他，却遭到了他最蔑视的人类的背叛，被埋葬于废墟石砾之下，一晃眼就是数千年过去。一场意外使得沉睡千年的天启从混沌中醒来，重返人间的他却发现曾经高贵的变种人，如今境遇十分糟糕。为了创造一个属于变种人的新世界，他找到了暴风女（亚历山德拉·西普 Alexandra Shipp 饰）、灵蝶（奥立薇娅·玛恩 Olivia Munn 饰），天使（本·哈迪 Ben Hardy 饰），还有想要过平凡生活却依旧遭到人类驱逐的万磁王（迈克尔·法斯宾德 Michael Fassbender 饰）组成了天启四骑士。在察觉到天启的动向后，X教授（詹姆斯·麦卡沃伊 James McAvoy 饰）带领着魔形女（詹妮弗·劳伦斯 Jennifer Lawrence 饰）、野兽（尼古拉斯·霍尔特 Nicholas Hoult 饰）和凤凰（索菲·特纳 Sophie Turner 饰）等人，发誓要粉碎天启的阴谋。",
        "made":"美国",
        "public":"2016-06-03",
        "price":40,
        swiperImg:[
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594118529193&di=c2868f8a3e51b92192bc10107cc40095&imgtype=0&src=http%3A%2F%2Fimg1.km.com%2Fdianyingimg%2FposterImg%2Fdy%2Fmainposters%2F139006%2F1.jpg",
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594192799444&di=c92b553a5d851fdc4347cdfae0d319ba&imgtype=0&src=http%3A%2F%2Fs9.rr.itc.cn%2Fr%2FwapChange%2F20166_7_11%2Fa6qcta04107505781596.jpg"
        ]
      },
      {
        "id":2,
        "title":"流浪地球 / 125分钟 / 3D / 科幻",
        "text":"　　近未来，科学家们发现太阳急速衰老膨胀，短时间内包括地球在内的整个太阳系都将被太阳所吞没。为了自救，人类提出一个名为“流浪地球”的大胆计划，即倾全球之力在地球表面建造上万座发动机和转向发动机，推动地球离开太阳系，用2500年的时间奔往另外一个栖息之地。中国航天员刘培强（吴京 饰）在儿子刘启四岁那年前往国际空间站，和国际同侪肩负起领航者的重任。转眼刘启（屈楚萧 饰）长大，他带着妹妹朵朵（赵今麦 饰）偷偷跑到地表，偷开外公韩子昂（吴孟达 饰）的运输车，结果不仅遭到逮捕，还遭遇了全球发动机停摆的事件。为了修好发动机，阻止地球坠入木星，全球开始展开饱和式营救，连刘启他们的车也被强征加入。在与时间赛跑的过程中，无数的人前仆后继，奋不顾身，只为延续百代子孙生存的希望……",
        "made":"中国大陆",
        "public":"2019-02-05",
        "price":56,
        swiperImg:[
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594119978239&di=3c2d09f55a83a69faf665c1c4e13b95a&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2Fe%2Fbc%2Fd5ba101c3b_250_350.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594225476827&di=c9d4ff79a955d7f5d2701fd7bad5d988&imgtype=0&src=http%3A%2F%2Fe0.ifengimg.com%2F04%2F2019%2F0213%2FB7EFBDDE829A88586CC98BA303F5C77769083885_size84_w960_h464.jpeg"
        ]
      },
      {
        "id":3,
        "title":"我不是药神 / 116分钟 / 2DIMAX / 剧情 喜剧",
        "text":"　　普通中年男子程勇（徐峥 饰）经营着一家保健品店，失意又失婚。不速之客吕受益（王传君 饰）的到来，让他开辟了一条去印度买药做“代购”的新事业，虽然困难重重，但他在这条“买药之路”上发现了商机，一发不可收拾地做起了治疗慢粒白血病的印度仿制药独家代理商。赚钱的同时，他也认识了几个病患及家属，为救女儿被迫做舞女的思慧（谭卓 饰）、说一口流利“神父腔”英语的刘牧师（杨新鸣 饰），以及脾气暴烈的“黄毛”（章宇 饰），几个人合伙做起了生意，利润倍增的同时也危机四伏。程勇昔日的小舅子曹警官（周一围 饰）奉命调查仿制药的源头，假药贩子张长林（王砚辉 饰）和瑞士正牌医药代表（李乃文 饰）也对其虎视眈眈，生意逐渐变成了一场关于救赎的拉锯战。",
        "made":"中国大陆",
        "public":"2018-07-05",
        "price":49,
        swiperImg:[
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594120048782&di=58808cc9897714cbcfa9ca79abc2ac5b&imgtype=0&src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F12009206964%2F641.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594225783595&di=363f15d32b7bfc4a465264439abdf926&imgtype=0&src=http%3A%2F%2Fimg.ji-qi.com%2F3%2F2018%2F1227%2F20181227111500778.png"
        ]
      },
      {
        "id":4,  
        "title":"哪吒之魔童降世 / 110分钟 / 3DIMAX / 动画 剧情 喜剧 奇幻",
        "text":"　　天地灵气孕育出一颗能量巨大的混元珠，元始天尊将DIMAX混元珠提炼成灵珠和魔丸，灵珠投胎为人，助周伐纣时可堪大用；而魔丸则会诞出魔王，为祸人间。元始天尊启动了天劫咒语，3年后天雷将会降临，摧毁魔丸。太乙受命将灵珠托生于陈塘关李靖家的儿子哪吒身上。然而阴差阳错，灵珠和魔丸竟然被掉包。本应是灵珠英雄的哪吒却成了混世大魔王。调皮捣蛋顽劣不堪的哪吒却徒有一颗做英雄的心。然而面对众人对魔丸的误解和即将来临的天雷的降临，哪吒是否命中注定会立地成魔？他将何去何从？",
        "made":"中国大陆",
        "public":"2019-07-26",
        "price":27,
        swiperImg:[
          "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594120277286&di=9f00d475ec14092b1579cf10fd529442&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20190807%2F9753d4a10a714e8fb2708cec3714c947.jpeg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1594225885472&di=77bca27286ae9b35cabeb47f89078f71&imgtype=0&src=http%3A%2F%2Fshp.qpic.cn%2Fqqvideo_ori%2F0%2Fe301103ne0u_496_280%2F0"
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    console.log(e);
    let Id = e.id;
    let Title, Text, Public, Made, Price;
    var SwiperImg = [];
    for(var i = 0; i < 4; ++i)
    {
      if(e.id == this.data.info[i].id)
      {
        Title = this.data.info[i].title;
        Text = this.data.info[i].text;
        Price = this.data.info[i].price,
        Public = this.data.info[i].public;
        Made = this.data.info[i].made;
        for(var j = 0; j < 2; ++j)
        {
          SwiperImg[j] = this.data.info[i].swiperImg[j];
        }
        // SwiperImg[0] = this.data.info[i].swiperImg[0];
        // SwiperImg[1] = this.data.info[i].swiperImg[1];
        break;
      }
    }
    this.setData({
      nowId: Id,
      nowTitle: Title,
      nowText: Text,
      nowPrice: Price,
      nowPublic: Public,
      nowMade: Made,      
    })
    var nowSwiperImg = this.data.nowSwiperImg;
    for(var i = 0; i < 2; ++i)
    {
      var nowSwiperImg = 'nowSwiperImg[' + i + ']';
    //  console.log(nowSwiperImg);
    //  console.log(SwiperImg[i]);
      this.setData({
        [nowSwiperImg]: SwiperImg[i]        
      })
      //console.log(nowSwiperImg[i])
    }
    //console.log(SwiperImg[0]);
    // console.log(this.data.nowId)
  },
  // 轮播页面当前页数
swiperChange:function(e){
  // console.log(e);
  let currentNum = e.detail.current;
  this.setData({
    current: currentNum
  })
},
toHome:function(){
  wx.switchTab({
    url: '/pages/home/home',
  })
},
onCall:function(){
  wx.makePhoneCall({
    phoneNumber: '10086',
  })
},
toCart:function(){
  wx.switchTab({
    url: '/pages/cart/cart',
  })
},
addToCart:function(e){
  console.log(e);
  // e.currentTarget.id = this.data.nowId;
  getApp().globalData.getId = this.data.nowId;  
  getApp().globalData.getPrice = this.data.nowPrice;
  getApp().globalData.getTitle = this.data.nowTitle;  
  getApp().globalData.getNum = 1;  
  getApp().globalData.getImg = this.data.nowSwiperImg[0];
  //console.log(getApp().globalData.id);
  wx.switchTab({
    url: "/pages/cart/cart",
  })
  //console.log(e)
  // let self = this;
  // wx.request({
  //   //url: '接口地址',
  //   data:{
  //     userId: '1',
  //     num: 1,
  //     movieId:self.data.nowId
  //   },
  //   method:'POST',
  //   dataType:'json',
  //   success: function(res){
  //     console.log('111')
  //     console.log(res);
  //     if(res.data && res.data.success)
  //     {
  //       wx.showToast({
  //         title: '加入成功',
  //         icon: 'success',
  //         duration: 2000
  //       })
  //     }
  //   },
  //   fail: function(res) {},
  //   complete: function(res) {},
  // })
},
buyNow:function(e){
  console.log(e)
},
/**
 * 生命周期函数--监听页面初次渲染完成
 */
onReady: function () {
  const query = wx.createSelectorQuery()
  let self = this
  query.select(".content").boundingClientRect(function (res) {
    const lineHeight = 18
    const height = res.height
    const status = "readmore.status"
    self.setData({
      [status]: height / lineHeight > 3
    })
  }).exec()
},
toggle() {
  const status = this.data.readmore.status
  this.setData({
    readmore: {
      status: !status,
      tip: status ? '收起' : '更多'
    }
  })
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