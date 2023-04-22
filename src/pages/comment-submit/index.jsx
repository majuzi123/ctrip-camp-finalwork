import { useState } from 'react'
import { View, Text, Button, Checkbox, Textarea } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
import ScoreChecker from '../../components/ScoreChecker';
import ImageAdder from '../../components/ImageAdder';

export default function Index() {
  const [hotelName, setHotelName] = useState('');
  const [hotelId, setHotelId] = useState('');
  const [cScore, setCScore] = useState(0);//评分
  const [cText, setCText] = useState('');//文字评论
  const [cImgs, setCImgs] = useState([]);//评论图片
  const [anonymous, setAnonymous] = useState(false);//是否匿名提交点评

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

  //获取ScoreChecker组件状态的回调函数
  const handleScoreChange = (score) => {
    setCScore(score)
  }

  //获取ImageAdder组件状态的回调函数
  const handleImgsChange = (imgs) => {
    setCImgs(imgs)
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

      <ScoreChecker title={'评分：'} starSize={'60rpx'} score={cScore} onChangeScore={handleScoreChange} />

      <View className='comment-text'>
        <Text className='text-tips1'>{cText == '' ? '欢迎你分享对酒店服务、环境、设施和价格等的评价...' : ''}</Text>
        <Textarea className='text-content' value={cText} type='text' onInput={(e) => { setCText(e.target.value) }} />
        <View className='text-tips2'>至少5个字</View>
      </View>

      <ImageAdder IMG_MAX_COUNT={9} uploadToCloud={true} imgsList={cImgs} onChangeImgs={handleImgsChange} />

      <Checkbox className='anonymous-check' onClick={() => { setAnonymous(!anonymous) }} checked={anonymous}>匿名评论</Checkbox>

      <Button className='submit-btn' onClick={submitComment}>提交</Button>

    </View>
  )
}
