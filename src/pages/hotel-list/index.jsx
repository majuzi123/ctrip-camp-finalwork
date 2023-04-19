import { useState } from 'react'
import { View, Input, ScrollView, Picker } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import './index.scss'
import HotelCard from '../../components/HotelCard';
import IconFont from '../../components/iconfont';

export default function Index() {

  const [hotelsList, setHotelList] = useState([])
  const [searchContent, setSearchContent] = useState('') //搜索框内容
  const [range, setRange] = useState(['不限评分', '不限评价数', '不限价格'])
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
  }

  //点击搜索按钮后触发，搜索含有关键字的酒店
  const doSearch = () => {
    if (searchContent != '') {
      refreshHotels()
      console.log("do search: " + searchContent)
    }
  }

  //向数据库请求数据
  const getHotels = async () => {
    document.getElementById('loading').style.visibility = 'visible'
    let range = {//筛选条件
      minScore: parseFloat(tempRange[0]) ? parseFloat(tempRange[0]) : 0,//如果NaN，取默认值
      minCommentNum: parseFloat(tempRange[1]) ? parseFloat(tempRange[1]) : 0,
      maxPrice: parseFloat(tempRange[2]) ? parseFloat(tempRange[2]) : 1000000,
      search: searchContent
    }
    console.log(range)
    const hotels = (await Taro.cloud.callFunction({
      name: 'get-hotel-list',
      data: {
        num: 10,//请求的酒店数据的数量
        range: range
      }
    })).result
    console.log(hotels)
    document.getElementById('loading').style.visibility = 'hidden'
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
  const refreshHotels = async () => {
    const result = await getHotels()
    setHotelList(result)
    if (result.length == 0) {
      document.getElementById('no-hotels').style.visibility = 'visible'
    } else {
      document.getElementById('no-hotels').style.visibility = 'hidden'
    }
  }

  return (
    <View className='hotal-list-page'>
      <View className='selector'>
        <View className='filters'>
          <Picker className='fliter' range={rangeScore} onChange={(e) => { changeRange(0, rangeScore[e.target.value]) }}>{range[0]}</Picker>
          <Picker className='fliter' range={rangeCommentNum} onChange={(e) => { changeRange(1, rangeCommentNum[e.target.value]) }}>{range[1]}</Picker>
          <Picker className='fliter' range={rangePrice} onChange={(e) => { changeRange(2, rangePrice[e.target.value]) }}>{range[2]}</Picker>
        </View>
        <View className='searcher'>
          <Input className='search' onInput={(e) => { setSearchContent(e.target.value) }}>12345</Input>
          <View className='search-icon' onClick={doSearch}><IconFont name='chazhao' size='50rpx' /></View>
        </View>
      </View>
      <ScrollView className='hotel-cards' scrollY onScrollToLower={(appendHotels)}>
        {Array.isArray(hotelsList) && hotelsList.map((item) => (
          <HotelCard hotelDetails={item} onClick={() => (Taro.navigateTo({
            // url: '../comment-submit/index?hotelId=' + item._id + '&hotelName=' + item.name
            url: '../comment-list/index?hotelId=' + item._id + '&hotelName=' + item.name
          }))} />
        ))}
        {/* 加载时显示，其它时候隐藏 */}
        <View className='tips' id='loading'>正在加载酒店数据...</View>
        {/* 无数据时显示，其它时候隐藏 */}
        <View className='tips' id='no-hotels'>没有符合条件的酒店T_T</View>
      </ScrollView>
    </View>
  )
}
