import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Icon } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import classnames from 'classnames'
import './index.scss'
import FlagSelector from '../../components/flagSelector';

export default function Index() {

  // useLoad(() => {
  // })

  return (
    <View className='hotal-list-page'>
      <Text>Hello</Text>
    </View>
  )

}
