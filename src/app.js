import { Component } from 'react'
import './app.scss'
import Taro from '@tarojs/taro'

class App extends Component {

  componentDidMount() {
    Taro.cloud.init({ env: 'cloud-3g1s9anved8781a2', traceUser: true })
<<<<<<< HEAD
    console.log("componentDidMount")
=======
<<<<<<< HEAD
    console.log("componentDidMount")
=======
    console.log("componentDidMount");
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
  }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    // this.props.children 是将要会渲染的页面
    return this.props.children
  }
}

export default App
