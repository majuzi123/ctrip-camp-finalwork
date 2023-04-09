import { Component, useState, useEffect } from 'react'
import { View, Text, Input, Button, Checkbox, Icon } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro';
import classnames from 'classnames'
import './index.scss'
import FlagSelector from '../../components/flagSelector';
// import { db } from '../../utils/cloudDB';
export default function Index() {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  // var dbTest = 0;

  // const db = Taro.cloud.database()
  // db.collection('hotel').get().then(res => {
  //   console.log(res.data);
  // })

  useLoad(() => {
    setTodoList(Taro.getStorageSync('todoList') || []);
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
    // debugger;
  }

  const onClickDelete = (index) => {
    const newList = [...todoList]
    newList.splice(index, 1)
    updateTodoList(newList)
  }

  const onClickCheck = (index) => {
    const newList = [...todoList]
    newList[index].completedFlag = !newList[index].completedFlag

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

  const pages = ['hotel-list', 'comment-list', 'comment-submit', 'comment-review']

  return (

    <View className='todo-page'>
      <View>
        {Array.isArray(pages) ? pages.map((item) => (
          <Button onClick={() => Taro.navigateTo({ url: '../' + item + '/index' })}>{item}页面</Button>
        )) : null}
      </View>
      <Input className='todo-input' value={todo} onInput={onInputTodo}></Input>
      <Button className='todo-add' onClick={onClickAdd}>添加</Button>
      {todoList.length == 0 ? null : <Text className='todo-title'>TodoList</Text>}
      <View className='todo-box'>
        {/* {console.log(todoList)} */}
        {Array.isArray(todoList) ? todoList.map((item, index) => (
          <View className='todo-item' key={index}>
            <View className={classnames('item-isdo', { done: item.completedFlag })} onClick={(e) => onClickCheck(index)}></View>
            <Text className='item-text'>{item.content}</Text>
            <View className='item-icon'>
              <Icon className='icon-flag' style={{ color: item.flag }} onClick={() => onClickIcon(index)}></Icon>
              {item.flagSelectorVisible && <FlagSelector flag={item.flag} onChange={(flag) => onChangeFlag(flag, index)} />}
            </View>
            <Button className='item-del' onClick={() => onClickDelete(index)}>删除</Button>
          </View>
        )) : null}
      </View>
      <Text></Text>
    </View>
  )

}
