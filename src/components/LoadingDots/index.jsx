import { View } from '@tarojs/components'
import './index.scss'
// {/* 加载动画，转圈的点 */}
export default function LoadingDots() {
    return (
        <View className='dot-spinner-container'>
            <View class="dot-spinner">
                <View class="dot-spinner__dot"></View>
                <View class="dot-spinner__dot"></View>
                <View class="dot-spinner__dot"></View>
                <View class="dot-spinner__dot"></View>
                <View class="dot-spinner__dot"></View>
                <View class="dot-spinner__dot"></View>
                <View class="dot-spinner__dot"></View>
                <View class="dot-spinner__dot"></View>
            </View>
        </View>
    )
}