webpackJsonp([9],{

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_PhotoCard__ = __webpack_require__(89);



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
  name: 'Photos',
  components: {
    PhotoCard: __WEBPACK_IMPORTED_MODULE_4__components_PhotoCard__["default"]
  },
  data: function data() {
    return {
      loading: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])(['listPhotos'])),
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(['fetchListPhotos']), {
    onLoadData: function onLoadData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                _this.loading = true;
                _context.next = 4;
                return _this.fetchListPhotos();

              case 4:
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);

                console.error(_context.t0);

              case 9:
                _context.prev = 9;

                _this.loading = false;
                return _context.finish(9);

              case 12:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 6, 9, 12]]);
      }))();
    }
  }),
  mounted: function mounted() {},
  created: function created() {
    this.onLoadData();
  }
});

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_UserLink__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_mixins_form_components__ = __webpack_require__(47);



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
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'SearchUsers',
  components: {
    UserLink: __WEBPACK_IMPORTED_MODULE_4__components_UserLink__["a" /* default */]
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_5__utils_mixins_form_components__["a" /* default */]],
  data: function data() {
    return {
      loading: false,
      formSearch: {
        input: ''
      },
      permissions: '',
      resultsSearching: null
    };
  },

  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(['searchUserByName', 'fetchUserPermission']), {
    handleFocusInput: function handleFocusInput() {
      // fetch permission API
    },
    onSearchUsers: function onSearchUsers() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                _this.loading = true;

                if (_this.permissions) {
                  _context.next = 6;
                  break;
                }

                _context.next = 5;
                return _this.fetchUserPermission();

              case 5:
                _this.permissions = _context.sent;

              case 6:
                if (!(_this.permissions === 'guest')) {
                  _context.next = 10;
                  break;
                }

                _context.next = 9;
                return _this.searchUserByName({
                  name: _this.formSearch.input
                });

              case 9:
                _this.resultsSearching = _context.sent;

              case 10:
                _context.next = 16;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](0);

                console.error(_context.t0);
                _this.$message({
                  type: 'error',
                  message: _context.t0.message,
                  showClose: true
                });

              case 16:
                _context.prev = 16;

                _this.loading = false;
                return _context.finish(16);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 12, 16, 19]]);
      }))();
    }
  }),
  mounted: function mounted() {},
  created: function created() {}
});

/***/ }),

/***/ 215:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'UserLink',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {},
  mounted: function mounted() {}
});

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: '404'
});

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__vendors_element_ui__ = __webpack_require__(321);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import elementUi from 'element-ui';





// vendors

// import moment from './vendors/moment';
// import lodash from './vendors/lodash';

// use
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4__vendors_element_ui__["a" /* default */]);
// Vue.use(moment);
// Vue.use(lodash);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  store: __WEBPACK_IMPORTED_MODULE_3__store__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(57);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43a9fe12_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__(229);
function injectStyle (ssrContext) {
  __webpack_require__(223)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_43a9fe12_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 223:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MainMenu_vue__ = __webpack_require__(58);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c06abed_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MainMenu_vue__ = __webpack_require__(226);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_MainMenu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6c06abed_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_MainMenu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',[_c('el-menu',{attrs:{"default-active":_vm.$route.path,"mode":"horizontal","background-color":"#545c64","text-color":"#fff","router":true,"active-text-color":"#ffd04b"}},[_c('el-menu-item',{attrs:{"index":"/"}},[_vm._v("Dashboard")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"/posts"}},[_vm._v("\n      Posts\n    ")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"/photos"}},[_vm._v("\n      Photos\n    ")]),_vm._v(" "),_c('el-menu-item',{attrs:{"index":"/search-users"}},[_vm._v("\n      Search\n    ")])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppGridWrap_vue__ = __webpack_require__(59);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bdab974_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppGridWrap_vue__ = __webpack_require__(228);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AppGridWrap_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6bdab974_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AppGridWrap_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"grid-wrapper"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('el-container',[_c('el-header',{staticClass:"main-header"},[_c('app-grid-wrap',[_c('app-main-menu')],1)],1),_vm._v(" "),_c('el-main',{staticClass:"main-content"},[_c('app-grid-wrap',[_c('transition',{attrs:{"name":"slide-Y","mode":"out-in"}},[_c('router-view')],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_Dashboard__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_Posts__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_Post__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_AddNewPost__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_User__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Photos__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_SearchUsers__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_404__ = __webpack_require__(319);



// pages









// const Dashboard = () => import('@/pages/Dashboard');
// const Posts = () => import('@/pages/Posts');
// const Post = () => import('@/pages/Post');
// const AddNewPost = () => import('@/pages/AddNewPost');
// const User = () => import('@/pages/User');
// const Photos = () => import('@/pages/Photos');
// const SearchUsers = () => import('@/pages/SearchUsers');
// const NotFoundPage = () => import('@/pages/404');

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  // mode: 'history',
  routes: [{
    path: '/',
    name: 'Dashboard',
    component: __WEBPACK_IMPORTED_MODULE_2__pages_Dashboard__["a" /* default */]
  }, {
    path: '/posts',
    name: 'Posts',
    component: __WEBPACK_IMPORTED_MODULE_3__pages_Posts__["a" /* default */]
  }, {
    path: '/post-:id',
    name: 'Post',
    component: __WEBPACK_IMPORTED_MODULE_4__pages_Post__["a" /* default */],
    props: true
  }, {
    path: '/add-new-post',
    name: 'AddNewPost',
    component: __WEBPACK_IMPORTED_MODULE_5__pages_AddNewPost__["a" /* default */]
  }, {
    path: '/user-:id',
    name: 'User',
    component: __WEBPACK_IMPORTED_MODULE_6__pages_User__["a" /* default */],
    props: true
  }, {
    path: '/photos',
    name: 'Photos',
    component: __WEBPACK_IMPORTED_MODULE_7__pages_Photos__["a" /* default */]
  }, {
    path: '/search-users',
    name: 'SearchUsers',
    component: __WEBPACK_IMPORTED_MODULE_8__pages_SearchUsers__["a" /* default */]
  }, {
    path: '*',
    name: '404',
    component: __WEBPACK_IMPORTED_MODULE_9__pages_404__["a" /* default */]
  }]
}));

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__ = __webpack_require__(60);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1382aaa6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__ = __webpack_require__(262);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Dashboard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1382aaa6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Dashboard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{staticClass:"container",attrs:{"sm":16}},[_c('el-card',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loadingPosts),expression:"loadingPosts"}]},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('el-row',{attrs:{"type":"flex","justify":"space-between"}},[_c('h2',{staticStyle:{"text-transform":"uppercase"}},[_vm._v("New posts")]),_vm._v(" "),_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.$router.push({ name: 'Posts' })}}},[_vm._v("\n              Go to posts\n              "),_c('el-icon',{attrs:{"name":"tickets"}})],1)],1)],1),_vm._v(" "),(_vm.listNewPosts)?[_c('ul',{staticClass:"list"},_vm._l((_vm.listNewPosts),function(post){return _c('li',{key:post.id,staticClass:"list-item"},[_c('h4',{staticClass:"list-item__title"},[_vm._v(_vm._s(post.title))]),_vm._v(" "),_c('p',{staticClass:"list-item__text"},[_vm._v(_vm._s(post.body)+"...")]),_vm._v(" "),_c('el-row',{attrs:{"type":"flex","justify":"end"}},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.$router.push({ name: 'Post', params: { id: post.id }})}}},[_vm._v("\n                  Read post\n                  "),_c('el-icon',{attrs:{"name":"d-arrow-right"}})],1)],1)],1)}))]:[_c('span',[_vm._v("New posts not found")])]],2)],1),_vm._v(" "),_c('el-col',{staticClass:"container",attrs:{"sm":8}},[_c('el-row',[_c('el-col',{staticClass:"container"},[_c('el-card',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loadingComments),expression:"loadingComments"}]},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('h3',{staticClass:"card__title"},[_vm._v("New comments to posts")])]),_vm._v(" "),(_vm.listNewComments)?[_c('ul',{staticClass:"list"},_vm._l((_vm.listNewComments),function(comment){return _c('li',{key:comment.id,staticClass:"list-item"},[_c('p',{staticClass:"list-item__text"},[_vm._v("\""+_vm._s(comment.body)+"\"")]),_vm._v(" "),_c('span',{staticClass:"list-item__tip"},[_vm._v(_vm._s(comment.name))]),_vm._v(" "),_c('el-row',{attrs:{"type":"flex","justify":"end"}},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.$router.push({ name: 'Post', params: { id: comment.postId }})}}},[_vm._v("\n                      Go to post\n                      "),_c('el-icon',{attrs:{"name":"tickets"}})],1)],1)],1)}))]:[_c('span',[_vm._v("New comments not found")])]],2)],1),_vm._v(" "),_c('el-col',{staticClass:"container"},[_c('el-card',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('h3',{staticStyle:{"text-transform":"uppercase","margin":"0"}},[_vm._v("New users")])])])],1)],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Posts_vue__ = __webpack_require__(78);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f91e22fc_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Posts_vue__ = __webpack_require__(265);
function injectStyle (ssrContext) {
  __webpack_require__(264)
}
var normalizeComponent = __webpack_require__(1)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f91e22fc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Posts_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f91e22fc_hasScoped_true_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Posts_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 264:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:(_vm.loading),expression:"loading",modifiers:{"fullscreen":true}}]},[_c('el-row',{attrs:{"gutter":20}},[_c('el-card',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}]},[_c('div',{attrs:{"slot":"header"},slot:"header"},[_c('el-row',{attrs:{"type":"flex","justify":"space-between"}},[_c('h2',{staticStyle:{"text-transform":"uppercase"}},[_vm._v("All posts")]),_vm._v(" "),_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.$router.push({ name: 'AddNewPost' })}}},[_vm._v("\n              Create post\n              "),_c('el-icon',{attrs:{"name":"plus"}})],1)],1)],1),_vm._v(" "),(_vm.listPosts)?[_c('ul',{staticClass:"list"},_vm._l((_vm.listPosts),function(post){return _c('li',{key:post.id,staticClass:"list-item"},[_c('h4',{staticClass:"list-item__title"},[_vm._v(_vm._s(post.title))]),_vm._v(" "),_c('p',{staticClass:"list-item__text"},[_vm._v(_vm._s(post.body)+"...")]),_vm._v(" "),_c('el-row',{attrs:{"type":"flex","justify":"end"}},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.$router.push({ name: 'Post', params: { id: post.id }})}}},[_vm._v("\n                  Read post\n                  "),_c('el-icon',{attrs:{"name":"d-arrow-right"}})],1)],1)],1)}))]:[_c('span',[_vm._v("Posts not found")])]],2)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__ = __webpack_require__(79);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7951f979_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__ = __webpack_require__(279);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Post_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_7951f979_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Post_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:(_vm.loading),expression:"loading",modifiers:{"fullscreen":true}}]},[_c('el-row',[_c('el-col',{staticClass:"container"},[(_vm.dataPost)?_c('el-card',[_c('template',{slot:"header"},[_c('h1',[_vm._v(_vm._s(_vm.dataPost.title))])]),_vm._v(" "),_c('div',{staticClass:"post__content"},[_c('p',[_vm._v(_vm._s(_vm.dataPost.body))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.dataPost.body)+_vm._s(_vm.dataPost.body))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.dataPost.body)+_vm._s(_vm.dataPost.body))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.dataPost.body)+_vm._s(_vm.dataPost.body)+_vm._s(_vm.dataPost.body))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.dataPost.body))]),_c('p',[_vm._v(_vm._s(_vm.dataPost.body))]),_c('p',[_vm._v(_vm._s(_vm.dataPost.body))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(_vm.dataPost.body))]),_c('p',[_vm._v(_vm._s(_vm.dataPost.body))]),_c('p',[_vm._v(_vm._s(_vm.dataPost.body))]),_vm._v(" "),_c('el-rate',{attrs:{"disabled":"","show-score":"","text-color":"#ff9900","score-template":"{value} points"},model:{value:(_vm.rating),callback:function ($$v) {_vm.rating=$$v},expression:"rating"}}),_vm._v(" "),_c('el-row',{staticClass:"container"},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.$router.push({ name: 'User', params: { id: _vm.dataPost.userId }})}}},[_vm._v("\n              Author\n            ")])],1)],1)],2):_vm._e()],1),_vm._v(" "),_c('el-col',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loadingComments),expression:"loadingComments"}],staticClass:"container"},[_c('el-card',{staticStyle:{"min-height":"200px"}},[[_c('el-collapse-transition',[(!_vm.isVisibleFormComment)?_c('el-row',[_c('el-button',{staticStyle:{"width":"100%"},on:{"click":function($event){_vm.isVisibleFormComment = true}}},[_vm._v("\n                Leave your comment\n              ")])],1):_vm._e()],1)],_vm._v(" "),[_c('el-collapse-transition',[(_vm.isVisibleFormComment)?_c('el-row',{staticClass:"container",attrs:{"type":"flex","justify":"center"}},[_c('el-col',{attrs:{"sm":16}},[_c('el-form',{ref:"dataFormComment",staticStyle:{"padding":"0 20px"},attrs:{"model":_vm.dataFormComment,"rules":_vm.rulesFormComment,"label-width":"100px"}},[_c('el-row',[_c('el-col',[_c('el-form-item',{attrs:{"label":"Name","prop":"name"}},[_c('el-input',{attrs:{"disabled":_vm.loadingFormComment},model:{value:(_vm.dataFormComment.name),callback:function ($$v) {_vm.$set(_vm.dataFormComment, "name", $$v)},expression:"dataFormComment.name"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"Email","prop":"email"}},[_c('el-input',{attrs:{"disabled":_vm.loadingFormComment},model:{value:(_vm.dataFormComment.email),callback:function ($$v) {_vm.$set(_vm.dataFormComment, "email", $$v)},expression:"dataFormComment.email"}})],1)],1),_vm._v(" "),_c('el-col',[_c('el-form-item',{attrs:{"label":"Comment","prop":"body"}},[_c('el-input',{attrs:{"type":"textarea","disabled":_vm.loadingFormComment},model:{value:(_vm.dataFormComment.body),callback:function ($$v) {_vm.$set(_vm.dataFormComment, "body", $$v)},expression:"dataFormComment.body"}})],1)],1)],1)],1),_vm._v(" "),_c('el-row',{attrs:{"type":"flex","justify":"end"}},[_c('el-button',{attrs:{"disabled":_vm.loadingFormComment},on:{"click":function($event){_vm.isVisibleFormComment = false}}},[_vm._v("\n                    Close\n                  ")]),_vm._v(" "),_c('el-button',{attrs:{"type":"primary","loading":_vm.loadingFormComment},on:{"click":_vm.onSaveComment}},[_vm._v("\n                    Save\n                  ")])],1)],1)],1):_vm._e()],1)],_vm._v(" "),(_vm.dataPost)?[_c('ul',{staticClass:"list"},_vm._l((_vm.listComments),function(comment){return _c('li',{key:comment.id,staticClass:"list-item"},[_c('span',{staticClass:"list-item__tip"},[_vm._v(_vm._s(comment.name))]),_vm._v(" "),_c('p',{staticClass:"list-item__text"},[_vm._v("\""+_vm._s(comment.body)+"\"")])])}))]:[_c('span',[_vm._v("\n            Empty\n          ")])]],2)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddNewPost_vue__ = __webpack_require__(81);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eab3b428_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddNewPost_vue__ = __webpack_require__(281);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_AddNewPost_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_eab3b428_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_AddNewPost_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('el-card',[_c('template',{slot:"header"},[_c('h1',{staticClass:"card__title"},[_vm._v("Create new album")])]),_vm._v(" "),[_c('div',{staticClass:"card__content"},[_c('el-form',{ref:"dataForm",attrs:{"model":_vm.dataForm,"rules":_vm.rulesForm,"label-width":"120px"}},[_c('el-row',{staticClass:"container"},[_c('el-upload',{ref:"upload",attrs:{"action":"http://localhost:3000/uploads","auto-upload":false,"list-type":"picture-card","multiple":"","accept":"image/*","on-preview":_vm.handlePictureCardPreview,"on-remove":_vm.handleRemove}},[_c('i',{staticClass:"el-icon-plus"})]),_vm._v(" "),_c('el-dialog',{attrs:{"visible":_vm.isVisibleModalImage,"fullscreen":""},on:{"update:visible":function($event){_vm.isVisibleModalImage=$event}}},[_c('img',{attrs:{"width":"100%","src":_vm.dialogImageUrl}})])],1),_vm._v(" "),_c('el-row',{staticClass:"container"},[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.submitUpload}},[_vm._v("\n              Upload to server\n              "),_c('i',{staticClass:"el-icon-upload el-icon-right"})])],1),_vm._v(" "),_c('el-row',{staticClass:"container"},[_c('transition',{attrs:{"name":"el-zoom-in-top"}},[(_vm.isVisibleForm)?_c('div',[_c('el-form-item',{attrs:{"label":"Title","prop":"title"}},[_c('el-input',{model:{value:(_vm.dataForm.name),callback:function ($$v) {_vm.$set(_vm.dataForm, "name", $$v)},expression:"dataForm.name"}})],1),_vm._v(" "),_c('el-form-item',{attrs:{"label":"Description","prop":"desc"}},[_c('el-input',{attrs:{"type":"textarea"},model:{value:(_vm.dataForm.desc),callback:function ($$v) {_vm.$set(_vm.dataForm, "desc", $$v)},expression:"dataForm.desc"}})],1),_vm._v(" "),_c('el-form-item',[_c('el-button',{attrs:{"type":"primary"},on:{"click":_vm.onSaveAlbum}},[_vm._v("\n                    Save\n                  ")])],1)],1):_vm._e()])],1)],1)],1)]],2)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__ = __webpack_require__(82);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e559da70_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__ = __webpack_require__(312);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_User_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e559da70_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_User_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutation_types__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_common__ = __webpack_require__(50);






/* harmony default export */ __webpack_exports__["a"] = ({
  state: {
    listPosts: []
  },
  getters: {
    listPosts: function listPosts(state) {
      return state.listPosts;
    },
    getPostById: function getPostById(state) {
      return function (id) {
        return state.listPosts.find(function (post) {
          return post.id === id;
        }) || null;
      };
    }
  },
  mutations: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3__mutation_types__["c" /* SET_LIST_POSTS */], function (state, payload) {
    state.listPosts = payload.list;
  }),
  actions: {
    fetchListPosts: function fetchListPosts(_ref) {
      var _this = this;

      var getters = _ref.getters,
          commit = _ref.commit;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(getters.listPosts.length === 0)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__http_common__["a" /* HTTP */].get('posts');

              case 3:
                response = _context.sent;

                commit(__WEBPACK_IMPORTED_MODULE_3__mutation_types__["c" /* SET_LIST_POSTS */], { list: response.data });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    fetchListCommentsToPost: function fetchListCommentsToPost(context, _ref2) {
      var _this2 = this;

      var postId = _ref2.postId;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__http_common__["a" /* HTTP */].get('comments?postId=' + postId);

              case 2:
                response = _context2.sent;
                return _context2.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    addCommentToPost: function addCommentToPost(context, _ref3) {
      var _this3 = this;

      var dataComment = _ref3.dataComment;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__http_common__["a" /* HTTP */].post('posts/' + dataComment.postId + '/comments', dataComment);

              case 2:
                response = _context3.sent;
                return _context3.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    fetchNewPosts: function fetchNewPosts() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__http_common__["a" /* HTTP */].get('posts?_start=0&_end=10');

              case 2:
                response = _context4.sent;
                return _context4.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    fetchNewComments: function fetchNewComments() {
      var _this5 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_4__http_common__["a" /* HTTP */].get('comments?_start=0&_end=3');

              case 2:
                response = _context5.sent;
                return _context5.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    }
  }
});

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export VERSION_APP */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return API_URL; });
var VERSION_APP = '0.0.1';
var API_URL = 'http://jsonplaceholder.typicode.com/';

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mutation_types__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http_common__ = __webpack_require__(50);





var _mutations;




/* harmony default export */ __webpack_exports__["a"] = ({
  state: {
    listUsers: []
  },
  getters: {
    listUsers: function listUsers(state) {
      return state.listUsers;
    },
    getUserById: function getUserById(state) {
      return function (id) {
        return state.listUsers.find(function (post) {
          return post.id === id;
        }) || null;
      };
    }
  },
  mutations: (_mutations = {}, __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["d" /* SET_LIST_USERS */], function (state, payload) {
    state.listUsers = payload.list;
  }), __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_defineProperty___default()(_mutations, __WEBPACK_IMPORTED_MODULE_4__mutation_types__["a" /* ADD_DATA_USER_TO_LIST */], function (state, payload) {
    state.listUsers.push(payload.dataUser);
  }), _mutations),
  actions: {
    fetchListUsers: function fetchListUsers(_ref) {
      var _this = this;

      var getters = _ref.getters,
          commit = _ref.commit;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(getters.listUsers.length === 0)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_5__http_common__["a" /* HTTP */].get('users');

              case 3:
                response = _context.sent;

                commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["d" /* SET_LIST_USERS */], { list: response.data });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    fetchDataUser: function fetchDataUser(_ref2, _ref3) {
      var _this2 = this;

      var getters = _ref2.getters,
          commit = _ref2.commit;
      var userId = _ref3.userId;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (getters.getUserById(userId)) {
                  _context2.next = 5;
                  break;
                }

                _context2.next = 3;
                return __WEBPACK_IMPORTED_MODULE_5__http_common__["a" /* HTTP */].get('users/' + userId);

              case 3:
                response = _context2.sent;

                commit(__WEBPACK_IMPORTED_MODULE_4__mutation_types__["a" /* ADD_DATA_USER_TO_LIST */], { dataUser: response.data });

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    },
    fetchPostsUser: function fetchPostsUser(context, _ref4) {
      var _this3 = this;

      var userId = _ref4.userId;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__http_common__["a" /* HTTP */].get('users/' + userId + '/posts');

              case 2:
                response = _context3.sent;
                return _context3.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    fetchTodosUser: function fetchTodosUser(context, _ref5) {
      var _this4 = this;

      var userId = _ref5.userId;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__http_common__["a" /* HTTP */].get('users/' + userId + '/todos');

              case 2:
                response = _context4.sent;
                return _context4.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    fetchAlbumsUser: function fetchAlbumsUser(context, _ref6) {
      var _this5 = this;

      var userId = _ref6.userId;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee5() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__http_common__["a" /* HTTP */].get('users/' + userId + '/albums');

              case 2:
                response = _context5.sent;
                return _context5.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    },
    fetchPhotosUser: function fetchPhotosUser(context, _ref7) {
      var _this6 = this;

      var albumId = _ref7.albumId;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee6() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__http_common__["a" /* HTTP */].get('albums/' + albumId + '/photos');

              case 2:
                response = _context6.sent;
                return _context6.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    },
    searchUserByName: function searchUserByName(context, _ref8) {
      var _this7 = this;

      var name = _ref8.name;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee7() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return __WEBPACK_IMPORTED_MODULE_5__http_common__["a" /* HTTP */].get('users?name_like=' + name);

              case 2:
                response = _context7.sent;
                return _context7.abrupt('return', response.data);

              case 4:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, _this7);
      }))();
    },
    fetchUserPermission: function fetchUserPermission() {
      return new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(function (resolve) {
        // any async code...
        setTimeout(function () {
          resolve('guest');
        }, 358);
      });
    }
  }
});

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mutation_types__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__http_common__ = __webpack_require__(50);






/* harmony default export */ __webpack_exports__["a"] = ({
  state: {
    listPhotos: []
  },
  getters: {
    listPhotos: function listPhotos(state) {
      return state.listPhotos;
    }
  },
  mutations: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_defineProperty___default()({}, __WEBPACK_IMPORTED_MODULE_3__mutation_types__["b" /* SET_LIST_PHOTOS */], function (state, payload) {
    state.listPhotos = payload.list;
  }),
  actions: {
    fetchListPhotos: function fetchListPhotos(_ref) {
      var _this = this;

      var getters = _ref.getters,
          commit = _ref.commit;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var response;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(getters.listPhotos.length === 0)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return __WEBPACK_IMPORTED_MODULE_4__http_common__["a" /* HTTP */].get('photos');

              case 3:
                response = _context.sent;

                commit(__WEBPACK_IMPORTED_MODULE_3__mutation_types__["b" /* SET_LIST_PHOTOS */], { list: response.data });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 91,
	"./af.js": 91,
	"./ar": 92,
	"./ar-dz": 93,
	"./ar-dz.js": 93,
	"./ar-kw": 94,
	"./ar-kw.js": 94,
	"./ar-ly": 95,
	"./ar-ly.js": 95,
	"./ar-ma": 96,
	"./ar-ma.js": 96,
	"./ar-sa": 97,
	"./ar-sa.js": 97,
	"./ar-tn": 98,
	"./ar-tn.js": 98,
	"./ar.js": 92,
	"./az": 99,
	"./az.js": 99,
	"./be": 100,
	"./be.js": 100,
	"./bg": 101,
	"./bg.js": 101,
	"./bm": 102,
	"./bm.js": 102,
	"./bn": 103,
	"./bn.js": 103,
	"./bo": 104,
	"./bo.js": 104,
	"./br": 105,
	"./br.js": 105,
	"./bs": 106,
	"./bs.js": 106,
	"./ca": 107,
	"./ca.js": 107,
	"./cs": 108,
	"./cs.js": 108,
	"./cv": 109,
	"./cv.js": 109,
	"./cy": 110,
	"./cy.js": 110,
	"./da": 111,
	"./da.js": 111,
	"./de": 112,
	"./de-at": 113,
	"./de-at.js": 113,
	"./de-ch": 114,
	"./de-ch.js": 114,
	"./de.js": 112,
	"./dv": 115,
	"./dv.js": 115,
	"./el": 116,
	"./el.js": 116,
	"./en-au": 117,
	"./en-au.js": 117,
	"./en-ca": 118,
	"./en-ca.js": 118,
	"./en-gb": 119,
	"./en-gb.js": 119,
	"./en-ie": 120,
	"./en-ie.js": 120,
	"./en-il": 121,
	"./en-il.js": 121,
	"./en-nz": 122,
	"./en-nz.js": 122,
	"./eo": 123,
	"./eo.js": 123,
	"./es": 124,
	"./es-do": 125,
	"./es-do.js": 125,
	"./es-us": 126,
	"./es-us.js": 126,
	"./es.js": 124,
	"./et": 127,
	"./et.js": 127,
	"./eu": 128,
	"./eu.js": 128,
	"./fa": 129,
	"./fa.js": 129,
	"./fi": 130,
	"./fi.js": 130,
	"./fo": 131,
	"./fo.js": 131,
	"./fr": 132,
	"./fr-ca": 133,
	"./fr-ca.js": 133,
	"./fr-ch": 134,
	"./fr-ch.js": 134,
	"./fr.js": 132,
	"./fy": 135,
	"./fy.js": 135,
	"./gd": 136,
	"./gd.js": 136,
	"./gl": 137,
	"./gl.js": 137,
	"./gom-latn": 138,
	"./gom-latn.js": 138,
	"./gu": 139,
	"./gu.js": 139,
	"./he": 140,
	"./he.js": 140,
	"./hi": 141,
	"./hi.js": 141,
	"./hr": 142,
	"./hr.js": 142,
	"./hu": 143,
	"./hu.js": 143,
	"./hy-am": 144,
	"./hy-am.js": 144,
	"./id": 145,
	"./id.js": 145,
	"./is": 146,
	"./is.js": 146,
	"./it": 147,
	"./it.js": 147,
	"./ja": 148,
	"./ja.js": 148,
	"./jv": 149,
	"./jv.js": 149,
	"./ka": 150,
	"./ka.js": 150,
	"./kk": 151,
	"./kk.js": 151,
	"./km": 152,
	"./km.js": 152,
	"./kn": 153,
	"./kn.js": 153,
	"./ko": 154,
	"./ko.js": 154,
	"./ky": 155,
	"./ky.js": 155,
	"./lb": 156,
	"./lb.js": 156,
	"./lo": 157,
	"./lo.js": 157,
	"./lt": 158,
	"./lt.js": 158,
	"./lv": 159,
	"./lv.js": 159,
	"./me": 160,
	"./me.js": 160,
	"./mi": 161,
	"./mi.js": 161,
	"./mk": 162,
	"./mk.js": 162,
	"./ml": 163,
	"./ml.js": 163,
	"./mn": 164,
	"./mn.js": 164,
	"./mr": 165,
	"./mr.js": 165,
	"./ms": 166,
	"./ms-my": 167,
	"./ms-my.js": 167,
	"./ms.js": 166,
	"./mt": 168,
	"./mt.js": 168,
	"./my": 169,
	"./my.js": 169,
	"./nb": 170,
	"./nb.js": 170,
	"./ne": 171,
	"./ne.js": 171,
	"./nl": 172,
	"./nl-be": 173,
	"./nl-be.js": 173,
	"./nl.js": 172,
	"./nn": 174,
	"./nn.js": 174,
	"./pa-in": 175,
	"./pa-in.js": 175,
	"./pl": 176,
	"./pl.js": 176,
	"./pt": 177,
	"./pt-br": 178,
	"./pt-br.js": 178,
	"./pt.js": 177,
	"./ro": 179,
	"./ro.js": 179,
	"./ru": 52,
	"./ru.js": 52,
	"./sd": 180,
	"./sd.js": 180,
	"./se": 181,
	"./se.js": 181,
	"./si": 182,
	"./si.js": 182,
	"./sk": 183,
	"./sk.js": 183,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 185,
	"./sq.js": 185,
	"./sr": 186,
	"./sr-cyrl": 187,
	"./sr-cyrl.js": 187,
	"./sr.js": 186,
	"./ss": 188,
	"./ss.js": 188,
	"./sv": 189,
	"./sv.js": 189,
	"./sw": 190,
	"./sw.js": 190,
	"./ta": 191,
	"./ta.js": 191,
	"./te": 192,
	"./te.js": 192,
	"./tet": 193,
	"./tet.js": 193,
	"./tg": 194,
	"./tg.js": 194,
	"./th": 195,
	"./th.js": 195,
	"./tl-ph": 196,
	"./tl-ph.js": 196,
	"./tlh": 197,
	"./tlh.js": 197,
	"./tr": 198,
	"./tr.js": 198,
	"./tzl": 199,
	"./tzl.js": 199,
	"./tzm": 200,
	"./tzm-latn": 201,
	"./tzm-latn.js": 201,
	"./tzm.js": 200,
	"./ug-cn": 202,
	"./ug-cn.js": 202,
	"./uk": 203,
	"./uk.js": 203,
	"./ur": 204,
	"./ur.js": 204,
	"./uz": 205,
	"./uz-latn": 206,
	"./uz-latn.js": 206,
	"./uz.js": 205,
	"./vi": 207,
	"./vi.js": 207,
	"./x-pseudo": 208,
	"./x-pseudo.js": 208,
	"./yo": 209,
	"./yo.js": 209,
	"./zh-cn": 210,
	"./zh-cn.js": 210,
	"./zh-hk": 211,
	"./zh-hk.js": 211,
	"./zh-tw": 212,
	"./zh-tw.js": 212
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 310;

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-card',[_c('img',{staticStyle:{"width":"100%"},attrs:{"src":_vm.data.thumbnailUrl,"alt":"photo"}}),_vm._v(" "),_c('div',{staticClass:"card__content",staticStyle:{"min-height":"130px"}},[_c('h4',{staticClass:"card__title"},[_vm._v("\n      "+_vm._s(_vm.data.title)+"\n    ")]),_vm._v(" "),_c('el-rate',{attrs:{"disabled":"","show-score":"","text-color":"#ff9900","score-template":"{value} points"},model:{value:(_vm.data.rating),callback:function ($$v) {_vm.$set(_vm.data, "rating", $$v)},expression:"data.rating"}}),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.dateNow))])],1)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{directives:[{name:"loading",rawName:"v-loading.fullscreen",value:(_vm.loading),expression:"loading",modifiers:{"fullscreen":true}}]},[_c('el-row',[_c('el-collapse-transition',[(_vm.dataUser)?_c('el-card',[_c('template',{slot:"header"},[_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"sm":6}},[_c('img',{attrs:{"src":"http://placehold.it/150","alt":"avatar"}})]),_vm._v(" "),_c('el-col',{attrs:{"sm":18}},[_c('h2',[_vm._v("\n                "+_vm._s(_vm.dataUser.name)+"\n              ")]),_vm._v(" "),_c('h3',[_vm._v("\n                "+_vm._s(_vm.dataUser.username)+"\n              ")])])],1)],1),_vm._v(" "),[_c('div',{staticClass:"card__content"},[_c('el-row',{staticClass:"container",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("E-mail:")])]),_vm._v(" "),_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.dataUser.email))])])],1),_vm._v(" "),_c('el-row',{attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("Address:")])]),_vm._v(" "),_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.fullAddress))])])],1),_vm._v(" "),_c('el-row',{staticClass:"container",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("Phone:")])]),_vm._v(" "),_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.dataUser.phone))])])],1),_vm._v(" "),_c('el-row',{staticClass:"container",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("Website:")])]),_vm._v(" "),_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.dataUser.website))])])],1),_vm._v(" "),_c('el-row',{staticClass:"container",attrs:{"gutter":20}},[_c('el-col',{attrs:{"span":4}},[_c('span',[_vm._v("Company:")])]),_vm._v(" "),_c('el-col',{attrs:{"span":20}},[_c('span',[_vm._v(_vm._s(_vm.fullNameCompany))])])],1)],1)]],2):_vm._e()],1)],1),_vm._v(" "),_c('el-row',{staticClass:"container",attrs:{"gutter":20}},[_c('el-col',{attrs:{"sm":12}},[_c('el-card',[_c('template',{slot:"header"},[_c('h3',{staticClass:"card__title"},[_vm._v("Posts")])]),_vm._v(" "),[_c('ul',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loadingPosts),expression:"loadingPosts"}],staticClass:"list",staticStyle:{"min-height":"200px"}},_vm._l((_vm.listPosts),function(post){return _c('li',{key:post.id,staticClass:"list-item"},[_c('user-post',{attrs:{"data":post}})],1)}))]],2)],1),_vm._v(" "),_c('el-col',{attrs:{"sm":12}},[_c('el-card',[_c('template',{slot:"header"},[_c('h3',{staticClass:"card__title"},[_vm._v("Todos")])]),_vm._v(" "),[_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loadingTodos),expression:"loadingTodos"}],staticClass:"card__content"},_vm._l((_vm.listTodos),function(todo){return _c('user-todo',{key:todo.id,attrs:{"data":todo}})}))]],2)],1)],1),_vm._v(" "),_c('el-row',{staticClass:"container"},[_c('el-card',[_c('template',{slot:"header"},[_c('h3',{staticClass:"card__title"},[_vm._v("Albums")])]),_vm._v(" "),[_c('div',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loadingAlbums),expression:"loadingAlbums"}]},[_c('el-collapse',{attrs:{"accordion":""},on:{"change":_vm.onChangeCollapse},model:{value:(_vm.activeAlbums),callback:function ($$v) {_vm.activeAlbums=$$v},expression:"activeAlbums"}},_vm._l((_vm.listAlbums),function(album){return _c('el-collapse-item',{key:album.id,attrs:{"name":album.id}},[_c('template',{slot:"title"},[_c('h4',{staticStyle:{"margin":"0","padding":"0 20px","text-transform":"capitalize"}},[_vm._v("\n                  "+_vm._s(album.title)+"\n                ")])]),_vm._v(" "),[_c('div',{staticClass:"card__content"},[_c('el-row',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loadingPhotos),expression:"loadingPhotos"}],attrs:{"gutter":20}},_vm._l((album.listPhotos),function(photo){return _c('el-col',{key:photo.id,staticClass:"container",attrs:{"sm":8}},[_c('photo-card',{attrs:{"data":photo}})],1)}))],1)]],2)}))],1)]],2)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Photos_vue__ = __webpack_require__(213);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dc4c90a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Photos_vue__ = __webpack_require__(314);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Photos_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0dc4c90a_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Photos_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}],attrs:{"gutter":20}},_vm._l((_vm.listPhotos.slice(0, 100)),function(photo){return _c('el-col',{key:photo.id,staticClass:"container",attrs:{"sm":8}},[_c('photo-card',{attrs:{"data":photo}})],1)}))}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchUsers_vue__ = __webpack_require__(214);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4dd01c6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SearchUsers_vue__ = __webpack_require__(318);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_SearchUsers_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c4dd01c6_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_SearchUsers_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserLink_vue__ = __webpack_require__(215);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31d64ecf_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserLink_vue__ = __webpack_require__(317);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_UserLink_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_31d64ecf_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_UserLink_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-row',{attrs:{"type":"flex","align":"middle"}},[_c('el-col',{attrs:{"sm":4}},[_c('img',{attrs:{"src":"http://placehold.it/100","alt":"avatar"}})]),_vm._v(" "),_c('el-col',{attrs:{"sm":20}},[_c('h4',[_vm._v(_vm._s(_vm.data.name))]),_vm._v(" "),_c('h5',[_vm._v(_vm._s(_vm.data.username))])])],1),_vm._v(" "),_c('el-row',{attrs:{"type":"flex","justify":"end"}},[_c('el-button',{attrs:{"type":"text"},on:{"click":function($event){_vm.$router.push({ name: 'User', params: { id: _vm.data.id } })}}},[_vm._v("\n      To profile\n      "),_c('el-icon',{attrs:{"name":"arrow-right"}})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-row',{attrs:{"type":"flex","justify":"center"}},[_c('el-col',{attrs:{"sm":5}},[_c('h2',{staticStyle:{"text-align":"center"}},[_vm._v("Search Users")])])],1),_vm._v(" "),_c('el-row',{staticClass:"container",attrs:{"type":"flex","justify":"center"}},[_c('el-col',{attrs:{"sm":16}},[_c('el-form',{ref:"formSearch",attrs:{"model":_vm.formSearch,"label-position":"top","label-width":"120px"},nativeOn:{"submit":function($event){$event.preventDefault();return _vm.onSearchUsers($event)}}},[_c('el-input',{attrs:{"placeholder":"Please input user"},on:{"focus":_vm.handleFocusInput},model:{value:(_vm.formSearch.input),callback:function ($$v) {_vm.$set(_vm.formSearch, "input", $$v)},expression:"formSearch.input"}},[_c('template',{slot:"append"},[_c('el-button',{attrs:{"type":"primary","icon":"el-icon-search"},on:{"click":_vm.onSearchUsers}})],1)],2)],1)],1)],1),_vm._v(" "),_c('el-row',{staticClass:"container"},[_c('el-card',{directives:[{name:"loading",rawName:"v-loading",value:(_vm.loading),expression:"loading"}]},[_c('transition',{attrs:{"name":"el-zoom-in-center"}},[_c('div',{staticStyle:{"min-height":"200px"}},[(_vm.resultsSearching)?_c('div',[(_vm.resultsSearching.length > 0)?[_c('ul',{staticClass:"list"},_vm._l((_vm.resultsSearching),function(result){return _c('li',{key:result.id,staticClass:"list-item"},[_c('user-link',{attrs:{"data":result}})],1)}))]:(!_vm.loading)?[_c('el-row',{staticStyle:{"height":"100%"},attrs:{"type":"flex","justify":"center","align":"middle"}},[_c('h3',[_vm._v("No Matches")])])]:_vm._e()],2):_vm._e()])])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_404_vue__ = __webpack_require__(216);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d897080_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_404_vue__ = __webpack_require__(320);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_404_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0d897080_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_404_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h1',[_vm._v("404")])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_transitions_collapse_transition__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_transitions_collapse_transition___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_ui_lib_transitions_collapse_transition__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_dialog__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_element_ui_lib_dialog___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib_dialog__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_menu__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_element_ui_lib_menu___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_menu__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_menu_item__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui_lib_menu_item___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_menu_item__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_icon__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_element_ui_lib_icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_element_ui_lib_icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_row__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_element_ui_lib_row___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_row__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_col__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_element_ui_lib_col___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_element_ui_lib_col__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_card__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_element_ui_lib_card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_element_ui_lib_card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_element_ui_lib_rate__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_element_ui_lib_rate___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_element_ui_lib_rate__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_element_ui_lib_container__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_element_ui_lib_container___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_element_ui_lib_container__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_element_ui_lib_header__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_element_ui_lib_header___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_element_ui_lib_header__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_element_ui_lib_main__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_element_ui_lib_main___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_element_ui_lib_main__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_element_ui_lib_loading__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_element_ui_lib_loading___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_element_ui_lib_loading__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_element_ui_lib_notification__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_element_ui_lib_notification___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_element_ui_lib_notification__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_element_ui_lib_message__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_element_ui_lib_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_element_ui_lib_message__);




// import Input from 'element-ui/lib/input';
// import Switch from 'element-ui/lib/switch';

// import Form from 'element-ui/lib/form';
// import FormItem from 'element-ui/lib/form-item';
// import Upload from 'element-ui/lib/upload';








// import Collapse from 'element-ui/lib/collapse';
// import CollapseItem from 'element-ui/lib/collapse-item';




/* harmony default export */ __webpack_exports__["a"] = (function (Vue) {
  Vue.use(__WEBPACK_IMPORTED_MODULE_1_element_ui_lib_dialog___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_2_element_ui_lib_menu___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_3_element_ui_lib_menu_item___default.a);
  // Vue.use(Input);
  // Vue.use(Switch);
  Vue.use(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_button___default.a);
  // Vue.use(Form);
  // Vue.use(FormItem);
  // Vue.use(Upload);
  Vue.use(__WEBPACK_IMPORTED_MODULE_5_element_ui_lib_icon___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_6_element_ui_lib_row___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_7_element_ui_lib_col___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_8_element_ui_lib_card___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_9_element_ui_lib_rate___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_10_element_ui_lib_container___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_11_element_ui_lib_header___default.a);
  Vue.use(__WEBPACK_IMPORTED_MODULE_12_element_ui_lib_main___default.a);
  // Vue.use(Collapse);
  // Vue.use(CollapseItem);
  // //
  Vue.use(__WEBPACK_IMPORTED_MODULE_13_element_ui_lib_loading___default.a.directive);
  // //
  Vue.prototype.$loading = __WEBPACK_IMPORTED_MODULE_13_element_ui_lib_loading___default.a.service;
  Vue.prototype.$notify = __WEBPACK_IMPORTED_MODULE_14_element_ui_lib_notification___default.a;
  Vue.prototype.$message = __WEBPACK_IMPORTED_MODULE_15_element_ui_lib_message___default.a;
  // //
  Vue.component(__WEBPACK_IMPORTED_MODULE_0_element_ui_lib_transitions_collapse_transition___default.a.name, __WEBPACK_IMPORTED_MODULE_0_element_ui_lib_transitions_collapse_transition___default.a);
});

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// import Form from 'element-ui/lib/form';
// import FormItem from 'element-ui/lib/form-item';
// import Upload from 'element-ui/lib/upload';

var elInput = function elInput() {
  return __webpack_require__.e/* import() */(4).then(__webpack_require__.bind(null, 345));
};
var elUpload = function elUpload() {
  return __webpack_require__.e/* import() */(1).then(__webpack_require__.bind(null, 346));
};
var elForm = function elForm() {
  return __webpack_require__.e/* import() */(5).then(__webpack_require__.bind(null, 347));
};
var elFormItem = function elFormItem() {
  return __webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 348));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  components: {
    elInput: elInput,
    elUpload: elUpload,
    elForm: elForm,
    elFormItem: elFormItem
  }
});

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_LIST_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_LIST_USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_DATA_USER_TO_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SET_LIST_PHOTOS; });
// posts - ./modules/posts.js
var SET_LIST_POSTS = 'posts/SET_LIST';

// users - ./modules/users.js
var SET_LIST_USERS = 'users/SET_LIST';
var ADD_DATA_USER_TO_LIST = 'users/ADD_DATA_USER_TO_LIST';

// photos - ./modules/photos.js
var SET_LIST_PHOTOS = 'photos/SET_LIST';

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HTTP; });
/* unused harmony export loadFile */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(306);



var HTTP = __WEBPACK_IMPORTED_MODULE_0_axios___default.a.create({
  baseURL: __WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* API_URL */]
});

var loadFile = function loadFile() {};

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_MainMenu__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AppGridWrap__ = __webpack_require__(227);
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
  name: 'app',
  components: {
    AppMainMenu: __WEBPACK_IMPORTED_MODULE_0__components_MainMenu__["a" /* default */],
    AppGridWrap: __WEBPACK_IMPORTED_MODULE_1__components_AppGridWrap__["a" /* default */]
  }
});

/***/ }),

/***/ 58:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'MainMenu'
});

/***/ }),

/***/ 59:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'AppGridWrap'
});

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(16);




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
  name: 'Dashboard',
  data: function data() {
    return {
      dataControlLists: {
        posts: {
          loading: false,
          list: null
        },
        comments: {
          loading: false,
          list: null
        },
        users: {
          loading: false,
          list: null
        },
        photos: {
          loading: false,
          list: null
        }
      }
    };
  },

  computed: {
    listNewPosts: function listNewPosts() {
      return this.dataControlLists.posts.list;
    },
    loadingPosts: function loadingPosts() {
      return this.dataControlLists.posts.loading;
    },
    listNewComments: function listNewComments() {
      return this.dataControlLists.comments.list;
    },
    loadingComments: function loadingComments() {
      return this.dataControlLists.comments.loading;
    }
  },
  methods: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(['fetchNewPosts', 'fetchNewComments', 'fetchNewUsers', 'fetchNewPhotos']), {
    loadList: function loadList(nameList, cb) {
      var _this = this;

      var dataList = this.dataControlLists[nameList];
      dataList.loading = true;
      return cb().then(function (list) {
        dataList.list = list;
      }).catch(function (err) {
        _this.$alert({
          type: 'error',
          message: err.message
        });
      }).finally(function () {
        dataList.loading = false;
      });
    },
    onLoadData: function onLoadData() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var loadList;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                loadList = _this2.loadList;

                _this2.loading = true;
                _context.next = 5;
                return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all([loadList('posts', _this2.fetchNewPosts), loadList('comments', _this2.fetchNewComments)]
                // loadList('users', this.fetchNewUsers),
                // loadList('photos', this.fetchNewPhotos),
                );

              case 5:
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context['catch'](0);

                console.error(_context.t0);
                _this2.$alert({
                  type: 'error',
                  message: _context.t0.message
                });

              case 11:
                _context.prev = 11;

                _this2.loading = false;
                return _context.finish(11);

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 7, 11, 14]]);
      }))();
    }
  }),
  created: function created() {
    this.onLoadData();
  }
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuex__ = __webpack_require__(16);



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
  name: 'Posts',
  data: function data() {
    return {
      loading: false
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["c" /* mapGetters */])(['listPosts'])),
  methods: __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_3_vuex__["b" /* mapActions */])(['fetchListPosts']), {
    onLoadData: function onLoadData() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                _this.loading = true;
                _context.next = 4;
                return _this.fetchListPosts();

              case 4:
                _context.next = 10;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);

                console.error(_context.t0);
                _this.$alert({
                  type: 'error',
                  message: _context.t0.message
                });

              case 10:
                _context.prev = 10;

                _this.loading = false;
                return _context.finish(10);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 6, 10, 13]]);
      }))();
    }
  }),
  created: function created() {
    this.onLoadData();
  }
});

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_mixins_form_components__ = __webpack_require__(47);





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
  name: 'Post',
  mixins: [__WEBPACK_IMPORTED_MODULE_6__utils_mixins_form_components__["a" /* default */]],
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data: function data() {
    return {
      loading: false,
      loadingComments: false,
      loadingFormComment: false,
      listComments: [],
      isVisibleFormComment: false,
      dataFormComment: {
        postId: this.id,
        name: '',
        email: '',
        body: ''
      },
      rulesFormComment: {
        name: [{ required: true, message: 'Please input email', trigger: 'change' }, { min: 3, max: 10, message: 'Length should be 3 to 10', trigger: 'blur' }],
        email: [{ required: true, message: 'Please input email', trigger: 'change' }, { type: 'email', message: 'Not valid format', trigger: 'blur' }],
        body: [{ required: true, message: 'Please input comment', trigger: 'change' }]
      }
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["c" /* mapGetters */])(['getPostById']), {
    dataPost: function dataPost() {
      return this.getPostById(Number(this.id));
    },
    rating: function rating() {
      var rand = Math.random() * 5;
      return Number(rand.toFixed(1));
    }
  }),
  watch: {
    dataPost: function dataPost(val) {
      if (val && (typeof val === 'undefined' ? 'undefined' : __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(val)) === 'object') {
        this.getComments();
      }
    }
  },
  methods: __WEBPACK_IMPORTED_MODULE_4_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_5_vuex__["b" /* mapActions */])(['fetchListPosts', 'fetchListCommentsToPost', 'addCommentToPost']), {
    validateForm: function validateForm(nameForm) {
      var _this = this;

      return new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_promise___default.a(function (resolve, reject) {
        _this.$refs[nameForm].validate(function (valid) {
          if (valid) {
            resolve();
          } else {
            reject(new Error('Form is not valid'));
          }
        });
      });
    },
    onSaveComment: function onSaveComment() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        var newComment;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _this2.validateForm('dataFormComment');

              case 3:
                _this2.loadingFormComment = true;
                _context.next = 6;
                return _this2.addCommentToPost({
                  dataComment: _this2.dataFormComment
                });

              case 6:
                newComment = _context.sent;

                _this2.isVisibleFormComment = false;
                _this2.listComments.unshift(newComment);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context['catch'](0);

                console.error(_context.t0);

              case 14:
                _context.prev = 14;

                _this2.loadingFormComment = false;
                return _context.finish(14);

              case 17:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[0, 11, 14, 17]]);
      }))();
    },
    getComments: function getComments() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                _this3.loadingComments = true;
                _context2.next = 4;
                return _this3.fetchListCommentsToPost({
                  postId: _this3.id
                });

              case 4:
                _this3.listComments = _context2.sent;
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2['catch'](0);

                console.error(_context2.t0);
                _this3.$alert({
                  type: 'error',
                  message: _context2.t0.message
                });

              case 11:
                _context2.prev = 11;

                _this3.loadingComments = false;
                return _context2.finish(11);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 7, 11, 14]]);
      }))();
    },
    onLoadData: function onLoadData() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this4.loading = true;
                _context3.next = 4;
                return _this4.fetchListPosts();

              case 4:
                _context3.next = 10;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3['catch'](0);

                console.error(_context3.t0);
                _this4.$alert({
                  type: 'error',
                  message: _context3.t0.message
                });

              case 10:
                _context3.prev = 10;

                _this4.loading = false;
                return _context3.finish(10);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[0, 6, 10, 13]]);
      }))();
    }
  }),
  mounted: function mounted() {
    if (this.dataPost && __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_typeof___default()(this.dataPost) === 'object') {
      this.getComments();
    }
  },
  created: function created() {
    this.onLoadData();
  }
});

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_mixins_form_components__ = __webpack_require__(47);


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
  name: 'AddNewPost',
  mixins: [__WEBPACK_IMPORTED_MODULE_2__utils_mixins_form_components__["a" /* default */]],
  data: function data() {
    return {
      dialogImageUrl: '',
      isVisibleModalImage: false,
      isVisibleForm: false,
      dataForm: {
        name: '',
        desc: ''
      },
      rulesForm: {
        name: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }, { min: 3, message: 'Min 3 letters', trigger: 'blur' }]
      }
    };
  },

  methods: {
    handlePictureCardPreview: function handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.isVisibleModalImage = true;
    },
    submitUpload: function submitUpload() {
      this.$refs.upload.submit();
      this.isVisibleForm = true;
    },
    handleRemove: function handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview: function handlePreview(file) {
      console.log(file);
    },
    onSaveAlbum: function onSaveAlbum() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.$message({
                  type: 'success',
                  message: 'Created new album!'
                });
                _this.$router.push({ name: 'Dashboard' });

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  }
});

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(83);




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




// import UserTodo from '@/components/UserTodo';
// import UserPost from '@/components/UserPost';
// import PhotoCard from '@/components/PhotoCard';

var UserTodo = function UserTodo() {
  return __webpack_require__.e/* import() */(2).then(__webpack_require__.bind(null, 349));
};
var UserPost = function UserPost() {
  return __webpack_require__.e/* import() */(3).then(__webpack_require__.bind(null, 350));
};
var PhotoCard = function PhotoCard() {
  return new Promise(function(resolve) { resolve(); }).then(__webpack_require__.bind(null, 89));
};

var elCollapse = function elCollapse() {
  return __webpack_require__.e/* import() */(6).then(__webpack_require__.bind(null, 351));
};
var elCollapseItem = function elCollapseItem() {
  return __webpack_require__.e/* import() */(7).then(__webpack_require__.bind(null, 352));
};

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'User',
  components: {
    UserTodo: UserTodo,
    UserPost: UserPost,
    PhotoCard: PhotoCard,
    elCollapse: elCollapse,
    elCollapseItem: elCollapseItem
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data: function data() {
    return {
      loading: false,
      loadingPhotos: false,
      dataControlLists: {
        posts: {
          loading: false,
          list: null
        },
        albums: {
          loading: false,
          list: null
        },
        todos: {
          loading: false,
          list: null
        }
      },
      activeAlbums: ''
    };
  },

  computed: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["c" /* mapGetters */])(['getUserById']), {
    dataUser: function dataUser() {
      return this.getUserById(Number(this.id));
    },
    fullAddress: function fullAddress() {
      var _dataUser$address = this.dataUser.address,
          city = _dataUser$address.city,
          street = _dataUser$address.street,
          suite = _dataUser$address.suite,
          zipcode = _dataUser$address.zipcode;

      return city + ', ' + street + ', ' + suite + ', ' + zipcode;
    },
    fullNameCompany: function fullNameCompany() {
      var _dataUser$company = this.dataUser.company,
          name = _dataUser$company.name,
          catchPhrase = _dataUser$company.catchPhrase,
          bs = _dataUser$company.bs;

      return name + ' ("' + catchPhrase + '"), ' + bs;
    },
    listPosts: function listPosts() {
      return this.dataControlLists.posts.list;
    },
    loadingPosts: function loadingPosts() {
      return this.dataControlLists.posts.loading;
    },
    listAlbums: function listAlbums() {
      return this.dataControlLists.albums.list;
    },
    loadingAlbums: function loadingAlbums() {
      return this.dataControlLists.albums.loading;
    },
    listTodos: function listTodos() {
      return this.dataControlLists.todos.list;
    },
    loadingTodos: function loadingTodos() {
      return this.dataControlLists.todos.loading;
    }
  }),
  watch: {
    dataUser: function dataUser(val) {
      if (val) {
        this.onLoadLists();
      }
    }
  },
  methods: __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_4_vuex__["b" /* mapActions */])(['fetchDataUser', 'fetchPostsUser', 'fetchAlbumsUser', 'fetchTodosUser', 'fetchPhotosUser']), {
    onChangeCollapse: function onChangeCollapse(val) {
      if (val) {
        this.loadListPhoto(val);
      }
    },
    loadListPhoto: function loadListPhoto(val) {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee() {
        var currentAlbum, listPhotos;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                currentAlbum = _this.listAlbums.find(function (album) {
                  return album.id === val;
                });

                if (currentAlbum.listPhotos) {
                  _context.next = 8;
                  break;
                }

                _this.loadingPhotos = true;
                _context.next = 6;
                return _this.fetchPhotosUser({ albumId: val });

              case 6:
                listPhotos = _context.sent;

                _this.$set(currentAlbum, 'listPhotos', listPhotos);

              case 8:
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);

                console.error(_context.t0);

              case 13:
                _context.prev = 13;

                _this.loadingPhotos = false;
                return _context.finish(13);

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 10, 13, 16]]);
      }))();
    },
    loadList: function loadList(nameList, cb) {
      var _this2 = this;

      var dataList = this.dataControlLists[nameList];
      dataList.loading = true;
      return cb().then(function (list) {
        dataList.list = list;
      }).catch(function (err) {
        _this2.$alert({
          type: 'error',
          message: err.message
        });
      }).finally(function () {
        dataList.loading = false;
      });
    },
    onLoadLists: function onLoadLists() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee2() {
        var loadList;
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                loadList = _this3.loadList;
                _context2.next = 4;
                return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all([loadList('posts', _this3.fetchPostsUser.bind(_this3, { userId: _this3.id })), loadList('albums', _this3.fetchAlbumsUser.bind(_this3, { userId: _this3.id })), loadList('todos', _this3.fetchTodosUser.bind(_this3, { userId: _this3.id }))]);

              case 4:
                _context2.next = 9;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2['catch'](0);

                console.error(_context2.t0);

              case 9:
                _context2.prev = 9;

                _this3.loading = false;
                return _context2.finish(9);

              case 12:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this3, [[0, 6, 9, 12]]);
      }))();
    },
    onLoadData: function onLoadData() {
      var _this4 = this;

      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee3() {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                _this4.loading = true;
                _context3.next = 4;
                return _this4.fetchDataUser({ userId: _this4.id });

              case 4:
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3['catch'](0);

                console.error(_context3.t0);

              case 9:
                _context3.prev = 9;

                _this4.loading = false;
                return _context3.finish(9);

              case 12:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this4, [[0, 6, 9, 12]]);
      }))();
    }
  }),
  mounted: function mounted() {
    // this.onLoadLists();
  },
  created: function created() {
    // this.onLoadData();
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    var _this5 = this;

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.mark(function _callee4() {
      var userId, listPosts, listAlbums, listTodos;
      return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_regenerator___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              console.log(to);
              userId = to.params.id;
              _context4.next = 4;
              return __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].dispatch('fetchDataUser', { userId: userId });

            case 4:
              _context4.next = 6;
              return __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].dispatch('fetchPostsUser', { userId: userId });

            case 6:
              listPosts = _context4.sent;
              _context4.next = 9;
              return __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].dispatch('fetchAlbumsUser', { userId: userId });

            case 9:
              listAlbums = _context4.sent;
              _context4.next = 12;
              return __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */].dispatch('fetchTodosUser', { userId: userId });

            case 12:
              listTodos = _context4.sent;

              next(function (vm) {
                vm.dataControlLists.posts.list = listPosts;
                vm.dataControlLists.albums.list = listAlbums;
                vm.dataControlLists.todos.list = listTodos;
              });

            case 14:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, _this5);
    }))();
  }
});

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_posts__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_users__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_photos__ = __webpack_require__(308);







__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
  modules: {
    posts: __WEBPACK_IMPORTED_MODULE_2__modules_posts__["a" /* default */],
    users: __WEBPACK_IMPORTED_MODULE_3__modules_users__["a" /* default */],
    photos: __WEBPACK_IMPORTED_MODULE_4__modules_photos__["a" /* default */]
  }
}));

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PhotoCard_vue__ = __webpack_require__(90);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_578949ce_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PhotoCard_vue__ = __webpack_require__(311);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_PhotoCard_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_578949ce_hasScoped_false_transformToRequire_video_src_poster_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_PhotoCard_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_locale_ru__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment_locale_ru___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment_locale_ru__);
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




// const moment = () => import('moment');

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'PhotoCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    dateNow: function dateNow() {
      return __WEBPACK_IMPORTED_MODULE_0_moment___default()().format('DD/MMMM/YYYY');
    }
  },
  methods: {
    setRating: function setRating() {
      var rand = Math.random() * 5;
      return Number(rand.toFixed(1));
    }
  },
  mounted: function mounted() {
    this.$set(this.data, 'rating', this.setRating());
  }
});

/***/ })

},[219]);
//# sourceMappingURL=app.da4c2aa2745141e83861.js.map