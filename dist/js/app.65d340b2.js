(function(t){function e(e){for(var o,i,u=e[0],c=e[1],s=e[2],f=0,l=[];f<u.length;f++)i=u[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);d&&d(e);while(l.length)l.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7bad47f7"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=i(t);var s=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,n[1](s)}r[t]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0280":function(t,e,n){"use strict";var o=n("868f"),r=n.n(o);r.a},"034f":function(t,e,n){"use strict";var o=n("85ec"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],i=(n("034f"),n("2877")),u={},c=Object(i["a"])(u,r,a,!1,null,null,null),s=c.exports,f=(n("d3b7"),n("8c4f")),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[t._m(0),n("div",{staticClass:"tt-home-content"},[n("div",{staticClass:"home-content-left"},[n("Navigator")],1),n("div",{staticClass:"home-content-middle"}),n("div",{staticClass:"home-content-right"})])])},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tt-home-header"},[n("span",[t._v("头条")])])}],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-hom-navigator"},[n("h1",[t._v("头条")]),n("section",{staticClass:"nav-list"},t._l(t.navs,(function(e){return n("section",{key:e.id,staticClass:"nav-item"},[t._v(t._s(e.text))])})),0)])},v=[],m={components:{},data:function(){return{navs:[{id:1,text:"推荐"},{id:2,text:"西瓜视频"},{id:3,text:"财经"},{id:4,text:"热点"},{id:5,text:"直播"},{id:6,text:"图片"},{id:7,text:"科技"},{id:8,text:"娱乐"},{id:9,text:"游戏"},{id:10,text:"体育"},{id:11,text:"懂车帝"},{id:12,text:"热点"}]}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},h=m,b=(n("a8e8"),Object(i["a"])(h,p,v,!1,null,"0371bfbe",null)),y=b.exports,g={components:{Navigator:y},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){},beforeCreate:function(){},beforeMount:function(){},beforeUpdate:function(){},updated:function(){},beforeDestroy:function(){},destroyed:function(){},activated:function(){}},x=g,_=(n("0280"),Object(i["a"])(x,d,l,!1,null,"f2a3142a",null)),w=_.exports;o["a"].use(f["a"]);var j=[{path:"/",name:"Home",component:w},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],O=new f["a"]({routes:j}),C=O,P=n("2f62");o["a"].use(P["a"]);var E=new P["a"].Store({state:{},mutations:{},actions:{},modules:{}});o["a"].config.productionTip=!1,new o["a"]({router:C,store:E,render:function(t){return t(s)}}).$mount("#app")},"85ec":function(t,e,n){},"868f":function(t,e,n){},a418:function(t,e,n){},a8e8:function(t,e,n){"use strict";var o=n("a418"),r=n.n(o);r.a}});
//# sourceMappingURL=app.65d340b2.js.map