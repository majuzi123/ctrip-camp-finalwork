import { useState } from 'react'
import { View, Text, Button } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
export default function Index() {
  const [testStr, setTestStr] = useState('');
  const pages = ['hotel-list', 'comment-list', 'comment-submit', 'comment-review']

  useLoad(async () => {
    const requestResult = await Taro.cloud.callFunction({
      name: 'test'
    })
    const data = requestResult.result.data[0]
    console.log(data)
    if (data) {
      setTestStr(data.content)//“成功连接到微信云数据库！”
    } else {
      setTestStr('云数据库test失败！')
    }
  })

  return (
    <View className='todo-page'>
      <View>
        {Array.isArray(pages) ? pages.map((item) => (
          <Button onClick={() => Taro.navigateTo({ url: '../' + item + '/index' })}>{item}页面</Button>
        )) : null}
      </View>
      <View className='test-string'><Text>{testStr}</Text></View>
    </View>
  )
}
