// pages/game/article/article.js
import { getUserScript } from '../../../utils/request'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    isArrow: false,
    showArrow: false,
    articleList: [],
    content: ''
  },

  getArticle () {
    getUserScript({}, res => {
      if (res.code == 200 && res.data.length > 0) {
        this.setData({
          articleList: res.data,
          name: res.data[res.data.length - 1].title,
          content: res.data[res.data.length - 1].content
        })
      }
    })
  },
  toBack () {
    wx.navigateBack({
      delta: 1
    })
  },
  checkArrow () {
    this.setData({
      isArrow: false
    })
  },
  setArrow () {
    this.setData({
      isArrow: !this.data.isArrow,
      showArrow: true
    })
  },
  changeArticle (options) {
    const val = options.currentTarget.dataset.val
    this.setData({
      name: val.title,
      content: val.content,
      isArrow: false
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getArticle()
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