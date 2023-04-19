Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUseGetUserProfile: false,
  },
  onLoad () {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    let user = wx.getStorageSync('user')
    this.setData({
      userInfo: user,
      hasUserInfo: true
    })
  },
  getUserProfile (e) {
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        wx.setStorageSync('user', res.userInfo),
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
      }
    })
  },
  loginOut () {
    this.setData({
      userInfo: {},
      hasUserInfo: false
    })
    wx.setStorageSync('user', null)
  },
  //去我的订单页
  goMyorder () {
    wx.navigateTo({
      url: '/pages/hotel-list/index',
    })
  },
  goAdmin () {
    wx.navigateTo({
      url: '/pages/admin/admin',
    })
  },
  goComment () {
    wx.navigateTo({
      url: '/pages/comment-list/index',
    })
  }
})