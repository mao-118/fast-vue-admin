var e=Object.defineProperty,n=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,i=(n,t,l)=>t in n?e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):n[t]=l,r=(e,n)=>{for(var t in n||(n={}))o.call(n,t)&&i(e,t,n[t]);if(l)for(var t of l(n))a.call(n,t)&&i(e,t,n[t]);return e},s=(e,l)=>n(e,t(l));import{a0 as u,b as d,r as c,at as v,au as g,h as b,w as p,av as f,aw as m,f as y,ap as x,ax as w,ae as C,R as k,ay as L,az as O,aA as h,aB as A,aC as P,aD as B}from"./index-11542374.js";let $;const j=function(e={}){if(!w)return;const n=V(e);if(n.fullscreen&&$)return $;const t=function(e){let n;const t=d(!1),l=c(s(r({},e),{originalPosition:"",originalOverflow:"",visible:!1}));function o(){const e=l.parent;if(!e.vLoadingAddClassList){let n=e.getAttribute("loading-number");n=Number.parseInt(n)-1,n?e.setAttribute("loading-number",n.toString()):(g(e,"el-loading-parent--relative"),e.removeAttribute("loading-number")),g(e,"el-loading-parent--hidden")}a(),w.unmount()}function a(){var e,n;null==(n=null==(e=C.$el)?void 0:e.parentNode)||n.removeChild(C.$el)}function i(){t.value&&(t.value=!1,o())}const w=v({name:"ElLoading",setup:()=>()=>{const e=l.spinner||l.svg,n=b("svg",r({class:"circular",viewBox:l.svgViewBox?l.svgViewBox:"25 25 50 50"},e?{innerHTML:e}:{}),[b("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),t=l.text?b("p",{class:"el-loading-text"},[l.text]):void 0;return b(x,{name:"el-loading-fade",onAfterLeave:i},{default:p((()=>[f(y("div",{style:{backgroundColor:l.background||""},class:["el-loading-mask",l.customClass,l.fullscreen?"is-fullscreen":""]},[b("div",{class:"el-loading-spinner"},[n,t])]),[[m,l.visible]])]))})}}),C=w.mount(document.createElement("div"));return s(r({},u(l)),{setText:function(e){l.text=e},remvoeElLoadingChild:a,close:function(){var a;e.beforeClose&&!e.beforeClose()||(l.parent.vLoadingAddClassList=void 0,t.value=!0,clearTimeout(n),n=window.setTimeout((()=>{t.value&&(t.value=!1,o())}),400),l.visible=!1,null==(a=e.closed)||a.call(e))},handleAfterLeave:i,vm:C,get $el(){return C.$el}})}(s(r({},n),{closed:()=>{var e;null==(e=n.closed)||e.call(n),n.fullscreen&&($=void 0)}}));E(n,n.parent,t),I(n,n.parent,t),n.parent.vLoadingAddClassList=()=>I(n,n.parent,t);let l=n.parent.getAttribute("loading-number");return l=l?`${Number.parseInt(l)+1}`:"1",n.parent.setAttribute("loading-number",l),n.parent.appendChild(t.$el),C((()=>t.visible.value=n.visible)),n.fullscreen&&($=t),t},V=e=>{var n,t,l,o;let a;return a=k(e.target)?null!=(n=document.querySelector(e.target))?n:document.body:e.target||document.body,{parent:a===document.body||e.body?document.body:a,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:a===document.body&&(null==(t=e.fullscreen)||t),lock:null!=(l=e.lock)&&l,customClass:e.customClass||"",visible:null==(o=e.visible)||o,target:a}},E=async(e,n,t)=>{const{nextZIndex:l}=L(),o={};if(e.fullscreen)t.originalPosition.value=O(document.body,"position"),t.originalOverflow.value=O(document.body,"overflow"),o.zIndex=l();else if(e.parent===document.body){t.originalPosition.value=O(document.body,"position"),await C();for(const n of["top","left"]){const t="top"===n?"scrollTop":"scrollLeft";o[n]=e.target.getBoundingClientRect()[n]+document.body[t]+document.documentElement[t]-Number.parseInt(O(document.body,`margin-${n}`),10)+"px"}for(const n of["height","width"])o[n]=`${e.target.getBoundingClientRect()[n]}px`}else t.originalPosition.value=O(n,"position");for(const[a,i]of Object.entries(o))t.$el.style[a]=i},I=(e,n,t)=>{"absolute"!==t.originalPosition.value&&"fixed"!==t.originalPosition.value?h(n,"el-loading-parent--relative"):g(n,"el-loading-parent--relative"),e.fullscreen&&e.lock?h(n,"el-loading-parent--hidden"):g(n,"el-loading-parent--hidden")},T=Symbol("ElLoading"),N=(e,n)=>{var t,l,o,a;const i=n.instance,r=e=>A(n.value)?n.value[e]:void 0,s=n=>(e=>{const n=k(e)&&(null==i?void 0:i[e])||e;return n?d(n):n})(r(n)||e.getAttribute(`element-loading-${P(n)}`)),u=null!=(t=r("fullscreen"))?t:n.modifiers.fullscreen,c={text:s("text"),svg:s("svg"),svgViewBox:s("svgViewBox"),spinner:s("spinner"),background:s("background"),customClass:s("customClass"),fullscreen:u,target:null!=(l=r("target"))?l:u?void 0:e,body:null!=(o=r("body"))?o:n.modifiers.body,lock:null!=(a=r("lock"))?a:n.modifiers.lock};e[T]={options:c,instance:j(c)}},S={mounted(e,n){n.value&&N(e,n)},updated(e,n){const t=e[T];n.oldValue!==n.value&&(n.value&&!n.oldValue?N(e,n):n.value&&n.oldValue?A(n.value)&&((e,n)=>{for(const t of Object.keys(n))B(n[t])&&(n[t].value=e[t])})(n.value,t.options):null==t||t.instance.close())},unmounted(e){var n;null==(n=e[T])||n.instance.close()}};export{j as L,S as v};
