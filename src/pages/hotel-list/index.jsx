import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Icon, ScrollView, Picker, Slider } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
import HotelCard from '../../components/HotelCard';
import IconFont from '../../components/iconfont';

export default function Index() {

  const [hotelsList, setHotelList] = useState([]);
  const [loading, setLoading] = useState(true)

  const rangeScore = ['不限评分', '1分以上', '2分以上', '3分以上', '4分以上', '4.5分以上', '5分']
  const rangeCommentNum = ['不限评价数', '100评论以上', '500评论以上', '1000评论以上', '5000评论以上', '10000评论以上']
  const rangePrice = ['不限价格', '100元内', '200元内', '400元内', '800元内', '1600元内']
  var filter = ['不限评分', '不限评价数', '不限价格'] //想要修改后立即刷新页面，仅用useState导致页面刷新后值才修改，所以备份一个可以立即改变值的
  const [range, setRange] = useState(['不限评分', '不限评价数', '不限价格'])
  const [searchContent, setSearchContent] = useState('');

  const changeFilter = (index, content) => {
    filter = [...range]
    filter[index] = content
    setRange(filter)
    refreshHotels()
  }

  const doSearch = () => {
    if (searchContent != '') {
      refreshHotels()
      console.log("do search: " + searchContent)
    }
  }
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
    refreshHotels()
  })

  const getHotels = async () => {
    setLoading(true)
    let range = {
      minScore: parseFloat(filter[0]) ? parseFloat(filter[0]) : 0,//如果NaN，取默认值
      minCommentNum: parseFloat(filter[1]) ? parseFloat(filter[1]) : 0,
      maxPrice: parseFloat(filter[2]) ? parseFloat(filter[2]) : 1000000,
      search: searchContent
    }
    console.log(range)
    const hotels = (await Taro.cloud.callFunction({
      name: 'get-hotel-list',
      data: {
        num: 10,
        range: range
      }
    })).result
    console.log(hotels)
    setLoading(false)
    return hotels
  }

  const appendHotels = async () => {
    const result = await getHotels()
    setHotelList(hotelsList.concat(result))
  }

  const refreshHotels = async () => {
    const result = await getHotels()
    setHotelList(result)
  }

  return (
    <View className='hotal-list-page'>
      <View className='selector'>
        <View className='filters'>
          <Picker className='fliter' range={rangeScore} onChange={(e) => {
            changeFilter(0, rangeScore[e.target.value])
          }}>
            <View className='picker-content'>{range[0]}</View>
          </Picker>
          <Picker className='fliter' range={rangeCommentNum} onChange={(e) => {
            changeFilter(1, rangeCommentNum[e.target.value])
          }}>
            <View className='picker-content'>{range[1]}</View>
          </Picker>
          <Picker className='fliter' range={rangePrice} onChange={(e) => {
            changeFilter(2, rangePrice[e.target.value])
          }}>
            <View className='picker-content'>{range[2]}</View>
          </Picker>
        </View>
        <View className='searcher'>
          <Input className='search' onInput={(e) => { setSearchContent(e.target.value) }}>12345</Input>
          <View className='search-icon' onClick={doSearch}>
            <IconFont name='chazhao' size='50rpx' />
          </View>
        </View>
      </View>
      <ScrollView className='hotel-cards' scrollY onScrollToLower={(appendHotels)}>
        {Array.isArray(hotelsList) && hotelsList.map((item) => (
          <View onClick={() => (Taro.navigateTo({
            // url: '../comment-submit/index?hotelId=' + item._id + '&hotelName=' + item.name
            url: '../comment-list/index?hotelId=' + item._id + '&hotelName=' + item.name
          }))}>
            <HotelCard hotelDetails={item} />
          </View>
        ))}
        <View className='loading' hidden={loading}>正在加载酒店数据...</View>
      </ScrollView>
    </View>
  )
}
