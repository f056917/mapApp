// pages/game/clueInfo/clueInfo.js
import { getCluesDetail, conversionOpenClues } from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    clueInfo: {}
  },
  
  getInfo () {
    const params = {
      cluesId: this.data.id
    }
    getCluesDetail(params, res => {
      if (res.code == 200) {
        this.setData({
          clueInfo: res.data
        })
      }
    })
  },
  toBack () {
    wx.navigateBack({
      delta: 1
    })
  },
  toPublic () {
    const params = {
      cluesId: this.data.id
    }
    conversionOpenClues(params, res => {
      if (res.code == 200) {
        let clueInfo = this.data.clueInfo
        clueInfo.isCanOpen = 0
        this.setData({
          clueInfo: clueInfo
        })
        wx.showToast({
          title: '线索已公开',
          icon: 'none'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.getInfo()
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