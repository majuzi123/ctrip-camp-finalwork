const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async () => {

    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })
    var res = await db.collection('test').where({ _id: "0" }).get()
    return res

}