(window.webpackJsonp=window.webpackJsonp||[]).push([[19,10,11,13,15],{188:function(t,e,n){"use strict";n.r(e);var r={name:"facet-buckets",props:["facets"],methods:{bucketValue:function(t){return console.log(t),t}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panels",t._l(t.facets,(function(e,r){return e.buckets.length>1?n("v-expansion-panel",{key:"facet-"+r,class:{"grey lighten-2":r%2==0}},[n("v-expansion-panel-header",[t._v(t._s(e.name)+" - "+t._s(e.buckets.length))]),n("v-expansion-panel-content",[n("v-list",{class:{"grey lighten-2":r%2==0}},[n("v-list-item-group",t._l(e.buckets,(function(r,i){return n("v-list-item",{key:"bucket-"+i,on:{click:function(n){return t.$emit("bucket-select",e.name,r.value)}}},[n("v-list-item-content",[t._v(t._s(r.value))]),n("v-list-item-action",[n("v-list-item-action-text",[t._v(t._s(r.count))])],1)],1)})),1)],1)],1)],1):t._e()})),1)}),[],!1,null,null,null);e.default=component.exports},189:function(t,e,n){"use strict";n.r(e);var r={name:"query-filters",props:["filters"],computed:{}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.filters?n("v-card",{staticClass:"mb-3"},[n("v-list",{staticClass:"indigo lighten-4"},[n("v-subheader",[t._v("Filters")]),n("v-list-item-group",t._l(t.filters,(function(filter,i){return n("v-list-item",{key:"filter-"+i,on:{click:function(e){return t.$emit("filter-select",filter)}}},[n("v-list-item-content",[t._v(t._s(filter.replace(":",": ")))]),n("v-list-item-action",[n("v-list-item-action-text",[t._v("X")])],1)],1)})),1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports},194:function(t,e,n){"use strict";n.r(e);n(34),n(13),n(8),n(33);var r={name:"stats",props:["stats"],data:function(){return{headers:[{text:"name",value:"name"},{text:"value",value:"value"}],usCurrency:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"})}},computed:{statsArray:function(){var t=this;return Object.keys(this.stats).map((function(e){return{name:e,value:t.stats[e]}}))}},methods:{getValueColor:function(t){return t<0?"error":"success"},formatValue:function(t){var e=t.value;switch(t.name){case"sum":case"perShare":e=this.usCurrency.format(t.value)}return e}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.stats?n("v-card",{staticClass:"mb-3"},[n("v-data-table",{attrs:{headers:t.headers,items:t.statsArray,"hide-default-header":"","hide-default-footer":""},scopedSlots:t._u([{key:"item.value",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{color:t.getValueColor(r.value),dark:""}},[t._v(t._s(t.formatValue(r)))])]}}],null,!1,1888273335)})],1):t._e()}),[],!1,null,null,null);e.default=component.exports},195:function(t,e,n){"use strict";n.r(e);n(80);var r={name:"date-window",props:[],data:function(){return{dateRange:["*","*"],from:"",fromPicker:"",to:"",toPicker:""}},computed:{},methods:{handleAbsoluteDates:function(){var t=""===this.from?"*":this.from+"T00:00:00Z",e=""===this.to?"*":this.to+"T00:00:00Z";this.dateRange=[t,e],this.$emit("dates-change",this.dateRange)},handleCleanDates:function(){this.from="",this.to="",this.dateRange=["*","*"],this.$emit("dates-change",this.dateRange)},handleToday:function(){this.from=this.to=(new Date).toISOString().split("T")[0],this.handleAbsoluteDates()}}},o=n(14),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-expansion-panels",{attrs:{dense:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("Date Window")]),n("v-expansion-panel-content",[n("v-menu",{ref:"fromPicker",attrs:{"close-on-content-click":!1,"return-value":t.from,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.from=e},"update:return-value":function(e){t.from=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({staticClass:"py-0",attrs:{label:"FROM","prepend-icon":"mdi-calendar-range",readonly:""},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}},r))]}}]),model:{value:t.fromPicker,callback:function(e){t.fromPicker=e},expression:"fromPicker"}},[n("v-date-picker",{attrs:{scrollable:"",color:"green lighten-1"},on:{"click:date":function(e){return t.$refs.fromPicker.save(t.from)}},model:{value:t.from,callback:function(e){t.from=e},expression:"from"}})],1),n("v-menu",{ref:"toPicker",attrs:{"close-on-content-click":!1,"return-value":t.to,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.to=e},"update:return-value":function(e){t.to=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({staticClass:"py-0",attrs:{label:"TO","prepend-icon":"mdi-calendar-range",readonly:""},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}},r))]}}]),model:{value:t.toPicker,callback:function(e){t.toPicker=e},expression:"toPicker"}},[n("v-date-picker",{attrs:{scrollable:"",color:"green lighten-1"},on:{"click:date":function(e){return t.$refs.toPicker.save(t.to)}},model:{value:t.to,callback:function(e){t.to=e},expression:"to"}})],1),n("v-btn",{attrs:{dark:"",color:"success"},on:{click:t.handleAbsoluteDates}},[n("v-icon",[t._v("mdi-check")])],1),n("v-btn",{attrs:{dark:"",color:"error"},on:{click:t.handleCleanDates}},[n("v-icon",[t._v("mdi-calendar-remove")])],1),n("v-btn",{attrs:{dark:"",color:"primary"},on:{click:t.handleToday}},[n("v-icon",[t._v("mdi-calendar-today")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},200:function(t,e,n){var content=n(213);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(63).default)("5ae614ec",content,!1,{sourceMap:!1})},212:function(t,e,n){"use strict";var r=n(200);n.n(r).a},213:function(t,e,n){var r=n(62);(t.exports=r(!1)).push([t.i,"",""])},222:function(t,e,n){"use strict";n.r(e);n(80),n(13),n(8),n(33);var r=n(35),o=n.n(r),c={baseUrl:"https://dev29983.sites.leocorn.com/solr/",get searchEndPoint(){return this.baseUrl+"stocks/select"},get updateEndPoint(){return this.baseUrl+"stocks/update/json/docs?commit=true"},transactionValue:function(t){var e=9.95;switch(t.action){case"Buy":e=-t.quantity*t.price-e;break;case"Sell":e=t.quantity*t.price-e}return e},addTransaction:function(t,e,n,symbol,r,c,l,d){var f=this,m={id:Date.now(),account:t,when:new Date(e),action:n,symbol:symbol,price:r,quantity:c};o.a.post(this.updateEndPoint,m).then((function(t){l.resetFields(),f.getTransactions(l,0),d&&d(t)})).catch((function(t){console.error("Failed to post",t),d&&d(null,t)}))},removeTransaction:function(t,e,n){var r=this;t.remove="true",o.a.post(this.updateEndPoint,t).then((function(t){r.getTransactions(e,0),n&&n(t)})).catch((function(t){console.error("Failed to post",t),n&&n(null,t)}))},getTransactions:function(t,e,n){var r=this,filter='account:"'+t.$auth.user.email+'"||remove:false';filter=filter+"||when:["+t.dateRange.join(" TO ")+"]",""!=t.filterQuery&&(filter=filter+"||"+t.filterQuery);var c={query:"*:*",params:{rows:t.perPage,start:e,sort:"_created_ desc",fq:filter.split("||"),facet:"on","facet.limit":-1,"facet.field":["symbol"],stats:"true","stats.field":["{!func key=summary sum=true count=true}sub(product(if(eq(action,'Buy'), -1, 1),quantity,price), 9.95)","{!func key=total sum=true count=true}product(if(eq(action,'Buy'), -1, 1),quantity)"]}};o.a.post(this.searchEndPoint,c).then((function(e){t.transactions=e.data.response.docs,t.summary=e.data.stats.stats_fields.summary,t.summary.total=e.data.stats.stats_fields.total.sum,t.summary.perShare=t.summary.sum/t.summary.total,e.data.hasOwnProperty("facet_counts")&&(t.facets=r.getReadyFacets(e.data.facet_counts.facet_fields)),n&&n(e.data.response.numFound,e.data.response.docs)})).catch((function(t){}))},getReadyFacets:function(t){var e=[];return Object.keys(t).forEach((function(n){for(var r=t[n],o=[],i=0;i<r.length;i+=2)r[i+1]<1||o.push({value:r[i],count:r[i+1]});var c={label:n,name:n,buckets:o};e.push(c)})),e},processBucketSelect:function(t,e,n){var r=t+':"'+e+'"';n.filterQuery=""===n.filterQuery?r:n.filterQuery+"||"+r,this.getTransactions(n,0)},processRelativeDaySelect:function(t,e){},updateDateRange:function(t,e){}},l=n(188),d=n(189),f=n(194),m=n(195),v={auth:!1,layout:"vuetify",components:{"facet-buckets":l.default,"query-filters":d.default,"date-window":m.default,stats:f.default},data:function(){return{valid:!0,menu:"",when:(new Date).toISOString().split("T")[0],action:"Buy",symbol:"",quantity:0,quantityRules:[function(t){return!!t||"Quantity is required"},function(t){return/^\d+$/.test(t)||"Quantity must be integer"}],price:0,priceRules:[function(t){return!!t||"Price is required"},function(t){return/^[0-9]*\.[0-9]+$/.test(t)||"Price must be float"}],perPage:100,summary:null,format:new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),headers:[{text:"Date",value:"when"},{text:"Action",value:"action"},{text:"Symbol",value:"symbol"},{text:"Quantity",value:"quantity"},{text:"Price",value:"price"},{text:"Value",value:"value",sortable:!1},{text:"Actions",value:"actions",sortable:!1}],transactions:[{when:"2020-01-25",action:"Buy",symbol:"MRNA",quantity:14e3,price:21.4}],facets:null,filterQuery:"",dateRange:["*","*"]}},created:function(){this.$auth.loggedIn&&c.getTransactions(this,0)},computed:{filters:function(){return""===this.filterQuery?null:this.filterQuery.split("||")}},methods:{addTransaction:function(){var t={when:this.when,action:this.action,symbol:this.symbol,quantity:this.quantity,price:this.price};this.$auth.loggedIn?c.addTransaction(this.$auth.user.email,this.when,this.action,this.symbol,this.price,this.quantity,this):(this.transactions.push(t),this.resetFields())},handleBucketSelect:function(t,e){c.processBucketSelect(t,e,this)},removeFilter:function(filter){var t=this.filterQuery.split("||").filter((function(t){return t!=filter}));this.filterQuery=t.join("||"),c.getTransactions(this,0)},resetFields:function(){this.when=(new Date).toISOString().split("T")[0],this.action="",this.symbol="",this.quantity=0,this.price=0},editItem:function(t){console.log("edit",t)},deleteItem:function(t){c.removeTransaction(t,this)},transactionValue:function(t){return this.format.format(c.transactionValue(t))},handleDatesChange:function(t){this.dateRange=t,c.getTransactions(this,0)}}},h=(n(212),n(14)),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{"grid-list-xs":""}},[n("h2",[t._v("Add Transaction:")]),n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-row",[n("v-col",{attrs:{cols:"2"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.when,transition:"scale-transition","offset-y":"","min-width":"290px"},on:{"update:returnValue":function(e){t.when=e},"update:return-value":function(e){t.when=e}},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("v-text-field",t._g({attrs:{label:"Pick the date","prepend-icon":"mdi-calendar-range",readonly:""},model:{value:t.when,callback:function(e){t.when=e},expression:"when"}},r))]}}]),model:{value:t.menu,callback:function(e){t.menu=e},expression:"menu"}},[n("v-date-picker",{attrs:{scrollable:"",color:"green lighten-1"},on:{"click:date":function(e){return t.$refs.menu.save(t.when)}},model:{value:t.when,callback:function(e){t.when=e},expression:"when"}})],1)],1),n("v-col",{attrs:{cols:"2"}},[n("v-select",{attrs:{label:"Action:",items:["Buy","Sell"],rules:[function(t){return!!t||"Action is required"}],required:""},model:{value:t.action,callback:function(e){t.action=e},expression:"action"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{label:"Symbol:",rules:[function(t){return!!t||"Symbol is required"}],required:""},model:{value:t.symbol,callback:function(e){t.symbol=e},expression:"symbol"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{label:"Quantity:",rules:t.quantityRules,required:""},model:{value:t.quantity,callback:function(e){t.quantity=e},expression:"quantity"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-text-field",{attrs:{label:"Price / Share:",rules:t.priceRules,required:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}})],1),n("v-col",{attrs:{cols:"2"}},[n("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.addTransaction}},[t._v("Add")]),n("v-btn",{attrs:{color:"primary"}},[t._v("Settings")])],1)],1)],1),n("h2",[t._v("Transaction History:")]),n("v-layout",{attrs:{row:"",wrap:""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"3"}},[n("date-window",{on:{"dates-change":t.handleDatesChange}}),n("query-filters",{attrs:{filters:t.filters},on:{"filter-select":t.removeFilter}}),n("stats",{attrs:{stats:t.summary}}),n("facet-buckets",{attrs:{facets:t.facets},on:{"bucket-select":t.handleBucketSelect}})],1),n("v-col",{attrs:{cols:"12",md:"9"}},[n("v-data-table",{attrs:{headers:t.headers,items:t.transactions,"items-per-page":t.perPage,dense:"","hide-default-footer":""},scopedSlots:t._u([{key:"item.actions",fn:function(e){var r=e.item;return[n("v-icon",{attrs:{small:""},on:{click:function(e){return t.deleteItem(r)}}},[t._v("mdi-delete")])]}},{key:"item.when",fn:function(e){var n=e.item;return[t._v(t._s(n.when.split("T")[0]))]}},{key:"item.value",fn:function(e){var r=e.item;return[n("v-chip",{attrs:{color:"Buy"===r.action?"error":"success",dark:""}},[t._v(t._s(t.transactionValue(r)))])]}}])})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);