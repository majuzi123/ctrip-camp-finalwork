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
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js */ "./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_flagSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/flagSelector */ "./src/components/flagSelector/index.jsx");
/* harmony import */ var _components_iconfont__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/iconfont */ "./src/components/iconfont/index.weapp.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);














function Index() {
  var hasUserInfo = false;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
    hotelName = _useState2[0],
    setHotelName = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
    hotelId = _useState4[0],
    setHotelId = _useState4[1];
  var anonymous = false;
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useLoad)(function (options) {
    console.log(options);
    setHotelName(options.hotelName);
    setHotelId(options.hotelId);

    //请求地址信息,当前ip属地
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
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState6 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
    cScore = _useState6[0],
    setCScore = _useState6[1];
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState8 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState7, 2),
    cText = _useState8[0],
    setCText = _useState8[1];
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState10 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState9, 2),
    cImgs = _useState10[0],
    setCImgs = _useState10[1];
  var IMG_MAX_COUNT = 9;

  //添加点评图片
  var addImg = /*#__PURE__*/function () {
    var _ref = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee() {
      var imgs, res, _iterator, _step, path, cloudPath;
      return (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            console.log("addImg");
            imgs = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(cImgs);
            _context.next = 4;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().chooseImage({
              count: IMG_MAX_COUNT - cImgs.length,
              sizeType: ['compressed']
            });
          case 4:
            res = _context.sent;
            _iterator = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_10__["default"])(res.tempFilePaths);
            _context.prev = 6;
            _iterator.s();
          case 8:
            if ((_step = _iterator.n()).done) {
              _context.next = 15;
              break;
            }
            path = _step.value;
            cloudPath = 'comment-img/' + Date.now() + Math.floor(Math.random() * 10000) + '.jpg';
            _context.next = 13;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.uploadFile({
              cloudPath: cloudPath,
              filePath: path
            }).then(function (res) {
              imgs.push(res.fileID);
            });
          case 13:
            _context.next = 8;
            break;
          case 15:
            _context.next = 20;
            break;
          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](6);
            _iterator.e(_context.t0);
          case 20:
            _context.prev = 20;
            _iterator.f();
            return _context.finish(20);
          case 23:
            setCImgs(imgs);
          case 24:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[6, 17, 20, 23]]);
    }));
    return function addImg() {
      return _ref.apply(this, arguments);
    };
  }();
  var deleteImg = function deleteImg(index) {
    console.log("deleteImg" + index);
    var imgs = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_9__["default"])(cImgs);
    var newCImg = [];
    for (var i = 0; i < imgs.length; i++) {
      if (i != index) {
        newCImg.push(imgs[i]);
      }
    }
    setCImgs(newCImg);
  };

  //点击提交点评后的操作
  var submitComment = /*#__PURE__*/function () {
    var _ref2 = (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_7__["default"])( /*#__PURE__*/(0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().mark(function _callee2() {
      return (0,D_00000000000000000000000000000000_XieCheng_Learn_xiecheng_final_work_client_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_8__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            console.log("clicked submit");
            if (!(!anonymous && !hasUserInfo)) {
              _context2.next = 4;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请匿名点评',
              icon: 'error',
              duration: 1000
            });
            return _context2.abrupt("return");
          case 4:
            if (!(cScore == 0)) {
              _context2.next = 7;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '请先评分',
              icon: 'error',
              duration: 1000
            });
            return _context2.abrupt("return");
          case 7:
            if (!(cText.length < 5)) {
              _context2.next = 10;
              break;
            }
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
              title: '评价字数过少',
              icon: 'error',
              duration: 1000
            });
            return _context2.abrupt("return");
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
                    data: {
                      hotelName: hotelName ? hotelName : '未知酒店',
                      hotelId: hotelId ? hotelId : '00000',
                      liveTime: new Date().valueOf(),
                      location: city ? city : '未知属地',
                      nickname: !anonymous && userInfo.nickName ? userInfo.nickName : '匿名用户',
                      userImg: !anonymous && userInfo.avatarUrl ? userInfo.avatarUrl : 'https://pic.imgdb.cn/item/64395c040d2dde5777264e41.jpg',
                      star: cScore,
                      content: cText,
                      ImgList: cImgs,
                      pass: null
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
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function submitComment() {
      return _ref2.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
    className: "comment-submit-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "hotel-name",
      children: hotelName
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "comment-score",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "score-title",
        children: "\u8BC4\u5206\uFF1A"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "stars",
        children: [1, 2, 3, 4, 5].map(function (value) {
          var colour = value <= cScore ? 'yellow' : "#ccc";
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            onClick: function onClick() {
              setCScore(value);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_iconfont__WEBPACK_IMPORTED_MODULE_4__["default"], {
              className: "star",
              name: "a-1",
              color: colour,
              size: "60rpx"
            })
          });
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "comment-text",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Text, {
        className: "text-tips1",
        children: cText == '' ? '欢迎你分享对酒店服务、环境、设施和价格等的评价...' : ''
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Textarea, {
        className: "text-content",
        value: cText,
        type: "text",
        onInput: function onInput(e) {
          setCText(e.target.value);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "text-tips2",
        children: "\u81F3\u5C115\u4E2A\u5B57"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
      className: "comment-imgs",
      children: [cImgs.map(function (src, index) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
          className: "img-container",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
            src: src,
            className: "comment-img"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
            className: "delete-btn",
            onClick: function onClick() {
              deleteImg(index);
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_iconfont__WEBPACK_IMPORTED_MODULE_4__["default"], {
              name: "times-circle-fill",
              size: "32rpx",
              color: "red"
            })
          })]
        });
      }), cImgs.length < IMG_MAX_COUNT && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.View, {
        className: "img-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Image, {
          src: "https://pic.imgdb.cn/item/6434ffef0d2dde577737f3bf.jpg",
          className: "comment-img",
          onClick: addImg
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Checkbox, {
      className: "anonymous-check",
      onClick: function onClick() {
        anonymous = !anonymous;
        console.log(anonymous);
      },
      children: "\u533F\u540D\u8BC4\u8BBA"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_11__.Button, {
      className: "submit-btn",
      onClick: submitComment,
      children: "\u63D0\u4EA4"
    })]
  });
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