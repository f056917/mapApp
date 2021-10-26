// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setting: {
      latitude: 31.025944,
      longitude: 121.64634,
      scale: 18,
      minScale: 16,
      enableOverlooking: true,
      showLocation: true
    },
    markers: []
  },

  getList () {
    const callout = {
      fontSize: 10,
      padding: 2,
      display: 'ALWAYS',
      textAlign: 'center',
      bgColor: 'transparent'
    }
    let markerList = [{
      id: 1,
      width: 60,
      height: 24,
      latitude: 31.02573013305664,
      longitude: 121.64468383789062,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout1.png',
      callout: {
        content: '缶家'
      }
    },{
      id: 2,
      width: 50,
      height: 23,
      latitude: 31.025657653808594,
      longitude: 121.64521026611328,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout2.png',
      callout: {
        content: '世科坊'
      }
    },{
      id: 3,
      width: 50,
      height: 38,
      latitude: 31.025745391845703,
      longitude: 121.64610290527344,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout3.png',
      callout: {
        content: '印象大理'
      }
    },{
      id: 4,
      width: 45,
      height: 50,
      latitude: 31.024547576904297,
      longitude: 121.64645385742188,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout4.png',
      callout: {
        content: '三世二品'
      }
    },{
      id: 5,
      width: 50,
      height: 38,
      latitude: 31.025270462036133,
      longitude: 121.64640808105469,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout5.png',
      callout: {
        content: '古镇历史陈列馆'
      }
    },{
      id: 6,
      width: 50,
      height: 43,
      latitude: 31.027006149291992,
      longitude: 121.64630126953125,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout6.png',
      callout: {
        content: '小城之春'
      }
    },{
      id: 7,
      width: 60,
      height: 51,
      latitude: 31.022371292114258,
      longitude: 121.64692687988281,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout7.png',
      callout: {
        content: '张厅'
      }
    },{
      id: 8,
      width: 35,
      height: 60,
      latitude: 31.025951385498047,
      longitude: 121.64634704589844,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout8.png',
      callout: {
        content: '洪福桥'
      }
    },{
      id: 9,
      width: 60,
      height: 37,
      latitude: 31.025798797607422,
      longitude: 121.64632415771484,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout9.png',
      callout: {
        content: '第一楼'
      }
    },{
      id: 10,
      width: 45,
      height: 60,
      latitude: 31.026616,
      longitude: 121.648867,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout10.png',
      callout: {
        content: '青龙桥'
      }
    },
    {
      id: 11,
      width: 60,
      height: 42,
      latitude: 31.026145935058594,
      longitude: 121.64708709716797,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout11.png',
      callout: {
        content: '奚家厅'
      }
    },{
      id: 12,
      width: 50,
      height: 38,
      latitude: 31.026750564575195,
      longitude: 121.64635467529297,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout12.png',
      callout: {
        content: '宴公祠'
      }
    },
    {
      id: 13,
      width: 50,
      height: 36,
      latitude: 31.026927947998047,
      longitude: 121.64639282226562,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout_box.png',
      callout: {
        content: '三言两碗'
      }
    },{
      id: 14,
      width: 60,
      height: 31,
      latitude: 31.026988983154297,
      longitude: 121.64946746826172,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout14.png',
      callout: {
        content: '千秋桥'
      }
    },{
      id: 15,
      width: 60,
      height: 51,
      latitude: 31.026752471923828,
      longitude: 121.64920043945312,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout15.png',
      callout: {
        content: '邀月廊桥'
      }
    },
    {
      id: 16,
      width: 50,
      height: 36,
      latitude: 31.027009963989258,
      longitude: 121.64631652832031,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout_box.png',
      callout: {
        content: '顺荣烧卖'
      }
    },{
      id: 17,
      width: 60,
      height: 42,
      latitude: 31.015107,
      longitude: 121.648837,
      iconPath: 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/callout17.png',
      callout: {
        content: '南山寺'
      }
    }]
    markerList.forEach((item, index) => {
      Object.assign(item.callout, callout)
    })
    this.setData({
      markers: markerList
    })
  },
  toScenic (options) {
    wx.navigateTo({
      url: '/pages/scenic/scenic?id=' + options.detail.markerId,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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