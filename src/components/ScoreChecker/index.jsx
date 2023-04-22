import { View, Text } from '@tarojs/components'
import './index.scss'
import IconFont from '../iconfont';
// {/* 选择评分组件 */}
export default function ScoreChecker({
    starSize,
    fontSize,
    score,
    onChangeScore,
    title
}) {
    if (!starSize) {
        var starSize = '48rpx'
    }

    return (
        <View className='score-checker-container'>
            <Text className='score-title'>{title}</Text>
            <View className='stars'>{[1, 2, 3, 4, 5].map((value) => {
                let colour = value <= score ? 'yellow' : "#ccc"
                return (<View onClick={() => { onChangeScore(value) }} >
                    <IconFont className='star' name='a-1' color={colour} size={starSize} />
                </View>)
            })}</View>
        </View>
    )
}