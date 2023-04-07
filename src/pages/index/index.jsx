import { Component, useState } from 'react'
import { View, Text, Input, Button, Checkbox, Icon } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import classnames from 'classnames'
import './index.scss'
import FlagSelector from '../../components/flagSelector';

export default function Index() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useLoad(() => {
    setTodoList(Taro.getStorageSync('todoList') || {});
  })

  const onInputTodo = (e) => {
    setTodo(e.currentTarget.value)
  }

  const updateTodoList = (newList) => {
    setTodoList(newList)
    Taro.setStorage({
      key: 'todoList',
      data: newList
    })
  }

  const onClickAdd = () => {
    //屏蔽了空字符串的添加
    if (todo != '') {
      const newList = [...todoList]
      newList.unshift({
        content: todo,
        completedFlag: false,
        flag: 'red'
      })
      setTodo('')
      updateTodoList(newList)
    }
  }

  const onClickDelete = (index) => {
    const newList = [...todoList]
    newList.splice(index, 1)
    updateTodoList(newList)
  }

  const onClickCheck = (index) => {
    const newList = [...todoList]
    newList[index].completedFlag = !newList[index].completedFlag

    //排序，未做完的在上方，做完的沉到下面
    var temp = newList[index]
    newList.splice(index, 1)
    var idx = 0
    for (idx = 0; idx < newList.length; idx++) {
      if (newList[idx].completedFlag == true) {
        break;
      }
    }
    newList.splice(idx, 0, temp)
    updateTodoList(newList)
  }

  const onChangeFlag = (flag, index) => {
    const newList = [...todoList]
    newList[index].flag = flag
    newList[index].flagSelectorVisible = false
    updateTodoList(newList)
  }

  const onClickIcon = (index) => {
    const newList = [...todoList]
    newList[index].flagSelectorVisible = true
    updateTodoList(newList)
  }

  return (
    <View className='todo-page'>
      <Input className='todo-input' value={todo} onInput={onInputTodo}></Input>
      <Button className='todo-add' onClick={onClickAdd}>添加</Button>
      {todoList.length == 0 ? null : <Text className='todo-title'>TodoList</Text>}
      <View className='todo-box'>
        {todoList.map((item, index) => (
          <View className='todo-item' key={index}>
            <View className={classnames('item-isdo', { done: item.completedFlag })} onClick={(e) => onClickCheck(index)}></View>
            <Text className='item-text'>{item.content}</Text>
            <View className='item-icon'>
              <Icon className='icon-flag' style={{ color: item.flag }} onClick={() => onClickIcon(index)}></Icon>
              {item.flagSelectorVisible && <FlagSelector flag={item.flag} onChange={(flag) => onChangeFlag(flag, index)} />}
            </View>
            <Button className='item-del' onClick={() => onClickDelete(index)}>删除</Button>
          </View>
        ))}
      </View>
      <Text>Hello</Text>
    </View>
  )

}
