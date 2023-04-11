const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async (data) => {
    const db = cloud.database()
    await db.collection('comment').add({
        data: data,
        success: function (res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            return res
        }
    })
    // await console.log(data)
}