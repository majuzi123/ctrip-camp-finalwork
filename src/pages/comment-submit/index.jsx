import { useState } from 'react'
import { View, Text, Button, Checkbox, Image, Textarea } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
import IconFont from '../../components/iconfont';

export default function Index() {
  const [hotelName, setHotelName] = useState('');
  const [hotelId, setHotelId] = useState('');
  const [cScore, setCScore] = useState(0);//评分
  const [cText, setCText] = useState('');//文字评论
  const [cImgs, setCImgs] = useState([]);//评论图片
  const IMG_MAX_COUNT = 9;//评论图片最大数量
  let anonymous = false;//是否匿名提交点评

  useLoad((options) => {
    console.log(options)
    setHotelName(options.hotelName)
    setHotelId(options.hotelId)

    //请求地址信息,获取评论时的ip属地
    if (!global.city) {
      global.city = '未知属地'
      Taro.request({
        url: 'https://whois.pconline.com.cn/ipJson.jsp?json=true',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          if (res.data.pro == res.data.city) {//直辖市
            global.city = res.data.city
          } else {
            global.city = res.data.pro + ' ' + res.data.city;
          }
          console.log(city)
        }
      })
    }
  })

  //添加点评图片
  const addImg = async () => {
    console.log("addImg")
    var imgs = [...cImgs]
    const res = await Taro.chooseImage({ count: IMG_MAX_COUNT - cImgs.length, sizeType: ['compressed'] })
    for (let path of res.tempFilePaths) {
      let cloudPath = 'comment-img/' + Date.now() + Math.floor(Math.random() * 10000) + '.jpg';
      await Taro.cloud.uploadFile({ cloudPath: cloudPath, filePath: path }).then(//图片上传
        (res) => {
          imgs.push(res.fileID)
        }
      )
    }
    setCImgs(imgs)
  }

  //删除指定的已添加的点评图片
  const deleteImg = (index) => {
    console.log("deleteImg" + index)
    var imgs = [...cImgs]
    var newCImg = []
    for (let i = 0; i < imgs.length; i++) {
      if (i != index) {
        newCImg.push(imgs[i])
      }
    }
    setCImgs(newCImg)
  }

  //点击提交点评后的操作
  const submitComment = async () => {
    console.log("clicked submit")
    if (!anonymous) {//暂时只实现匿名评论
      Taro.showToast({ title: '请匿名点评', icon: 'error', duration: 1000 })
      return;
    }
    if (cScore == 0) {
      Taro.showToast({ title: '请先评分', icon: 'error', duration: 1000 })
      return;
    }
    if (cText.length < 5) {
      Taro.showToast({ title: '评价字数过少', icon: 'error', duration: 1000 })
      return;
    }
    Taro.showModal({
      title: '确认提交评价？',
      success: (res) => {
        if (res.confirm) {
          console.log("submit to server...")
          Taro.showLoading({
            title: '提交评价ing...'
          })
          Taro.cloud.callFunction({
            name: 'submit-comment',//提交点评至数据库
            data: {
              hotelName: hotelName ? hotelName : '未知酒店',
              hotelId: hotelId ? hotelId : '00000',
              liveTime: new Date().valueOf(),   //当前点评时间
              location: city ? city : '未知属地',//当前所处城市
              nickname: !anonymous && userInfo.nickName ? userInfo.nickName : '匿名用户',
              userImg: !anonymous && userInfo.avatarUrl ? userInfo.avatarUrl : 'https://pic.imgdb.cn/item/64395c040d2dde5777264e41.jpg',
              star: cScore,    //评分
              content: cText,  //文字评价
              ImgList: cImgs,  //图片
              pass: null       //审核状态，null未审核，true通过，false拒绝
            }
          }).then((res) => {
            Taro.hideLoading()
            if (res.errMsg != "cloud.callFunction:ok") {
              Taro.showToast({ title: '提交失败', icon: 'error', duration: 1000 })
            } else {
              Taro.showToast({ title: '提交成功', icon: 'success', duration: 1000 })
              setTimeout(() => { Taro.navigateBack() }, 1000)
            }
          })
        }
      }
    })
  }

  return (
    <View className='comment-submit-page'>

      <View className='hotel-name'>{hotelName}</View>

      <View className='comment-score'>
        <Text className='score-title'>评分：</Text>
        <View className='stars'>{[1, 2, 3, 4, 5].map((value) => {
          let colour = value <= cScore ? 'yellow' : "#ccc"
          return (<View onClick={() => { setCScore(value) }} >
            <IconFont className='star' name='a-1' color={colour} size="60rpx" />
          </View>)
        })}</View>
      </View>

      <View className='comment-text'>
        <Text className='text-tips1'>{cText == '' ? '欢迎你分享对酒店服务、环境、设施和价格等的评价...' : ''}</Text>
        <Textarea className='text-content' value={cText} type='text' onInput={(e) => { setCText(e.target.value) }} />
        <View className='text-tips2'>至少5个字</View>
      </View>

      <View className='comment-imgs'>
        {cImgs.map((src, index) => (
          <View className='img-container'>
            <Image src={src} className='comment-img'></Image>
            <View className='delete-btn' onClick={() => { deleteImg(index) }}>
              <IconFont name='times-circle-fill' size='32rpx' color='red'></IconFont>
            </View>
          </View>
        ))}

        {cImgs.length < IMG_MAX_COUNT && <View className='img-container'>
          {/* 触发添加点评图片的加号图片 */}
          <Image src='https://pic.imgdb.cn/item/6434ffef0d2dde577737f3bf.jpg' className='comment-img' onClick={addImg} />
        </View>}
      </View>

      <Checkbox className='anonymous-check' onClick={() => { anonymous = !anonymous; console.log(anonymous) }}>匿名评论</Checkbox>
      <Button className='submit-btn' onClick={submitComment}>提交</Button>

    </View>
  )
}
