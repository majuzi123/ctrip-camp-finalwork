import { View, Image, Text } from '@tarojs/components'
import { useState } from 'react'
import './index.scss'
import IconFont from '../iconfont';
// {/* This is a component shows the scores in form of stars, a part of HotelCard componet. */}
export default function StarsScore({
    score,
    starSize
}) {
    const defaultSize = 32;
    // console.log(starSize)
    if (starSize == undefined || starSize == null) {
        starSize = defaultSize
    }
    return (
<<<<<<< HEAD
        <View className='stars-score-container'>
=======
<<<<<<< HEAD
        <View className='stars-score-container'>
=======
        <View className='container'>
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
            <View className='back'>
                {[1, 2, 3, 4, 5].map(() => (
                    <IconFont className='star' name='a-1' color="#aaa" size={starSize + "rpx"} />))}
            </View>
            <View className='front' style={{ width: starSize * score + "rpx", overflow: 'hidden' }}>
                {[1, 2, 3, 4, 5].map(() => (
                    <IconFont className='star' name='a-1' color="yellow" size={starSize + "rpx"} />))}
            </View>
        </View>
    )
}