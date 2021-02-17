/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[48,40,41,43],{226:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],i=0;i<e.length;i++)t.push(255&e.charCodeAt(i));return t},bytesToString:function(e){for(var t=[],i=0;i<e.length;i++)t.push(String.fromCharCode(e[i]));return t.join("")}}};e.exports=r},229:function(e,t,r){var l,n,o,c,d;l=r(230),n=r(226).utf8,o=r(231),c=r(226).bin,(d=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?c.stringToBytes(e):n.stringToBytes(e):o(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||e.constructor===Uint8Array||(e=e.toString());for(var r=l.bytesToWords(e),f=8*e.length,a=1732584193,b=-271733879,v=-1732584194,h=271733878,i=0;i<r.length;i++)r[i]=16711935&(r[i]<<8|r[i]>>>24)|4278255360&(r[i]<<24|r[i]>>>8);r[f>>>5]|=128<<f%32,r[14+(f+64>>>9<<4)]=f;var m=d._ff,y=d._gg,_=d._hh,x=d._ii;for(i=0;i<r.length;i+=16){var k=a,w=b,P=v,dd=h;a=m(a,b,v,h,r[i+0],7,-680876936),h=m(h,a,b,v,r[i+1],12,-389564586),v=m(v,h,a,b,r[i+2],17,606105819),b=m(b,v,h,a,r[i+3],22,-1044525330),a=m(a,b,v,h,r[i+4],7,-176418897),h=m(h,a,b,v,r[i+5],12,1200080426),v=m(v,h,a,b,r[i+6],17,-1473231341),b=m(b,v,h,a,r[i+7],22,-45705983),a=m(a,b,v,h,r[i+8],7,1770035416),h=m(h,a,b,v,r[i+9],12,-1958414417),v=m(v,h,a,b,r[i+10],17,-42063),b=m(b,v,h,a,r[i+11],22,-1990404162),a=m(a,b,v,h,r[i+12],7,1804603682),h=m(h,a,b,v,r[i+13],12,-40341101),v=m(v,h,a,b,r[i+14],17,-1502002290),a=y(a,b=m(b,v,h,a,r[i+15],22,1236535329),v,h,r[i+1],5,-165796510),h=y(h,a,b,v,r[i+6],9,-1069501632),v=y(v,h,a,b,r[i+11],14,643717713),b=y(b,v,h,a,r[i+0],20,-373897302),a=y(a,b,v,h,r[i+5],5,-701558691),h=y(h,a,b,v,r[i+10],9,38016083),v=y(v,h,a,b,r[i+15],14,-660478335),b=y(b,v,h,a,r[i+4],20,-405537848),a=y(a,b,v,h,r[i+9],5,568446438),h=y(h,a,b,v,r[i+14],9,-1019803690),v=y(v,h,a,b,r[i+3],14,-187363961),b=y(b,v,h,a,r[i+8],20,1163531501),a=y(a,b,v,h,r[i+13],5,-1444681467),h=y(h,a,b,v,r[i+2],9,-51403784),v=y(v,h,a,b,r[i+7],14,1735328473),a=_(a,b=y(b,v,h,a,r[i+12],20,-1926607734),v,h,r[i+5],4,-378558),h=_(h,a,b,v,r[i+8],11,-2022574463),v=_(v,h,a,b,r[i+11],16,1839030562),b=_(b,v,h,a,r[i+14],23,-35309556),a=_(a,b,v,h,r[i+1],4,-1530992060),h=_(h,a,b,v,r[i+4],11,1272893353),v=_(v,h,a,b,r[i+7],16,-155497632),b=_(b,v,h,a,r[i+10],23,-1094730640),a=_(a,b,v,h,r[i+13],4,681279174),h=_(h,a,b,v,r[i+0],11,-358537222),v=_(v,h,a,b,r[i+3],16,-722521979),b=_(b,v,h,a,r[i+6],23,76029189),a=_(a,b,v,h,r[i+9],4,-640364487),h=_(h,a,b,v,r[i+12],11,-421815835),v=_(v,h,a,b,r[i+15],16,530742520),a=x(a,b=_(b,v,h,a,r[i+2],23,-995338651),v,h,r[i+0],6,-198630844),h=x(h,a,b,v,r[i+7],10,1126891415),v=x(v,h,a,b,r[i+14],15,-1416354905),b=x(b,v,h,a,r[i+5],21,-57434055),a=x(a,b,v,h,r[i+12],6,1700485571),h=x(h,a,b,v,r[i+3],10,-1894986606),v=x(v,h,a,b,r[i+10],15,-1051523),b=x(b,v,h,a,r[i+1],21,-2054922799),a=x(a,b,v,h,r[i+8],6,1873313359),h=x(h,a,b,v,r[i+15],10,-30611744),v=x(v,h,a,b,r[i+6],15,-1560198380),b=x(b,v,h,a,r[i+13],21,1309151649),a=x(a,b,v,h,r[i+4],6,-145523070),h=x(h,a,b,v,r[i+11],10,-1120210379),v=x(v,h,a,b,r[i+2],15,718787259),b=x(b,v,h,a,r[i+9],21,-343485551),a=a+k>>>0,b=b+w>>>0,v=v+P>>>0,h=h+dd>>>0}return l.endian([a,b,v,h])})._ff=function(a,b,e,t,r,s,l){var n=a+(b&e|~b&t)+(r>>>0)+l;return(n<<s|n>>>32-s)+b},d._gg=function(a,b,e,t,r,s,l){var n=a+(b&t|e&~t)+(r>>>0)+l;return(n<<s|n>>>32-s)+b},d._hh=function(a,b,e,t,r,s,l){var n=a+(b^e^t)+(r>>>0)+l;return(n<<s|n>>>32-s)+b},d._ii=function(a,b,e,t,r,s,l){var n=a+(e^(b|~t))+(r>>>0)+l;return(n<<s|n>>>32-s)+b},d._blocksize=16,d._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=l.wordsToBytes(d(e,t));return t&&t.asBytes?r:t&&t.asString?c.bytesToString(r):l.bytesToHex(r)}},230:function(e,t){var r,l;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l={rotl:function(e,b){return e<<b|e>>>32-b},rotr:function(e,b){return e<<32-b|e>>>b},endian:function(e){if(e.constructor==Number)return 16711935&l.rotl(e,8)|4278255360&l.rotl(e,24);for(var i=0;i<e.length;i++)e[i]=l.endian(e[i]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],i=0,b=0;i<e.length;i++,b+=8)t[b>>>5]|=e[i]<<24-b%32;return t},wordsToBytes:function(e){for(var t=[],b=0;b<32*e.length;b+=8)t.push(e[b>>>5]>>>24-b%32&255);return t},bytesToHex:function(e){for(var t=[],i=0;i<e.length;i++)t.push((e[i]>>>4).toString(16)),t.push((15&e[i]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],i=0;i<e.length;i+=3)for(var l=e[i]<<16|e[i+1]<<8|e[i+2],n=0;n<4;n++)8*i+6*n<=8*e.length?t.push(r.charAt(l>>>6*(3-n)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],i=0,l=0;i<e.length;l=++i%4)0!=l&&t.push((r.indexOf(e.charAt(i-1))&Math.pow(2,-2*l+8)-1)<<2*l|r.indexOf(e.charAt(i))>>>6-2*l);return t}},e.exports=l},231:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},234:function(e,t,r){"use strict";r.r(t);var l={name:"facet-buckets",props:["facets"],methods:{bucketValue:function(e){return console.log(e),e}}},n=r(6),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-expansion-panels",e._l(e.facets,(function(t,l){return t.buckets.length>1?r("v-expansion-panel",{key:"facet-"+l,class:{"grey lighten-2":l%2==0}},[r("v-expansion-panel-header",[e._v(e._s(t.name)+" - "+e._s(t.buckets.length))]),r("v-expansion-panel-content",[r("v-list",{class:{"grey lighten-2":l%2==0}},[r("v-list-item-group",e._l(t.buckets,(function(l,i){return r("v-list-item",{key:"bucket-"+i,on:{click:function(r){return e.$emit("bucket-select",t.name,l.value)}}},[r("v-list-item-content",[e._v(e._s(l.value))]),r("v-list-item-action",[r("v-list-item-action-text",[e._v(e._s(l.count))])],1)],1)})),1)],1)],1)],1):e._e()})),1)}),[],!1,null,null,null);t.default=component.exports},235:function(e,t,r){"use strict";r.r(t);var l={name:"query-filters",props:["filters"],computed:{}},n=r(6),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.filters?r("v-card",{staticClass:"mb-3"},[r("v-list",{staticClass:"indigo lighten-4"},[r("v-subheader",[e._v("Filters")]),r("v-list-item-group",e._l(e.filters,(function(filter,i){return r("v-list-item",{key:"filter-"+i,on:{click:function(t){return e.$emit("filter-select",filter)}}},[r("v-list-item-content",[e._v(e._s(filter.replace(":",": ")))]),r("v-list-item-action",[r("v-list-item-action-text",[e._v("X")])],1)],1)})),1)],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports},321:function(e,t,r){"use strict";r.r(t);r(74);var l={name:"listing-preview",props:{doc:Object,index:Number,idFieldName:{type:String,default:"id"},thePage:Object},computed:{previewThumbnail:function(){return this.doc.hasOwnProperty("img.uri.thumbnail")?this.doc["img.uri.thumbnail"][0]:"no image"},previewTitle:function(){return this.doc.title},previewDesc:function(){return this.doc.teaser}},data:function(){return{showCarousels:!1}},methods:{showSlides:function(){console.log(this.doc)}}},n=r(6),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mb-2"},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-avatar",{attrs:{size:"180",tile:""}},[r("v-img",{attrs:{src:e.previewThumbnail,"max-width":"180"},on:{click:function(t){t.stopPropagation(),e.showCarousels=!0}}})],1),r("div",[r("v-card-title",[e._v(e._s(e.previewTitle))]),r("v-card-text",[e._v(e._s(e.previewDesc))])],1)],1),r("v-dialog",{attrs:{"max-width":"860"},model:{value:e.showCarousels,callback:function(t){e.showCarousels=t},expression:"showCarousels"}},[r("v-carousel",{attrs:{height:"600"}},e._l(e.doc["img.uri.preview"],(function(e,i){return r("v-carousel-item",{key:i,attrs:{src:e}})})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},420:function(e,t,r){"use strict";r.r(t);r(57),r(17);var l=r(26),n=(r(14),r(9),r(37),r(45),r(46),r(91),r(43)),o=r.n(n),c=(r(16),r(229)),d=r.n(c),f={baseUrl:"https://dev29983.sites.leocorn.com/solr/",get profileUrl(){return this.baseUrl+"profiles/"},getAllProfiles:function(e,t){var r=this,l={query:'account:"'+e.$auth.user.email+'"',params:{fl:"id,name,description",sort:"_modified_ desc"}};o.a.post(r.profileUrl+"select",l).then((function(l){e.allProfiles=l.data.response.docs,r.loadProfile2Page(l.data.response.docs[0],e),t&&t(l.data.response.docs)})).catch((function(e){console.error(e),t&&t(null,e)}))},getProfile:function(e,t,r){var l=this,n={query:"id:"+e};o.a.post(this.profileUrl+"select",n).then((function(e){l.loadProfile2Page(e.data.response.docs[0],t),r&&r(e.data.response.docs[0])})).catch((function(e){console.log(e),r&&r(null,e)}))},simpleFields:["query","rows","sort","start"],loadProfile2Page:function(e,t){var r=this;t.profileId=e.id,t.profileName=e.name,t.profileDesc=e.description;var l={query:'id:"'+e.id+'"'};o.a.post(r.profileUrl+"select",l).then((function(e){var l=e.data.response.docs[0];t.collectionUrl=l.query_endpoint;var n=JSON.parse(l.query_params);r.getAllFields(t),t.query=n.query,r.simpleFields.forEach((function(e){n.params.hasOwnProperty(e)&&(t[e]=n.params[e])})),r.loadFilterQuery(n.params,t),r.loadFieldList(n.params,t),r.loadFacetFields(n.params,t),t.simpleSearch()}))},loadFilterQuery:function(e,t){e.hasOwnProperty("fq")?t.filterQuery=e.fq.join("||"):t.filterQuery=""},loadFieldList:function(e,t){e.hasOwnProperty("fl")?t.fieldList=e.fl:t.fieldList=[]},loadFacetFields:function(e,t){e.hasOwnProperty("facet.field")?t.facetFields=e["facet.field"]:t.facetFields=[]},updateProfile:function(e,t,r){var l=this,n={id:d()(e.profileName+e.$auth.user.email),name:e.profileName,description:e.profileDesc,account:e.$auth.user.email,query_endpoint:e.collectionUrl,query_params:JSON.stringify(t),_modified_:null},c=this.profileUrl+"update/json/docs?commit=true";o.a.post(c,n).then((function(t){l.getAllProfiles(e)})).catch((function(e){console.log(e)}))},getAllFields:function(e,t){var r=e.collectionUrl+"admin/luke";o.a.get(r).then((function(r){e.allFields=Object.keys(r.data.fields),t&&t(r,null)})).catch((function(e){t&&t(null,e)}))}},v=r(321),h=r(234),m=r(235),y=(r(135),r(74),{name:"DocDataTableCard",props:{doc:{type:Object,default:{id:"abcd",name:"doc name"}},itemsPerPage:{type:Number,default:15},excludeFields:{type:Array,default:[]}},data:function(){return{headers:[{text:"Key",value:"key"},{text:"Value",value:"value"}],search:""}},computed:{tableItems:function(){var e=this,t=[];return e.doc&&(t=Object.entries(e.doc).filter((function(t){return!e.excludeFields.includes(t[0])})).map((function(e){return{key:e[0],value:e[1]}}))),t}}}),_=r(6),x=Object(_.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("v-spacer"),r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search Metadata","single-line":"","hide-details":"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{attrs:{headers:e.headers,items:e.tableItems,search:e.search,"item-key":"key","items-per-page":e.itemsPerPage},scopedSlots:e._u([{key:"item.value",fn:function(t){var l=t.item;return["file_download_url"==l.key?r("span",[r("a",{attrs:{href:l.value,target:"_blank_"}},[e._v(e._s(l.value))])]):l.key.includes("size")?r("span",[r("strong",[e._v(e._s((new Intl.NumberFormat).format(l.value)))])]):r("span",[r("strong",[e._v(e._s(l.value))])])]}}])})],1)}),[],!1,null,null,null).exports,k={name:"DocArticlesCard",props:{doc:{type:Object,default:{id:"abcd",article_titles:["title one"],article_paragraphs:["para one"]}}},data:function(){return{tab:null,headers:[{text:"Article",value:"title"},{text:"",value:"data-table-expand"}],search:"",expanded:[]}},computed:{articleTitles:function(){if(this.doc.hasOwnProperty("article_titles"))this.doc.article_titles.map((function(title){return{title:title}}));return[]}},methods:{articlePara:function(e){var t=this.doc.article_titles.indexOf(e);return this.doc.article_paragraphs[t]}}},w={name:"DocumentViewCard",components:{"doc-data-table":x,"doc-articles-card":Object(_.a)(k,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[e.articleTitles.length>1?r("v-row",[r("v-col",{attrs:{cols:"8"}},[r("v-card",[r("v-card-title",[r("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search Article","single-line":"","hide-details":"",clearable:""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),r("v-data-table",{attrs:{"hide-default-header":"","hide-default-footer":"","single-expand":!1,expanded:e.expanded,headers:e.headers,items:e.articleTitles,search:e.search,"item-key":"title","items-per-page":100,"show-expand":""},on:{"update:expanded":function(t){e.expanded=t}},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var l=t.headers,n=t.item;return[r("td",{attrs:{colspan:l.length}},[r("v-textarea",{staticClass:"pt-4",attrs:{rows:"12",filled:"",outlined:"",value:e.articlePara(n.title)}})],1)]}}],null,!1,2483064509)})],1)],1)],1):e._e()],1)}),[],!1,null,null,null).exports},props:{docId:{type:String,default:"fileid"},collUrl:{type:String,default:"https://www.example.com/search"}},data:function(){return{doc:null,tab:null}},watch:{docId:function(e,t){this.doc=null,this.loadDocument()}},mounted:function(){this.loadDocument()},methods:{loadDocument:function(){var e=this;o.a.post(e.collUrl+"select",{query:'id:"'+e.docId+'"'}).then((function(t){e.doc=t.data.response.docs[0]})).catch((function(e){console.log(e)}))}}},P=Object(_.a)(w,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-btn",{attrs:{icon:"",dark:""}},[r("v-icon",[e._v("mdi-file-document")])],1),r("v-toolbar-title",[e._v("Document Details")]),r("v-spacer"),r("v-btn",{attrs:{text:""},on:{click:function(t){return e.$emit("dialog-cancel")}}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-close")]),e._v("Close")],1)],1),r("v-card-title",[e._v(e._s(e.docId)),r("v-divider",{staticClass:"mx-4",attrs:{vertical:""}}),e.doc?r("v-btn",{attrs:{href:e.doc.file_download_url,target:"_blank_"}},[r("v-icon",{attrs:{color:"error"}},[e._v("mdi-file-pdf")]),e._v("Download")],1):e._e()],1),r("v-tabs",{attrs:{"align-with-title":""},model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tabs-slide",{attrs:{color:"primiary"}}),r("v-tab",{key:"metadata"},[e._v("Metadata")]),r("v-tab",{key:"articles"},[e._v("Articles")])],1),r("v-tabs-items",{model:{value:e.tab,callback:function(t){e.tab=t},expression:"tab"}},[r("v-tab-item",{key:"metadata"},[r("v-container",{attrs:{fluid:""}},[e.doc?r("v-row",[r("v-col",{attrs:{cols:"4"}},[r("doc-data-table",{attrs:{doc:e.doc,excludeFields:["file_content","article_titles","article_paragraphs"]}})],1),r("v-col",{attrs:{cols:"8"}},[r("v-textarea",{attrs:{rows:"32",label:"File Content",filled:"",outlined:"",value:e.doc.file_content}})],1)],1):e._e()],1)],1),r("v-tab-item",{key:"articles"},[e.doc?r("doc-articles-card",{attrs:{doc:e.doc}}):e._e()],1)],1)],1)}),[],!1,null,null,null).exports;function F(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?F(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):F(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O={auth:!0,components:{"listing-preview":v.default,"facet-buckets":h.default,"query-filters":m.default,"document-view-card":P},layout:"vuetify",name:"solrsearch",data:function(){return{settingsDialog:!1,query:"*:*",valid:!1,idField:"id",collectionUrl:"http://search.example.com",collections:[],collectionLabel:"Collection: ",allFields:["abc","cde"],facetFields:[],facetInput:null,filterQuery:"",sort:"",fieldList:["abc"],fieldListInput:null,boostQuery:"",boostFunction:"",queryFields:"",totalHits:0,totalPages:0,facets:null,stats:null,results:null,resultSummary:"",debugQuery:!1,debugExplain:null,explainItem:null,currentPage:1,perPage:15,profileRepo:"/nuxt-repo/",profileName:"local.json",profileDesc:"",allProfiles:[],docViewDialog:!1,viewItem:{id:"loading"}}},computed:{filters:function(){return""===this.filterQuery?null:this.filterQuery.split("||")},headers:function(){var e=[{text:"ID",value:"id"}];return this.fieldList.length>=1&&(e=this.fieldList.map((function(e){return{text:e,value:e}}))),e.push({text:"Actions",value:"actions"}),e},queryParams:function(){return JSON.stringify(this.buildQuery(),null,2)}},created:function(){this.$auth.loggedIn&&f.getAllProfiles(this)},methods:{simpleSearch:function(){var e=this;e.resultSummary="Searching ...",e.results=null,e.facets=null,e.stats=null,e.query||(e.query="*:*");var t=e.buildQuery();e.jeQueryParams&&(e.jeQueryParams.setMode("view"),e.jeQueryParams.set(t),e.jeQueryParams.expandAll(),e.jeQueryParams.setMode("code"));var r=e.collectionUrl+"select";o.a.post(r,t).then((function(r){e.totalHits=r.data.response.numFound,e.totalPages=Math.ceil(e.totalHits/e.perPage),e.results=r.data.response.docs,r.data.hasOwnProperty("debug")&&(e.debugExplain=r.data.debug),r.data.hasOwnProperty("facet_counts")&&(e.facets=e.getReadyFacets(r.data.facet_counts.facet_fields));var l=t.params.start;e.resultSummary="Showing "+(l+1)+" - "+Math.min(l+e.perPage,e.totalHits)+" of "+e.totalHits+" Items",e.totalHits>0&&console.log("total hits: "+e.totalHits)})).catch((function(t){e.resultSummary="Query Error!",console.log(t)}))},buildQuery:function(){var e=(this.currentPage-1)*this.perPage,t=Object.assign({rows:this.perPage,defType:"edismax",start:e,sort:this.sort,debugQuery:this.debugQuery},this.getFacetFields(),this.getFieldList(),this.getFilterQuery(),this.getBoostQuery(),this.getBoostFunction(),this.getQueryFields());return{query:this.query,params:t}},getFacetFields:function(){return this.facetFields.length<1?{}:{facet:"on","facet.limit":-1,"facet.field":this.facetFields}},getFieldList:function(){if(this.fieldList.length<1)return{};var e=this.fieldList;return e.includes(this.idField)||e.push(this.idField),{fl:e}},getBoostFunction:function(){return""===this.boostFunction?{}:{bf:this.boostFunction}},getBoostQuery:function(){return""===this.boostQuery?{}:{bq:this.boostQuery}},getQueryFields:function(){return""===this.queryFields?{}:{qf:this.queryFields}},getFilterQuery:function(){return""===this.filterQuery?{}:{fq:this.filterQuery.split("||")}},getReadyFacets:function(e){var t=[];return Object.keys(e).forEach((function(r){for(var l=e[r],n=[],i=0;i<l.length;i+=2)l[i+1]<1||n.push({value:l[i],count:l[i+1]});var o={label:r,name:r,buckets:n};t.push(o)})),t},handleSearchButton:function(){this.currentPage=1,this.simpleSearch()},handleBucketSelect:function(e,t){var r=e+':"'+t+'"';this.filterQuery=""===this.filterQuery?r:this.filterQuery+"||"+r,this.currentPage=1,this.simpleSearch()},removeFilter:function(filter){var e=this.filterQuery.split("||").filter((function(e){return e!=filter}));this.filterQuery=e.join("||"),this.currentPage=1,this.simpleSearch()},settingsCancel:function(){this.settingsDialog=!1},settingsOk:function(){this.simpleSearch(),this.settingsDialog=!1},settingsSave:function(){var e=this;console.log(e._data);var t=Object.keys(e._data).filter((function(t){return"function"!=typeof e._data[t]}));console.log(t);var r=t.reduce((function(t,r){return S(S({},t),{},Object(l.a)({},r,e._data[r]))}),{});console.log(r),console.log(JSON.stringify(r)),this.settingsDialog=!1},saveProfile:function(){var e=this.buildQuery();console.log(JSON.stringify(e)),f.updateProfile(this,e)},loadProfile:function(){var e=this,t=e.profileRepo+e.profileName;o.a.get(t).then((function(t){console.log(t.data),Object.keys(t.data).forEach((function(r){e[r]=t.data[r]}))}))},profileChange:function(e){f.getProfile(e,this)},removeFieldSelection:function(e){var t=this.fieldList.indexOf(e);t>=0&&this.fieldList.splice(t,1)},fieldSelectionChange:function(){},removeFacetSelection:function(e){var t=this.facetFields.indexOf(e);t>=0&&this.facetFields.splice(t,1)},facetSelectionChange:function(){},showItem:function(e){this.viewItem=e,this.docViewDialog=!0}}},j=Object(_.a)(O,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-xs":""}},[r("v-card",{staticClass:"d-flex flex-row",attrs:{flat:"",tile:""}},[r("v-text-field",{attrs:{outlined:"",id:"input-number",autocomplete:"off",label:"Type your query here",clearable:"","append-icon":"mdi-magnify","append-outer-icon":"mdi-cog-outline"},on:{"click:clear":e.handleSearchButton,"click:append":e.handleSearchButton,"click:append-outer":function(t){e.settingsDialog=!0},keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleSearchButton(t)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),r("v-dialog",{attrs:{"max-width":"780px",persistent:""},model:{value:e.settingsDialog,callback:function(t){e.settingsDialog=t},expression:"settingsDialog"}},[r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-toolbar-title",[e._v("Search settings")])],1),r("v-tabs",{attrs:{vertical:""}},[r("v-tab",[r("v-icon",{attrs:{left:""}},[e._v("mdi-cog-outline")])],1),r("v-tab",[r("v-icon",{attrs:{left:""}},[e._v("mdi-format-list-bulleted")])],1),r("v-tab",[r("v-icon",{attrs:{left:""}},[e._v("mdi-account")])],1),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"10"}},[r("v-autocomplete",{attrs:{label:"Pick Profile:",items:e.allProfiles,"item-text":"name","item-value":"id",dense:""},on:{change:e.profileChange},model:{value:e.profileId,callback:function(t){e.profileId=t},expression:"profileId"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"10"}},[r("v-text-field",{attrs:{label:"Solr Collection URL:",dense:""},model:{value:e.collectionUrl,callback:function(t){e.collectionUrl=t},expression:"collectionUrl"}})],1),r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-checkbox",{attrs:{label:"Debug",dense:""},model:{value:e.debugQuery,callback:function(t){e.debugQuery=t},expression:"debugQuery"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-text-field",{attrs:{label:"ID field:",dense:""},model:{value:e.idField,callback:function(t){e.idField=t},expression:"idField"}})],1),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Items Per Page:",dense:""},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1),r("v-col",{attrs:{cols:"12",md:"7"}},[r("v-text-field",{attrs:{label:"Sort:",dense:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-autocomplete",{attrs:{label:"Field List:",items:e.allFields,multiple:"","search-input":e.fieldListInput,dense:"",chips:"","small-chips":""},on:{change:e.fieldSelectionChange,input:function(t){e.fieldListInput=null},"update:searchInput":function(t){e.fieldListInput=t},"update:search-input":function(t){e.fieldListInput=t}},scopedSlots:e._u([{key:"selection",fn:function(data){return[r("v-chip",{attrs:{close:""},on:{"click:close":function(t){return e.removeFieldSelection(data.item)}}},[e._v(e._s(data.item))])]}}]),model:{value:e.fieldList,callback:function(t){e.fieldList=t},expression:"fieldList"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-autocomplete",{attrs:{label:"Facet fields:",items:e.allFields,multiple:"","search-input":e.facetInput,dense:"",chips:"","small-chips":""},on:{change:e.facetSelectionChange,input:function(t){e.facetInput=null},"update:searchInput":function(t){e.facetInput=t},"update:search-input":function(t){e.facetInput=t}},scopedSlots:e._u([{key:"selection",fn:function(data){return[r("v-chip",{attrs:{close:""},on:{"click:close":function(t){return e.removeFacetSelection(data.item)}}},[e._v(e._s(data.item))])]}}]),model:{value:e.facetFields,callback:function(t){e.facetFields=t},expression:"facetFields"}})],1)],1)],1)],1)],1)],1),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",{staticStyle:{"white-space":"pre-wrap"}},[e._v(e._s(e.queryParams))])],1)],1),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-form",[e.$auth.loggedIn?e._e():r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-text-field",{attrs:{label:"Profile Repository URL:",dense:""},model:{value:e.profileRepo,callback:function(t){e.profileRepo=t},expression:"profileRepo"}})],1),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-btn",{on:{click:e.loadProfile}},[e._v("Load")])],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-text-field",{attrs:{label:"Profile Name:",dense:""},model:{value:e.profileName,callback:function(t){e.profileName=t},expression:"profileName"}}),r("v-textarea",{attrs:{label:"Profile Description:"},model:{value:e.profileDesc,callback:function(t){e.profileDesc=t},expression:"profileDesc"}})],1),e.$auth.loggedIn?r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-btn",{on:{click:e.saveProfile}},[e._v("Save Profile")])],1):e._e()],1)],1)],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.settingsCancel}},[e._v("cancel")]),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.settingsOk}},[e._v("Ok")])],1)],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("h3",[e._v("Facets")]),r("query-filters",{attrs:{filters:e.filters},on:{"filter-select":e.removeFilter}}),r("facet-buckets",{attrs:{facets:e.facets},on:{"bucket-select":e.handleBucketSelect}})],1),r("v-col",{attrs:{cols:"12",md:"9"}},[r("h3",[e._v(e._s(e.resultSummary))]),e.results?r("v-pagination",{attrs:{length:e.totalPages,"total-visible":"10",dense:""},on:{input:e.simpleSearch},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e(),e.results?r("v-data-table",{attrs:{headers:e.headers,items:e.results,"items-per-page":e.perPage,"hide-default-footer":""},scopedSlots:e._u([{key:"item.actions",fn:function(t){var l=t.item;return[r("v-icon",{attrs:{color:"success"},on:{click:function(t){return e.showItem(l)}}},[e._v("mdi-text-box-search")])]}}],null,!1,3118929482)}):e._e(),e.results?r("v-pagination",{attrs:{length:e.totalPages,"total-visible":"10"},on:{input:e.simpleSearch},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e(),r("v-dialog",{attrs:{fullscreen:""},model:{value:e.docViewDialog,callback:function(t){e.docViewDialog=t},expression:"docViewDialog"}},[r("document-view-card",{attrs:{docId:e.viewItem.id,collUrl:e.collectionUrl},on:{"dialog-cancel":function(t){e.docViewDialog=!1}}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=j.exports}}]);