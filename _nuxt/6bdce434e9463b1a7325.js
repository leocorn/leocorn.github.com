(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{372:function(e,t,n){var map={"./Hero.vue":[392,42]};function o(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(map)},o.id=372,e.exports=o},393:function(e,t,n){"use strict";n.r(t);var o={name:"ZeroBaseView",props:{id:{type:String,default:"view"}},data:function(){return{sections:[]}}},r=n(5),c=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{attrs:{id:this.id}},[t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12"}},this._l(this.sections,(function(section){return t("zero-section-"+section,{key:section,tag:"component"})})),1)],1)],1)}),[],!1,null,null,null).exports,l=n(370),d={layout:"zero",auth:!1,name:"ZeroHome",metaInfo:{title:"Home"},extends:c,mixins:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return{name:"LoadSections",components:e.reduce((function(e,t){var o=Object(l.upperFirst)(Object(l.camelCase)(t));return e["ZeroSection".concat(o)]=function(){return n(372)("./".concat(o,".vue"))},e}),{}),data:function(){return{sections:e}}}}(["hero"])],props:{id:{type:String,default:"home"}}},f=Object(r.a)(d,void 0,void 0,!1,null,null,null);t.default=f.exports}}]);