// pages/cash/cash.js
import { enterSession } from '../../utils/request'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scriptId: '',
    conversionCode: 1234
  },

  toBack () {
    wx.navigateBack({
      delta: 1
    })
  },
  complated (val) {
    const value = val.detail.value
    this.setData({
      conversionCode: value
    })
    // const r = /[\W]/g
    // if (r.test(value)) {
    //   wx.showToast({
    //     title: '限制英文和数字',
    //     icon: 'error'
    //   })
    // }
  },
  toRole () {
    const params = {
      scriptId: this.data.scriptId,
      conversionCode: this.data.conversionCode
    }
    enterSession(params, res => {
      if (res.code == 200) {
        app.getUser()
        wx.redirectTo({
          url: '/pages/role/role?id=' + this.data.scriptId,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      scriptId: options.id
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