webpackJsonp([1],{265:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(270),r=a(272),s=a(2),i=s(n.a,r.a,!1,null,null,null);e.default=i.exports},270:function(t,e,a){"use strict";e.a={name:"UserPost",props:{data:{type:Object,required:!0}},data:function(){return{rating:0}},methods:{setRating:function(){var t=5*Math.random();return Number(t.toFixed(1))}},mounted:function(){this.rating=this.setRating()}}},272:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",[a("h4",{staticClass:"list-item__title"},[t._v(t._s(t.data.title))]),t._v(" "),a("p",{staticClass:"list-item__text"},[t._v(t._s(t.data.body)+"...")]),t._v(" "),a("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[a("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value} points"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}}),t._v(" "),a("el-button",{attrs:{type:"text"},on:{click:function(e){t.$router.push({name:"Post",params:{id:t.data.id}})}}},[t._v("\n      Read post\n      "),a("el-icon",{attrs:{name:"d-arrow-right"}})],1)],1)],1)},r=[],s={render:n,staticRenderFns:r};e.a=s}});
//# sourceMappingURL=1.04cd62a22ad8186a82e3.js.map