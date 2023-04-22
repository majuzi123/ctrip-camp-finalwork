// src/app.config.js
// import { useGlobalIconFont } from './components/iconfont/helper';

export default defineAppConfig({
  usingComponents: Object.assign({
    iconfont: `components/iconfont/${process.env.TARO_ENV}/${process.env.TARO_ENV}`,
  }),
  pages: [
    'pages/index/index',
    'pages/comment-list/index',
    'pages/hotel-list/index',
    'pages/comment-submit/index',
    'pages/comment-review/index',
    'pages/admin/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
