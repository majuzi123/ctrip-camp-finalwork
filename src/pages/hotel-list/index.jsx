import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Icon } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
import HotelCard from '../../components/HotelCard';

export default function Index() {

  const [hotelsList, setHotelList] = useState([]);
  //   hotel: {
  //     "_id": "00001",
  //     "name": "桔子酒店(上海大渡河路地铁站店)",
  //     "image": "https://pic.imgdb.cn/item/643554db0d2dde5777c63b14.jpg",
  //     "location": "长风公园地区|靠近大渡河路地铁站",
  //     "price": 411.0,
  //     "commentNum": 1229.0,
  //     "comment": [
  //         "酒店功能完备",
  //         "酒店装修豪华"
  //     ],
  //     "score": 4.9
  //   }
  useLoad(async () => {
    const hotels = (await Taro.cloud.callFunction({ name: 'get-hotel-list' })).result
    console.log(hotels)
    setHotelList(hotels)
  })

  return (
    <View className='hotal-list-page'>
      {Array.isArray(hotelsList) && hotelsList.map((item) => (
        <HotelCard hotelDetails={item} ></HotelCard>
      ))}
    </View>
  )

}
