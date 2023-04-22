import { useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
import IconFont from '../../components/iconfont';
export default function Index() {

  useLoad(async () => {
    const requestResult = await Taro.cloud.callFunction({
      name: 'test'
    })
    const data = requestResult.result.data[0]
    console.log(data)
    if (data) {
      console.log(data.content)//“成功连接到微信云数据库！”
    } else {
      console.log('云数据库连接失败！')
    }
  })

  return (
    <View className='index-page'>
      <Button onClick={() => Taro.navigateTo({ url: '../hotel-list/index' })} className='nav-btn'>
        我是用户，查看酒店和评论
        <IconFont name='quanxiangyou' size='48rpx' />
      </Button>
      <Button onClick={() => Taro.navigateTo({ url: '../comment-review/index' })} className='nav-btn'>
        我是管理员，前往审核评论
        <IconFont name='touxiang1' size='48rpx' />
      </Button>
    </View>
  )
}
