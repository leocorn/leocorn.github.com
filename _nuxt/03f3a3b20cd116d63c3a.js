(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{197:function(t,e,r){var content=r(206);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(63).default)("1e96dc74",content,!1,{sourceMap:!1})},205:function(t,e,r){"use strict";var n=r(197);r.n(n).a},206:function(t,e,r){var n=r(62);(t.exports=n(!1)).push([t.i,"",""])},219:function(t,e,r){"use strict";r.r(e);r(80);var n=r(35),o=r.n(n),l={baseUrl:"https://dev29983.sites.leocorn.com/solr/covid19_raw/",get searchEndPoint(){return this.baseUrl+"select"},get updateEndPoint(){return this.baseUrl+"update/json/docs?commit=true"},getHeaders:function(){return[{text:"Country/Region",value:"country_region"},{text:"Confirmed",value:"confirmed"},{text:"New Confirmed",value:"new_confirmed"},{text:"Deaths",value:"death"},{text:"New Deaths",value:"new_death"},{text:"Recovered",value:"recovered"}]},getCases:function(t,e,r){var n=this,l=(new Date).toISOString().split("T")[0],d=(new Date((new Date).setDate((new Date).getDate()-1)).toISOString().split("T")[0],n.buildTotalQuery(l));o.a.post(n.searchEndPoint,d).then((function(e){var o=new Date(e.data.response.docs[0]._modified_);t.lastUpdated=o.toUTCString();var l=e.data.facet_counts.facet_pivot;t.cases=n.loadCasesStats(l.country_region),t.total=n.loadTotalStats(e.data.stats),r&&r()})).catch((function(t){}))},buildTotalQuery:function(t){return{query:"*:*",params:{rows:1,start:0,sort:"_modified_ desc",fq:"day:"+t,stats:"true","stats.field":["{!tag=all3 max=true min=true sum=true}confirmed","{!tag=all3 max=true min=true sum=true}death","{!tag=all3 max=true min=true sum=true}recovered","{!tag=all3 max=true min=true sum=true}new_confirmed","{!tag=all3 max=true min=true sum=true}new_death","{!tag=all3 max=true min=true sum=true}new_recovered"],facet:"true","facet.limit":-1,"facet.pivot":"{!stats=all3}country_region"}}},loadCasesStats:function(t){return t.map((function(t){var e={};return e.country_region=t.value,e.confirmed=t.stats.stats_fields.confirmed.sum,e.death=t.stats.stats_fields.death.sum,e.recovered=t.stats.stats_fields.recovered.sum,e.new_confirmed=t.stats.stats_fields.new_confirmed.sum,e.new_death=t.stats.stats_fields.new_death.sum,e.new_recovered=t.stats.stats_fields.new_recovered.sum,e}))},loadTotalStats:function(t){return{confirmed:t.stats_fields.confirmed.sum,death:t.stats_fields.death.sum,recovered:t.stats_fields.recovered.sum,new_confirmed:t.stats_fields.new_confirmed.sum,new_death:t.stats_fields.new_death.sum,new_recovered:t.stats_fields.new_recovered.sum}}},d=function(){return(d=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var e in i=arguments[a])Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e]);return t}).apply(this,arguments)},c=function(){function t(t,i,a){var s=this;this.target=t,this.endVal=i,this.options=a,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){s.startTime||(s.startTime=t);var i=t-s.startTime;s.remaining=s.duration-i,s.useEasing?s.countDown?s.frameVal=s.startVal-s.easingFn(i,0,s.startVal-s.endVal,s.duration):s.frameVal=s.easingFn(i,s.startVal,s.endVal-s.startVal,s.duration):s.countDown?s.frameVal=s.startVal-(s.startVal-s.endVal)*(i/s.duration):s.frameVal=s.startVal+(s.endVal-s.startVal)*(i/s.duration),s.countDown?s.frameVal=s.frameVal<s.endVal?s.endVal:s.frameVal:s.frameVal=s.frameVal>s.endVal?s.endVal:s.frameVal,s.frameVal=Math.round(s.frameVal*s.decimalMult)/s.decimalMult,s.printValue(s.frameVal),i<s.duration?s.rAF=requestAnimationFrame(s.count):null!==s.finalEndVal?s.update(s.finalEndVal):s.callback&&s.callback()},this.formatNumber=function(t){var i,a,e,r,n,o=t<0?"-":"";if(i=Math.abs(t).toFixed(s.options.decimalPlaces),e=(a=(i+="").split("."))[0],r=a.length>1?s.options.decimal+a[1]:"",s.options.useGrouping){n="";for(var l=0,d=e.length;l<d;++l)0!==l&&l%3==0&&(n=s.options.separator+n),n=e[d-l-1]+n;e=n}return s.options.numerals&&s.options.numerals.length&&(e=e.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]})),r=r.replace(/[0-9]/g,(function(t){return s.options.numerals[+t]}))),o+s.options.prefix+e+r+s.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=d({},this.defaults,a),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(i),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof t?document.getElementById(t):t,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return t.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},t.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},t.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},t.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},t.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},t.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},t.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},t.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},t.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},t}(),h={auth:!1,layout:"vuetify",data:function(){return{total:{confirmed:0,death:0,recovered:0,new_confirmed:0,new_death:0,new_recovered:0},perPage:15,sortBy:["confirmed"],cases:[],lastUpdated:"",headers:l.getHeaders(),numFormater:new Intl.NumberFormat("en-US")}},created:function(){var t=this;l.getCases(this,0,(function(){t.confirmedCount.update(t.total.confirmed),t.deathCount.update(t.total.death),t.recoveredCount.update(t.total.recovered)}))},mounted:function(){this.confirmedCount=new c("confirmedId",this.total.confirmed),this.deathCount=new c("deathId",this.total.death),this.recoveredCount=new c("recoveredId",this.total.recovered)},methods:{reload:function(){var t=this;t.cleanData(),l.getCases(this,0,(function(){t.confirmedCount.update(t.total.confirmed),t.deathCount.update(t.total.death),t.recoveredCount.update(t.total.recovered)}))},cleanData:function(){this.total={confirmed:0,death:0,recovered:0,new_confirmed:0,new_death:0,new_recovered:0},this.cases=[],this.lastUpdated="",this.confirmedCount.reset(),this.deathCount.reset(),this.recoveredCount.reset()}}},m=(r(205),r(14)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{"grid-list-xs":""}},[r("h2",{staticClass:"text-center"},[t._v("COVID-19 Global Cases")]),r("div",{staticClass:"text-center mb-1"},[r("v-chip",{attrs:{label:""}},[t._v("Last updated:"),r("i",[t._v(t._s(t.lastUpdated))])]),r("v-btn",{staticClass:"ml-2 lighten-4",attrs:{small:"",color:"teal"},on:{click:t.reload}},[r("v-icon",{attrs:{left:""}},[t._v("mdi-reload")]),t._v("Refresh")],1)],1),r("v-card",[r("v-card-title",[r("v-row",{staticClass:"text-center"},[r("v-col",{attrs:{col:"2"}},[r("h4",[t._v("Confirmed")]),r("v-chip",{attrs:{color:"warning","x-large":""}},[r("span",{attrs:{id:"confirmedId"}},[t._v(t._s(t.numFormater.format(t.total.confirmed)))])])],1),r("v-col",{attrs:{col:"2"}},[r("h4",[t._v("New Today ")]),r("v-chip",{attrs:{color:"warning darken-2",large:""}},[r("span",{attrs:{id:"confirmedId"}},[t._v(t._s(t.numFormater.format(t.total.new_confirmed)))])])],1),r("v-col",{attrs:{col:"2"}},[r("h4",[t._v("Deaths")]),r("v-chip",{attrs:{color:"error","x-large":""}},[r("span",{attrs:{id:"deathId"}},[t._v(t._s(t.numFormater.format(t.total.death)))])])],1),r("v-col",{attrs:{col:"2"}},[r("h4",[t._v("New Deaths")]),r("v-chip",{attrs:{color:"error",large:""}},[r("span",{attrs:{id:"deathId"}},[t._v(t._s(t.numFormater.format(t.total.new_death)))])])],1),r("v-col",{attrs:{col:"2"}},[r("h4",[t._v("Recovered")]),r("v-chip",{attrs:{color:"success","x-large":""}},[r("span",{attrs:{id:"recoveredId"}},[t._v(t._s(t.numFormater.format(t.total.recovered)))])])],1),r("v-col",{attrs:{col:"2"}},[r("h4",[t._v("New Today ")]),r("v-chip",{attrs:{color:"success",large:""}},[r("span",{attrs:{id:"recoveredId"}},[t._v(t._s(t.numFormater.format(t.total.new_recovered)))])])],1)],1)],1),r("v-card-text",[r("v-data-table",{attrs:{headers:t.headers,items:t.cases,"items-per-page":t.perPage,sortBy:t.sortBy,sortDesc:""},scopedSlots:t._u([{key:"item.confirmed",fn:function(e){var r=e.item;return[t._v(t._s(t.numFormater.format(r.confirmed)))]}},{key:"item.death",fn:function(e){var r=e.item;return[t._v(t._s(t.numFormater.format(r.death)))]}},{key:"item.recovered",fn:function(e){var r=e.item;return[t._v(t._s(t.numFormater.format(r.recovered)))]}}])})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);