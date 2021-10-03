webpackHotUpdate("app",{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotClip.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProfileBadge.vue */ \"./src/components/ProfileBadge.vue\");\n/* harmony import */ var _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpotBadge.vue */ \"./src/components/SpotBadge.vue\");\n/* harmony import */ var _ClipTextContent_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClipTextContent.vue */ \"./src/components/ClipTextContent.vue\");\n/* harmony import */ var _ClipImage_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClipImage.vue */ \"./src/components/ClipImage.vue\");\n/* harmony import */ var _ClipLike_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ClipLike.vue */ \"./src/components/ClipLike.vue\");\n/* harmony import */ var _ClipLikeCounter_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ClipLikeCounter.vue */ \"./src/components/ClipLikeCounter.vue\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'SpotClip',\n  props: ['clipId'],\n  components: {\n    SpotBadge: _SpotBadge_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    ProfileBadge: _ProfileBadge_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    ClipTextContent: _ClipTextContent_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    ClipImage: _ClipImage_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    ClipLike: _ClipLike_vue__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n    ClipLikeCounter: _ClipLikeCounter_vue__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  },\n  data: function data() {\n    return {\n      spot: null,\n      username: null,\n      clip: null\n    };\n  },\n  methods: {\n    getClip: function getClip() {\n      var _this = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/clips/api/clip-detail/\".concat(this.clipId, \"/\")).then(function (response) {\n        return _this.clip = response.data;\n      });\n    },\n    getSpot: function getSpot() {\n      var _this2 = this;\n\n      var axios = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\").default;\n\n      axios.get(\"http://127.0.0.1:8000/spots/api/spot-detail/\".concat(this.clip.spot, \"/\")).then(function (response) {\n        return _this2.spot = response.data;\n      });\n    }\n  },\n  created: function created() {\n    this.getClip();\n    this.getSpot();\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL2NvbXBvbmVudHMvU3BvdENsaXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9TcG90Q2xpcC52dWU/ZDgyYyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIHt7IHNwb3QgfX1cclxuICAgICAgICB7eyBjbGlwIH19XHJcbiAgICAgICAgPHNwb3QtYmFkZ2VcclxuICAgICAgICAgdi1pZj1cInNwb3RcIlxyXG4gICAgICAgICA6dGl0bGU9XCJzcG90LnByb3BlcnRpZXMudGl0bGVcIlxyXG4gICAgICAgICA6c3BvdElkPVwic3BvdC5pZFwiPlxyXG4gICAgICAgIDwvc3BvdC1iYWRnZT5cclxuICAgICAgICA8cHJvZmlsZS1iYWRnZVxyXG4gICAgICAgICB2LWlmPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICA6dXNlcklkPVwic3BvdC5wcm9wZXJ0aWVzLnVzZXJcIlxyXG4gICAgICAgICA6dXNlcm5hbWU9XCJ1c2VybmFtZVwiPlxyXG4gICAgICAgIDwvcHJvZmlsZS1iYWRnZT5cclxuICAgICAgICA8Y2xpcC10ZXh0LWNvbnRlbnRcclxuICAgICAgICAgOnRleHRDb250ZW50PVwiY2xpcC50ZXh0Q29udGVudFwiPlxyXG4gICAgICAgIDwvY2xpcC10ZXh0LWNvbnRlbnQ+XHJcbiAgICAgICAgPGNsaXAtaW1hZ2VcclxuICAgICAgICAgOmltYWdlPVwiY2xpcC5pbWFnZVwiPlxyXG4gICAgICAgIDwvY2xpcC1pbWFnZT5cclxuICAgICAgICA8Y2xpcC1saWtlXHJcbiAgICAgICAgIDpjbGlwSWQ9XCJjbGlwLmlkXCI+XHJcbiAgICAgICAgPC9jbGlwLWxpa2U+XHJcbiAgICAgICAgPGNsaXAtbGlrZS1jb3VudGVyXHJcbiAgICAgICAgIDpjbGlwSWQ9XCJjbGlwLmlkXCI+XHJcbiAgICAgICAgPC9jbGlwLWxpa2UtY291bnRlcj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCBQcm9maWxlQmFkZ2UgZnJvbSAnLi9Qcm9maWxlQmFkZ2UudnVlJztcclxuICAgIGltcG9ydCBTcG90QmFkZ2UgZnJvbSAnLi9TcG90QmFkZ2UudnVlJztcclxuICAgIGltcG9ydCBDbGlwVGV4dENvbnRlbnQgZnJvbSAnLi9DbGlwVGV4dENvbnRlbnQudnVlJztcclxuICAgIGltcG9ydCBDbGlwSW1hZ2UgZnJvbSAnLi9DbGlwSW1hZ2UudnVlJztcclxuICAgIGltcG9ydCBDbGlwTGlrZSBmcm9tICcuL0NsaXBMaWtlLnZ1ZSc7XHJcbiAgICBpbXBvcnQgQ2xpcExpa2VDb3VudGVyIGZyb20nLi9DbGlwTGlrZUNvdW50ZXIudnVlJztcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogJ1Nwb3RDbGlwJyxcclxuICAgICAgICBwcm9wczogWydjbGlwSWQnXSxcclxuICAgICAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIFNwb3RCYWRnZSxcclxuICAgICAgICAgICAgUHJvZmlsZUJhZGdlLFxyXG4gICAgICAgICAgICBDbGlwVGV4dENvbnRlbnQsXHJcbiAgICAgICAgICAgIENsaXBJbWFnZSxcclxuICAgICAgICAgICAgQ2xpcExpa2UsXHJcbiAgICAgICAgICAgIENsaXBMaWtlQ291bnRlcixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHNwb3Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNsaXA6IG51bGwsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAgICAgZ2V0Q2xpcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XHJcbiAgICAgICAgICAgICAgICBheGlvc1xyXG4gICAgICAgICAgICAgICAgLmdldChgaHR0cDovLzEyNy4wLjAuMTo4MDAwL2NsaXBzL2FwaS9jbGlwLWRldGFpbC8ke3RoaXMuY2xpcElkfS9gKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gKHRoaXMuY2xpcCA9IHJlc3BvbnNlLmRhdGEpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXRTcG90OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcclxuICAgICAgICAgICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgICAgICAuZ2V0KGBodHRwOi8vMTI3LjAuMC4xOjgwMDAvc3BvdHMvYXBpL3Nwb3QtZGV0YWlsLyR7dGhpcy5jbGlwLnNwb3R9L2ApXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiAodGhpcy5zcG90ID0gcmVzcG9uc2UuZGF0YSkpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVkICgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRDbGlwKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0U3BvdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQW5DQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=script&lang=js&\n");

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=template&id=1614d6a2&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"36bea2a8-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SpotClip.vue?vue&type=template&id=1614d6a2& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _vm._v(\" \" + _vm._s(_vm.spot) + \" \" + _vm._s(_vm.clip) + \" \"),\n      _vm.spot\n        ? _c(\"spot-badge\", {\n            attrs: { title: _vm.spot.properties.title, spotId: _vm.spot.id }\n          })\n        : _vm._e(),\n      _vm.username\n        ? _c(\"profile-badge\", {\n            attrs: { userId: _vm.spot.properties.user, username: _vm.username }\n          })\n        : _vm._e(),\n      _c(\"clip-text-content\", { attrs: { textContent: _vm.clip.textContent } }),\n      _c(\"clip-image\", { attrs: { image: _vm.clip.image } }),\n      _c(\"clip-like\", { attrs: { clipId: _vm.clip.id } }),\n      _c(\"clip-like-counter\", { attrs: { clipId: _vm.clip.id } })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcImNhY2hlRGlyZWN0b3J5XCI6XCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcIixcImNhY2hlSWRlbnRpZmllclwiOlwiMzZiZWEyYTgtdnVlLWxvYWRlci10ZW1wbGF0ZVwifSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPyEuL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL1Nwb3RDbGlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjE0ZDZhMiYuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TcG90Q2xpcC52dWU/M2U5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5zcG90KSArIFwiIFwiICsgX3ZtLl9zKF92bS5jbGlwKSArIFwiIFwiKSxcbiAgICAgIF92bS5zcG90XG4gICAgICAgID8gX2MoXCJzcG90LWJhZGdlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0uc3BvdC5wcm9wZXJ0aWVzLnRpdGxlLCBzcG90SWQ6IF92bS5zcG90LmlkIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLnVzZXJuYW1lXG4gICAgICAgID8gX2MoXCJwcm9maWxlLWJhZGdlXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHVzZXJJZDogX3ZtLnNwb3QucHJvcGVydGllcy51c2VyLCB1c2VybmFtZTogX3ZtLnVzZXJuYW1lIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXCJjbGlwLXRleHQtY29udGVudFwiLCB7IGF0dHJzOiB7IHRleHRDb250ZW50OiBfdm0uY2xpcC50ZXh0Q29udGVudCB9IH0pLFxuICAgICAgX2MoXCJjbGlwLWltYWdlXCIsIHsgYXR0cnM6IHsgaW1hZ2U6IF92bS5jbGlwLmltYWdlIH0gfSksXG4gICAgICBfYyhcImNsaXAtbGlrZVwiLCB7IGF0dHJzOiB7IGNsaXBJZDogX3ZtLmNsaXAuaWQgfSB9KSxcbiAgICAgIF9jKFwiY2xpcC1saWtlLWNvdW50ZXJcIiwgeyBhdHRyczogeyBjbGlwSWQ6IF92bS5jbGlwLmlkIH0gfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"36bea2a8-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/SpotClip.vue?vue&type=template&id=1614d6a2&\n");

/***/ })

})