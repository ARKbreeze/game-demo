(function(t){function n(n){for(var r,l,i=n[0],s=n[1],u=n[2],f=0,p=[];f<i.length;f++)l=i[f],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&p.push(o[l][0]),o[l]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);a&&a(n);while(p.length)p.shift()();return c.push.apply(c,u||[]),e()}function e(){for(var t,n=0;n<c.length;n++){for(var e=c[n],r=!0,i=1;i<e.length;i++){var s=e[i];0!==o[s]&&(r=!1)}r&&(c.splice(n--,1),t=l(l.s=e[0]))}return t}var r={},o={app:0},c=[];function l(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,l),e.l=!0,e.exports}l.m=t,l.c=r,l.d=function(t,n,e){l.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,n){if(1&n&&(t=l(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(l.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)l.d(e,r,function(n){return t[n]}.bind(null,r));return e},l.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(n,"a",n),n},l.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var u=0;u<i.length;u++)n(i[u]);var a=s;c.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"07e1":function(t,n,e){"use strict";e("2acc")},"2acc":function(t,n,e){},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"box"},[e("div",{staticClass:"title"},[t._v("第"+t._s(t.n)+"手")]),e("div",{staticClass:"row"},[e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(0,n)}}}),e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(1,n)}}}),e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(2,n)}}})],1),e("div",{staticClass:"row"},[e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(3,n)}}}),e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(4,n)}}}),e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(5,n)}}})],1),e("div",{staticClass:"row"},[e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(6,n)}}}),e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(7,n)}}}),e("cell",{attrs:{n:t.n},on:{cl:function(n){return t.s(8,n)}}})],1),t.flag?e("footer",[t._v("胜者是"+t._s(t.text))]):e("footer",[t._v("胜负未分")])])},c=[],l=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cell",on:{click:t.toggle}},[[t._v(t._s(t.text))]],2)},i=[],s={props:["n"],data:function(){return{text:""}},methods:{toggle:function(){""==this.text&&(this.text=this.n%2==0?"x":"o",this.$emit("cl",this.text))}}},u=s,a=(e("07e1"),e("2877")),f=Object(a["a"])(u,l,i,!1,null,null,null),p=f.exports,d={components:{Cell:p},data:function(){return{n:0,arr:[[],[],[]],flag:!1,text:""}},methods:{s:function(t,n){this.n++,this.arr[Math.floor(t/3)][t%3]=n,!this.flag&&(this.text=n),this.tell()},tell:function(){for(var t=this.arr,n=0;n<3;n++)(t[n][0]&&(t[n][0]==t[n][1]&&t[n][1]==t[n][2]||t[0][n]==t[1][n]&&t[1][n]==t[2][n])||t[1][1]&&(t[1][1]==t[0][0]&&t[1][1]==t[2][2]||t[1][1]==t[0][2]&&t[1][1]==t[2][0]))&&(this.flag=!0)}}},h=d,v=(e("034f"),Object(a["a"])(h,o,c,!1,null,null,null)),b=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(b)}}).$mount(".div1")},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.b2ea053b.js.map