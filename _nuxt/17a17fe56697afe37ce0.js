(window.webpackJsonp=window.webpackJsonp||[]).push([[6,8,9,10],{184:function(e,t){var r={utf8:{stringToBytes:function(e){return r.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(r.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],i=0;i<e.length;i++)t.push(255&e.charCodeAt(i));return t},bytesToString:function(e){for(var t=[],i=0;i<e.length;i++)t.push(String.fromCharCode(e[i]));return t.join("")}}};e.exports=r},185:function(e,t,r){"use strict";var n=r(3),o=r(20),l=r(25),c=r(115),f=r(60),d=r(10),h=r(45).f,v=r(61).f,m=r(8).f,y=r(186).trim,_=n.Number,x=_,k=_.prototype,w="Number"==l(r(81)(k)),P="trim"in String.prototype,S=function(e){var t=f(e,!1);if("string"==typeof t&&t.length>2){var r,n,o,l=(t=P?t.trim():y(t,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=t.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(t.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+t}for(var code,c=t.slice(2),i=0,d=c.length;i<d;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+t};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof _&&(w?d((function(){k.valueOf.call(r)})):"Number"!=l(r))?c(new x(S(t)),r,_):S(t)};for(var O,F=r(6)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;F.length>I;I++)o(x,O=F[I])&&!o(_,O)&&m(_,O,v(x,O));_.prototype=k,k.constructor=_,r(11)(n,"Number",_)}},186:function(e,t,r){var n=r(5),o=r(24),l=r(10),c=r(187),f="["+c+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),v=function(e,t,r){var o={},f=l((function(){return!!c[e]()||"​"!="​"[e]()})),d=o[e]=f?t(m):c[e];r&&(o[r]=d),n(n.P+n.F*f,"String",o)},m=v.trim=function(e,t){return e=String(o(e)),1&t&&(e=e.replace(d,"")),2&t&&(e=e.replace(h,"")),e};e.exports=v},187:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},188:function(e,t,r){var n,o,l,c,f;n=r(189),o=r(184).utf8,l=r(190),c=r(184).bin,(f=function(e,t){e.constructor==String?e=t&&"binary"===t.encoding?c.stringToBytes(e):o.stringToBytes(e):l(e)?e=Array.prototype.slice.call(e,0):Array.isArray(e)||(e=e.toString());for(var r=n.bytesToWords(e),d=8*e.length,a=1732584193,b=-271733879,h=-1732584194,v=271733878,i=0;i<r.length;i++)r[i]=16711935&(r[i]<<8|r[i]>>>24)|4278255360&(r[i]<<24|r[i]>>>8);r[d>>>5]|=128<<d%32,r[14+(d+64>>>9<<4)]=d;var m=f._ff,y=f._gg,_=f._hh,x=f._ii;for(i=0;i<r.length;i+=16){var k=a,w=b,P=h,dd=v;a=m(a,b,h,v,r[i+0],7,-680876936),v=m(v,a,b,h,r[i+1],12,-389564586),h=m(h,v,a,b,r[i+2],17,606105819),b=m(b,h,v,a,r[i+3],22,-1044525330),a=m(a,b,h,v,r[i+4],7,-176418897),v=m(v,a,b,h,r[i+5],12,1200080426),h=m(h,v,a,b,r[i+6],17,-1473231341),b=m(b,h,v,a,r[i+7],22,-45705983),a=m(a,b,h,v,r[i+8],7,1770035416),v=m(v,a,b,h,r[i+9],12,-1958414417),h=m(h,v,a,b,r[i+10],17,-42063),b=m(b,h,v,a,r[i+11],22,-1990404162),a=m(a,b,h,v,r[i+12],7,1804603682),v=m(v,a,b,h,r[i+13],12,-40341101),h=m(h,v,a,b,r[i+14],17,-1502002290),a=y(a,b=m(b,h,v,a,r[i+15],22,1236535329),h,v,r[i+1],5,-165796510),v=y(v,a,b,h,r[i+6],9,-1069501632),h=y(h,v,a,b,r[i+11],14,643717713),b=y(b,h,v,a,r[i+0],20,-373897302),a=y(a,b,h,v,r[i+5],5,-701558691),v=y(v,a,b,h,r[i+10],9,38016083),h=y(h,v,a,b,r[i+15],14,-660478335),b=y(b,h,v,a,r[i+4],20,-405537848),a=y(a,b,h,v,r[i+9],5,568446438),v=y(v,a,b,h,r[i+14],9,-1019803690),h=y(h,v,a,b,r[i+3],14,-187363961),b=y(b,h,v,a,r[i+8],20,1163531501),a=y(a,b,h,v,r[i+13],5,-1444681467),v=y(v,a,b,h,r[i+2],9,-51403784),h=y(h,v,a,b,r[i+7],14,1735328473),a=_(a,b=y(b,h,v,a,r[i+12],20,-1926607734),h,v,r[i+5],4,-378558),v=_(v,a,b,h,r[i+8],11,-2022574463),h=_(h,v,a,b,r[i+11],16,1839030562),b=_(b,h,v,a,r[i+14],23,-35309556),a=_(a,b,h,v,r[i+1],4,-1530992060),v=_(v,a,b,h,r[i+4],11,1272893353),h=_(h,v,a,b,r[i+7],16,-155497632),b=_(b,h,v,a,r[i+10],23,-1094730640),a=_(a,b,h,v,r[i+13],4,681279174),v=_(v,a,b,h,r[i+0],11,-358537222),h=_(h,v,a,b,r[i+3],16,-722521979),b=_(b,h,v,a,r[i+6],23,76029189),a=_(a,b,h,v,r[i+9],4,-640364487),v=_(v,a,b,h,r[i+12],11,-421815835),h=_(h,v,a,b,r[i+15],16,530742520),a=x(a,b=_(b,h,v,a,r[i+2],23,-995338651),h,v,r[i+0],6,-198630844),v=x(v,a,b,h,r[i+7],10,1126891415),h=x(h,v,a,b,r[i+14],15,-1416354905),b=x(b,h,v,a,r[i+5],21,-57434055),a=x(a,b,h,v,r[i+12],6,1700485571),v=x(v,a,b,h,r[i+3],10,-1894986606),h=x(h,v,a,b,r[i+10],15,-1051523),b=x(b,h,v,a,r[i+1],21,-2054922799),a=x(a,b,h,v,r[i+8],6,1873313359),v=x(v,a,b,h,r[i+15],10,-30611744),h=x(h,v,a,b,r[i+6],15,-1560198380),b=x(b,h,v,a,r[i+13],21,1309151649),a=x(a,b,h,v,r[i+4],6,-145523070),v=x(v,a,b,h,r[i+11],10,-1120210379),h=x(h,v,a,b,r[i+2],15,718787259),b=x(b,h,v,a,r[i+9],21,-343485551),a=a+k>>>0,b=b+w>>>0,h=h+P>>>0,v=v+dd>>>0}return n.endian([a,b,h,v])})._ff=function(a,b,e,t,r,s,n){var o=a+(b&e|~b&t)+(r>>>0)+n;return(o<<s|o>>>32-s)+b},f._gg=function(a,b,e,t,r,s,n){var o=a+(b&t|e&~t)+(r>>>0)+n;return(o<<s|o>>>32-s)+b},f._hh=function(a,b,e,t,r,s,n){var o=a+(b^e^t)+(r>>>0)+n;return(o<<s|o>>>32-s)+b},f._ii=function(a,b,e,t,r,s,n){var o=a+(e^(b|~t))+(r>>>0)+n;return(o<<s|o>>>32-s)+b},f._blocksize=16,f._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var r=n.wordsToBytes(f(e,t));return t&&t.asBytes?r:t&&t.asString?c.bytesToString(r):n.bytesToHex(r)}},189:function(e,t){var r,n;r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n={rotl:function(e,b){return e<<b|e>>>32-b},rotr:function(e,b){return e<<32-b|e>>>b},endian:function(e){if(e.constructor==Number)return 16711935&n.rotl(e,8)|4278255360&n.rotl(e,24);for(var i=0;i<e.length;i++)e[i]=n.endian(e[i]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],i=0,b=0;i<e.length;i++,b+=8)t[b>>>5]|=e[i]<<24-b%32;return t},wordsToBytes:function(e){for(var t=[],b=0;b<32*e.length;b+=8)t.push(e[b>>>5]>>>24-b%32&255);return t},bytesToHex:function(e){for(var t=[],i=0;i<e.length;i++)t.push((e[i]>>>4).toString(16)),t.push((15&e[i]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],r=0;r<e.length;r+=2)t.push(parseInt(e.substr(r,2),16));return t},bytesToBase64:function(e){for(var t=[],i=0;i<e.length;i+=3)for(var n=e[i]<<16|e[i+1]<<8|e[i+2],o=0;o<4;o++)8*i+6*o<=8*e.length?t.push(r.charAt(n>>>6*(3-o)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],i=0,n=0;i<e.length;n=++i%4)0!=n&&t.push((r.indexOf(e.charAt(i-1))&Math.pow(2,-2*n+8)-1)<<2*n|r.indexOf(e.charAt(i))>>>6-2*n);return t}},e.exports=n},190:function(e,t){function r(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(r(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&r(e.slice(0,0))}(e)||!!e._isBuffer)}},191:function(e,t,r){"use strict";r.r(t);var n={name:"facet-buckets",props:["facets"],methods:{bucketValue:function(e){return console.log(e),e}}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-expansion-panels",e._l(e.facets,(function(t,n){return t.buckets.length>1?r("v-expansion-panel",{key:"facet-"+n,class:{"grey lighten-2":n%2==0}},[r("v-expansion-panel-header",[e._v(e._s(t.name)+" - "+e._s(t.buckets.length))]),r("v-expansion-panel-content",[r("v-list",{class:{"grey lighten-2":n%2==0}},[r("v-list-item-group",e._l(t.buckets,(function(n,i){return r("v-list-item",{key:"bucket-"+i,on:{click:function(r){return e.$emit("bucket-select",t.name,n.value)}}},[r("v-list-item-content",[e._v(e._s(n.value))]),r("v-list-item-action",[r("v-list-item-action-text",[e._v(e._s(n.count))])],1)],1)})),1)],1)],1)],1):e._e()})),1)}),[],!1,null,null,null);t.default=component.exports},192:function(e,t,r){"use strict";r.r(t);var n={name:"query-filters",props:["filters"],computed:{}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.filters?r("v-card",{staticClass:"mb-3"},[r("v-list",{staticClass:"indigo lighten-4"},[r("v-subheader",[e._v("Filters")]),r("v-list-item-group",e._l(e.filters,(function(filter,i){return r("v-list-item",{key:"filter-"+i,on:{click:function(t){return e.$emit("filter-select",filter)}}},[r("v-list-item-content",[e._v(e._s(filter.replace(":",": ")))]),r("v-list-item-action",[r("v-list-item-action-text",[e._v("X")])],1)],1)})),1)],1)],1):e._e()}),[],!1,null,null,null);t.default=component.exports},194:function(e,t,r){"use strict";r.r(t);r(185);var n={name:"listing-preview",props:{doc:Object,index:Number,idFieldName:{type:String,default:"id"},thePage:Object},computed:{previewThumbnail:function(){return this.doc.hasOwnProperty("img.uri.thumbnail")?this.doc["img.uri.thumbnail"][0]:"no image"},previewTitle:function(){return this.doc.title},previewDesc:function(){return this.doc.teaser}},data:function(){return{showCarousels:!1}},methods:{showSlides:function(){console.log(this.doc)}}},o=r(14),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",{staticClass:"mb-2"},[r("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[r("v-avatar",{attrs:{size:"180",tile:""}},[r("v-img",{attrs:{src:e.previewThumbnail,"max-width":"180"},on:{click:function(t){t.stopPropagation(),e.showCarousels=!0}}})],1),r("div",[r("v-card-title",[e._v(e._s(e.previewTitle))]),r("v-card-text",[e._v(e._s(e.previewDesc))])],1)],1),r("v-dialog",{attrs:{"max-width":"860"},model:{value:e.showCarousels,callback:function(t){e.showCarousels=t},expression:"showCarousels"}},[r("v-carousel",{attrs:{height:"600"}},e._l(e.doc["img.uri.preview"],(function(e,i){return r("v-carousel-item",{key:i,attrs:{src:e}})})),1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},197:function(e,t,r){"use strict";r(63),r(116),r(33),r(80);var n=r(35),o=r.n(n),l=r(188),c=r.n(l),f={profileName:"iamfromrevaagain.json",baseUrl:"https://dev29983.sites.leocorn.com/solr/",get profileUrl(){return this.baseUrl+"profiles/"},get searchUrl(){return this.baseUrl+"reva-dev/"},getAllCities:function(e){o.a.get("/cities.csv").then((function(t){e(t.data.split("\n"))}))},getAllFields:function(){return["table","residencetype","days_on_market","neighbourhoodname","agentname","brokername","city"]},updateProfile:function(e,t,r,n,l,f,d){var h=this,v={id:c()(t+e),name:t,description:r,account:e,query_endpoint:n,query_params:JSON.stringify(l),_modified_:null},m=this.profileUrl+"update/json/docs?commit=true";o.a.post(m,v).then((function(t){h.getAllProfiles(e,f)})).catch((function(e){console.log(e)}))},getAllProfiles:function(e,t,r){var n=this,l={query:'account:"'+e+'"',params:{sort:"_modified_ desc"}};o.a.post(this.profileUrl+"select",l).then((function(e){t.allProfiles=e.data.response.docs,n.loadProfile2Page(e.data.response.docs[0],t),r&&r(e.data.response.docs)})).catch((function(e){console.error(e),r&&r(null,e)}))},getProfile:function(e,t,r){var n=this,l={query:"id:"+e};o.a.post(this.profileUrl+"select",l).then((function(e){n.loadProfile2Page(e.data.response.docs[0],t),r&&r(e.data.response.docs[0])})).catch((function(e){console.log(e),r&&r(null,e)}))},simpleFields:["query","rows","sort","start"],loadProfile2Page:function(e,t){t.profileId=e.id,t.profileName=e.name,t.profileDesc=e.description,t.collectionUrl=e.query_endpoint;var r=JSON.parse(e.query_params);console.dir(r),t.query=r.query,this.simpleFields.forEach((function(e){r.params.hasOwnProperty(e)&&(t[e]=r.params[e])})),r.params.hasOwnProperty("fq")&&(t.filterQuery=r.params.fq.join("||"),t.cities=[],r.params.fq.forEach((function(filter){if(filter.startsWith("city")){var e=filter.split(":")[1];e=e.substr(1).slice(0,-1).replace(/"/g,""),t.cities=e.split(",")}}))),t.simpleSearch()}},d={root:"http://www.google.com/api",profileName:"profile.json"};try{d=Object.assign(d,f)}catch(e){console.log("no local config")}t.a=d},212:function(e,t,r){"use strict";r.r(t);r(62),r(21);var n=r(29),o=(r(13),r(9),r(34),r(116),r(46),r(47),r(80),r(35)),l=r.n(o),c=r(197),f=r(194),d=r(191),h=r(192);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var m={auth:!0,components:{"listing-preview":f.default,"facet-buckets":d.default,"query-filters":h.default},layout:"vuetify",name:"solrsearch",data:function(){return{settingsDialog:!1,query:"*:*",valid:!1,idField:"id",collectionUrl:c.a.searchUrl,collections:[],collectionLabel:"Collection: ",allFields:["abc","cde"],facetFields:[],facetInput:null,allCities:["Toronto","Markham"],cities:["Toronto","Markham"],cityInput:null,allNeighbours:["Toronto","Markham"],neighbours:["Toronto","Markham"],neighbourInput:null,filterQuery:"",sort:"",fieldList:"",boostQuery:"",boostFunction:"",queryFields:"",priceRangeOn:!1,priceRange:[5e5,1e6],totalHits:0,totalPages:0,facets:null,stats:null,results:null,resultSummary:"",debugQuery:!1,debugExplain:null,explainItem:null,currentPage:1,rows:15,profileRepo:"/",profileDesc:"",profileId:"",profileName:"local.json",allProfiles:[]}},created:function(){var e=this;e.$auth.loggedIn?(c.a.getAllCities((function(t){e.allCities=t})),e.allFields=c.a.getAllFields(),e.loadAllProfiles()):e.simpleSearch()},computed:{filters:function(){return""===this.filterQuery?null:this.filterQuery.split("||")}},methods:{simpleSearch:function(){var e=this;e.resultSummary="Searching ...",e.results=null,e.facets=null,e.stats=null,e.query||(e.query="*:*");var t=e.buildQuery();e.jeQueryParams&&(e.jeQueryParams.setMode("view"),e.jeQueryParams.set(t),e.jeQueryParams.expandAll(),e.jeQueryParams.setMode("code"));var r=e.collectionUrl+"select";l.a.post(r,t).then((function(r){e.totalHits=r.data.response.numFound,e.totalPages=Math.ceil(e.totalHits/e.rows),e.results=r.data.response.docs,r.data.hasOwnProperty("debug")&&(e.debugExplain=r.data.debug),r.data.hasOwnProperty("facet_counts")&&(e.facets=e.getReadyFacets(r.data.facet_counts.facet_fields));var n=t.params.start;e.resultSummary="Showing "+(n+1)+" - "+Math.min(n+e.rows,e.totalHits)+" of "+e.totalHits+" Items",e.totalHits>0&&console.log("total hits: "+e.totalHits)})).catch((function(t){e.resultSummary="Query Error!",console.log(t)}))},buildQuery:function(){var e=(this.currentPage-1)*this.rows,t=Object.assign({rows:this.rows,defType:"edismax",start:e,sort:this.sort,debugQuery:this.debugQuery},this.getFacetFields(),this.getFieldList(),this.getFilterQuery(),this.getBoostQuery(),this.getBoostFunction(),this.getQueryFields());return{query:this.query,params:t}},getFacetFields:function(){return this.facetFields.length<1?{}:{facet:"on","facet.limit":-1,"facet.field":this.facetFields}},getFieldList:function(){if(""===this.fieldList)return{};var e=this.fieldList.split(",");return e.includes(this.idField)||e.push(this.idField),{fl:e}},getBoostFunction:function(){return""===this.boostFunction?{}:{bf:this.boostFunction}},getBoostQuery:function(){return""===this.boostQuery?{}:{bq:this.boostQuery}},getQueryFields:function(){return""===this.queryFields?{}:{qf:this.queryFields}},getFilterQuery:function(){var e=[];if(""!=this.filterQuery&&((e=this.filterQuery.split("||")).length>0&&(e=e.filter((function(e){return!(e.startsWith("listvalue_i")||e.startsWith("city"))}))),this.filterQuery=e.join("||")),this.priceRangeOn){var t="listvalue_i:["+this.priceRange[0]+" TO "+this.priceRange[1]+"]";e.push(t),this.filterQuery=e.join("||")}return this.cities.length>0&&(e.push('city:("'+this.cities.join('","')+'")'),this.filterQuery=e.join("||")),""===this.filterQuery?{}:{fq:this.filterQuery.split("||")}},getReadyFacets:function(e){var t=[];return Object.keys(e).forEach((function(r){for(var n=e[r],o=[],i=0;i<n.length;i+=2)n[i+1]<1||o.push({value:n[i],count:n[i+1]});var l={label:r,name:r,buckets:o};t.push(l)})),t},handleSearchButton:function(){this.currentPage=1,this.simpleSearch()},handleBucketSelect:function(e,t){var r=e+':"'+t+'"';this.filterQuery=""===this.filterQuery?r:this.filterQuery+"||"+r,this.currentPage=1,this.simpleSearch()},removeFilter:function(filter){var e=this.filterQuery.split("||").filter((function(e){return e!=filter}));switch(this.filterQuery=e.join("||"),filter.split(":")[0]){case"listvalue_i":this.priceRangeOn=!1}this.currentPage=1,this.simpleSearch()},removeCitySelection:function(e){var t=this.cities.indexOf(e);t>=0&&this.cities.splice(t,1)},removeFacetSelection:function(e){console.log("selected facet:",e);var t=this.facetFields.indexOf(e);t>=0&&this.facetFields.splice(t,1)},facetSelectionChange:function(){},settingsCancel:function(){this.settingsDialog=!1},settingsOk:function(){this.settingsDialog=!1,this.simpleSearch()},settingsSave:function(){var e=this;console.log(e._data);var t=Object.keys(e._data).filter((function(t){return"function"!=typeof e._data[t]}));console.log(t);var r=t.reduce((function(t,r){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},t,Object(n.a)({},r,e._data[r]))}),{});console.log(r),console.log(JSON.stringify(r))},loadProfile:function(){var e=this,t=e.profileRepo+e.profileName;l.a.get(t).then((function(t){Object.keys(t.data).forEach((function(r){"files"===r?t.data[r].forEach((function(t){l.a.get(e.profileRepo+t.fileName).then((function(r){e[t.fieldName]=r.data.split("\n")}))})):e[r]=t.data[r]}))}))},saveProfile:function(){var e=this.buildQuery();console.log(JSON.stringify(e));var t=this.$auth.user.email;c.a.updateProfile(t,this.profileName,this.profileDesc,this.collectionUrl,e,this)},loadAllProfiles:function(){c.a.getAllProfiles(this.$auth.user.email,this)},profileChange:function(e){c.a.getProfile(e,this)}}},y=r(14),component=Object(y.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{"grid-list-xs":""}},[r("v-card",{staticClass:"d-flex flex-row",attrs:{flat:"",tile:""}},[r("v-text-field",{attrs:{dense:"",id:"input-number",autocomplete:"off",label:"Type your query here"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),r("v-btn",{staticClass:"pa-2",attrs:{color:"warning",dark:"",icon:""},on:{click:e.handleSearchButton}},[r("v-icon",[e._v("mdi-magnify")]),e._v("search")],1),r("v-btn",{staticClass:"pa-2",attrs:{color:"success darken-1",dark:"",icon:""},on:{click:function(t){t.stopPropagation(),e.settingsDialog=!0}}},[r("v-icon",[e._v("mdi-settings")]),e._v("settings")],1)],1),r("v-dialog",{attrs:{"max-width":"780px",persistent:""},model:{value:e.settingsDialog,callback:function(t){e.settingsDialog=t},expression:"settingsDialog"}},[r("v-card",[r("v-toolbar",{attrs:{flat:"",color:"primary",dark:""}},[r("v-toolbar-title",[e._v("Search settings")])],1),r("v-tabs",[r("v-tab",[r("v-icon",{attrs:{left:""}},[e._v("mdi-settings")]),e._v("Settings")],1),r("v-tab",[r("v-icon",{attrs:{left:""}},[e._v("mdi-account")]),e._v("Profiles")],1),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"10"}},[r("v-autocomplete",{attrs:{label:"Pick Profile:",items:e.allProfiles,"item-text":"name","item-value":"id",dense:""},on:{change:e.profileChange},model:{value:e.profileId,callback:function(t){e.profileId=t},expression:"profileId"}})],1),r("v-col",{attrs:{cols:"12",md:"2"}},[r("v-checkbox",{attrs:{label:"Debug",dense:""},model:{value:e.debugQuery,callback:function(t){e.debugQuery=t},expression:"debugQuery"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-text-field",{attrs:{label:"Items Per Page:",dense:""},model:{value:e.rows,callback:function(t){e.rows=t},expression:"rows"}})],1),r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-text-field",{attrs:{label:"Sort:",dense:""},model:{value:e.sort,callback:function(t){e.sort=t},expression:"sort"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-autocomplete",{attrs:{label:"Cities:",items:e.allCities,multiple:"","search-input":e.cityInput,dense:"",chips:"","small-chips":""},on:{input:function(t){e.cityInput=null},"update:searchInput":function(t){e.cityInput=t},"update:search-input":function(t){e.cityInput=t}},scopedSlots:e._u([{key:"selection",fn:function(data){return[r("v-chip",{attrs:{close:""},on:{"click:close":function(t){return e.removeCitySelection(data.item)}}},[e._v(e._s(data.item))])]}}]),model:{value:e.cities,callback:function(t){e.cities=t},expression:"cities"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-checkbox",{staticClass:"mt-0 pt-0",attrs:{label:"Price Range",dense:""},model:{value:e.priceRangeOn,callback:function(t){e.priceRangeOn=t},expression:"priceRangeOn"}})],1),r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-range-slider",{attrs:{disabled:!e.priceRangeOn,max:"5000000",min:"10000",step:"10000","hide-details":"",dense:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("span",{domProps:{textContent:e._s(e.priceRange[0])}})]},proxy:!0},{key:"append",fn:function(){return[r("span",{domProps:{textContent:e._s(e.priceRange[1])}})]},proxy:!0}]),model:{value:e.priceRange,callback:function(t){e.priceRange=t},expression:"priceRange"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"12"}},[r("v-autocomplete",{attrs:{label:"Facets:",items:e.allFields,multiple:"","search-input":e.facetInput,dense:"",chips:"","small-chips":""},on:{change:e.facetSelectionChange,input:function(t){e.facetInput=null},"update:searchInput":function(t){e.facetInput=t},"update:search-input":function(t){e.facetInput=t}},scopedSlots:e._u([{key:"selection",fn:function(data){return[r("v-chip",{attrs:{close:""},on:{"click:close":function(t){return e.removeFacetSelection(data.item)}}},[e._v(e._s(data.item))])]}}]),model:{value:e.facetFields,callback:function(t){e.facetFields=t},expression:"facetFields"}})],1)],1)],1)],1)],1)],1),r("v-tab-item",[r("v-card",{attrs:{flat:""}},[r("v-card-text",[r("v-form",[e.$auth.loggedIn?e._e():r("v-row",[r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-text-field",{attrs:{label:"Profile Repository:",dense:""},model:{value:e.profileRepo,callback:function(t){e.profileRepo=t},expression:"profileRepo"}})],1),r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-btn",{on:{click:e.loadProfile}},[e._v("Load")])],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"9"}},[r("v-text-field",{attrs:{label:"Edit Profile Name:",dense:""},model:{value:e.profileName,callback:function(t){e.profileName=t},expression:"profileName"}}),e.$auth.loggedIn?r("v-textarea",{attrs:{label:"Profile Description:"},model:{value:e.profileDesc,callback:function(t){e.profileDesc=t},expression:"profileDesc"}}):e._e()],1),e.$auth.loggedIn?r("v-col",{attrs:{cols:"12",md:"3"}},[r("v-btn",{on:{click:e.saveProfile}},[e._v("Save Profile")])],1):e._e()],1)],1)],1)],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.settingsCancel}},[e._v("cancel")]),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.settingsOk}},[e._v("Ok")])],1)],1)],1),r("v-layout",{attrs:{row:"",wrap:""}},[r("v-row",[r("v-col",{attrs:{cols:"12",md:"3"}},[r("query-filters",{attrs:{filters:e.filters},on:{"filter-select":e.removeFilter}}),r("facet-buckets",{attrs:{facets:e.facets},on:{"bucket-select":e.handleBucketSelect}})],1),r("v-col",{attrs:{cols:"12",md:"9"}},[r("h3",[e._v(e._s(e.resultSummary))]),e.results?r("v-pagination",{attrs:{length:e.totalPages,"total-visible":"10"},on:{input:e.simpleSearch},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e(),e._l(e.results,(function(t,n){return r("listing-preview",{key:t.id,attrs:{doc:t,index:n,idFieldName:e.idField}})})),e.results?r("v-pagination",{attrs:{length:e.totalPages,"total-visible":"10"},on:{input:e.simpleSearch},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}}):e._e()],2)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);