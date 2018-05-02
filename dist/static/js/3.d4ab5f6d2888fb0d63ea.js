webpackJsonp([3],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserPost_vue__ = __webpack_require__(360);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d17408f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserPost_vue__ = __webpack_require__(394);
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserPost_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7d17408f_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserPost_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'UserPost',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      rating: 0
    };
  },

  methods: {
    setRating: function setRating() {
      var rand = Math.random() * 5;
      return Number(rand.toFixed(1));
    }
  },
  mounted: function mounted() {
    this.rating = this.setRating();
  }
});

/***/ }),

/***/ 394:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',[_c('h4',{staticClass:"list-item__title"},[_vm._v(_vm._s(_vm.data.title))]),_vm._v(" "),_c('p',{staticClass:"list-item__text"},[_vm._v(_vm._s(_vm.data.body)+"...")]),_vm._v(" "),_c('el-row',{attrs:{"type":"flex","justify":"space-between","align":"middle"}},[_c('el-rate',{attrs:{"disabled":"","show-score":"","text-color":"#ff9900","score-template":"{value} points"},model:{value:(_vm.rating),callback:function ($$v) {_vm.rating=$$v},expression:"rating"}}),_vm._v(" "),_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.$router.push({ name: 'Post', params: { id: _vm.data.id }})}}},[_vm._v("\n      Read post\n      "),_c('el-icon',{attrs:{"name":"d-arrow-right"}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});
//# sourceMappingURL=3.d4ab5f6d2888fb0d63ea.js.map