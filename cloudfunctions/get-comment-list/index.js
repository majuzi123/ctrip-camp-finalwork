const cloud = require('wx-server-sdk')
cloud.init({ env: 'cloud-3g1s9anved8781a2' })

exports.main = async (data) => {

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)
  const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })
  const _ = db.command
  if(data.index==2){
  var res = await db.collection('comment').orderBy('liveTime','desc').where({
      pass: true,
      hotelId: data.hotelId,
      star: _.lte(2)
    }).count()
  }
  else if(data.index==1){
      var res = await db.collection('comment').orderBy('liveTime','desc').where({
          pass: true,
          hotelId: data.hotelId,
          ImgList: _.neq([])
        }).count()
      }
  else{
      var res = await db.collection('comment').orderBy('liveTime','desc').where({
          pass: true,
          hotelId: data.hotelId
        }).count()
  }
<<<<<<< HEAD
=======
=======
    const db = cloud.database({ env: 'cloud-3g1s9anved8781a2' })
    var res = await db.collection('comment').orderBy('liveTime','desc').where({
        pass: true
      }).get()
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
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
    return res
=======
<<<<<<< HEAD
    return res
=======
    return res.data
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
}