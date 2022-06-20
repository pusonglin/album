// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    start_date:'2022-1-30',
    days:0
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
      let day = this.getDays(this.data.start_date);
      console.log(day);
      this.setData({
        days: day
      })
  },

  getDays(start_time){
    var start_date = new Date(start_time);
    var end_date = new Date();
    var days = end_date.getTime() - start_date.getTime();
    var day = parseInt(days / (1000 * 60 * 60 * 24));
    return day;
  }
})
