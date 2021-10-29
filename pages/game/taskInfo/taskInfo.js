// pages/game/taskInfo/taskInfo.js
import { getUserTaskDetail, userCompleteTask } from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskId: '',
    taskInfo: {},
    code: '',
    latitude: '',
    longitude: '',
    isExpire: ''
  },

  getInfo () {
    const params = {
      taskId: this.data.taskId
    }
    getUserTaskDetail(params, res => {
      if (res.code == 200) {
        this.setData({
          taskInfo: res.data
        })
      }
    })
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
  async location() {
    const that = this;
    try {
        await that.getWxLocation()
      } catch (error) {
        wx.hideLoading()
        wx.showModal({
          title: '温馨提示',
          content: '获取权限失败，需要获取您的地理位置才能为您提供更好的服务！是否授权获取地理位置？',
          showCancel: true,
          confirmText: '前往设置',
          cancelText: '取消',
          success: res => {
            if (res.confirm) {
              that.toSetting()
            }
          },
        })
        return
      }
  },
  // 获取位置信息
  getWxLocation() {
    const that = this
    wx.showLoading({
      mask: true,
    })
    return new Promise((resolve, reject) => {
      const _locationChangeFn = (res) => {
        console.log('location change', res)
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude
        })
        wx.hideLoading()
        wx.offLocationChange(_locationChangeFn)
        that.clockTask()
      }
      wx.startLocationUpdate({
        success: (res) => {
          wx.onLocationChange(_locationChangeFn)
          resolve()
        },
        fail: (err) => {
          reject()
        }
      })
    })
  },
  // 调起客户端小程序设置界面
  toSetting() {
    wx.authorize({
      scope: 'scope.userLocationBackground',
      success: res => {
        this.location()
      }
    })
  },
  clockIn () {
    this.location()
  },
  clockTask () {
    const latitude = this.data.taskInfo.lat
    const longitude = this.data.taskInfo.lon
    const latitudeDist = this.countDist(this.data.latitude, latitude)
    const longitudeDist = this.countDist(this.data.longitude, longitude)
    const dist = (Math.sqrt(latitudeDist*latitudeDist + longitudeDist*longitudeDist)).toFixed()
    if (dist < 99999999999) {
      if (this.data.taskInfo.answer_type == 0) {
        this.doneTask()
      } else {
        wx.setStorageSync('taskInfo', this.data.taskInfo)
        wx.redirectTo({
          url: '/pages/game/taskDone/taskDone'
        })
      }
    } else {
      wx.showToast({
        title: '任务目标太远',
        icon: "error",
        duration: 2500
      })
    }
  },
  countDist (current, dest) {
    let num1 = (Number(current)).toFixed(5) * 100000
    let num2 = (Number(dest)).toFixed(5) * 100000
    return Math.abs(num1 - num2)
    
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
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      taskId: options.id,
      isExpire: Number(options.isExpire)
    })
    wx.setStorageSync('taskAct', Number(options.taskAct))
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