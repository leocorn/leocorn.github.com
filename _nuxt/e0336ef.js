(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{427:function(e,t,n){"use strict";n.r(t);var r=n(43),o=n.n(r),l={name:"DynamicOrder",auth:!1,layout:"vuetify",data:function(){return{}},created:function(){this.downloadFile()},mounted:function(){this.downloadFile()},methods:{downloadFile:function(){var e=this;o.a.get("/template/clist.m3u",{responseType:"blob"}).then((function(t){var n=new Blob([t.data],{type:"text/plain"}),link=document.createElement("a");link.href=URL.createObjectURL(n),link.download=e.$route.params.order+".m3u",link.click(),URL.revokeObjectURL(link.href)})).catch(console.error)}}},c=n(6),component=Object(c.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",{attrs:{"grid-list-xs":""}},[t("ul",[t("li",[this._v("Order ID: "+this._s(this.$route.params.order))])])])}),[],!1,null,null,null);t.default=component.exports}}]);