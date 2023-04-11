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
            </View>
            </View>
            </View>
          
         
        </View>
    )
}