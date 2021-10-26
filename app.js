// app.js
import { getUserInfo } from './utils/request'

App({
  onLaunch() {
    this.getCode()
    this.getUser()
    // wx.loadFontFace({
    //   family: 'damingsong',
    //   source: 'url("https://linwuhehuan.oss-accelerate-overseas.aliyuncs.com/xqtn/damingsong.ttf")',
    //   success: res => {
    //     console.log(res)
    //   },
    //   fail: err => {
    //     console.log(err)
    //   }
    // })
  },
  getCode (i, cb) {
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        this.globalData.code = res.code
        if (i) {
          cb(res.code)
        }
      }
    })
  },
  getUser (i, cb) {
    getUserInfo({}, res => {
      if (res.code == 200) {
        this.globalData.userInfo = res.data
        if (i) cb(res.data)
      }
    })
  },

  globalData: {
    userInfo: null,
    code: '',
    token: ''
  }
})
