// pages/game/task/task.js
import { getUserTaskList } from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskAct: '',
    taskList: []
  },

  getList () {
    getUserTaskList({}, res => {
      if (res.code == 200) {
        this.setData({
          taskList: res.data,
          taskAct: wx.getStorageSync('taskAct') !== '' ? wx.getStorageSync('taskAct') : res.data.length - 1
        })
      }
    })
  },
  toBack () {
    wx.navigateBack({
      delta: 1
    })
  },
  setAct (options) {
    const id = options.currentTarget.dataset.id
    this.setData({
      taskAct: this.data.taskAct === id ? '' : id
    })
  },
  toTaskInfo (options) {
    const val = options.currentTarget.dataset.val
    const vals = options.currentTarget.dataset.vals
    wx.navigateTo({
      url: '/pages/game/taskInfo/taskInfo?id=' + vals.taskId + '&taskAct=' + this.data.taskAct + '&isExpire=' + val.taskListStatus,
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
    this.getList()
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
    wx.removeStorageSync('taskAct')
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