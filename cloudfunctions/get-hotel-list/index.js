const cloud = require('wx-server-sdk')
cloud.init()

exports.main = async () => {

    const db = cloud.database()
    var res = await db.collection('hotel').get()
    var arr = res.data
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    if (arr.length > 10) {
        return arr.slice(0, 10)
    }
    return arr
}