const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async () => {

    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })
    await db.collection('comment').add({
        data: data,
        success: function (res) {
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            return res
        }
    })
}