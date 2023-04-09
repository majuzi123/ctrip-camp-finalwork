import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Icon } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
import HotelCard from '../../components/HotelCard';

export default function Index() {

  const [hotelsList, setHotelList] = useState([{
    hotelId: "0001",
    name: "上海虹桥国展地铁站@酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 172,
    commentContent: "去虹桥机场和火车站很方便。去虹桥机场和火车站很方便。去虹桥机场和火车站很方便。去虹桥机场和火车站很方便。",
    commentNum: 10,
    commentScore: 4.0,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0002",
    name: "上海携程枚举酒店上海携程枚举酒店上海携程枚举酒店上海携程枚举酒店上海携程枚举酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 11450,
    commentContent: "环境优美卫生整洁。",
    commentScore: 4.8,
    commentNum: 26,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0001",
    name: "上海虹桥国展地铁站@酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 99,
    commentContent: "去虹桥机场和火车站很方便。",
    commentNum: 10,
    commentScore: 4.5,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0002",
    name: "上海携程枚举酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 1145,
    commentContent: "环境优美卫生整洁。",
    commentScore: 5.0,
    commentNum: 26,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0001",
    name: "上海虹桥国展地铁站@酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 172,
    commentContent: "去虹桥机场和火车站很方便。",
    commentNum: 10,
    commentScore: 3.2,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0002",
    name: "上海携程枚举酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 400,
    commentContent: "环境优美卫生整洁。",
    commentScore: 4.8,
    commentNum: 26,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0001",
    name: "上海虹桥国展地铁站@酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 172,
    commentContent: "去虹桥机场和火车站很方便。",
    commentNum: 10,
    commentScore: 0,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0002",
    name: "上海携程枚举酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 400,
    commentContent: "环境优美卫生整洁。",
    commentScore: 1.3,
    commentNum: 26,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0001",
    name: "上海虹桥国展地铁站@酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 172,
    commentContent: "去虹桥机场和火车站很方便。",
    commentNum: 10,
    commentScore: 4.5,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0002",
    name: "上海携程枚举酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 400,
    commentContent: "环境优美卫生整洁。",
    commentScore: 4.8,
    commentNum: 26,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0001",
    name: "上海虹桥国展地铁站@酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 172,
    commentContent: "去虹桥机场和火车站很方便。",
    commentNum: 10,
    commentScore: 4.5,
    location: "近淞虹路地铁站·虹桥"
  }, {
    hotelId: "0002",
    name: "上海携程枚举酒店",
    imageSrc: "https://pic.imgdb.cn/item/64313fb20d2dde57777fc6a9.png",
    price: 400,
    commentContent: "环境优美卫生整洁。",
    commentScore: 4.8,
    commentNum: 26,
    location: "近淞虹路地铁站·虹桥"
  }]);
  // useLoad(() => {
  // })

  return (
    <View className='hotal-list-page'>
      {Array.isArray(hotelsList) && hotelsList.map((item) => (
        <HotelCard hotelDetails={item} ></HotelCard>
      ))}
    </View>
  )

}
