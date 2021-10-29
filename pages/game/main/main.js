// pages/game/main/main.js
import { scriptPage } from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gameMain: {},
    setting: {
      latitude: 31.025944,
      longitude: 121.64634,
      subkey: 'ROGBZ-KJPRS-D2POT-673CF-VMRQK-3IBQO',
      scale: 18,
      minScale: 10,
      enableOverlooking: true,
      showLocation: true,
      enablePoi: false,
      enableBuilding: false
    },
    markers: [],
  },

  getMarker (list) {
    let markerList = []
    let width = 50
    let height = 36
    list.forEach((item, index) => {
      if (item.id == 1) {
        width = 60
        height = 24
      } else if (item.id == 2) {
        width = 50
        height = 23
      } else if (item.id == 3) {
        width = 50
        height = 38
      } else if (item.id == 4) {
        width = 45
        height = 50
      } else if (item.id == 5) {
        width = 50
        height = 38
      } else if (item.id == 6) {
        width = 50
        height = 43
      } else if (item.id == 7) {
        width = 60
        height = 51
      } else if (item.id == 8) {
        width = 35
        height = 60
      } else if (item.id == 9) {
        width = 60
        height = 37
      } else if (item.id == 10) {
        width = 45
        height = 60
      } else if (item.id == 11) {
        width = 60
        height = 42
      } else if (item.id == 12) {
        width = 50
        height = 38
      } else if (item.id == 14) {
        width = 60
        height = 31
      } else if (item.id == 15) {
        width = 60
        height = 51
      } else if (item.id == 17) {
        width = 60
        height = 42
      }
      markerList.push({
        width: width,
        height: height,
        id: item.id,
        latitude: item.lat,
        longitude: item.lon,
        zIndex: 1,
        iconPath: item.img,
        callout: {
          content: item.name,
          fontSize: 10,
          padding: 2,
          display: 'ALWAYS',
          textAlign: 'center',
          bgColor: 'transparent'
        }
      })
      if (item.attractions_flag == 1) {
        let iconPath = 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/flag2.png'
        if (item.type == 1) {
          iconPath = 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/flag1.png'
        } else if (item.type == 2) {
          iconPath = 'https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/flag3.png'
        }
        markerList.push({
          width: '30px',
          height: '30px',
          id: item.id + 999999,
          latitude: item.lat,
          longitude: item.lon,
          zIndex: 6,
          iconPath: iconPath
        })
      }
    })
    this.setData({
      markers: markerList
    })
  },
  getMainInfo () {
    scriptPage({}, res => {
      if (res.code == 200) {
        this.setData({
          gameMain: res.data
        })
        this.getMarker(res.data.attractionsList)
      }
    })
  },
  toBack () {
    wx.navigateBack({
      delta: 1
    })
  },
  toArticle () {
    wx.navigateTo({
      url: '/pages/game/article/article',
    })
  },
  toClue () {
    wx.navigateTo({
      url: '/pages/game/clue/clue',
    })
  },
  toTask () {
    wx.navigateTo({
      url: '/pages/game/task/task',
    })
  },
  toJade () {
    wx.navigateTo({
      url: '/pages/game/jade/jade?id=' + this.data.gameMain.skillDetail.id,
    })
  },
  toNextCode () {
    wx.navigateTo({
      url: '/pages/game/nextCode/nextCode?type=' + this.data.gameMain.isEndChapter,
    })
  },
  toScenic (options) {
    let id = options.detail.markerId > 999999 ? options.detail.markerId - 999999 : options.detail.markerId
    wx.navigateTo({
      url: '/pages/scenic/scenic?id=' + id,
    })
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
    this.getMainInfo()
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