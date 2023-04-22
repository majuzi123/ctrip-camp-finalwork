// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env: 'cloud-3g1s9anved8781a2'
})// 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database({
    env: 'cloud-3g1s9anved8781a2'
  })
  if (event.index == 0) {
    return await db.collection('comment')
      .where({
        pass: null
      })
      .get({
        success: function (res) {
          return res
        }
      })
  } else if (event.index == 1) {
    return await db.collection('comment')
      .where({
        pass: true
      })
      .get({
        success: function (res) {
          return res
        }
      })
  } else {
    return await db.collection('comment')
      .where({
        pass: false
      })
      .get({
        success: function (res) {
          return res
        }
      })
  }

}