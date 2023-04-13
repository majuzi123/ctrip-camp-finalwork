import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Icon, ScrollView, Picker, Slider } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
import HotelCard from '../../components/HotelCard';
import IconFont from '../../components/iconfont';

export default function Index() {

  const [hotelsList, setHotelList] = useState([]);
  const [loading, setLoading] = useState(true)
  //   hotel: {
  //     "_id": "00001",
  //     "name": "XX酒店(上海大渡河路地铁站店)",
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
    const hotels = (await Taro.cloud.callFunction({ name: 'get-hotel-list', data: { num: 10 } })).result
    console.log(hotels)
    setHotelList(hotels)
    setLoading(false)
  })

  const appendHotels = async () => {
    setLoading(true)
    const hotels = (await Taro.cloud.callFunction({ name: 'get-hotel-list', data: { num: 10 } })).result
    console.log(hotels)
    setHotelList(hotelsList.concat(hotels))
    setLoading(false)
  }

  const rangeScore = ['不限评分', '1分以上', '2分以上', '3分以上', '4分以上', '4.5分以上', '5分']
  const rangeCommentNum = ['不限评价数', '10以上', '100以上', '1K以上', '1W以上']
  const rangePrice = ['不限价格', '100以内', '200以内', '400以内', '800以内', '1600以内']
  const [filter, setFilter] = useState(['不限评分', '不限评价数', '不限价格'])

  const changeFilter = (index, content) => {
    let newFilter = [...filter]
    newFilter[index] = content
    setFilter(newFilter)
  }

  const [searchContent, setSearchContent] = useState('');
  const doSearch = () => {
    if (searchContent != '') {
      console.log("do search")
    }
  }
  return (
    <View className='hotal-list-page'>
      <View className='selector'>
        <View className='filters'>
          <Picker className='fliter' range={rangeScore} onChange={(e) => { changeFilter(0, rangeScore[e.target.value]) }}>
            <View className='picker-content'>{filter[0]}</View>
          </Picker>
          <Picker className='fliter' range={rangeCommentNum} onChange={(e) => { changeFilter(1, rangeCommentNum[e.target.value]) }}>
            <View className='picker-content'>{filter[1]}</View>
          </Picker>
          <Picker className='fliter' range={rangePrice} onChange={(e) => { changeFilter(2, rangePrice[e.target.value]) }}>
            <View className='picker-content'>{filter[2]}</View>
          </Picker>
        </View>
        <View className='searcher'>
          <Input className='search'>12345</Input>
          <View className='search-icon' onClick={doSearch}>
            <IconFont name='chazhao' size='50rpx' />
          </View>
        </View>
      </View>
      <ScrollView className='hotel-cards' scrollY onScrollToLower={(appendHotels)}>
        {Array.isArray(hotelsList) && hotelsList.map((item) => (
          <HotelCard hotelDetails={item} ></HotelCard>
        ))}
        <View className='loading' hidden={loading}>正在加载酒店数据...</View>
      </ScrollView>
    </View>
  )

}
