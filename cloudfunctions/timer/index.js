const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async () => {

    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })

    var res = ''
    const docs = await db.collection('hotel').get()
    for (let doc of docs.data) {
        let hid = doc._id
        const commentCnt = await db.collection('comment').where({ hotelId: hid }).count()
        res += hid + ":" + commentCnt.total + "; "
        db.collection('hotel').doc(hid).update({
            data: {
                commentNum: commentCnt.total
            }
        })
    }
    return res

}
