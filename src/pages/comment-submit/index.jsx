import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import classnames from 'classnames'
import './index.scss'
import FlagSelector from '../../components/flagSelector';
import IconFont from '../../components/iconfont';

export default function Index() {

  // useLoad(() => {
  // })
  const [cScore, setCScore] = useState(0);
  const [cText, setCText] = useState('');
  const [cImgs, setCImgs] = useState([
    'https://pic.imgdb.cn/item/643268450d2dde57772389fa.jpg',
    'https://pic.imgdb.cn/item/643268450d2dde57772389fa.jpg',
    'https://pic.imgdb.cn/item/643268450d2dde57772389fa.jpg'
  ]);

  return (
    <View className='comment-submit-page'>
      <View className='hotel-name'>HelloHelloHelloHelloHello</View>

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
        <Text className='text-tips1'>{cText == '' ? 'please enter your comment...' : ''}</Text>
        <Input className='text-content' value={cText} type='text' onInput={(e) => { setCText(e.target.value) }} />
        <View className='text-tips2'>no less than 5 chars</View>
      </View>

      <View className='comment-imgs'>{cImgs.map((src) => (
        <Image src={src} className='comment-img'></Image>
      ))}
        <Image src='https://pic.imgdb.cn/item/6432686f0d2dde577723c135.jpg' className='comment-img'></Image>
      </View>

      <Button className='submit-btn'>提交</Button>
    </View>
  )

}
