// pages/scenic/scenic.js
import { getScriptAttractionsDeatil } from '../../utils/request'
let audioCtx = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    scenicInfo: {},
    isPlay: false,
    audioCtx: '',
    duration: 1,
    currentTime: 0
  },

  getScenicc () {
    const params = {
      attractionsId: this.data.id
    }
    getScriptAttractionsDeatil(params, res => {
      if (res.code == 200) {
        audioCtx.src = res.data.video_url
        this.setData({
          scenicInfo: res.data
        })
      }
    })
  },
  play () {
    audioCtx.play()
  },
  pause () {
    audioCtx.pause()
  },
  toBack() {
    wx.navigateBack({
      delta: 1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getScenicc()
    audioCtx.onPlay(() => {
      this.setData({
        isPlay: true
      })
    })
    audioCtx.onError(res => {
      console.log(res)
      wx.showToast({
        title: res.errMsg,
        icon: 'error'
      })
    })
    audioCtx.onPause(() => {
      this.setData({
        isPlay: false
      })
    })
    audioCtx.onTimeUpdate(() => {
      this.setData({
        duration: audioCtx.duration,
        currentTime: audioCtx.currentTime
      })
    })
    audioCtx.onEnded(() => {
      this.setData({
        isPlay: false,
        duration: 1,
        currentTime: 0
      })
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
    audioCtx.destroy()
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