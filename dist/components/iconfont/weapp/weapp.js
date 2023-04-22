(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["components/iconfont/weapp/weapp"],{

/***/ "./src/components/iconfont/weapp/weapp.js":
/*!************************************************!*\
  !*** ./src/components/iconfont/weapp/weapp.js ***!
  \************************************************/
/***/ (function() {

Component({
  properties: {
    // chazhao | tishi1 | xihuan | a-1 | a-11 | biaoqing | fanhui | dingwei | cha | gengduo | bofang | fenxiang | gou1 | jiahao | fangda | jiantouxiangxia | jinggao | quancha | quanxiangyou | quanxiangzuo | quangou | saoma | shanchu | shezhi | shangchuan | tupian | tishi | touxiang1 | wenjianjiaguan | shuaxin | zan | youjian | zhuce2 | zhuye | gengduo1 | fenxiang1 | qian | xin | wujiaoxing | shoucang | cog-fill | times-circle-fill | check-circle-fill | undo | redo | loading | scan | gift | link | poweroff | laptop | nail-fixed | edit | eyeslash-fill | position-fill | copy-fill | pausecircle-fill | playcircle-fill | heart-fill | collection-fill
    name: {
      type: String
    },
    // string | string[]
    color: {
      type: null,
      observer: function observer(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string'
        });
      }
    },
    size: {
      type: Number,
      value: 32,
      observer: function observer(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth
        });
      }
    }
  },
  data: {
    colors: '',
    svgSize: 32 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true
  },
  methods: {
    fixColor: function fixColor() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;
      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }
      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function hex2rgb(hex) {
      var rgb = [];
      hex = hex.substr(1);
      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }
      hex.replace(/../g, function (color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });
      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./src/components/iconfont/weapp/weapp.js"));
/******/ }
]);
//# sourceMappingURL=weapp.js.map