const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async (data) => {
     console.log(data)
    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })
    const _ = db.command
    if(data.index==2){
    var res = await db.collection('comment').orderBy('liveTime','desc').where({
        pass: true,
<<<<<<< HEAD
        hotelId: data.hotelId,
=======
<<<<<<< HEAD
        hotelId: data.hotelId,
=======
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
        star: _.lte(2)
      }).get()
    }
    else if(data.index==1){
        var res = await db.collection('comment').orderBy('liveTime','desc').where({
            pass: true,
<<<<<<< HEAD
            hotelId: data.hotelId,
            ImgList: _.neq([])
=======
<<<<<<< HEAD
            hotelId: data.hotelId,
            ImgList: _.neq([])
=======
            imgList: _.neq([])
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
          }).get()
        }
    else{
        var res = await db.collection('comment').orderBy('liveTime','desc').where({
<<<<<<< HEAD
            pass: true,
            hotelId: data.hotelId
=======
<<<<<<< HEAD
            pass: true,
            hotelId: data.hotelId
=======
            pass: true
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)
    if (res.data.length > 10) {
        return res.data.slice(data.page*10, (data.page+1)*10)
    }
    return res.data.slice(data.page*10)
<<<<<<< HEAD
=======
=======
    if (res.length > data.num) {
        return res.slice(0, data.num)
    }
    return res.data
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
}