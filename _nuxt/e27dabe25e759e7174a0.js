(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{165:function(e,l,t){"use strict";t.r(l);var c={name:"dialog-settings",props:{cancelSettings:null,saveSettings:null},data:function(){return{pageName:"search",valid:!1,idField:"id",collectionUrl:"http://search.example.com",collections:[],collectionLabel:"Collection: ",query:"*:*",facetFields:"",filterQuery:"",sort:"",fieldList:"",boostQuery:"",boostFunction:"",queryFields:"",totalHits:0,facets:null,stats:null,results:null,debugQuery:"false",debugExplain:null,explainItem:null,currentPage:1,perPage:15,currentView:"listing-details-table",resultSummary:"Click search to start..",jeQueryParams:null,selectedItem:{},luke:{items:[],fields:[]},schema:{items:[],fields:[]}}}},r=t(11),component=Object(r.a)(c,(function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("v-card",[t("v-card-title",{staticClass:"headline"},[e._v("Search settings")]),t("v-card-text",[t("v-form",{model:{value:e.valid,callback:function(l){e.valid=l},expression:"valid"}},[t("v-row",[t("v-col",{attrs:{cols:"12",md:"10"}},[t("v-text-field",{attrs:{label:"Collection URL:",dense:""},model:{value:e.collectionUrl,callback:function(l){e.collectionUrl=l},expression:"collectionUrl"}})],1),t("v-col",{attrs:{cols:"12",md:"2"}},[t("v-checkbox",{attrs:{label:"Debug",dense:""},model:{value:e.debugQuery,callback:function(l){e.debugQuery=l},expression:"debugQuery"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",md:"2"}},[t("v-text-field",{attrs:{label:"ID field:",dense:""},model:{value:e.idField,callback:function(l){e.idField=l},expression:"idField"}})],1),t("v-col",{attrs:{cols:"12",md:"3"}},[t("v-text-field",{attrs:{label:"Items Per Page:",dense:""},model:{value:e.perPage,callback:function(l){e.perPage=l},expression:"perPage"}})],1),t("v-col",{attrs:{cols:"12",md:"7"}},[t("v-text-field",{attrs:{label:"Sort:",dense:""},model:{value:e.sort,callback:function(l){e.sort=l},expression:"sort"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Filter Query:",dense:""},model:{value:e.filterQuery,callback:function(l){e.filterQuery=l},expression:"filterQuery"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Field List:",dense:""},model:{value:e.fieldList,callback:function(l){e.fieldList=l},expression:"fieldList"}})],1)],1),t("v-row",[t("v-col",{attrs:{cols:"12",md:"12"}},[t("v-text-field",{attrs:{label:"Facets:",dense:""},model:{value:e.facets,callback:function(l){e.facets=l},expression:"facets"}})],1)],1)],1)],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.cancelSettings}},[e._v("cancel")]),t("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:e.saveSettings}},[e._v("save")])],1)],1)}),[],!1,null,null,null);l.default=component.exports}}]);