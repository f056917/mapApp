// pages/role/role.js
import { getRoleList, selectRole, startGame } from '../../utils/request'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    scriptId: '',
    userRoleStatus: '',
    selCount: 0,
    roleList: [],
    timer: ''
  },

  getList () {
    const params = {
      scriptId: this.data.scriptId
    }
    getRoleList(params, res => {
      if (res.code == 200) {
        this.setData({
          roleList: res.data.roleList,
          userRoleStatus: res.data.userRoleStatus,
          selCount: res.data.selCount
        })
        if (res.data.isPrologue == 1) {
          app.getUser()
          wx.redirectTo({
            url: '/pages/welcome/welcome'
          })
        }
      }
    })
  },
  getPreview (options) {
    const img = options.currentTarget.dataset.img
    const roleList = this.data.roleList
    let imgList = []
    roleList.forEach(item => {
      item.roleList.forEach(items => {
        imgList.push(items.img)
      })
    })
    wx.previewImage({
      showmenu: false,
      urls: imgList,
      current: img
    })
  },
  setRole (options) {
    const id = options.currentTarget.dataset.id
    const params = {
      roleId: id
    }
    selectRole(params, res => {
      if (res.code == 200) {
        this.getList()
      }
    })
  },
  toBack () {
    wx.navigateBack({
      delta: 1
    })
  },
  start () {
    startGame({}, res => {
      if (res.code == 200) {
        wx.redirectTo({
          url: '/pages/welcome/welcome'
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
    this.getList()
    this.data.timer = setInterval(() => {
      this.getList()
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    clearInterval(this.data.timer)
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    clearInterval(this.data.timer)
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