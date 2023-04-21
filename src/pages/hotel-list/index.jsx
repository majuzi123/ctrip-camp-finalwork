<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)
import { useState } from 'react'
import { View, Input, ScrollView, Picker } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import HotelCard from '../../components/HotelCard';
import IconFont from '../../components/iconfont';
import LoadingDots from '../../components/LoadingDots';

export default function Index() {

  const [hotelsList, setHotelList] = useState([])
  const [searchContent, setSearchContent] = useState('') //搜索框内容
  const [range, setRange] = useState(['不限评分', '不限评价数', '不限价格'])
  const [scroll, setScroll] = useState(1)//滚动条高度，用于回到顶部
  //想要修改筛选条件后立即更改页面信息，useState的set操作在请求数据之后执行，所以需要一个可以立即改变值的临时变量
  var tempRange = ['不限评分', '不限评价数', '不限价格']
  const rangeScore = ['不限评分', '1分以上', '2分以上', '3分以上', '4分以上', '4.5分以上', '5分']
  const rangeCommentNum = ['不限评价数', '100评论以上', '500评论以上', '1000评论以上', '5000评论以上', '10000评论以上']
  const rangePrice = ['不限价格', '100元内', '200元内', '400元内', '800元内', '1600元内']

  useLoad(async () => {
    refreshHotels()
  })

  //修改筛选条件
  const changeRange = (index, content) => {
    tempRange = [...range]
    tempRange[index] = content
    setRange(tempRange)
    refreshHotels()//重修请求符合条件的数据
    setScroll((scroll + 1 - Math.random()) % 1)//回滚至顶部，state值发生改变才会触发
  }

  //点击搜索按钮后触发，搜索含有关键字的酒店
<<<<<<< HEAD
=======
=======
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

>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
  const doSearch = () => {
    if (searchContent != '') {
      refreshHotels()
      console.log("do search: " + searchContent)
    }
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)

  //向数据库请求数据
  const getHotels = async () => {
    document.getElementById('no-hotels').style.visibility = 'hidden'
    document.getElementById('loading').style.visibility = 'visible'
    let range = {//筛选条件
      minScore: parseFloat(tempRange[0]) ? parseFloat(tempRange[0]) : 0,//如果NaN，取默认值
      minCommentNum: parseFloat(tempRange[1]) ? parseFloat(tempRange[1]) : 0,
      maxPrice: parseFloat(tempRange[2]) ? parseFloat(tempRange[2]) : 1000000,
<<<<<<< HEAD
=======
=======
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
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
      search: searchContent
    }
    console.log(range)
    const hotels = (await Taro.cloud.callFunction({
      name: 'get-hotel-list',
      data: {
<<<<<<< HEAD
        num: 10,//请求的酒店数据的数量
=======
<<<<<<< HEAD
        num: 10,//请求的酒店数据的数量
=======
        num: 10,
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
        range: range
      }
    })).result
    console.log(hotels)
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)
    document.getElementById('loading').style.visibility = 'hidden'
    if (hotels.length === 0) {
      document.getElementById('no-hotels').style.visibility = 'visible'
    }
    return hotels
  }

  //滑动至底部后触发，请求并追加新的酒店数据
  const appendHotels = throttle(async () => {
    //节流，防止在加载时再次被触发
    tempRange = [...range]
    const result = await getHotels()
    setHotelList(hotelsList.concat(result))
  }, 300, 1000)

  function throttle(func, waitPre, waitPost) {//修改版的节流操作
    var timeout1;
    var timeout2 = setTimeout(function () {
      timeout2 = null
    }, waitPre);//2、保证刚接收到数据后，页面渲染时不被触发

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

  //刷新酒店列表数据
<<<<<<< HEAD
=======
=======
    setLoading(false)
    return hotels
  }

  const appendHotels = async () => {
    const result = await getHotels()
    setHotelList(hotelsList.concat(result))
  }

>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
  const refreshHotels = async () => {
    const result = await getHotels()
    setHotelList(result)
  }

  return (
    <View className='hotal-list-page'>
      <View className='selector'>
        <View className='filters'>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)
          <Picker className='fliter' range={rangeScore} onChange={(e) => { changeRange(0, rangeScore[e.target.value]) }}>{range[0]}</Picker>
          <Picker className='fliter' range={rangeCommentNum} onChange={(e) => { changeRange(1, rangeCommentNum[e.target.value]) }}>{range[1]}</Picker>
          <Picker className='fliter' range={rangePrice} onChange={(e) => { changeRange(2, rangePrice[e.target.value]) }}>{range[2]}</Picker>
        </View>
        <View className='searcher'>
          <Input className='search' onInput={(e) => { setSearchContent(e.target.value) }}>12345</Input>
          <View className='search-icon' onClick={doSearch}><IconFont name='chazhao' size='50rpx' /></View>
        </View>
      </View>
      <ScrollView className='hotel-cards' scrollY onScrollToLower={(appendHotels)} scrollTop={scroll}>
        {Array.isArray(hotelsList) && hotelsList.map((item) => (
          <HotelCard hotelDetails={item} onClick={() => (Taro.navigateTo({
            url: '../comment-list/index?hotelId=' + item._id + '&hotelName=' + item.name
          }))} />
        ))}
        {/* 加载时显示，其它时候隐藏 */}
        <View className='tips' id='loading'>正在加载酒店数据...<LoadingDots className='dots' /></View>
        {/* 无数据时显示，其它时候隐藏 */}
        <View className='tips' id='no-hotels'>没有符合条件的酒店T_T</View>
<<<<<<< HEAD
=======
=======
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
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
      </ScrollView>
    </View>
  )
}
