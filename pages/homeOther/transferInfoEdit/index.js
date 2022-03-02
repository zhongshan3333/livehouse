import Toast from '@vant/weapp/toast/toast'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:["B10现场","A8Live","HOU LIVE"],
    electronicCode:["动态数字码","静态二维码","动态二维码","数字码"],
    realName:["是","否"],
    number:["1","2","3","4"],
    oneSlectShow:false,
    dataTimeShow:false,
    placeholder:'请输入',
    pickerList:[],
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      }
      if (type === 'month') {
        return `${value}月`;
      }
      return `${value}日`;
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  pickerSelect(e){
    this.setData({
      oneSlectShow:!this.data.oneSlectShow,
    });
    console.log(e.target.dataset.pickerlist)
    if(e.target.dataset.pickerlist==="array"){
      this.setData({
        pickerList:this.data.array
      })
    }else if(e.target.dataset.pickerlist==="electronicCode"){
      this.setData({
        pickerList:this.data.electronicCode
      })
    }else if(e.target.dataset.pickerlist==="realName"){
      this.setData({
        pickerList:this.data.realName
      })
    }else{
      this.setData({
        pickerList:this.data.number
      })
    }
  },
  dataTimeSelect(){
    this.setData({
      dataTimeShow:!this.data.dataTimeShow,
    });
  },
  oneSlectClose() {
    this.setData({ oneSlectShow: false });
  },
  dataTimeClose() {
    this.setData({ dataTimeShow: false });
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
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