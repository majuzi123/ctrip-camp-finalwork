const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async () => {
    const db = cloud.database()
    var res = await db.collection('test').where({ _id: "0" }).get()
    return res
}