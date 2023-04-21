import { View, Image, Text } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'
import StarsScore from '../../components/StarsScore';

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)
// {/* 酒店卡片 */}
export default function HotelCard({
    hotelDetails,
    onClick
}) {
    return (
        <View className='hotel-card' onClick={onClick}>
<<<<<<< HEAD
=======
=======
// {/* This is a hotel card, component of hotel list page. */}
export default function HotelCard({
    hotelDetails
}) {
    return (
        <View className='hotel-card'>
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
            <View className='card-left'>
                <Image className='hotel-image' src={hotelDetails.image} lazyLoad></Image>
            </View>
            <View className='card-right'>
                <View className='hotel-name'>{hotelDetails.name}</View>
                <View className='comment'>
                    <StarsScore score={hotelDetails.score}></StarsScore>
                    <Text className='comment-score'>{hotelDetails.score.toFixed(1)}分</Text>
                    <Text className='comment-num'>{hotelDetails.commentNum}点评</Text>
                </View>
                <View className='location'>{hotelDetails.location}</View>
                <View className='comment-content'>"{hotelDetails.comment[Math.floor(Math.random() * hotelDetails.comment.length)]}"</View>
                <View className='hotel-price'>￥<Text className='cost'>{hotelDetails.price}</Text>起</View>
            </View>
        </View>
    )
}