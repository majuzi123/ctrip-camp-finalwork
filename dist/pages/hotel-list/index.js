"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/hotel-list/index"],{

/***/ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/hotel-list/index.jsx":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/hotel-list/index.jsx ***!
  \*************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js */ "./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js");
/* harmony import */ var D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_HotelCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/HotelCard */ "./src/components/HotelCard/index.jsx");
/* harmony import */ var _components_iconfont__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/iconfont */ "./src/components/iconfont/index.weapp.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* provided dependency */ var document = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["document"];












function Index() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
    hotelsList = _useState2[0],
    setHotelList = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
    searchContent = _useState4[0],
    setSearchContent = _useState4[1]; //搜索框内容
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['不限评分', '不限评价数', '不限价格']),
    _useState6 = (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
    range = _useState6[0],
    setRange = _useState6[1];
  //想要修改筛选条件后立即更改页面信息，useState的set操作在请求数据之后执行，所以需要一个可以立即改变值的临时变量
  var tempRange = ['不限评分', '不限评价数', '不限价格'];
  var rangeScore = ['不限评分', '1分以上', '2分以上', '3分以上', '4分以上', '4.5分以上', '5分'];
  var rangeCommentNum = ['不限评价数', '100评论以上', '500评论以上', '1000评论以上', '5000评论以上', '10000评论以上'];
  var rangePrice = ['不限价格', '100元内', '200元内', '400元内', '800元内', '1600元内'];
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__.useLoad)( /*#__PURE__*/(0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee() {
    return (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          refreshHotels();
        case 1:
        case "end":
          return _context.stop();
      }
    }, _callee);
  })));

  //修改筛选条件
  var changeRange = function changeRange(index, content) {
    tempRange = (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(range);
    tempRange[index] = content;
    setRange(tempRange);
    refreshHotels(); //重修请求符合条件的数据
  };

  //点击搜索按钮后触发，搜索含有关键字的酒店
  var doSearch = function doSearch() {
    if (searchContent != '') {
      refreshHotels();
      console.log("do search: " + searchContent);
    }
  };

  //向数据库请求数据
  var getHotels = /*#__PURE__*/function () {
    var _ref2 = (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee2() {
      var range, hotels;
      return (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            document.getElementById('loading').style.visibility = 'visible';
            range = {
              //筛选条件
              minScore: parseFloat(tempRange[0]) ? parseFloat(tempRange[0]) : 0,
              //如果NaN，取默认值
              minCommentNum: parseFloat(tempRange[1]) ? parseFloat(tempRange[1]) : 0,
              maxPrice: parseFloat(tempRange[2]) ? parseFloat(tempRange[2]) : 1000000,
              search: searchContent
            };
            console.log(range);
            _context2.next = 5;
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().cloud.callFunction({
              name: 'get-hotel-list',
              data: {
                num: 10,
                //请求的酒店数据的数量
                range: range
              }
            });
          case 5:
            hotels = _context2.sent.result;
            console.log(hotels);
            document.getElementById('loading').style.visibility = 'hidden';
            return _context2.abrupt("return", hotels);
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function getHotels() {
      return _ref2.apply(this, arguments);
    };
  }();

  //滑动至底部后触发，请求并追加新的酒店数据
  var appendHotels = throttle( /*#__PURE__*/(0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee3() {
    var result;
    return (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          //节流，防止在加载时再次被触发
          tempRange = (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_8__["default"])(range);
          _context3.next = 3;
          return getHotels();
        case 3:
          result = _context3.sent;
          setHotelList(hotelsList.concat(result));
        case 5:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  })), 300, 1000);
  function throttle(func, waitPre, waitPost) {
    //修改版的节流操作
    var timeout1;
    var timeout2 = setTimeout(function () {
      timeout2 = null;
    }, waitPre); //2、保证刚接收到数据后，页面渲染时不被触发

    return function () {
      var context = this;
      var args = arguments;
      if (!timeout1 && !timeout2) {
        func.apply(context, args);
        timeout1 = setTimeout(function () {
          timeout1 = null;
        }, waitPost); //1、保证刚触发后，向服务端请求数据期间不能再次触发
      }
    };
  }

  //刷新酒店列表数据
  var refreshHotels = /*#__PURE__*/function () {
    var _ref4 = (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_6__["default"])( /*#__PURE__*/(0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().mark(function _callee4() {
      var result;
      return (0,D_Desktop_ctrip_camp_finalwork_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_7__["default"])().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getHotels();
          case 2:
            result = _context4.sent;
            setHotelList(result);
            if (result.length == 0) {
              document.getElementById('no-hotels').style.visibility = 'visible';
            } else {
              document.getElementById('no-hotels').style.visibility = 'hidden';
            }
          case 5:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function refreshHotels() {
      return _ref4.apply(this, arguments);
    };
  }();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "hotal-list-page",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "selector",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "filters",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Picker, {
          className: "fliter",
          range: rangeScore,
          onChange: function onChange(e) {
            changeRange(0, rangeScore[e.target.value]);
          },
          children: range[0]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Picker, {
          className: "fliter",
          range: rangeCommentNum,
          onChange: function onChange(e) {
            changeRange(1, rangeCommentNum[e.target.value]);
          },
          children: range[1]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Picker, {
          className: "fliter",
          range: rangePrice,
          onChange: function onChange(e) {
            changeRange(2, rangePrice[e.target.value]);
          },
          children: range[2]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "searcher",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Input, {
          className: "search",
          onInput: function onInput(e) {
            setSearchContent(e.target.value);
          },
          children: "12345"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "search-icon",
          onClick: doSearch,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_iconfont__WEBPACK_IMPORTED_MODULE_3__["default"], {
            name: "chazhao",
            size: "50rpx"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.ScrollView, {
      className: "hotel-cards",
      scrollY: true,
      onScrollToLower: appendHotels,
      children: [Array.isArray(hotelsList) && hotelsList.map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_HotelCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          hotelDetails: item,
          onClick: function onClick() {
            return _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
              // url: '../comment-submit/index?hotelId=' + item._id + '&hotelName=' + item.name
              url: '../comment-list/index?hotelId=' + item._id + '&hotelName=' + item.name
            });
          }
        });
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "tips",
        id: "loading",
        children: "\u6B63\u5728\u52A0\u8F7D\u9152\u5E97\u6570\u636E..."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "tips",
        id: "no-hotels",
        children: "\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u9152\u5E97T_T"
      })]
    })]
  });
}

/***/ }),

/***/ "./src/components/HotelCard/index.jsx":
/*!********************************************!*\
  !*** ./src/components/HotelCard/index.jsx ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HotelCard; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_StarsScore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/StarsScore */ "./src/components/StarsScore/index.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





// {/* 酒店卡片 */}


function HotelCard(_ref) {
  var hotelDetails = _ref.hotelDetails,
    onClick = _ref.onClick;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "hotel-card",
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "card-left",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
        className: "hotel-image",
        src: hotelDetails.image,
        lazyLoad: true
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "card-right",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "hotel-name",
        children: hotelDetails.name
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "comment",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_StarsScore__WEBPACK_IMPORTED_MODULE_1__["default"], {
          score: hotelDetails.score
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "comment-score",
          children: [hotelDetails.score.toFixed(1), "\u5206"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "comment-num",
          children: [hotelDetails.commentNum, "\u70B9\u8BC4"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "location",
        children: hotelDetails.location
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "comment-content",
        children: ["\"", hotelDetails.comment[Math.floor(Math.random() * hotelDetails.comment.length)], "\""]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        className: "hotel-price",
        children: ["\uFFE5", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
          className: "cost",
          children: hotelDetails.price
        }), "\u8D77"]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/hotel-list/index.jsx":
/*!****************************************!*\
  !*** ./src/pages/hotel-list/index.jsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./index.jsx */ "./node_modules/babel-loader/lib/index.js??ruleSet[1].rules[5].use[0]!./src/pages/hotel-list/index.jsx");


var config = {"navigationBarTitleText":"酒店列表"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_babel_loader_lib_index_js_ruleSet_1_rules_5_use_0_index_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/hotel-list/index', {root:{cn:[]}}, config || {}))




/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","vendors","common"], function() { return __webpack_exec__("./src/pages/hotel-list/index.jsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map