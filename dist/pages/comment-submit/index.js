"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/comment-submit/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/comment-submit/index.jsx":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/comment-submit/index.jsx ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ScoreChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ScoreChecker */ "./src/components/ScoreChecker/index.jsx");
/* harmony import */ var _components_ImageAdder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ImageAdder */ "./src/components/ImageAdder/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);











function Index() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    hotelName = _useState2[0],
    setHotelName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    hotelId = _useState4[0],
    setHotelId = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    cScore = _useState6[0],
    setCScore = _useState6[1]; //评分
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState7, 2),
    cText = _useState8[0],
    setCText = _useState8[1]; //文字评论
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState9, 2),
    cImgs = _useState10[0],
    setCImgs = _useState10[1]; //评论图片
  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState12 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState11, 2),
    anonymous = _useState12[0],
    setAnonymous = _useState12[1]; //是否匿名提交点评

  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useLoad)(function (options) {
    console.log(options);
    setHotelName(options.hotelName);
    setHotelId(options.hotelId);

    //请求地址信息,获取评论时的ip属地
    if (!__webpack_require__.g.city) {
      __webpack_require__.g.city = '未知属地';
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().request({
        url: 'https://whois.pconline.com.cn/ipJson.jsp?json=true',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          if (res.data.pro == res.data.city) {
            //直辖市
            __webpack_require__.g.city = res.data.city;
          } else {
            __webpack_require__.g.city = res.data.pro + ' ' + res.data.city;
          }
          console.log(city);
        }
      });
    }
  });

  //获取ScoreChecker组件状态的回调函数
  var handleScoreChange = function handleScoreChange(score) {
    setCScore(score);
  };

  //获取ImageAdder组件状态的回调函数
  var handleImgsChange = function handleImgsChange(imgs) {
    setCImgs(imgs);
  };

  //点击提交点评后的操作
  var submitComment = /*#__PURE__*/function () {
    var _ref = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
      return (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log("clicked submit");
            if (anonymous) {
              _context.next = 4;
              break;
            }
            //暂时只实现匿名评论
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请匿名点评',
              icon: 'error',
              duration: 1000
            });
            return _context.abrupt("return");
          case 4:
            if (!(cScore == 0)) {
              _context.next = 7;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请先评分',
              icon: 'error',
              duration: 1000
            });
            return _context.abrupt("return");
          case 7:
            if (!(cText.length < 5)) {
              _context.next = 10;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '评价字数过少',
              icon: 'error',
              duration: 1000
            });
            return _context.abrupt("return");
          case 10:
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '确认提交评价？',
              success: function success(res) {
                if (res.confirm) {
                  console.log("submit to server...");
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showLoading({
                    title: '提交评价ing...'
                  });
                  _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
                    name: 'submit-comment',
                    //提交点评至数据库
                    data: {
                      hotelName: hotelName ? hotelName : '未知酒店',
                      hotelId: hotelId ? hotelId : '00000',
                      liveTime: new Date().valueOf(),
                      //当前点评时间
                      location: city ? city : '未知属地',
                      //当前所处城市
                      nickname: !anonymous && userInfo.nickName ? userInfo.nickName : '匿名用户',
                      userImg: !anonymous && userInfo.avatarUrl ? userInfo.avatarUrl : 'https://pic.imgdb.cn/item/64395c040d2dde5777264e41.jpg',
                      star: cScore,
                      //评分
                      content: cText,
                      //文字评价
                      ImgList: cImgs,
                      //图片
                      pass: null //审核状态，null未审核，true通过，false拒绝
                    }
                  }).then(function (res) {
                    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().hideLoading();
                    if (res.errMsg != "cloud.callFunction:ok") {
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                        title: '提交失败',
                        icon: 'error',
                        duration: 1000
                      });
                    } else {
                      _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                        title: '提交成功',
                        icon: 'success',
                        duration: 1000
                      });
                      setTimeout(function () {
                        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateBack();
                      }, 1000);
                    }
                  });
                }
              }
            });
          case 11:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function submitComment() {
      return _ref.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: "comment-submit-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "hotel-name",
      children: hotelName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ScoreChecker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: '评分：',
      starSize: '60rpx',
      score: cScore,
      onChangeScore: handleScoreChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      className: "comment-text",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
        className: "text-tips1",
        children: cText == '' ? '欢迎你分享对酒店服务、环境、设施和价格等的评价...' : ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Textarea, {
        className: "text-content",
        value: cText,
        type: "text",
        onInput: function onInput(e) {
          setCText(e.target.value);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "text-tips2",
        children: "\u81F3\u5C115\u4E2A\u5B57"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ImageAdder__WEBPACK_IMPORTED_MODULE_3__["default"], {
      IMG_MAX_COUNT: 9,
      uploadToCloud: true,
      imgsList: cImgs,
      onChangeImgs: handleImgsChange
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Checkbox, {
      className: "anonymous-check",
      onClick: function onClick() {
        setAnonymous(!anonymous);
      },
      checked: anonymous,
      children: "\u533F\u540D\u8BC4\u8BBA"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Button, {
      className: "submit-btn",
      onClick: submitComment,
      children: "\u63D0\u4EA4"
    })]
  });
}

/***/ }),

/***/ "./src/components/ImageAdder/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/ImageAdder/index.jsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImageAdder; }
/* harmony export */ });
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconfont__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../iconfont */ "./src/components/iconfont/index.weapp.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);








// {/* 选择并添加图片 */}


function ImageAdder(_ref) {
  var IMG_MAX_COUNT = _ref.IMG_MAX_COUNT,
    uploadToCloud = _ref.uploadToCloud,
    imgsList = _ref.imgsList,
    onChangeImgs = _ref.onChangeImgs;
  return function (IMG_MAX_COUNT) {
    if (!IMG_MAX_COUNT) {
      var IMG_MAX_COUNT = 9;
    }

    //添加点评图片
    var addImg = /*#__PURE__*/function () {
      var _ref2 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/(0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().mark(function _callee() {
        var imgs, res, _iterator, _step, path, cloudPath;
        return (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_4__["default"])().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              console.log("addImg");
              imgs = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(imgsList);
              _context.next = 4;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().chooseImage({
                count: IMG_MAX_COUNT - imgsList.length,
                sizeType: ['compressed']
              });
            case 4:
              res = _context.sent;
              if (!(uploadToCloud && uploadToCloud === true)) {
                _context.next = 26;
                break;
              }
              _iterator = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_6__["default"])(res.tempFilePaths);
              _context.prev = 7;
              _iterator.s();
            case 9:
              if ((_step = _iterator.n()).done) {
                _context.next = 16;
                break;
              }
              path = _step.value;
              cloudPath = 'comment-img/' + Date.now() + Math.floor(Math.random() * 10000) + '.jpg';
              _context.next = 14;
              return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().cloud.uploadFile({
                cloudPath: cloudPath,
                filePath: path
              }).then(
              //图片上传
              function (res) {
                imgs.push(res.fileID);
              });
            case 14:
              _context.next = 9;
              break;
            case 16:
              _context.next = 21;
              break;
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](7);
              _iterator.e(_context.t0);
            case 21:
              _context.prev = 21;
              _iterator.f();
              return _context.finish(21);
            case 24:
              _context.next = 27;
              break;
            case 26:
              imgs.push(res.tempFilePaths);
            case 27:
              onChangeImgs(imgs);
            case 28:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[7, 18, 21, 24]]);
      }));
      return function addImg() {
        return _ref2.apply(this, arguments);
      };
    }();

    //删除指定的已添加的点评图片
    var deleteImg = function deleteImg(index) {
      console.log("deleteImg" + index);
      var imgs = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(imgsList);
      var newCImg = [];
      for (var i = 0; i < imgs.length; i++) {
        if (i != index) {
          newCImg.push(imgs[i]);
        }
      }
      onChangeImgs(newCImg);
    };
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
      className: "image-adder-container",
      children: [imgsList.map(function (src, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
          className: "img-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.Image, {
            src: src,
            className: "comment-img",
            lazyLoad: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
            className: "delete-btn",
            onClick: function onClick() {
              deleteImg(index);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconfont__WEBPACK_IMPORTED_MODULE_1__["default"], {
              name: "times-circle-fill",
              size: "32rpx",
              color: "red"
            })
          })]
        });
      }), imgsList.length < IMG_MAX_COUNT && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_7__.View, {
        className: "img-container adder-icon",
        onClick: addImg,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_iconfont__WEBPACK_IMPORTED_MODULE_1__["default"], {
          name: "tupian",
          color: "rgb(211, 176, 243)",
          size: "120rpx"
        }), "\u6DFB\u52A0\u56FE\u7247"]
      })]
    });
  }(IMG_MAX_COUNT);
}

/***/ }),

/***/ "./src/components/ScoreChecker/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/ScoreChecker/index.jsx ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScoreChecker; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _iconfont__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../iconfont */ "./src/components/iconfont/index.weapp.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



// {/* 选择评分组件 */}


function ScoreChecker(_ref) {
  var starSize = _ref.starSize,
    fontSize = _ref.fontSize,
    score = _ref.score,
    onChangeScore = _ref.onChangeScore,
    title = _ref.title;
  return function (starSize) {
    if (!starSize) {
      var starSize = '48rpx';
    }
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
      className: "score-checker-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.Text, {
        className: "score-title",
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "stars",
        children: [1, 2, 3, 4, 5].map(function (value) {
          var colour = value <= score ? 'yellow' : "#ccc";
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_2__.View, {
            onClick: function onClick() {
              onChangeScore(value);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_iconfont__WEBPACK_IMPORTED_MODULE_0__["default"], {
              className: "star",
              name: "a-1",
              color: colour,
              size: starSize
            })
          });
        })
      })]
    });
  }(starSize);
}

/***/ }),

/***/ "./src/pages/comment-submit/index.jsx":
/*!********************************************!*\
  !*** ./src/pages/comment-submit/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/comment-submit/index.jsx");


var config = {"navigationBarTitleText":"点评提交"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/comment-submit/index', {root:{cn:[]}}, config || {}))




/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _createForOfIteratorHelper; }
/* harmony export */ });
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;
      var F = function F() {};
      return {
        s: F,
        n: function n() {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function e(_e) {
          throw _e;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true,
    didErr = false,
    err;
  return {
    s: function s() {
      it = it.call(o);
    },
    n: function n() {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function e(_e2) {
      didErr = true;
      err = _e2;
    },
    f: function f() {
      try {
        if (!normalCompletion && it["return"] != null) it["return"]();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/comment-submit/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map