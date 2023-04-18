const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async (data) => {
     console.log(data)
    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })
    const _ = db.command
    if(data.index==2){
    var res = await db.collection('comment').orderBy('liveTime','desc').where({
        pass: true,
        star: _.lte(2)
      }).get()
    }
    else if(data.index==1){
        var res = await db.collection('comment').orderBy('liveTime','desc').where({
            pass: true,
            ImgList: _.neq([])
          }).get()
        }
    else{
        var res = await db.collection('comment').orderBy('liveTime','desc').where({
            pass: true
          }).get()
    }
    // var arr = res.data
    // let i = arr.length;
    // while (i) {//打乱顺序，随机的感觉
    //     let j = Math.floor(Math.random() * i--);
    //     [arr[j], arr[i]] = [arr[i], arr[j]];
    // }
    // if (arr.length > data.num) {s
    //     return arr.slice(0, data.num)
    // }
    if (res.length > 10) {
        return res.slice(data.page*10, (data.page+1)*10-1)
    }
    return res.data
}