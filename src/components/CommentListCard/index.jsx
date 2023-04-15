import { View, Image, Text ,Button} from '@tarojs/components'
import { useState } from 'react'
import './index.scss'
import StarsScore from '../../components/StarsScore';

// {/* This is a card, component of comment list page. */}
export default function CommentListCard({
    commentDetails
    
}) {
    const nickname='未知用户'
    const userImg='https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cf91eed7-8704-4a26-bdaf-4085f7a7ca7e.jpeg'
    const userTag1='白银贵宾'
    const userTag2='点评新星'
    const liveTime=new Date(commentDetails.liveTime)
    const location='浙江'
    const fangxing='畅享大床房'
    const leibie='独自旅行'
    const content='入住的酒店大厅看起来很舒适，前台的小姐姐服务业很好，酒店的环境也是一级棒，总之强烈推荐，欢迎大家前来入住！'
    const star=5.0
    const ImgList=['https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/0b5cf52c-4927-480b-9b96-f2e25dbad30f.jpg','https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/1545634f-3b76-4d12-a87e-f34c774e5984.jpg',
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg','https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg','https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg']
    const reply='酒店回复：感谢对我们酒店的认可，您的鼓励是我们前进的动力，有机会暑假再来玩呀！'
    return (
        <View className='hotel-card'>
            <View className="homeContainer">
		<View className="upperContent">
			<View class="opusDetailItem">
				<Image src={userImg} alt="头像" mode="widthFix"></Image>
                <View className='columnItem'>
                <View className='userInfo'>
					<View className="opusDetailTitle">{commentDetails.nickname}</View>
					<View className="bodyTopic">
                    <View className="bodyTopicItem">
						{userTag1}
					</View>
                    <View className="bodyTopicItem">
						{userTag2}
					</View>
					
                   
				</View>
                </View>
                <View className='liveTime'>{liveTime.getFullYear()}年{liveTime.getMonth()+1}月入住 | 发布于{commentDetails.location}</View>
                </View>
			</View>
            <View className='rowItem'>
                <Image className='starImage' src='https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cbf68cf8-1f53-4f6c-b57c-b03f45d8aa51.png'></Image>
                <View className="starItem">
						{commentDetails.star}.0分
					</View>
                    <View className='fangxing'>{fangxing}</View>
                    <View className='leibie'>| {leibie}</View>
            </View>
            <View className='comment'>{commentDetails.content}</View>
            
          
        
            <View className='qz_imgs qz_imgs3 clearfix'>
                {Array.isArray(commentDetails.ImgList) ? commentDetails.ImgList.map((item) => (
          <Image className='tupian' src={item}></Image>
        )) : null}
            </View>
            <View className='reply'>{reply}</View>
            <View className='youyong'><View className='youyongText'>▲有用3</View></View>
            </View>
            </View>
          
         
        </View>
    )
}