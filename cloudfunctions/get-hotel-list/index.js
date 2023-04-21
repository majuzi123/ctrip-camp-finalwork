const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async (data) => {

    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })
    const _ = db.command

    var res = await db.collection('hotel').where(_.and([
        { score: _.gte(data.range.minScore) },
        { commentNum: _.gte(data.range.minCommentNum) },
        { price: _.lte(data.range.maxPrice) }
    ])).get()
    var arr = res.data.filter((hotel) => (hotel.name + hotel.loction).indexOf(data.range.search) != -1)
    let i = arr.length;
    while (i) {//打乱顺序，随机的感觉
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    if (arr.length > data.num) {
        return arr.slice(0, data.num)
    }
    return arr
}