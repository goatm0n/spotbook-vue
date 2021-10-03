webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProfileFeed.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ProfileFeed.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//import SpotClip from './SpotClip/SpotClip.vue'\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'ProfileFeed',\n  props: ['username'],\n  components: {///SpotClip,\n  },\n  data: function data() {\n    return {\n      clipList: []\n    };\n  },\n  methods: {\n    getClipList: function getClipList() {\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/clips/api/clip-list/\".concat(username, \"/\")).then(function (response) {\n        return _this.clipList = response.data.clip_id_list;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZUZlZWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9Qcm9maWxlRmVlZC52dWU/NDBiNiJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbjxkaXY+XHJcbiAgICB7e2NsaXBMaXN0fX1cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vL2ltcG9ydCBTcG90Q2xpcCBmcm9tICcuL1Nwb3RDbGlwL1Nwb3RDbGlwLnZ1ZSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdQcm9maWxlRmVlZCcsXHJcbiAgICBwcm9wczogWyd1c2VybmFtZSddLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIC8vL1Nwb3RDbGlwLFxyXG4gICAgfSxcclxuICAgIGRhdGEgOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY2xpcExpc3Q6IFtdLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0Q2xpcExpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHRcclxuICAgICAgICAgICAgYXhpb3NcclxuICAgICAgICAgICAgLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2NsaXBzL2FwaS9jbGlwLWxpc3QvJHt1c2VybmFtZX0vYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuY2xpcExpc3QgPSByZXNwb25zZS5kYXRhLmNsaXBfaWRfbGlzdCkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBTkE7QUFYQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ProfileFeed.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ClipImage.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ClipLike.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ClipLikeCounter.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ClipTextContent.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ProfileBadge.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/SpotBadge.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/SpotClip.vue?vue&type=script&lang=js&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ClipImage.vue?vue&type=template&id=fb067ec4&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ClipLike.vue?vue&type=template&id=cbb679b8&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ClipLikeCounter.vue?vue&type=template&id=70e8cc68&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ClipTextContent.vue?vue&type=template&id=c08155e2&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/ProfileBadge.vue?vue&type=template&id=9f7f28d2&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/SpotBadge.vue?vue&type=template&id=eb897d18&":
false,

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip/SpotClip.vue?vue&type=template&id=6895b60f&":
false,

/***/ "./src/components/SpotClip/ClipImage.vue":
false,

/***/ "./src/components/SpotClip/ClipImage.vue?vue&type=script&lang=js&":
false,

/***/ "./src/components/SpotClip/ClipImage.vue?vue&type=template&id=fb067ec4&":
false,

/***/ "./src/components/SpotClip/ClipLike.vue":
false,

/***/ "./src/components/SpotClip/ClipLike.vue?vue&type=script&lang=js&":
false,

/***/ "./src/components/SpotClip/ClipLike.vue?vue&type=template&id=cbb679b8&":
false,

/***/ "./src/components/SpotClip/ClipLikeCounter.vue":
false,

/***/ "./src/components/SpotClip/ClipLikeCounter.vue?vue&type=script&lang=js&":
false,

/***/ "./src/components/SpotClip/ClipLikeCounter.vue?vue&type=template&id=70e8cc68&":
false,

/***/ "./src/components/SpotClip/ClipTextContent.vue":
false,

/***/ "./src/components/SpotClip/ClipTextContent.vue?vue&type=script&lang=js&":
false,

/***/ "./src/components/SpotClip/ClipTextContent.vue?vue&type=template&id=c08155e2&":
false,

/***/ "./src/components/SpotClip/ProfileBadge.vue":
false,

/***/ "./src/components/SpotClip/ProfileBadge.vue?vue&type=script&lang=js&":
false,

/***/ "./src/components/SpotClip/ProfileBadge.vue?vue&type=template&id=9f7f28d2&":
false,

/***/ "./src/components/SpotClip/SpotBadge.vue":
false,

/***/ "./src/components/SpotClip/SpotBadge.vue?vue&type=script&lang=js&":
false,

/***/ "./src/components/SpotClip/SpotBadge.vue?vue&type=template&id=eb897d18&":
false,

/***/ "./src/components/SpotClip/SpotClip.vue":
false,

/***/ "./src/components/SpotClip/SpotClip.vue?vue&type=script&lang=js&":
false,

/***/ "./src/components/SpotClip/SpotClip.vue?vue&type=template&id=6895b60f&":
false

})