import { View, Icon } from '@tarojs/components'
import { useState } from 'react'
import classnames from 'classnames'
import './index.scss'
export default function FlagSelector({
    flag,
    onChange
}) {
    const flagList = ['', 'red', 'yellow', 'blue', 'green']
    return (
        <View className='flag-selector'>
            {flagList.map((item, index) =>
                <Icon
                    className={classnames('icon-flag', { cur: flag == item })}
                    key={index}
                    style={{ color: item }}
                    onClick={() => { onChange(item) }}
                ></Icon>)}
        </View>
    )
}