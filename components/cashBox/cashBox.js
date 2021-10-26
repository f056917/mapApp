// components/cashBox/cashBox.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    focusIndex: 0, // 光标所在位置
    value: '', // 实际输入的值
    focus: true, // 是否获得焦点
    password: '', //替换显示的值*
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setValue (e) {
      console.log(111)
      // 设置光标
      var value = e.detail.value
      this.setData({
        value: value,
        focusIndex: value.length,
        focus: value.length < 4,
        password: value
      })
    },
    inputBlur (e) {
      if (e.detail.value.length === 4) {
        this.triggerEvent('complated', {
          value: e.detail.value
        })
      }
    }
  }
})
