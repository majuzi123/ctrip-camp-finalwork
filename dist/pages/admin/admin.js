wx.cloud.init({
  env: "cloud-3g1s9anved8781a2"
})

const app = getApp()
let name = ""
let password = ""
const db = wx.cloud.database({
  env: "cloud-3g1s9anved8781a2"
})
Page({
  data: {
    isAdmin: false,
  },
  //onLoad() {
  //每次进入管理页都校验账号密码，防止离职员工登录
  //   this.login(admin.name, admin.password)
  //  }
  // },
  goAdminComment () {
    wx.navigateTo({
      url: '/pages/comment/comment-test',
    })

  },
  //管理员登陆相关
  getName: function (e) {
    name = e.detail.value
  },

  getPassWord: function (e) {
    password = e.detail.value
  },
  formSubmit: function () {
    if (name == '' || name == undefined) {
      wx.showToast({
        title: '用户名不能为空',
        icon: 'none'
      })
      return
    }
    if (password == '' || password == undefined) {
      wx.showToast({
        title: '密码不能为空',
        icon: 'none'
      })
      return
    }
    this.login(name, password)
  },
  //登录
  login (name, password) {
    db.collection('admin').where({
      name: name,
      password: password
    }).get()
      .then(res => {
        console.log("登陆成功", res)
        if (res.data && res.data.length > 0) {
          this.setData({
            isAdmin: true
          })
          let admin = {
            name: name,
            password: password
          }
          wx.setStorageSync('admin', admin)
        } else {
          this.setData({
            isAdmin: false
          })
          wx.showToast({
            icon: 'none',
            title: '账号或密码错误',
          })
        }
      }).catch(res => {
        console.log("登陆失败", res)
        wx.showToast({
          icon: 'none',
          title: '账号或密码错误',
        })
        this.setData({
          isAdmin: false
        })
      })
  }
})