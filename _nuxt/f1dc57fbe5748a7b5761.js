(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{403:function(t,n,o){"use strict";o.r(n);var e={layout:"vuetify",name:"LoginPage",methods:{login:function(){return this.$auth.loginWith("auth0").catch((function(t){console.log(t)}))}}},h=o(5),component=Object(h.a)(e,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-container",{attrs:{"grid-list-md":"","text-center":""}},[n("h2",[this._v("Login")]),n("hr"),n("v-btn",{on:{click:this.login}},[this._v("Login Auth0")]),this.$auth.loggedIn?n("v-chip",{attrs:{color:"primary"},domProps:{textContent:this._s(this.$auth.user)}}):this._e()],1)}),[],!1,null,null,null);n.default=component.exports}}]);