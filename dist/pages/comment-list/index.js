"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/comment-list/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/comment-list/index.jsx":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/comment-list/index.jsx ***!
  \***************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_flagSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/flagSelector */ "./src/components/flagSelector/index.jsx");
/* harmony import */ var _components_CommentListCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/CommentListCard */ "./src/components/CommentListCard/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);












function Index() {
  // const [CommentsList, setCommentList] = useState([{
  //   commentId: "0001",
  //   nickname:'一号用户',
  //   userImg:'https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cf91eed7-8704-4a26-bdaf-4085f7a7ca7e.jpeg',
  //   userTag1:'白银贵宾',
  //   userTag2:'点评新星',
  //   liveTime:'2023年04月',
  //   location:'浙江',
  //   fangxing:'畅享大床房',
  //   leibie:'独自旅行',
  //   content:'入住的酒店大厅看起来很舒适，前台的小姐姐服务业很好，酒店的环境也是一级棒，总之强烈推荐，欢迎大家前来入住！',
  //   star:5.0,
  //   ImgList:['https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/0b5cf52c-4927-480b-9b96-f2e25dbad30f.jpg','https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/1545634f-3b76-4d12-a87e-f34c774e5984.jpg',
  //   'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg','https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg','https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'],
  //   reply:'酒店回复：感谢对我们酒店的认可，您的鼓励是我们前进的动力，有机会暑假再来玩呀！'
  // }, {
  //   commentId: "0002",
  //   nickname:'二号用户',
  //   userImg:'https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cf91eed7-8704-4a26-bdaf-4085f7a7ca7e.jpeg',
  //   userTag1:'白银贵宾',
  //   userTag2:'点评新星',
  //   liveTime:'2023年04月',
  //   location:'浙江',
  //   fangxing:'畅享大床房',
  //   leibie:'独自旅行',
  //   content:'入住的酒店大厅看起来很舒适，前台的小姐姐服务业很好，酒店的环境也是一级棒，总之强烈推荐，欢迎大家前来入住！',
  //   star:5.0,
  //   ImgList:['https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/0b5cf52c-4927-480b-9b96-f2e25dbad30f.jpg','https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/1545634f-3b76-4d12-a87e-f34c774e5984.jpg',
  //   'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg','https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg','https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'],
  //   reply:'酒店回复：感谢对我们酒店的认可，您的鼓励是我们前进的动力，有机会暑假再来玩呀！'
  // }]);
  // useLoad(() => {
  // })
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    CommentsList = _useState2[0],
    setCommentList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState4 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    loading = _useState4[0],
    setLoading = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    index = _useState6[0],
    setIndex = _useState6[1];

>>>>>>> master
  var appendComments = /*#__PURE__*/function () {
    var _ref2 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee2() {
      var comments;
      return (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            setLoading(true);
            console.log(index);
            _context2.next = 4;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
              name: 'get-bad-comment',
              data: {
                page: page + 1,
                index: index
              }
            });
          case 4:
            comments = _context2.sent.result;
            setPage(page + 1);
            console.log(comments);
            setCommentList(CommentsList.concat(comments));
            setLoading(false);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function appendComments() {
      return _ref2.apply(this, arguments);
    };
  }();
  var onClickAll = /*#__PURE__*/function () {
    var _ref3 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee3() {
      var comments;
      return (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            setIndex(0);
            _context3.next = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
              name: 'get-bad-comment',
              data: {
                page: page,
                index: 0
              }
            });
          case 3:
            comments = _context3.sent.result;
            console.log(comments);
            setCommentList(comments);
            setLoading(false);
          case 7:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function onClickAll() {
      return _ref3.apply(this, arguments);
    };
  }();
  var onClickPhoto = /*#__PURE__*/function () {
    var _ref4 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee4() {
      var comments;
      return (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            setIndex(1);
            _context4.next = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
              name: 'get-bad-comment',
              data: {
                page: page,
                index: 1
              }
            });
          case 3:
            comments = _context4.sent.result;
            console.log(comments);
            setCommentList(comments);
            setLoading(false);
          case 7:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function onClickPhoto() {
      return _ref4.apply(this, arguments);
    };
  }();
  var onClickBad = /*#__PURE__*/function () {
    var _ref5 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee5() {
      var comments;
      return (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            setIndex(2);
            _context5.next = 3;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
              name: 'get-bad-comment',
              data: {
                page: page,
                index: 2
              }
            });
          case 3:
            comments = _context5.sent.result;
            console.log(comments);
            setCommentList(comments);
            setLoading(false);

          //console.log(index)
          case 7:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function onClickBad() {
      return _ref5.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "hotal-list-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "fenlei",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        onClick: function onClick() {
          return onClickAll();
        },
        className: index == 0 ? 'shaixuan' : '',
        children: ["\u5168\u90E8", allcount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        onClick: function onClick() {
          return onClickPhoto();
        },
        className: index == 1 ? 'shaixuan' : '',
        children: ["\u6709\u56FE\xB7\u89C6\u9891", photocount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        onClick: function onClick() {
          return onClickBad();
        },
        className: index == 2 ? 'shaixuan' : '',
        children: ["\u5DEE\u8BC4", badcount]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        children: "\u7B5B\u9009"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      className: "hotel-cards",
      scrollY: true,
      onScrollToLower: appendComments,
      children: [Array.isArray(CommentsList) && CommentsList.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_CommentListCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          commentDetails: item
        });
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "loading",
        hidden: loading,
        children: "\u6B63\u5728\u52A0\u8F7D\u8BC4\u8BBA\u6570\u636E..."
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Button, {
      className: "tiaozhuan",
      onClick: function onClick() {
        return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
          url: '../comment-submit/index?hotelId=' + hotelId + '&hotelName=' + hotelName
        });
      },
      children: "\u533F\u540D\u70B9\u8BC4"
    })]
  });
}

/***/ }),

/***/ "./src/components/CommentListCard/index.jsx":
/*!**************************************************!*\
  !*** ./src/components/CommentListCard/index.jsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CommentListCard; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StarsScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/StarsScore */ "./src/components/StarsScore/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





// {/* This is a card, component of comment list page. */}


function CommentListCard(_ref) {
  var commentDetails = _ref.commentDetails;
  var nickname = '未知用户';
  var userImg = 'https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cf91eed7-8704-4a26-bdaf-4085f7a7ca7e.jpeg';
  var userTag1 = '白银贵宾';
  var userTag2 = '点评新星';
  var liveTime = new Date(commentDetails.liveTime);
  var location = '浙江';
  var fangxing = '畅享大床房';
  var leibie = '独自旅行';
  var content = '入住的酒店大厅看起来很舒适，前台的小姐姐服务业很好，酒店的环境也是一级棒，总之强烈推荐，欢迎大家前来入住！';
  var star = 5.0;
  var ImgList = ['https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/0b5cf52c-4927-480b-9b96-f2e25dbad30f.jpg', 'https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/1545634f-3b76-4d12-a87e-f34c774e5984.jpg', 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'];
  var reply = '酒店回复：感谢对我们酒店的认可，您的鼓励是我们前进的动力，有机会暑假再来玩呀！';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "hotel-card",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "homeContainer",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "upperContent",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          class: "opusDetailItem",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
            src: userImg,
            alt: "\u5934\u50CF",
            mode: "widthFix"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "columnItem",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
              className: "userInfo",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
                className: "opusDetailTitle",
                children: commentDetails.nickname
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
                className: "bodyTopic",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
                  className: "bodyTopicItem",
                  children: userTag1
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
                  className: "bodyTopicItem",
                  children: userTag2
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
              className: "liveTime",
              children: [liveTime.getFullYear(), "\u5E74", liveTime.getMonth() + 1, "\u6708\u5165\u4F4F | \u53D1\u5E03\u4E8E", commentDetails.location]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "rowItem",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
            className: "starImage",
            src: "https://mp-32c7feb5-a197-4820-b874-2ef762f317e6.cdn.bspapp.com/cloudstorage/cbf68cf8-1f53-4f6c-b57c-b03f45d8aa51.png"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "starItem",
            children: [commentDetails.star, ".0\u5206"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "fangxing",
            children: fangxing
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "leibie",
            children: ["| ", leibie]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "comment",
          children: commentDetails.content
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "qz_imgs qz_imgs3 clearfix",
          children: Array.isArray(commentDetails.ImgList) ? commentDetails.ImgList.map(function (item) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
              className: "tupian",
              src: item
            });
          }) : null
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "reply",
          children: reply
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          className: "youyong",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
            className: "youyongText",
            children: "\u25B2\u6709\u75283"
          })
        })]
      })
    })
  });
}

/***/ }),

/***/ "./src/pages/comment-list/index.jsx":
/*!******************************************!*\
  !*** ./src/pages/comment-list/index.jsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/comment-list/index.jsx");


var config = {"navigationBarTitleText":"上海虹桥国展地铁站@酒店"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/comment-list/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/comment-list/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map