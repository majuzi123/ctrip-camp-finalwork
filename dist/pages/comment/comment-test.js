Page({
  data: {
    navbar: ["未审核", "审核通过", "审核未通过"],
    currentTab: 0,
    commentlist: [],
  },
  navbarTap: function (e) {
    let index = e.currentTarget.dataset.idx
    this.setData({
      currentTab: index
    })
    if (index == 0) {
      this.getList(index)
    } else if (index == 1) {
      this.getList(index)
    } else {
      this.getList(index)
    }
  },
  onLoad () {
    this.getList(0)
  },
  getList (index) {
    wx.cloud.init({
      env: "cloud-3g1s9anved8781a2"
    })
    wx.cloud.callFunction({
      name: 'getcomment',
      data: {
        index: index
      }
    }).then(res => {
      console.log('获取成功', res)
      this.setData({
        commentlist: res.result.data
      })
    })
  },
  //  success:function (res) {
  //   console.log(res);
  //   this.setData({
  //    commentlist:res.data
  //    })
  //   },
  //   fail:console.error
  //  })
  // }
  Pass: function (e) {
    wx.cloud.init({
      env: "cloud-3g1s9anved8781a2"
    })
    var id = e.currentTarget.dataset.bzid
    console.log(id)
    wx.cloud.callFunction({
      name: 'update-comment',
      data: {
        _id: id,
        pass: true
      },
      success: function (res) {
        console.log(res)
      },
      fail: console.error
    })
  },
  Refuse: function (e) {
    wx.cloud.init({
      env: "cloud-3g1s9anved8781a2"
    })
    var id = e.currentTarget.dataset.bzid
    console.log(id)
    wx.cloud.callFunction({
      name: 'update-comment',
      data: {
        _id: id,
        pass: false
      },
      success: function (res) {
        console.log(res)
      },
      fail: console.error
    })
  }
})