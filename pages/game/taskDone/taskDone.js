// pages/game/taskDone/taskDone.js
import { userCompleteTask } from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskInfo: '',
    code: ''
  },

  toBack () {
    wx.navigateBack({
      delta: 1
    })
  },
  complated (val) {
    const value = val.detail.value
    this.setData({
      code: value
    })
    // const r = /[\W]/g
    // if (r.test(value)) {
    //   wx.showToast({
    //     title: '限制英文和数字',
    //     icon: 'error'
    //   })
    // }
  },
  inputCode (msg) {
    const val = msg.detail.value
    this.setData({
      code: val
    })
  },
  doneTask () {
    let params = {
      taskId: this.data.taskInfo.id
    }
    if (this.data.code) {
      params.conversionCode = this.data.code
    }
    userCompleteTask(params, res => {
      if (res.code == 200) {
        wx.showToast({
          title: '任务完成',
          icon: 'success'
        })
        wx.redirectTo({
          url: '/pages/game/taskBox/taskBox?name=' + this.data.taskInfo.name,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const taskInfo = wx.getStorageSync('taskInfo')
    this.setData({
      taskInfo: taskInfo
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