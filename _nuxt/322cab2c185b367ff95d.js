(window.webpackJsonp=window.webpackJsonp||[]).push([[39,37],{246:function(r,t,e){"use strict";t.a={primeNumbers500:[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499],isPrimeNumber:function(r){if(r<=3)return r>1;if(r%2==0||r%3==0)return!1;for(var i=5;i*i<=r;){if(r%i==0||r%(i+2)==0)return!1;i+=6}return!0},trialDivision:function(r){for(var t=[];r%2==0;)t.push(2),r/=2;for(var e=3;e*e<=r;)r%e==0?(t.push(e),r/=e):e+=2;return 1!=r&&t.push(r),t}}},306:function(r,t,e){"use strict";e.r(t);e(73);var n=e(246),o={name:"card-pns",props:{upToNumber:{type:Number,default:100}},data:function(){return{}},methods:{isPrime:function(r){return n.a.isPrimeNumber(r)}}},l=e(5),component=Object(l.a)(o,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("v-flex",{attrs:{xs12:"",sm8:""}},[e("v-toolbar",{attrs:{color:"indigo",dark:"",dense:"",light:""}},[e("v-toolbar-title",[r._v("Prime Numbers up to "+r._s(r.upToNumber))])],1),e("v-card",[e("v-card-text",[e("v-layout",{attrs:{row:"",wrap:"","text-center":""}},r._l(r.upToNumber,(function(i){return e("v-flex",{key:"n"+i,attrs:{xs1:""}},[e("v-card",{attrs:{dark:"",color:r.isPrime(i)?"danger":"warning"}},[e("v-card-text",{staticClass:"px-0 py-1"},[r._v(r._s(i))])],1)],1)})),1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},421:function(r,t,e){"use strict";e.r(t);var n=e(246),o={auth:!1,components:{"card-pns":e(306).default},layout:"vuetify",name:"prime-number",data:function(){return{inputNumber:null,loading:!1,msgColor:"primary--text",factorDisplay:"d-none",factorizationMsg:""}},computed:{resultMessage:function(){return null===this.inputNumber||""===this.inputNumber?(this.msgColor="primary--text",this.factorDisplay="d-none","Waiting for the number..."):this.checkPrimeNumber(this.inputNumber)?this.primeNumberMessage(this.inputNumber):this.nonePrimeNumberMessage(this.inputNumber)}},methods:{checkPrimeNumber:function(r){return console.log(r),n.a.isPrimeNumber(r)},primeNumberMessage:function(r){return this.msgColor="red--text",this.factorDisplay="d-none",r+" is a prime number"},nonePrimeNumberMessage:function(r){this.msgColor="green--text";var t=n.a.trialDivision(r);return this.factorizationMsg=JSON.stringify(t),this.factorDisplay="",r+" is NOT a prime number"}}},l=e(5),component=Object(l.a)(o,(function(){var r=this,t=r.$createElement,e=r._self._c||t;return e("v-container",{attrs:{"grid-list-xs":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:"",sm4:""}},[e("v-toolbar",{attrs:{color:"indigo",dark:"",dense:"",light:""}},[e("v-toolbar-title",[r._v("Prime Number Checker")])],1),e("v-card",[e("v-card-title",{attrs:{"primary-title":""}},[e("v-row",[e("v-text-field",{attrs:{id:"input-number",autocomplete:"off",label:"Give me a number:",loading:r.loading,clearable:""},model:{value:r.inputNumber,callback:function(t){r.inputNumber=t},expression:"inputNumber"}})],1)],1),e("v-card-text",[e("strong",{class:r.msgColor},[r._v(r._s(r.resultMessage))]),e("div",{class:r.factorDisplay},[e("p"),e("h3",[r._v("Integer Factorization for "+r._s(r.inputNumber)+":")]),e("h3",{staticClass:"primary--text"},[r._v(r._s(r.factorizationMsg))]),e("p")])])],1)],1),e("card-pns",{attrs:{upToNumber:300}})],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);