Component({
  data: {},
  props: {
    pickerIndex: [], // 默认选中下标
    show: false, // 是否显示
    list: [], // 列表
    title: '' // 标题
  },
  methods: {
    // 取消按钮点击
    handlePickerCancle() {
      this.props.onCancle()
    },
    // 确定按钮点击
    handlePickerConfirm() {
      this.props.onConfirm({ key: this.data.pickerKey, value: this.data.pickerValue })
    },
    // picker切换
    handlePickerChange(e) {
      this.setData({
        pickerKey: e.detail.value[0],
        pickerValue: this.props.list[e.detail.value]
      })
    }
  }
})
