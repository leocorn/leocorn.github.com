(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{313:function(t,e,o){"use strict";o.r(e);var n={methodOne:function(){return"From methodOne"}},h=n;n.methodTwo=function(){return"From methodTwo"};var d={name:"core-singleton",auth:!1,layout:"vuetify",data:function(){return{methodOneOutput:"",methodTwoOutput:""}},methods:{handleMethodOne:function(){this.methodOneOutput=h.methodOne()},handleMethodTwo:function(){this.methodTwoOutput=h.methodTwo()}}},r=o(6),component=Object(r.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{attrs:{"grid-list-xs":""}},[o("h1",[t._v("Test Singleton Class")]),o("v-btn",{attrs:{color:"primary"},on:{click:t.handleMethodOne}},[t._v("Method One")]),o("h3",[t._v("Method One Output: "),o("v-span",[t._v(t._s(t.methodOneOutput))])],1),o("v-btn",{attrs:{color:"primary"},on:{click:t.handleMethodTwo}},[t._v("Method Two")]),o("h3",[t._v("Method Two Output: "),o("v-span",[t._v(t._s(t.methodTwoOutput))])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);