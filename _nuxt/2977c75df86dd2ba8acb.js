(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{247:function(e,t,r){"use strict";r.r(t);r(16),r(14),r(9),r(37);var n={name:"stats",props:["stats"],data:function(){return{headers:[{text:"name",value:"name"},{text:"value",value:"value"}],usCurrency:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}},computed:{statsArray:function(){var e=this;return Object.keys(this.stats).map((function(t){return{name:t,value:e.stats[t]}}))}},methods:{getValueColor:function(e){return e<0?"error":"success"},formatValue:function(e){var t=e.value;switch(e.name){case"sum":case"perShare":t=this.usCurrency.format(e.value)}return t}}},l=r(5),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.stats?r("v-card",{staticClass:"mb-3"},[r("v-data-table",{attrs:{headers:e.headers,items:e.statsArray,"hide-default-header":"","hide-default-footer":""},scopedSlots:e._u([{key:"item.value",fn:function(t){var n=t.item;return[r("v-chip",{attrs:{color:e.getValueColor(n.value),dark:""}},[e._v(e._s(e.formatValue(n)))])]}}],null,!1,1888273335)})],1):e._e()}),[],!1,null,null,null);t.default=component.exports}}]);