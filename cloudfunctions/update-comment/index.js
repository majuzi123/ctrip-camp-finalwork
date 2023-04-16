// 云函数入口文件
const cloud = require('wx-server-sdk')
cloud.init({
  env:'cloud-3g1s9anved8781a2'
})
// 使用当前云环境
// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database({
    env:'cloud-3g1s9anved8781a2'
  })
  try{
    return await db.collection('comment').doc('event._id').update({
      data:{
        pass:event.pass
      }
    })
  } catch(e){
    console.error(e);
  }
}