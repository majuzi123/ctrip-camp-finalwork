const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async (data) => {

    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })
    var res = await db.collection('comment_test').get()
    var arr = res.data
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