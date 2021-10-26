// pages/game/clue/clue.js
import { getUserCluesList } from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabAct: '2',
    tabList: [{
      id: '2',
      name: '个人线索'
    },{
      id: '1',
      name: '小组线索'
    },{
      id: '0',
      name: '公共线索'
    }],
    clueList: []
  },

  getList () {
    this.setData({
      clueList: []
    })
    const params = {
      cluesType: this.data.tabAct
    }
    getUserCluesList(params, res => {
      if (res.code == 200) {
        this.setData({
          clueList: res.data.list ? res.data.list : []
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
    const act = options.currentTarget.dataset.act
    this.setData({
      tabAct: act
    })
    this.getList()
  },
  toClueInfo (options) {
    const val = options.currentTarget.dataset.val
    if (val.is_can == 1) {
      wx.navigateTo({
        url: '/pages/game/clueInfo/clueInfo?id=' + val.id,
      })
    }
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