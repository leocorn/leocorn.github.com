(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{441:function(t,e,r){"use strict";r.r(e);var o={name:"DynamicOrderCat",auth:!1,layout:"vuetify",data:function(){return{}},mounted:function(){},methods:{downloadFile:function(){var t=new Blob(["order: "+this.$route.params.order+"\nCategory: "+this.$route.params.cat],{type:"text/plain"}),link=document.createElement("a");link.href=URL.createObjectURL(t),link.download=this.$route.params.order+"-"+this.$route.params.cat+".txt",link.click(),console.log(link),URL.revokeObjectURL(link.href)}}},n=r(6),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xs":""}},[r("ul",[r("li",[t._v("Order ID: "+t._s(t.$route.params.order))]),r("li",[t._v("Category: "+t._s(t.$route.params.cat))])]),r("v-btn",{on:{click:t.downloadFile}},[t._v("Download")])],1)}),[],!1,null,null,null);e.default=component.exports}}]);