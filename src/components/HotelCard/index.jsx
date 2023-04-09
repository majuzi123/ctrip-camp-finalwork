import { View, Image, Text } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'
import StarsScore from '../../components/StarsScore';
export default function HotelCard({
    hotelDetails
}) {
    return (
        <View className='hotel-card'>
            {/* This is a hotel card. */}
            <View className='card-left'>
                <Image className='hotel-image' src={hotelDetails.imageSrc}></Image>
            </View>
            <View className='card-right'>
                <View className='hotel-name'>{hotelDetails.name}</View>
                <View className='comment'>
                    <StarsScore score={hotelDetails.commentScore}></StarsScore>
                    <Text className='comment-score'>{hotelDetails.commentScore}分</Text>
                    <Text className='comment-num'>{hotelDetails.commentNum}点评</Text>
                </View>
                <View className='location'>{hotelDetails.location}</View>
                <View className='comment-content'>"{hotelDetails.commentContent}"</View>
                <View className='hotel-price'>￥<Text className='cost'>{hotelDetails.price}</Text>起</View>
            </View>
        </View>
    )
}