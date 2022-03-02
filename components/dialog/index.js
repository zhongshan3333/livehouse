// components/dialog/index.js
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
    flag:true
  },
  properties: {
    title: {            // 属性名
      type: String,     // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: '修改昵称'     // 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    // 弹窗内容
    content: {
      type: String,
      value: '确定要。。。。'
    },
  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的方法列表
   */
  methods: {
    
    //展示弹框
    isshowPopup () {
      this.setData({
        flag: !this.data.flag
      })
    },
    /*
    * 内部私有方法建议以下划线开头
    * triggerEvent 用于触发事件
    */
   modal_click_Hidden(){
    this.setData({
      flag:false
    })
   },
   cancel () {
      //触发取消回调
      this.triggerEvent("cancel")
    },
    sure () {
      //触发成功回调
      this.triggerEvent("sure");
    }
  
  }
})
