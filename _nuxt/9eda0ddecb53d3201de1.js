(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,9,11,13],{184:function(t,e){var n={utf8:{stringToBytes:function(t){return n.bin.stringToBytes(unescape(encodeURIComponent(t)))},bytesToString:function(t){return decodeURIComponent(escape(n.bin.bytesToString(t)))}},bin:{stringToBytes:function(t){for(var e=[],i=0;i<t.length;i++)e.push(255&t.charCodeAt(i));return e},bytesToString:function(t){for(var e=[],i=0;i<t.length;i++)e.push(String.fromCharCode(t[i]));return e.join("")}}};t.exports=n},188:function(t,e,n){var r,o,c,l,f;r=n(189),o=n(184).utf8,c=n(190),l=n(184).bin,(f=function(t,e){t.constructor==String?t=e&&"binary"===e.encoding?l.stringToBytes(t):o.stringToBytes(t):c(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var n=r.bytesToWords(t),d=8*t.length,a=1732584193,b=-271733879,v=-1732584194,h=271733878,i=0;i<n.length;i++)n[i]=16711935&(n[i]<<8|n[i]>>>24)|4278255360&(n[i]<<24|n[i]>>>8);n[d>>>5]|=128<<d%32,n[14+(d+64>>>9<<4)]=d;var m=f._ff,y=f._gg,k=f._hh,_=f._ii;for(i=0;i<n.length;i+=16){var x=a,w=b,T=v,dd=h;a=m(a,b,v,h,n[i+0],7,-680876936),h=m(h,a,b,v,n[i+1],12,-389564586),v=m(v,h,a,b,n[i+2],17,606105819),b=m(b,v,h,a,n[i+3],22,-1044525330),a=m(a,b,v,h,n[i+4],7,-176418897),h=m(h,a,b,v,n[i+5],12,1200080426),v=m(v,h,a,b,n[i+6],17,-1473231341),b=m(b,v,h,a,n[i+7],22,-45705983),a=m(a,b,v,h,n[i+8],7,1770035416),h=m(h,a,b,v,n[i+9],12,-1958414417),v=m(v,h,a,b,n[i+10],17,-42063),b=m(b,v,h,a,n[i+11],22,-1990404162),a=m(a,b,v,h,n[i+12],7,1804603682),h=m(h,a,b,v,n[i+13],12,-40341101),v=m(v,h,a,b,n[i+14],17,-1502002290),a=y(a,b=m(b,v,h,a,n[i+15],22,1236535329),v,h,n[i+1],5,-165796510),h=y(h,a,b,v,n[i+6],9,-1069501632),v=y(v,h,a,b,n[i+11],14,643717713),b=y(b,v,h,a,n[i+0],20,-373897302),a=y(a,b,v,h,n[i+5],5,-701558691),h=y(h,a,b,v,n[i+10],9,38016083),v=y(v,h,a,b,n[i+15],14,-660478335),b=y(b,v,h,a,n[i+4],20,-405537848),a=y(a,b,v,h,n[i+9],5,568446438),h=y(h,a,b,v,n[i+14],9,-1019803690),v=y(v,h,a,b,n[i+3],14,-187363961),b=y(b,v,h,a,n[i+8],20,1163531501),a=y(a,b,v,h,n[i+13],5,-1444681467),h=y(h,a,b,v,n[i+2],9,-51403784),v=y(v,h,a,b,n[i+7],14,1735328473),a=k(a,b=y(b,v,h,a,n[i+12],20,-1926607734),v,h,n[i+5],4,-378558),h=k(h,a,b,v,n[i+8],11,-2022574463),v=k(v,h,a,b,n[i+11],16,1839030562),b=k(b,v,h,a,n[i+14],23,-35309556),a=k(a,b,v,h,n[i+1],4,-1530992060),h=k(h,a,b,v,n[i+4],11,1272893353),v=k(v,h,a,b,n[i+7],16,-155497632),b=k(b,v,h,a,n[i+10],23,-1094730640),a=k(a,b,v,h,n[i+13],4,681279174),h=k(h,a,b,v,n[i+0],11,-358537222),v=k(v,h,a,b,n[i+3],16,-722521979),b=k(b,v,h,a,n[i+6],23,76029189),a=k(a,b,v,h,n[i+9],4,-640364487),h=k(h,a,b,v,n[i+12],11,-421815835),v=k(v,h,a,b,n[i+15],16,530742520),a=_(a,b=k(b,v,h,a,n[i+2],23,-995338651),v,h,n[i+0],6,-198630844),h=_(h,a,b,v,n[i+7],10,1126891415),v=_(v,h,a,b,n[i+14],15,-1416354905),b=_(b,v,h,a,n[i+5],21,-57434055),a=_(a,b,v,h,n[i+12],6,1700485571),h=_(h,a,b,v,n[i+3],10,-1894986606),v=_(v,h,a,b,n[i+10],15,-1051523),b=_(b,v,h,a,n[i+1],21,-2054922799),a=_(a,b,v,h,n[i+8],6,1873313359),h=_(h,a,b,v,n[i+15],10,-30611744),v=_(v,h,a,b,n[i+6],15,-1560198380),b=_(b,v,h,a,n[i+13],21,1309151649),a=_(a,b,v,h,n[i+4],6,-145523070),h=_(h,a,b,v,n[i+11],10,-1120210379),v=_(v,h,a,b,n[i+2],15,718787259),b=_(b,v,h,a,n[i+9],21,-343485551),a=a+x>>>0,b=b+w>>>0,v=v+T>>>0,h=h+dd>>>0}return r.endian([a,b,v,h])})._ff=function(a,b,t,e,n,s,r){var o=a+(b&t|~b&e)+(n>>>0)+r;return(o<<s|o>>>32-s)+b},f._gg=function(a,b,t,e,n,s,r){var o=a+(b&e|t&~e)+(n>>>0)+r;return(o<<s|o>>>32-s)+b},f._hh=function(a,b,t,e,n,s,r){var o=a+(b^t^e)+(n>>>0)+r;return(o<<s|o>>>32-s)+b},f._ii=function(a,b,t,e,n,s,r){var o=a+(t^(b|~e))+(n>>>0)+r;return(o<<s|o>>>32-s)+b},f._blocksize=16,f._digestsize=16,t.exports=function(t,e){if(null==t)throw new Error("Illegal argument "+t);var n=r.wordsToBytes(f(t,e));return e&&e.asBytes?n:e&&e.asString?l.bytesToString(n):r.bytesToHex(n)}},189:function(t,e){var n,r;n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(t,b){return t<<b|t>>>32-b},rotr:function(t,b){return t<<32-b|t>>>b},endian:function(t){if(t.constructor==Number)return 16711935&r.rotl(t,8)|4278255360&r.rotl(t,24);for(var i=0;i<t.length;i++)t[i]=r.endian(t[i]);return t},randomBytes:function(t){for(var e=[];t>0;t--)e.push(Math.floor(256*Math.random()));return e},bytesToWords:function(t){for(var e=[],i=0,b=0;i<t.length;i++,b+=8)e[b>>>5]|=t[i]<<24-b%32;return e},wordsToBytes:function(t){for(var e=[],b=0;b<32*t.length;b+=8)e.push(t[b>>>5]>>>24-b%32&255);return e},bytesToHex:function(t){for(var e=[],i=0;i<t.length;i++)e.push((t[i]>>>4).toString(16)),e.push((15&t[i]).toString(16));return e.join("")},hexToBytes:function(t){for(var e=[],n=0;n<t.length;n+=2)e.push(parseInt(t.substr(n,2),16));return e},bytesToBase64:function(t){for(var e=[],i=0;i<t.length;i+=3)for(var r=t[i]<<16|t[i+1]<<8|t[i+2],o=0;o<4;o++)8*i+6*o<=8*t.length?e.push(n.charAt(r>>>6*(3-o)&63)):e.push("=");return e.join("")},base64ToBytes:function(t){t=t.replace(/[^A-Z0-9+\/]/gi,"");for(var e=[],i=0,r=0;i<t.length;r=++i%4)0!=r&&e.push((n.indexOf(t.charAt(i-1))&Math.pow(2,-2*r+8)-1)<<2*r|n.indexOf(t.charAt(i))>>>6-2*r);return e}},t.exports=r},190:function(t,e){function n(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}t.exports=function(t){return null!=t&&(n(t)||function(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&n(t.slice(0,0))}(t)||!!t._isBuffer)}},191:function(t,e,n){"use strict";n.r(e);var r={name:"facet-buckets",props:["facets"],methods:{bucketValue:function(t){return console.log(t),t}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panels",t._l(t.facets,(function(e,r){return e.buckets.length>1?n("v-expansion-panel",{key:"facet-"+r,class:{"grey lighten-2":r%2==0}},[n("v-expansion-panel-header",[t._v(t._s(e.name)+" - "+t._s(e.buckets.length))]),n("v-expansion-panel-content",[n("v-list",{class:{"grey lighten-2":r%2==0}},[n("v-list-item-group",t._l(e.buckets,(function(r,i){return n("v-list-item",{key:"bucket-"+i,on:{click:function(n){return t.$emit("bucket-select",e.name,r.value)}}},[n("v-list-item-content",[t._v(t._s(r.value))]),n("v-list-item-action",[n("v-list-item-action-text",[t._v(t._s(r.count))])],1)],1)})),1)],1)],1)],1):t._e()})),1)}),[],!1,null,null,null);e.default=component.exports},192:function(t,e,n){"use strict";n.r(e);var r={name:"query-filters",props:["filters"],computed:{}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.filters?n("v-card",{staticClass:"mb-3"},[n("v-list",{staticClass:"indigo lighten-4"},[n("v-subheader",[t._v("Filters")]),n("v-list-item-group",t._l(t.filters,(function(filter,i){return n("v-list-item",{key:"filter-"+i,on:{click:function(e){return t.$emit("filter-select",filter)}}},[n("v-list-item-content",[t._v(t._s(filter.replace(":",": ")))]),n("v-list-item-action",[n("v-list-item-action-text",[t._v("X")])],1)],1)})),1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},196:function(t,e,n){var content=n(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("5ae614ec",content,!1,{sourceMap:!1})},200:function(t,e,n){"use strict";n.r(e);n(34),n(13),n(8),n(33);var r={name:"stats",props:["stats"],data:function(){return{headers:[{text:"name",value:"name"},{text:"value",value:"value"}],usCurrency:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}},computed:{statsArray:function(){var t=this;return Object.keys(this.stats).map((function(e){return{name:e,value:t.stats[e]}}))}},methods:{getValueColor:function(t){return t<0?"red":"success"},formatValue:function(t){var e=t.value;switch(t.name){case"sum":e=this.usCurrency.format(t.value)}return e}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.stats?n("v-card",{staticClass:"mb-3"},[n("v-data-table",{attrs:{headers:t.headers,items:t.statsArray,"hide-default-header":"","hide-default-footer":""},scopedSlots:t._u([{key:"item.value",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{color:t.getValueColor(r.value),dard:""}},[t._v(t._s(t.formatValue(r)))])]}}],null,!1,2261803704)})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},201:function(t,e,n){"use strict";n.r(e);n(80);var r={name:"date-window",props:[],data:function(){return{dateRange:["*","*"],from:"",fromPicker:"",to:"",toPicker:""}},computed:{},methods:{handleAbsoluteDates:function(){this.dateRange=[this.from+"T00:00:00Z",this.to+"T00:00:00Z"],this.$emit("dates-change",this.dateRange)},handleCleanDates:function(){this.from="",this.to="",this.dateRange=["*","*"],this.$emit("dates-change",this.dateRange)},handleToday:function(){this.from=this.to=(new Date).toISOString().split("T")[0],this.handleAbsoluteDates()}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panels",{attrs:{dense:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Date Window")]),n("v-expansion-panel-content",[n("v-menu",{ref:"fromPicker",attrs:{"close-on-content-click":!1,"return-value":t.from,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.from=e},"update:return-value":function(e){t.from=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({staticClass:"py-0",attrs:{label:"FROM","prepend-icon":"mdi-calendar-range",readonly:""},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}},r))]}}]),model:{value:t.fromPicker,callback:function(e){t.fromPicker=e},expression:"fromPicker"}},[n("v-date-picker",{attrs:{scrollable:"",color:"green lighten-1"},on:{"click:date":function(e){return t.$refs.fromPicker.save(t.from)}},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),n("v-menu",{ref:"toPicker",attrs:{"close-on-content-click":!1,"return-value":t.to,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.to=e},"update:return-value":function(e){t.to=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({staticClass:"py-0",attrs:{label:"TO","prepend-icon":"mdi-calendar-range",readonly:""},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}},r))]}}]),model:{value:t.toPicker,callback:function(e){t.toPicker=e},expression:"toPicker"}},[n("v-date-picker",{attrs:{scrollable:"",color:"green lighten-1"},on:{"click:date":function(e){return t.$refs.toPicker.save(t.to)}},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1),n("v-btn",{attrs:{dark:"",color:"success"},on:{click:t.handleAbsoluteDates}},[n("v-icon",[t._v("mdi-check")])],1),n("v-btn",{attrs:{dark:"",color:"error"},on:{click:t.handleCleanDates}},[n("v-icon",[t._v("mdi-calendar-remove")])],1),n("v-btn",{attrs:{dark:"",color:"primary"},on:{click:t.handleToday}},[n("v-icon",[t._v("mdi-calendar-today")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},205:function(t,e,n){"use strict";var r=n(196);n.n(r).a},206:function(t,e,n){var r=n(62);(t.exports=r(!1)).push([t.i,"",""])},213:function(t,e,n){"use strict";n.r(e);n(80);var r=n(35),o=n.n(r),c=(n(13),n(8),n(33),n(188),{baseUrl:"https://dev29983.sites.leocorn.com/solr/",get searchEndPoint(){return this.baseUrl+"stocks/select"},get updateEndPoint(){return this.baseUrl+"stocks/update/json/docs?commit=true"},transactionValue:function(t){var e=9.95;switch(t.action){case"Buy":e=-t.quantity*t.price-e;break;case"Sell":e=t.quantity*t.price-e}return e},addTransaction:function(t,e,n,symbol,r,c,l,f){var d=this,v={id:Date.now(),account:t,when:new Date(e),action:n,symbol:symbol,price:r,quantity:c};o.a.post(this.updateEndPoint,v).then((function(t){l.resetFields(),d.getTransactions(l,0),f&&f(t)})).catch((function(t){console.error("Failed to post",t),f&&f(null,t)}))},removeTransaction:function(t,e,n){var r=this;t.remove="true",o.a.post(this.updateEndPoint,t).then((function(t){r.getTransactions(e,0),n&&n(t)})).catch((function(t){console.error("Failed to post",t),n&&n(null,t)}))},getTransactions:function(t,e,n){var r=this,filter='account:"'+t.$auth.user.email+'"||remove:false';filter=filter+"||when:["+t.dateRange.join(" TO ")+"]",""!=t.filterQuery&&(filter=filter+"||"+t.filterQuery);var c={query:"*:*",params:{rows:t.perPage,start:e,sort:"when desc",fq:filter.split("||"),facet:"on","facet.limit":-1,"facet.field":["symbol"],stats:"true","stats.field":["{!func key=summary sum=true count=true}sub(product(if(eq(action,'Buy'), -1, 1),quantity,price), 9.95)","{!func key=total sum=true count=true}product(if(eq(action,'Buy'), -1, 1),quantity)"]}};o.a.post(this.searchEndPoint,c).then((function(e){t.transactions=e.data.response.docs,console.log(e.data.stats),t.summary=e.data.stats.stats_fields.summary,t.summary.total=e.data.stats.stats_fields.total.sum,e.data.hasOwnProperty("facet_counts")&&(t.facets=r.getReadyFacets(e.data.facet_counts.facet_fields)),n&&n(e.data.response.numFound,e.data.response.docs)})).catch((function(t){}))},getReadyFacets:function(t){var e=[];return Object.keys(t).forEach((function(n){for(var r=t[n],o=[],i=0;i<r.length;i+=2)r[i+1]<1||o.push({value:r[i],count:r[i+1]});var c={label:n,name:n,buckets:o};e.push(c)})),e},processBucketSelect:function(t,e,n){var r=t+':"'+e+'"';n.filterQuery=""===n.filterQuery?r:n.filterQuery+"||"+r,this.getTransactions(n,0)},processRelativeDaySelect:function(t,e){},updateDateRange:function(t,e){}}),l=n(191),f=n(192),d=n(200),v=n(201),h={auth:!1,layout:"vuetify",components:{"facet-buckets":l.default,"query-filters":f.default,"date-window":v.default,stats:d.default},data:function(){return{valid:!0,menu:"",when:(new Date).toISOString().split("T")[0],action:"Buy",symbol:"",quantity:0,quantityRules:[function(t){return!!t||"Quantity is required"},function(t){return/^\d+$/.test(t)||"Quantity must be integer"}],price:0,priceRules:[function(t){return!!t||"Price is required"},function(t){return/^[0-9]*\.[0-9]+$/.test(t)||"Price must be float"}],perPage:100,summary:null,format:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),headers:[{text:"Date",value:"when"},{text:"Action",value:"action"},{text:"Symbol",value:"symbol"},{text:"Quantity",value:"quantity"},{text:"Price",value:"price"},{text:"Value",value:"value",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],transactions:[{when:"2020-01-25",action:"Buy",symbol:"MRNA",quantity:14e3,price:21.4}],facets:null,filterQuery:"",dateRange:["*","*"]}},created:function(){this.$auth.loggedIn&&c.getTransactions(this,0)},computed:{filters:function(){return""===this.filterQuery?null:this.filterQuery.split("||")}},methods:{addTransaction:function(){var t={when:this.when,action:this.action,symbol:this.symbol,quantity:this.quantity,price:this.price};this.$auth.loggedIn?c.addTransaction(this.$auth.user.email,this.when,this.action,this.symbol,this.price,this.quantity,this):(this.transactions.push(t),this.resetFields())},handleBucketSelect:function(t,e){c.processBucketSelect(t,e,this)},removeFilter:function(filter){var t=this.filterQuery.split("||").filter((function(t){return t!=filter}));this.filterQuery=t.join("||"),c.getTransactions(this,0)},resetFields:function(){this.when=(new Date).toISOString().split("T")[0],this.action="",this.symbol="",this.quantity=0,this.price=0},editItem:function(t){console.log("edit",t)},deleteItem:function(t){c.removeTransaction(t,this)},transactionValue:function(t){return this.format.format(c.transactionValue(t))},handleDatesChange:function(t){this.dateRange=t,c.getTransactions(this,0)}}},m=(n(205),n(14)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("h2",[t._v("Add Transaction:")]),n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.when,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.when=e},"update:return-value":function(e){t.when=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({attrs:{label:"Pick the date","prepend-icon":"mdi-calendar-range",readonly:""},model:{value:t.when,callback:function(e){t.when=e},expression:"when"}},r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{attrs:{scrollable:"",color:"green lighten-1"},on:{"click:date":function(e){return t.$refs.menu.save(t.when)}},model:{value:t.when,callback:function(e){t.when=e},expression:"when"}})],1)],1),n("v-col",{attrs:{cols:"2"}},[n("v-select",{attrs:{label:"Action:",items:["Buy","Sell"],rules:[function(t){return!!t||"Action is required"}],required:""},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{label:"Symbol:",rules:[function(t){return!!t||"Symbol is required"}],required:""},model:{value:t.symbol,callback:function(e){t.symbol=e},expression:"symbol"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{label:"Quantity:",rules:t.quantityRules,required:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{label:"Price / Share:",rules:t.priceRules,required:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.addTransaction}},[t._v("Add")]),n("v-btn",{attrs:{color:"primary"}},[t._v("Settings")])],1)],1)],1),n("h2",[t._v("Transaction History:")]),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"3"}},[n("date-window",{on:{"dates-change":t.handleDatesChange}}),n("query-filters",{attrs:{filters:t.filters},on:{"filter-select":t.removeFilter}}),n("stats",{attrs:{stats:t.summary}}),n("facet-buckets",{attrs:{facets:t.facets},on:{"bucket-select":t.handleBucketSelect}})],1),n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-data-table",{attrs:{headers:t.headers,items:t.transactions,"items-per-page":t.perPage,dense:"","hide-default-footer":""},scopedSlots:t._u([{key:"item.actions",fn:function(e){var r=e.item;return[n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v("mdi-delete")])]}},{key:"item.value",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{color:"Buy"===r.action?"error":"success",dark:""}},[t._v(t._s(t.transactionValue(r)))])]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);