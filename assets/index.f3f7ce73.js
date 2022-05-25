import{r as W,f as oe,g as h,i as ie,ab as Pe,l as p,v as Ne,k as f,m,s as M,bx as X,by as Ke,aM as Ze,j as Ge,b6 as ye,bq as Ye,bz as et}from"./index.9da73d33.js";const tt=Ne("span",{class:"text-gray-500"},"-",-1),rt={class:"dialog-footer"},nt=M("\u8FD4\u56DE"),at=M("\u786E\u5B9A"),ot={emits:["getTableList"],setup(t,{expose:e,emit:r}){const a=W(!1),n=W("\u7F16\u8F91"),o=oe({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),s=()=>{r("getTableList")};return e({showEdit:u=>{console.log(u),a.value=!0}}),(u,d)=>{const i=h("el-input"),c=h("el-form-item"),v=h("el-option"),_=h("el-select"),N=h("el-date-picker"),T=h("el-col"),C=h("el-time-picker"),R=h("el-switch"),w=h("el-checkbox"),g=h("el-checkbox-group"),B=h("el-radio"),U=h("el-radio-group"),$=h("el-form"),ee=h("el-button"),Qe=h("el-dialog");return ie(),Pe(Qe,{modelValue:a.value,"onUpdate:modelValue":d[10]||(d[10]=y=>a.value=y),title:n.value,width:"50%",onClose:s},{footer:p(()=>[Ne("span",rt,[f(ee,{onClick:d[8]||(d[8]=y=>a.value=!1)},{default:p(()=>[nt]),_:1}),f(ee,{type:"primary",onClick:d[9]||(d[9]=y=>a.value=!1)},{default:p(()=>[at]),_:1})])]),default:p(()=>[f($,{model:m(o),"label-width":"120px"},{default:p(()=>[f(c,{label:"Activity name"},{default:p(()=>[f(i,{modelValue:m(o).name,"onUpdate:modelValue":d[0]||(d[0]=y=>m(o).name=y)},null,8,["modelValue"])]),_:1}),f(c,{label:"Activity zone"},{default:p(()=>[f(_,{modelValue:m(o).region,"onUpdate:modelValue":d[1]||(d[1]=y=>m(o).region=y),placeholder:"please select your zone"},{default:p(()=>[f(v,{label:"Zone one",value:"shanghai"}),f(v,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),f(c,{label:"Activity time"},{default:p(()=>[f(T,{span:11},{default:p(()=>[f(N,{modelValue:m(o).date1,"onUpdate:modelValue":d[2]||(d[2]=y=>m(o).date1=y),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),f(T,{span:2,class:"text-center"},{default:p(()=>[tt]),_:1}),f(T,{span:11},{default:p(()=>[f(C,{modelValue:m(o).date2,"onUpdate:modelValue":d[3]||(d[3]=y=>m(o).date2=y),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),f(c,{label:"Instant delivery"},{default:p(()=>[f(R,{modelValue:m(o).delivery,"onUpdate:modelValue":d[4]||(d[4]=y=>m(o).delivery=y)},null,8,["modelValue"])]),_:1}),f(c,{label:"Activity type"},{default:p(()=>[f(g,{modelValue:m(o).type,"onUpdate:modelValue":d[5]||(d[5]=y=>m(o).type=y)},{default:p(()=>[f(w,{label:"Online activities",name:"type"}),f(w,{label:"Promotion activities",name:"type"}),f(w,{label:"Offline activities",name:"type"}),f(w,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),f(c,{label:"Resources"},{default:p(()=>[f(U,{modelValue:m(o).resource,"onUpdate:modelValue":d[6]||(d[6]=y=>m(o).resource=y)},{default:p(()=>[f(B,{label:"Sponsor"}),f(B,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),f(c,{label:"Activity form"},{default:p(()=>[f(i,{modelValue:m(o).desc,"onUpdate:modelValue":d[7]||(d[7]=y=>m(o).desc=y),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}};var ue={exports:{}},Ue=function(e,r){return function(){for(var n=new Array(arguments.length),o=0;o<n.length;o++)n[o]=arguments[o];return e.apply(r,n)}},it=Ue,fe=Object.prototype.toString,de=function(t){return function(e){var r=fe.call(e);return t[r]||(t[r]=r.slice(8,-1).toLowerCase())}}(Object.create(null));function D(t){return t=t.toLowerCase(),function(r){return de(r)===t}}function ce(t){return Array.isArray(t)}function Q(t){return typeof t=="undefined"}function st(t){return t!==null&&!Q(t)&&t.constructor!==null&&!Q(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}var $e=D("ArrayBuffer");function lt(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&$e(t.buffer),e}function ut(t){return typeof t=="string"}function ft(t){return typeof t=="number"}function De(t){return t!==null&&typeof t=="object"}function z(t){if(de(t)!=="object")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}var dt=D("Date"),ct=D("File"),pt=D("Blob"),mt=D("FileList");function pe(t){return fe.call(t)==="[object Function]"}function ht(t){return De(t)&&pe(t.pipe)}function vt(t){var e="[object FormData]";return t&&(typeof FormData=="function"&&t instanceof FormData||fe.call(t)===e||pe(t.toString)&&t.toString()===e)}var _t=D("URLSearchParams");function yt(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function bt(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function me(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),ce(t))for(var r=0,a=t.length;r<a;r++)e.call(null,t[r],r,t);else for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.call(null,t[n],n,t)}function se(){var t={};function e(n,o){z(t[o])&&z(n)?t[o]=se(t[o],n):z(n)?t[o]=se({},n):ce(n)?t[o]=n.slice():t[o]=n}for(var r=0,a=arguments.length;r<a;r++)me(arguments[r],e);return t}function Et(t,e,r){return me(e,function(n,o){r&&typeof n=="function"?t[o]=it(n,r):t[o]=n}),t}function wt(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}function Rt(t,e,r,a){t.prototype=Object.create(e.prototype,a),t.prototype.constructor=t,r&&Object.assign(t.prototype,r)}function Ot(t,e,r){var a,n,o,s={};e=e||{};do{for(a=Object.getOwnPropertyNames(t),n=a.length;n-- >0;)o=a[n],s[o]||(e[o]=t[o],s[o]=!0);t=Object.getPrototypeOf(t)}while(t&&(!r||r(t,e))&&t!==Object.prototype);return e}function At(t,e,r){t=String(t),(r===void 0||r>t.length)&&(r=t.length),r-=e.length;var a=t.indexOf(e,r);return a!==-1&&a===r}function gt(t){if(!t)return null;var e=t.length;if(Q(e))return null;for(var r=new Array(e);e-- >0;)r[e]=t[e];return r}var xt=function(t){return function(e){return t&&e instanceof t}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),E={isArray:ce,isArrayBuffer:$e,isBuffer:st,isFormData:vt,isArrayBufferView:lt,isString:ut,isNumber:ft,isObject:De,isPlainObject:z,isUndefined:Q,isDate:dt,isFile:ct,isBlob:pt,isFunction:pe,isStream:ht,isURLSearchParams:_t,isStandardBrowserEnv:bt,forEach:me,merge:se,extend:Et,trim:yt,stripBOM:wt,inherits:Rt,toFlatObject:Ot,kindOf:de,kindOfTest:D,endsWith:At,toArray:gt,isTypedArray:xt,isFileList:mt},L=E;function be(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Be=function(e,r,a){if(!r)return e;var n;if(a)n=a(r);else if(L.isURLSearchParams(r))n=r.toString();else{var o=[];L.forEach(r,function(u,d){u===null||typeof u=="undefined"||(L.isArray(u)?d=d+"[]":u=[u],L.forEach(u,function(c){L.isDate(c)?c=c.toISOString():L.isObject(c)&&(c=JSON.stringify(c)),o.push(be(d)+"="+be(c))}))}),n=o.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},Ct=E;function K(){this.handlers=[]}K.prototype.use=function(e,r,a){return this.handlers.push({fulfilled:e,rejected:r,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};K.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};K.prototype.forEach=function(e){Ct.forEach(this.handlers,function(a){a!==null&&e(a)})};var St=K,Tt=E,Pt=function(e,r){Tt.forEach(e,function(n,o){o!==r&&o.toUpperCase()===r.toUpperCase()&&(e[r]=n,delete e[o])})},Le=E;function k(t,e,r,a,n){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),r&&(this.config=r),a&&(this.request=a),n&&(this.response=n)}Le.inherits(k,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ve=k.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(t){ke[t]={value:t}});Object.defineProperties(k,ke);Object.defineProperty(Ve,"isAxiosError",{value:!0});k.from=function(t,e,r,a,n,o){var s=Object.create(Ve);return Le.toFlatObject(t,s,function(u){return u!==Error.prototype}),k.call(s,t.message,e,r,a,n),s.name=t.name,o&&Object.assign(s,o),s};var q=k,Fe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},x=E;function Nt(t,e){e=e||new FormData;var r=[];function a(o){return o===null?"":x.isDate(o)?o.toISOString():x.isArrayBuffer(o)||x.isTypedArray(o)?typeof Blob=="function"?new Blob([o]):Buffer.from(o):o}function n(o,s){if(x.isPlainObject(o)||x.isArray(o)){if(r.indexOf(o)!==-1)throw Error("Circular reference detected in "+s);r.push(o),x.forEach(o,function(u,d){if(!x.isUndefined(u)){var i=s?s+"."+d:d,c;if(u&&!s&&typeof u=="object"){if(x.endsWith(d,"{}"))u=JSON.stringify(u);else if(x.endsWith(d,"[]")&&(c=x.toArray(u))){c.forEach(function(v){!x.isUndefined(v)&&e.append(i,a(v))});return}}n(u,i)}}),r.pop()}else e.append(s,a(o))}return n(t),e}var je=Nt,te=q,Ut=function(e,r,a){var n=a.config.validateStatus;!a.status||!n||n(a.status)?e(a):r(new te("Request failed with status code "+a.status,[te.ERR_BAD_REQUEST,te.ERR_BAD_RESPONSE][Math.floor(a.status/100)-4],a.config,a.request,a))},H=E,$t=H.isStandardBrowserEnv()?function(){return{write:function(r,a,n,o,s,l){var u=[];u.push(r+"="+encodeURIComponent(a)),H.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),H.isString(o)&&u.push("path="+o),H.isString(s)&&u.push("domain="+s),l===!0&&u.push("secure"),document.cookie=u.join("; ")},read:function(r){var a=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return a?decodeURIComponent(a[3]):null},remove:function(r){this.write(r,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Dt=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Bt=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e},Lt=Dt,Vt=Bt,qe=function(e,r){return e&&!Lt(r)?Vt(e,r):r},re=E,kt=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Ft=function(e){var r={},a,n,o;return e&&re.forEach(e.split(`
`),function(l){if(o=l.indexOf(":"),a=re.trim(l.substr(0,o)).toLowerCase(),n=re.trim(l.substr(o+1)),a){if(r[a]&&kt.indexOf(a)>=0)return;a==="set-cookie"?r[a]=(r[a]?r[a]:[]).concat([n]):r[a]=r[a]?r[a]+", "+n:n}}),r},Ee=E,jt=Ee.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a"),a;function n(o){var s=o;return e&&(r.setAttribute("href",s),s=r.href),r.setAttribute("href",s),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:r.pathname.charAt(0)==="/"?r.pathname:"/"+r.pathname}}return a=n(window.location.href),function(s){var l=Ee.isString(s)?n(s):s;return l.protocol===a.protocol&&l.host===a.host}}():function(){return function(){return!0}}(),le=q,qt=E;function Ie(t){le.call(this,t==null?"canceled":t,le.ERR_CANCELED),this.name="CanceledError"}qt.inherits(Ie,le,{__CANCEL__:!0});var Z=Ie,It=function(e){var r=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return r&&r[1]||""},I=E,Mt=Ut,Ht=$t,zt=Be,Jt=qe,Wt=Ft,Xt=jt,Qt=Fe,S=q,Kt=Z,Zt=It,we=function(e){return new Promise(function(a,n){var o=e.data,s=e.headers,l=e.responseType,u;function d(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}I.isFormData(o)&&I.isStandardBrowserEnv()&&delete s["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var c=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";s.Authorization="Basic "+btoa(c+":"+v)}var _=Jt(e.baseURL,e.url);i.open(e.method.toUpperCase(),zt(_,e.params,e.paramsSerializer),!0),i.timeout=e.timeout;function N(){if(!!i){var R="getAllResponseHeaders"in i?Wt(i.getAllResponseHeaders()):null,w=!l||l==="text"||l==="json"?i.responseText:i.response,g={data:w,status:i.status,statusText:i.statusText,headers:R,config:e,request:i};Mt(function(U){a(U),d()},function(U){n(U),d()},g),i=null}}if("onloadend"in i?i.onloadend=N:i.onreadystatechange=function(){!i||i.readyState!==4||i.status===0&&!(i.responseURL&&i.responseURL.indexOf("file:")===0)||setTimeout(N)},i.onabort=function(){!i||(n(new S("Request aborted",S.ECONNABORTED,e,i)),i=null)},i.onerror=function(){n(new S("Network Error",S.ERR_NETWORK,e,i,i)),i=null},i.ontimeout=function(){var w=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",g=e.transitional||Qt;e.timeoutErrorMessage&&(w=e.timeoutErrorMessage),n(new S(w,g.clarifyTimeoutError?S.ETIMEDOUT:S.ECONNABORTED,e,i)),i=null},I.isStandardBrowserEnv()){var T=(e.withCredentials||Xt(_))&&e.xsrfCookieName?Ht.read(e.xsrfCookieName):void 0;T&&(s[e.xsrfHeaderName]=T)}"setRequestHeader"in i&&I.forEach(s,function(w,g){typeof o=="undefined"&&g.toLowerCase()==="content-type"?delete s[g]:i.setRequestHeader(g,w)}),I.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),l&&l!=="json"&&(i.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&i.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(u=function(R){!i||(n(!R||R&&R.type?new Kt:R),i.abort(),i=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u))),o||(o=null);var C=Zt(_);if(C&&["http","https","file"].indexOf(C)===-1){n(new S("Unsupported protocol "+C+":",S.ERR_BAD_REQUEST,e));return}i.send(o)})},Gt=null,b=E,Re=Pt,Oe=q,Yt=Fe,er=je,tr={"Content-Type":"application/x-www-form-urlencoded"};function Ae(t,e){!b.isUndefined(t)&&b.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function rr(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=we),t}function nr(t,e,r){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(r||JSON.stringify)(t)}var G={transitional:Yt,adapter:rr(),transformRequest:[function(e,r){if(Re(r,"Accept"),Re(r,"Content-Type"),b.isFormData(e)||b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return Ae(r,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var a=b.isObject(e),n=r&&r["Content-Type"],o;if((o=b.isFileList(e))||a&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return er(o?{"files[]":e}:e,s&&new s)}else if(a||n==="application/json")return Ae(r,"application/json"),nr(e);return e}],transformResponse:[function(e){var r=this.transitional||G.transitional,a=r&&r.silentJSONParsing,n=r&&r.forcedJSONParsing,o=!a&&this.responseType==="json";if(o||n&&b.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(o)throw s.name==="SyntaxError"?Oe.from(s,Oe.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Gt},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};b.forEach(["delete","get","head"],function(e){G.headers[e]={}});b.forEach(["post","put","patch"],function(e){G.headers[e]=b.merge(tr)});var he=G,ar=E,or=he,ir=function(e,r,a){var n=this||or;return ar.forEach(a,function(s){e=s.call(n,e,r)}),e},Me=function(e){return!!(e&&e.__CANCEL__)},ge=E,ne=ir,sr=Me,lr=he,ur=Z;function ae(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new ur}var fr=function(e){ae(e),e.headers=e.headers||{},e.data=ne.call(e,e.data,e.headers,e.transformRequest),e.headers=ge.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ge.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var r=e.adapter||lr.adapter;return r(e).then(function(n){return ae(e),n.data=ne.call(e,n.data,n.headers,e.transformResponse),n},function(n){return sr(n)||(ae(e),n&&n.response&&(n.response.data=ne.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},A=E,He=function(e,r){r=r||{};var a={};function n(i,c){return A.isPlainObject(i)&&A.isPlainObject(c)?A.merge(i,c):A.isPlainObject(c)?A.merge({},c):A.isArray(c)?c.slice():c}function o(i){if(A.isUndefined(r[i])){if(!A.isUndefined(e[i]))return n(void 0,e[i])}else return n(e[i],r[i])}function s(i){if(!A.isUndefined(r[i]))return n(void 0,r[i])}function l(i){if(A.isUndefined(r[i])){if(!A.isUndefined(e[i]))return n(void 0,e[i])}else return n(void 0,r[i])}function u(i){if(i in r)return n(e[i],r[i]);if(i in e)return n(void 0,e[i])}var d={url:s,method:s,data:s,baseURL:l,transformRequest:l,transformResponse:l,paramsSerializer:l,timeout:l,timeoutMessage:l,withCredentials:l,adapter:l,responseType:l,xsrfCookieName:l,xsrfHeaderName:l,onUploadProgress:l,onDownloadProgress:l,decompress:l,maxContentLength:l,maxBodyLength:l,beforeRedirect:l,transport:l,httpAgent:l,httpsAgent:l,cancelToken:l,socketPath:l,responseEncoding:l,validateStatus:u};return A.forEach(Object.keys(e).concat(Object.keys(r)),function(c){var v=d[c]||o,_=v(c);A.isUndefined(_)&&v!==u||(a[c]=_)}),a},ze={version:"0.27.2"},dr=ze.version,P=q,ve={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){ve[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var xe={};ve.transitional=function(e,r,a){function n(o,s){return"[Axios v"+dr+"] Transitional option '"+o+"'"+s+(a?". "+a:"")}return function(o,s,l){if(e===!1)throw new P(n(s," has been removed"+(r?" in "+r:"")),P.ERR_DEPRECATED);return r&&!xe[s]&&(xe[s]=!0,console.warn(n(s," has been deprecated since v"+r+" and will be removed in the near future"))),e?e(o,s,l):!0}};function cr(t,e,r){if(typeof t!="object")throw new P("options must be an object",P.ERR_BAD_OPTION_VALUE);for(var a=Object.keys(t),n=a.length;n-- >0;){var o=a[n],s=e[o];if(s){var l=t[o],u=l===void 0||s(l,o,t);if(u!==!0)throw new P("option "+o+" must be "+u,P.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new P("Unknown option "+o,P.ERR_BAD_OPTION)}}var pr={assertOptions:cr,validators:ve},Je=E,mr=Be,Ce=St,Se=fr,Y=He,hr=qe,We=pr,V=We.validators;function F(t){this.defaults=t,this.interceptors={request:new Ce,response:new Ce}}F.prototype.request=function(e,r){typeof e=="string"?(r=r||{},r.url=e):r=e||{},r=Y(this.defaults,r),r.method?r.method=r.method.toLowerCase():this.defaults.method?r.method=this.defaults.method.toLowerCase():r.method="get";var a=r.transitional;a!==void 0&&We.assertOptions(a,{silentJSONParsing:V.transitional(V.boolean),forcedJSONParsing:V.transitional(V.boolean),clarifyTimeoutError:V.transitional(V.boolean)},!1);var n=[],o=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(r)===!1||(o=o&&_.synchronous,n.unshift(_.fulfilled,_.rejected))});var s=[];this.interceptors.response.forEach(function(_){s.push(_.fulfilled,_.rejected)});var l;if(!o){var u=[Se,void 0];for(Array.prototype.unshift.apply(u,n),u=u.concat(s),l=Promise.resolve(r);u.length;)l=l.then(u.shift(),u.shift());return l}for(var d=r;n.length;){var i=n.shift(),c=n.shift();try{d=i(d)}catch(v){c(v);break}}try{l=Se(d)}catch(v){return Promise.reject(v)}for(;s.length;)l=l.then(s.shift(),s.shift());return l};F.prototype.getUri=function(e){e=Y(this.defaults,e);var r=hr(e.baseURL,e.url);return mr(r,e.params,e.paramsSerializer)};Je.forEach(["delete","get","head","options"],function(e){F.prototype[e]=function(r,a){return this.request(Y(a||{},{method:e,url:r,data:(a||{}).data}))}});Je.forEach(["post","put","patch"],function(e){function r(a){return function(o,s,l){return this.request(Y(l||{},{method:e,headers:a?{"Content-Type":"multipart/form-data"}:{},url:o,data:s}))}}F.prototype[e]=r(),F.prototype[e+"Form"]=r(!0)});var vr=F,_r=Z;function j(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var r=this;this.promise.then(function(a){if(!!r._listeners){var n,o=r._listeners.length;for(n=0;n<o;n++)r._listeners[n](a);r._listeners=null}}),this.promise.then=function(a){var n,o=new Promise(function(s){r.subscribe(s),n=s}).then(a);return o.cancel=function(){r.unsubscribe(n)},o},t(function(n){r.reason||(r.reason=new _r(n),e(r.reason))})}j.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};j.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};j.prototype.unsubscribe=function(e){if(!!this._listeners){var r=this._listeners.indexOf(e);r!==-1&&this._listeners.splice(r,1)}};j.source=function(){var e,r=new j(function(n){e=n});return{token:r,cancel:e}};var yr=j,br=function(e){return function(a){return e.apply(null,a)}},Er=E,wr=function(e){return Er.isObject(e)&&e.isAxiosError===!0},Te=E,Rr=Ue,J=vr,Or=He,Ar=he;function Xe(t){var e=new J(t),r=Rr(J.prototype.request,e);return Te.extend(r,J.prototype,e),Te.extend(r,e),r.create=function(n){return Xe(Or(t,n))},r}var O=Xe(Ar);O.Axios=J;O.CanceledError=Z;O.CancelToken=yr;O.isCancel=Me;O.VERSION=ze.version;O.toFormData=je;O.AxiosError=q;O.Cancel=O.CanceledError;O.all=function(e){return Promise.all(e)};O.spread=br;O.isAxiosError=wr;ue.exports=O;ue.exports.default=O;var gr=ue.exports;const _e=gr.create({baseURL:"/api",timeout:5e3});_e.interceptors.request.use(t=>(t.headers.token="token",t),t=>{console.log(t)});_e.interceptors.response.use(t=>{const{code:e,data:r,msg:a}=t.data;return e!==200?(X.error(a||"\u8BF7\u6C42\u5931\u8D25"),Promise.reject(new Error(a))):r},t=>(X.error(t.message||"\u8BF7\u6C42\u5931\u8D25"),Promise.reject(t)));const xr=t=>_e({url:"/demoList",method:"get",params:t}),Cr={class:"app-container"},Sr=M("Query"),Tr=M("edit"),Pr=M("delete"),Nr={name:"Demo1"},$r=Object.assign(Nr,{setup(t){const e=Ke(),r=W(null),a=W(),n=oe({user:"",region:""}),o=oe([]),s=async()=>{const{page:i,pre_size:c}=a.value.pageQuery;e.value=!0;const v=await xr({page:i.value,pre_size:c.value});setTimeout(()=>{o.splice(0),a.value.changeTotal(v.total),o.push(...v.list),e.value=!1},500)},l=()=>{console.log("submit!")},u=i=>{r.value.showEdit(i)},d=()=>{et.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{X({type:"success",message:"Delete completed"})}).catch(()=>{X({type:"info",message:"Delete canceled"})})};return(i,c)=>{const v=h("el-input"),_=h("el-form-item"),N=h("el-option"),T=h("el-select"),C=h("el-button"),R=h("el-form"),w=h("el-table-column"),g=h("el-table"),B=h("fs-pagination"),U=Ze("loading");return ie(),Ge("div",Cr,[f(R,{inline:!0,model:m(n),class:"demo-form-inline"},{default:p(()=>[f(_,{label:"Approved by"},{default:p(()=>[f(v,{modelValue:m(n).user,"onUpdate:modelValue":c[0]||(c[0]=$=>m(n).user=$),placeholder:"Approved by"},null,8,["modelValue"])]),_:1}),f(_,{label:"Activity zone"},{default:p(()=>[f(T,{modelValue:m(n).region,"onUpdate:modelValue":c[1]||(c[1]=$=>m(n).region=$),placeholder:"Activity zone"},{default:p(()=>[f(N,{label:"Zone one",value:"shanghai"}),f(N,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),f(_,null,{default:p(()=>[f(C,{type:"primary",onClick:l},{default:p(()=>[Sr]),_:1})]),_:1})]),_:1},8,["model"]),ye((ie(),Pe(g,{data:m(o),border:"",style:{width:"100%"}},{default:p(()=>[f(w,{prop:"date",label:"Date",width:"180"}),f(w,{prop:"name",label:"Name",width:"180"}),f(w,{prop:"address",label:"Address"}),f(w,{label:"operate"},{default:p(({row:$})=>[f(C,{type:"primary",onClick:ee=>u($)},{default:p(()=>[Tr]),_:2},1032,["onClick"]),f(C,{type:"danger",onClick:d},{default:p(()=>[Pr]),_:1})]),_:1})]),_:1},8,["data"])),[[U,m(e)]]),ye(f(B,{ref_key:"FsPageRef",ref:a,onGetTableList:s},null,512),[[Ye,m(o).length]]),f(ot,{ref_key:"edit",ref:r,onGetTableList:s},null,512)])}}});export{$r as default};
