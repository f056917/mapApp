// pages/game/nextCode/nextCode.js
const app = getApp()
import { addUserProgress, endSession } from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    type: ''
  },

  toBack () {
    wx.navigateBack({
      delta: 1
    })
  },
  complated (val) {
    const value = val.detail.value
    const params = {
      conversionCode: value
    }
    if (this.data.type == 1) {
      this.over(params)
    } else {
      this.next(params)
    }
    // const r = /[\W]/g
    // if (r.test(value)) {
    //   wx.showToast({
    //     title: '限制英文和数字',
    //     icon: 'error'
    //   })
    // }
  },
  next (params) {
    addUserProgress(params, res => {
      if (res.code == 200) {
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  over (params) {
    endSession(params, res => {
      if (res.code == 200) {
        app.getUser(1, res => {
          wx.reLaunch({
            url: '/pages/index/index',
          })
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      type: options.type
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