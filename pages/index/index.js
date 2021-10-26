// index.js
// 获取应用实例
const app = getApp()
import { wxLogin } from '../../utils/request'

Page({
  data: {
    isLogin: false
  },
  // 事件处理函数
  toMap() {
    if (!this.data.isLogin) {
      this.getWxUser('map')
      return
    }
    wx.navigateTo({
      url: '/pages/map/map'
    })
  },
  toMine () {
    if (!this.data.isLogin) {
      this.getWxUser('mine')
      return
    }
    wx.navigateTo({
      url: '/pages/mine/mine',
    })
    // wx.navigateTo({
    //   url: '/pages/game/task/task',
    // })
  },
  toStart () {
    if (!this.data.isLogin) {
      this.getWxUser('start')
      return
    }
    const userInfo = app.globalData.userInfo
    if (userInfo.sessionId != 0 && userInfo.sessionStatus != 1) {
      if (userInfo.sessionStatus == 2) {
        wx.navigateTo({
          url: '/pages/role/role?id=' + userInfo.scriptId,
        })
      } else if (userInfo.sessionStatus == 3) {
        wx.navigateTo({
          url: '/pages/game/main/main?id=' + userInfo.scriptId,
        })
      }
    } else {
      wx.navigateTo({
        url: '/pages/start/start',
      })
    }
  },
  getWxUser (name) {
    const that = this
    wx.getUserProfile({
      desc: '用户完善会员资料',
      success: res => {
        that.toLogin(res.userInfo, name)
      },
      fail: err => {
        wx.showToast({
          title: err,
          icon: 'none'
        })
      }
    })
  },
  toLogin (msg,name) {
    const params = {
      wxCode: app.globalData.code,
      wxHeadImgUrl: msg.avatarUrl,
      wxNickname: msg.nickName
    }
    wxLogin(params, res => {
      if (res.code === 200) {
        wx.setStorageSync('token', res.data.access_token)
        this.setData({
          isLogin: true
        })
        app.getCode()
        app.getUser(1, () => {
          if (name === 'map') {
            this.toMap()
          } else if (name === 'mine') {
            this.toMine()
          } else if (name === 'start') {
            this.toStart()
          }
        })
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        })
      } else {
        app.getCode()
        this.toLogin(msg)
      }
    })
  },
  onShow() {
    this.setData({
      isLogin: !!wx.getStorageSync('token')
    })
  }
})
