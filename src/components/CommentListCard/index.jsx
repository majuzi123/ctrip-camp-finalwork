import { View, Image, Text ,Button} from '@tarojs/components'
import { useState } from 'react'
import './index.scss'
import StarsScore from '../../components/StarsScore';

// {/* This is a card, component of comment list page. */}
export default function CommentListCard({
    hotelDetails
}) {
    return (
        <View className='hotel-card'>
            <View className="homeContainer">
		<View className="upperContent">
			<View class="opusDetailItem">
				<Image src='https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cf91eed7-8704-4a26-bdaf-4085f7a7ca7e.jpeg' alt="头像" mode="widthFix"></Image>
                <View className='columnItem'>
                <View className='userInfo'>
					<View className="opusDetailTitle">nickname</View>
					<View className="bodyTopic">
                    <View className="bodyTopicItem">
						白银贵宾
					</View>
                    <View className="bodyTopicItem">
						点评新星
					</View>
					
                   
				</View>
                </View>
                <View className='liveTime'>2023年04月入住 | 发布于浙江</View>
                </View>
			</View>
            <View className='rowItem'>
                <Image className='starImage' src='https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cbf68cf8-1f53-4f6c-b57c-b03f45d8aa51.png'></Image>
                <View className="starItem">
						5.0分
					</View>
                    <View className='fangxing'>畅享大床房</View>
                    <View className='leibie'>| 独自旅行</View>
            </View>
            <View className='comment'>入住的酒店大厅看起来很舒适，前台的小姐姐服务业很好，酒店的环境也是一级棒，总之强烈推荐，欢迎大家前来入住！</View>
            
          
        
            <View className='qz_imgs qz_imgs3 clearfix'>
                <Image className='tupian' src='https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/0b5cf52c-4927-480b-9b96-f2e25dbad30f.jpg'></Image>
                <Image className='tupian' src='https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/1545634f-3b76-4d12-a87e-f34c774e5984.jpg'></Image>
                <Image className='tupian' src='https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'></Image>
                <Image className='tupian' src='https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'></Image>
                <Image className='tupian' src='https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'></Image>
            </View>
            <View className='reply'>酒店回复：感谢对我们酒店的认可，您的鼓励是我们前进的动力，有机会暑假再来玩呀！</View>
            <View className='youyong'><View className='youyongText'>▲有用</View></View>
            </View>
            </View>
          
         
        </View>
    )
}