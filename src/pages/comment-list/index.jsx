import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Icon, ScrollView } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import classnames from 'classnames'
import './index.scss'
import CommentListCard from '../../components/CommentListCard';

export default function Index() {

  // const [CommentsList, setCommentList] = useState([{
  //   commentId: "0001",
  //   nickname:'一号用户',
  //   userImg:'https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cf91eed7-8704-4a26-bdaf-4085f7a7ca7e.jpeg',
  //   userTag1:'白银贵宾',
  //   userTag2:'点评新星',
  //   liveTime:'2023年04月',
  //   location:'浙江',
  //   fangxing:'畅享大床房',
  //   leibie:'独自旅行',
  //   content:'入住的酒店大厅看起来很舒适，前台的小姐姐服务业很好，酒店的环境也是一级棒，总之强烈推荐，欢迎大家前来入住！',
  //   star:5.0,
  //   ImgList:['https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/0b5cf52c-4927-480b-9b96-f2e25dbad30f.jpg','https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/1545634f-3b76-4d12-a87e-f34c774e5984.jpg',
  //   'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg','https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg','https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'],
  //   reply:'酒店回复：感谢对我们酒店的认可，您的鼓励是我们前进的动力，有机会暑假再来玩呀！'
  // }, {
  //   commentId: "0002",
  //   nickname:'二号用户',
  //   userImg:'https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cf91eed7-8704-4a26-bdaf-4085f7a7ca7e.jpeg',
  //   userTag1:'白银贵宾',
  //   userTag2:'点评新星',
  //   liveTime:'2023年04月',
  //   location:'浙江',
  //   fangxing:'畅享大床房',
  //   leibie:'独自旅行',
  //   content:'入住的酒店大厅看起来很舒适，前台的小姐姐服务业很好，酒店的环境也是一级棒，总之强烈推荐，欢迎大家前来入住！',
  //   star:5.0,
  //   ImgList:['https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/0b5cf52c-4927-480b-9b96-f2e25dbad30f.jpg','https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/1545634f-3b76-4d12-a87e-f34c774e5984.jpg',
  //   'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg','https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg','https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'],
  //   reply:'酒店回复：感谢对我们酒店的认可，您的鼓励是我们前进的动力，有机会暑假再来玩呀！'
  // }]);
  // useLoad(() => {
  // })
  const [CommentsList, setCommentList] = useState([]);
  const [loading, setLoading] = useState(true)
  const [index, setIndex] = useState(0)
  const [hotelName, setHotelName] = useState('未知酒店');
  const [hotelId, setHotelId] = useState('');
  const [page, setPage] = useState(0);
  const [allcount, setAllcount] = useState(0);
  const [photocount, setPhotocount] = useState(0);
  const [badcount, setBadcount] = useState(0);
  const [scroll, setScroll] = useState(1)//滚动条高度，用于回到顶部
  Taro.setNavigationBarTitle({
    title: hotelName
  })
  useLoad(async (options) => {
    setAllcount((await Taro.cloud.callFunction({ name: 'get-comment-list', data: { index: 0, hotelId: options.hotelId } })).result.total)
    setPhotocount((await Taro.cloud.callFunction({ name: 'get-comment-list', data: { index: 1, hotelId: options.hotelId } })).result.total)
    setBadcount((await Taro.cloud.callFunction({ name: 'get-comment-list', data: { index: 2, hotelId: options.hotelId } })).result.total)
    //console.log(allcount)

    setHotelName(options.hotelName)
    setHotelId(options.hotelId)
    console.log(options.hotelId)
    const comments = (await Taro.cloud.callFunction({ name: 'get-bad-comment', data: { page: page, index: index, hotelId: options.hotelId } })).result
    console.log(comments)
    setCommentList(comments)
    setLoading(false)
  })

  const appendComments = async () => {
    setLoading(true)
    console.log(index)
    const comments = (await Taro.cloud.callFunction({ name: 'get-bad-comment', data: { page: page + 1, index: index, hotelId: hotelId } })).result
    setPage(page + 1)

    console.log(comments)
    setCommentList(CommentsList.concat(comments))
    setLoading(false)
  }
  const onClickAll = async () => {
    setPage(0)
    setIndex(0)
    const comments = (await Taro.cloud.callFunction({ name: 'get-bad-comment', data: { page: 0, index: 0, hotelId: hotelId } })).result
    console.log(comments)
    setCommentList(comments)
    setLoading(false)
    setScroll((scroll + 1 - Math.random()) % 1)//回滚至顶部，state值发生改变才会触发

  }
  const onClickPhoto = async () => {

    setPage(0)
    setIndex(1)
    const comments = (await Taro.cloud.callFunction({ name: 'get-bad-comment', data: { page: 0, index: 1, hotelId: hotelId } })).result
    console.log(comments)
    setCommentList(comments)
    setLoading(false)
    setScroll((scroll + 1 - Math.random()) % 1)//回滚至顶部，state值发生改变才会触发

  }
  const onClickBad = async () => {
    setPage(0)
    setIndex(2)
    const comments = (await Taro.cloud.callFunction({ name: 'get-bad-comment', data: { page: 0, index: 2, hotelId: hotelId } })).result
    console.log(comments)
    setCommentList(comments)
    setLoading(false)
    setScroll((scroll + 1 - Math.random()) % 1)//回滚至顶部，state值发生改变才会触发

    //console.log(index)
  }
  return (
    <View className='hotal-list-page'>
      <View className='fenlei'>
        <View onClick={() => onClickAll()} className={index == 0 ? 'shaixuan' : ''}>全部{allcount}</View>
        <View onClick={() => onClickPhoto()} className={index == 1 ? 'shaixuan' : ''}>有图·视频{photocount}</View>
        <View onClick={() => onClickBad()} className={index == 2 ? 'shaixuan' : ''}>差评{badcount}</View>
        <View>筛选</View>
      </View>
      <ScrollView className='hotel-cards' scrollY onScrollToLower={(appendComments)} scrollTop={scroll}>
        {Array.isArray(CommentsList) && CommentsList.map((item) => (
          <CommentListCard commentDetails={item} ></CommentListCard>
        ))}
        <View className='loading' hidden={loading}>正在加载评论数据...</View>
      </ScrollView>
      <Button className='tiaozhuan' onClick={() => Taro.navigateTo({ url: '../comment-submit/index?hotelId=' + hotelId + '&hotelName=' + hotelName })}>匿名点评</Button>
    </View>
  )

}

