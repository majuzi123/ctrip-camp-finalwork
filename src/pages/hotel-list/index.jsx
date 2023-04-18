import { Component, useState, useRef } from 'react'
import { View, Text, Input, Button, Checkbox, Icon, ScrollView, Picker, Slider } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import HotelCard from '../../components/HotelCard';
import IconFont from '../../components/iconfont';

export default function Index() {

  const [hotelsList, setHotelList] = useState([])

  const rangeScore = ['不限评分', '1分以上', '2分以上', '3分以上', '4分以上', '4.5分以上', '5分']
  const rangeCommentNum = ['不限评价数', '100评论以上', '500评论以上', '1000评论以上', '5000评论以上', '10000评论以上']
  const rangePrice = ['不限价格', '100元内', '200元内', '400元内', '800元内', '1600元内']
  var filter = ['不限评分', '不限评价数', '不限价格'] //想要修改后立即更改页面信息，仅用useState导致页面刷新后值才修改自身数据，所以备份一个可以立即改变值的变量
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

  useLoad(async () => {
    refreshHotels()
  })

  const getHotels = async () => {
    document.getElementById('loading').style.visibility = 'visible'
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
    document.getElementById('loading').style.visibility = 'hidden'
    return hotels
  }

  const appendHotels = throttle(async () => {
    //节流，防止在加载时再次被触发
    filter = [...range]
    const result = await getHotels()
    setHotelList(hotelsList.concat(result))
  }, 300, 1000)

  function throttle(func, waitPre, waitPost) {//修改版的节流操作
    var timeout1;
    var timeout2 = setTimeout(function () {
      timeout2 = null
    }, waitPre);//2、保证刚接收到数据后，页面渲染时不被触发（获取新数据后渲染时timeout1会直接失效）

    return function () {
      let context = this;
      let args = arguments;
      if (!timeout1 && !timeout2) {
        func.apply(context, args)
        timeout1 = setTimeout(function () {
          timeout1 = null
        }, waitPost)//1、保证刚触发后，向服务端请求数据期间不能再次触发
      }
    }
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
          }}>{range[0]}</Picker>
          <Picker className='fliter' range={rangeCommentNum} onChange={(e) => {
            changeFilter(1, rangeCommentNum[e.target.value])
          }}>{range[1]}</Picker>
          <Picker className='fliter' range={rangePrice} onChange={(e) => {
            changeFilter(2, rangePrice[e.target.value])
          }}>{range[2]}
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
          <HotelCard hotelDetails={item} onClick={() => (Taro.navigateTo({
            // url: '../comment-submit/index?hotelId=' + item._id + '&hotelName=' + item.name
            url: '../comment-list/index?hotelId=' + item._id + '&hotelName=' + item.name
          }))} />
        ))}
        <View className='tips' id='loading'>正在加载酒店数据...</View>
        {hotelsList.length == 0 && <View className='tips'>没有符合条件的酒店T_T</View>}
      </ScrollView>
    </View>
  )
}
