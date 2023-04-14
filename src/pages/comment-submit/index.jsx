import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Image, Textarea } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import classnames from 'classnames'
import './index.scss'
import FlagSelector from '../../components/flagSelector';
import IconFont from '../../components/iconfont';

export default function Index() {
  var hotelName = '上海虹桥国展地铁站@酒店';
  var hotelId = '00001';
  // useLoad(() => {
  //   hotelName = 'XXX酒店';
  //   hotelId = '00001'
  // })
  const [cScore, setCScore] = useState(0);
  const [cText, setCText] = useState('');
  const [cImgs, setCImgs] = useState([]);
  const IMG_MAX_COUNT = 9;

  const addImg = async () => {
    console.log("addImg")
    var imgs = [...cImgs]
    const res = await Taro.chooseImage({ count: IMG_MAX_COUNT - cImgs.length, sizeType: ['compressed'] })
    for (let path of res.tempFilePaths) {
      let cloudPath = 'comment-img/' + Date.now() + Math.floor(Math.random() * 10000) + '.jpg';
      await Taro.cloud.uploadFile({ cloudPath: cloudPath, filePath: path }).then(
        (res) => {
          imgs.push(res.fileID)
        }
      )
    }
    setCImgs(imgs)
  }
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

  const submitComment = async () => {
    console.log("clicked submit")
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
            name: 'submit-comment',
            data: {
              hotelName: hotelName,
              hotelId: hotelId,
              liveTime: new Date().toString,
              location: '未知属地',
              nickname: '匿名用户',
              userImg: 'https://pic.imgdb.cn/item/64395c040d2dde5777264e41.jpg',
              star: cScore,
              content: cText,
              ImgList: cImgs
            }
          }).then((res) => {
            Taro.hideLoading()
            if (res.errMsg != "cloud.callFunction:ok") {
              Taro.showToast({ title: '提交失败', icon: 'error', duration: 1000 })
            } else {
              Taro.showToast({ title: '提交成功', icon: 'success', duration: 1000 })
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

      <View className='comment-imgs'>{cImgs.map((src, index) => (
        <View className='img-container'>
          <Image src={src} className='comment-img'></Image>
          <View className='delete-btn' onClick={() => { deleteImg(index) }}>
            <IconFont name='times-circle-fill' size='32rpx' color='red'></IconFont>
          </View>
        </View>
      ))}
        {cImgs.length < IMG_MAX_COUNT && <View className='img-container'><Image src='https://pic.imgdb.cn/item/6434ffef0d2dde577737f3bf.jpg' className='comment-img' onClick={addImg}></Image></View>}
      </View>

      <Button className='submit-btn' onClick={submitComment}>提交</Button>
    </View>
  )

}
