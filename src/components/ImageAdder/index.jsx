import { View, Image } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import './index.scss'
import IconFont from '../iconfont';
// {/* 选择并添加图片 */}
export default function ImageAdder({
    IMG_MAX_COUNT,//图片最大数量
    uploadToCloud,
    imgsList,
    onChangeImgs
}) {
    if (!IMG_MAX_COUNT) {
        var IMG_MAX_COUNT = 9
    }

    //添加点评图片
    const addImg = async () => {
        console.log("addImg")
        var imgs = [...imgsList]
        const res = await Taro.chooseImage({ count: IMG_MAX_COUNT - imgsList.length, sizeType: ['compressed'] })
        if (uploadToCloud && uploadToCloud === true) {
            for (let path of res.tempFilePaths) {
                let cloudPath = 'comment-img/' + Date.now() + Math.floor(Math.random() * 10000) + '.jpg';
                await Taro.cloud.uploadFile({ cloudPath: cloudPath, filePath: path }).then(//图片上传
                    (res) => {
                        imgs.push(res.fileID)
                    }
                )
            }
        } else {
            imgs.push(res.tempFilePaths)
        }
        onChangeImgs(imgs)
    }

    //删除指定的已添加的点评图片
    const deleteImg = (index) => {
        console.log("deleteImg" + index)
        var imgs = [...imgsList]
        var newCImg = []
        for (let i = 0; i < imgs.length; i++) {
            if (i != index) {
                newCImg.push(imgs[i])
            }
        }
        onChangeImgs(newCImg)
    }


    return (
        <View className='image-adder-container'>
            {imgsList.map((src, index) => (
                <View className='img-container'>
                    <Image src={src} className='comment-img' lazyLoad></Image>
                    <View className='delete-btn' onClick={() => { deleteImg(index) }}>
                        <IconFont name='times-circle-fill' size='32rpx' color='red'></IconFont>
                    </View>
                </View>
            ))}

            {imgsList.length < IMG_MAX_COUNT && <View className='img-container adder-icon' onClick={addImg}>
                {/* 触发添加图片的加号 */}
                <IconFont name='tupian' color='rgb(211, 176, 243)' size='120rpx' />
                添加图片
            </View>}
        </View>
    )
}