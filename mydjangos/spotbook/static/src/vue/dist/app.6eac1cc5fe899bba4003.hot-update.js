webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ClipLikeCounter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ClipLikeCounter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"ClipLikeCounter\",\n  props: [\"likes\"],\n  data: function data() {\n    return {\n      count: this.likes.length\n    };\n  },\n  methods: {\n    getCount: function getCount() {\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/clips/api/likes-count/\".concat(this.clipId, \"/\")).then(function (response) {\n        return _this.count = response.data;\n      });\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvQ2xpcExpa2VDb3VudGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vQ2xpcExpa2VDb3VudGVyLnZ1ZT80Y2MzIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuPGRpdj5cclxuICAgIDxwPlxyXG4gICAgICAgIGNsaXAgbGlrZSBjb3VudGVyOiB7e2NvdW50fX1cclxuICAgIDwvcD5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOlwiQ2xpcExpa2VDb3VudGVyXCIsXHJcbiAgICBwcm9wczogW1wibGlrZXNcIl0sXHJcbiAgICBkYXRhOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY291bnQ6IHRoaXMubGlrZXMubGVuZ3RoLFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0Q291bnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoYGh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9jbGlwcy9hcGkvbGlrZXMtY291bnQvJHt0aGlzLmNsaXBJZH0vYClcclxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuY291bnQgPSByZXNwb25zZS5kYXRhKSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQU5BO0FBUkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ClipLikeCounter.vue?vue&type=script&lang=js&\n");

/***/ })

})