const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async () => {

    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })

    var res = ''
    const collect = (await db.collection('hotel').orderBy('lastCntTime', "asc").get()).data
    let index = Math.floor(Math.random() * (collect.length - 5))
    const docs = collect.slice(index, index + 20)
    const promises = docs.map(async (doc) => {
        let hid = doc._id
        const commentCnt = await db.collection('comment').where({ hotelId: hid, pass: true }).count()
        db.collection('hotel').doc(hid).update({
            data: {
                lastCntTime: new Date().valueOf(),
                commentNum: commentCnt.total
            }
        })
        return hid + ":" + commentCnt.total + "; "
    })
    const results = await Promise.all(promises)//用Promise.all替代了原本低效的for循环await
    results.forEach((result) => {
        res += result
    })
    return res

}
