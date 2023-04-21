// src/app.config.js
// import { useGlobalIconFont } from './components/iconfont/helper';

export default defineAppConfig({
  usingComponents: Object.assign({
    iconfont: `components/iconfont/${process.env.TARO_ENV}/${process.env.TARO_ENV}`,
  }),
  pages: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> abf06872 (管理员评论审核)
    'pages/index/index',
    'pages/comment-list/index',
    'pages/hotel-list/index',
    'pages/comment-submit/index',
    'pages/comment-review/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
<<<<<<< HEAD
=======
=======
    "pages/index/index",
    "pages/comment-list/index",
    "pages/hotel-list/index",
    "pages/comment-submit/index",
    "pages/comment-review/index",
    "pages/admin/index",
    "pages/comment/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
});
>>>>>>> d26c1933 (管理员审核评论)
>>>>>>> abf06872 (管理员评论审核)
