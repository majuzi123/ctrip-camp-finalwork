import { Component } from 'react'
import './app.scss'
import Taro from '@tarojs/taro'

class App extends Component {

  componentDidMount() {
    Taro.cloud.init({ traceUser: true })
    console.log("componentDidMount");
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
