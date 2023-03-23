var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,r=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&n(e,t,a[t]);if(l)for(var t of l(a))o.call(a,t)&&n(e,t,a[t]);return e},i=(e,l)=>a(e,t(l));import{N as u,O as c,aF as d,W as p,a6 as b,a8 as v,Y as m,b as f,Z as y,ae as g,aG as h,ac as x,o as P,d as k,a3 as w,g as T,am as $,a4 as N,aH as C,aI as B,aJ as E,aK as O,V as S,a9 as R,ab as j,f as V,aL as _,aM as F,aN as A,aO as L,aP as K,aQ as U,R as M,aR as W,r as q,$ as z,aS as H,a2 as I,af as Y,aT as D,aU as G,av as J,aw as Q,ao as X,ar as Z,as as ee,aV as ae,E as te,c as le,w as se,aW as oe,ak as ne,j as re}from"./index-11542374.js";import{E as ie,a as ue}from"./el-form-item-16a585a2.js";import"./castArray-02610eac.js";const ce=Symbol("tabsRootContextKey"),de=u({tabs:{type:c(Array),default:()=>d([])}});var pe=N(p(i(r({},{name:"ElTabBar"}),{props:de,setup(e,{expose:a}){const t=e,l=C(),s=b(ce);s||v("ElTabBar","<el-tabs><el-tab-bar /></el-tabs>");const o=m("tabs"),n=f(),r=f(),i=()=>r.value=(()=>{let e=0,a=0;const o=["top","bottom"].includes(s.props.tabPosition)?"width":"height",n="width"===o?"x":"y";return t.tabs.every((s=>{var r,i,u,c;const d=null==(i=null==(r=l.parent)?void 0:r.refs)?void 0:i[`tab-${s.paneName}`];if(!d)return!1;if(!s.active)return!0;a=d[`client${h(o)}`];const p="x"===n?"left":"top";e=d.getBoundingClientRect()[p]-(null!=(c=null==(u=d.parentElement)?void 0:u.getBoundingClientRect()[p])?c:0);const b=window.getComputedStyle(d);return"width"===o&&(t.tabs.length>1&&(a-=Number.parseFloat(b.paddingLeft)+Number.parseFloat(b.paddingRight)),e+=Number.parseFloat(b.paddingLeft)),!1})),{[o]:`${a}px`,transform:`translate${h(n)}(${e}px)`}})();return y((()=>t.tabs),(async()=>{await g(),i()}),{immediate:!0}),x(n,(()=>i())),a({ref:n,update:i}),(e,a)=>(P(),k("div",{ref_key:"barRef",ref:n,class:w([T(o).e("active-bar"),T(o).is(T(s).props.tabPosition)]),style:$(r.value)},null,6))}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-bar.vue"]]);const be=u({panes:{type:c(Array),default:()=>d([])},currentName:{type:[String,Number],default:""},editable:Boolean,onTabClick:{type:c(Function),default:B},onTabRemove:{type:c(Function),default:B},type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),ve=p({name:"ElTabNav",props:be,setup(e,{expose:a}){const t=C(),l=b(ce);l||v("ElTabNav","<el-tabs><tab-nav /></el-tabs>");const s=m("tabs"),o=E(),n=O(),r=f(),i=f(),u=f(),c=f(!1),d=f(0),p=f(!1),g=f(!0),P=S((()=>["top","bottom"].includes(l.props.tabPosition)?"width":"height")),k=S((()=>({transform:`translate${"width"===P.value?"X":"Y"}(-${d.value}px)`}))),w=()=>{if(!r.value)return;const e=r.value[`offset${h(P.value)}`],a=d.value;if(!a)return;const t=a>e?a-e:0;d.value=t},T=()=>{if(!r.value||!i.value)return;const e=i.value[`offset${h(P.value)}`],a=r.value[`offset${h(P.value)}`],t=d.value;if(e-t<=a)return;const l=e-t>2*a?t+a:e-a;d.value=l},$=()=>{const e=i.value;if(!(c.value&&u.value&&r.value&&e))return;const a=u.value.querySelector(".is-active");if(!a)return;const t=r.value,s=["top","bottom"].includes(l.props.tabPosition),o=a.getBoundingClientRect(),n=t.getBoundingClientRect(),p=s?e.offsetWidth-n.width:e.offsetHeight-n.height,b=d.value;let v=b;s?(o.left<n.left&&(v=b-(n.left-o.left)),o.right>n.right&&(v=b+o.right-n.right)):(o.top<n.top&&(v=b-(n.top-o.top)),o.bottom>n.bottom&&(v=b+(o.bottom-n.bottom))),v=Math.max(v,0),d.value=Math.min(v,p)},N=()=>{if(!i.value||!r.value)return;const e=i.value[`offset${h(P.value)}`],a=r.value[`offset${h(P.value)}`],t=d.value;if(a<e){const t=d.value;c.value=c.value||{},c.value.prev=t,c.value.next=t+a<e,e-t<a&&(d.value=e-a)}else c.value=!1,t>0&&(d.value=0)},B=e=>{const a=e.code,{up:t,down:l,left:s,right:o}=K;if(![t,l,s,o].includes(a))return;const n=Array.from(e.currentTarget.querySelectorAll("[role=tab]")),r=n.indexOf(e.target);let i;i=a===s||a===t?0===r?n.length-1:r-1:r<n.length-1?r+1:0,n[i].focus(),n[i].click(),U()},U=()=>{g.value&&(p.value=!0)},M=()=>p.value=!1;return y(o,(e=>{"hidden"===e?g.value=!1:"visible"===e&&setTimeout((()=>g.value=!0),50)})),y(n,(e=>{e?setTimeout((()=>g.value=!0),50):g.value=!1})),x(u,N),R((()=>setTimeout((()=>$()),0))),j((()=>N())),a({scrollToActiveTab:$,removeFocus:M}),y((()=>e.panes),(()=>t.update()),{flush:"post"}),()=>{const a=c.value?[V("span",{class:[s.e("nav-prev"),s.is("disabled",!c.value.prev)],onClick:w},[V(_,null,{default:()=>[V(F,null,null)]})]),V("span",{class:[s.e("nav-next"),s.is("disabled",!c.value.next)],onClick:T},[V(_,null,{default:()=>[V(A,null,null)]})])]:null,t=e.panes.map(((a,t)=>{var o,n;const r=a.props.name||a.index||`${t}`,i=a.isClosable||e.editable;a.index=`${t}`;const u=i?V(_,{class:"is-icon-close",onClick:t=>e.onTabRemove(a,t)},{default:()=>[V(L,null,null)]}):null,c=(null==(n=(o=a.slots).label)?void 0:n.call(o))||a.props.label,d=a.active?0:-1;return V("div",{ref:`tab-${r}`,class:[s.e("item"),s.is(l.props.tabPosition),s.is("active",a.active),s.is("disabled",a.props.disabled),s.is("closable",i),s.is("focus",p.value)],id:`tab-${r}`,key:`tab-${r}`,"aria-controls":`pane-${r}`,role:"tab","aria-selected":a.active,tabindex:d,onFocus:()=>U(),onBlur:()=>M(),onClick:t=>{M(),e.onTabClick(a,r,t)},onKeydown:t=>{!i||t.code!==K.delete&&t.code!==K.backspace||e.onTabRemove(a,t)}},[c,u])}));return V("div",{ref:u,class:[s.e("nav-wrap"),s.is("scrollable",!!c.value),s.is(l.props.tabPosition)]},[a,V("div",{class:s.e("nav-scroll"),ref:r},[V("div",{class:[s.e("nav"),s.is(l.props.tabPosition),s.is("stretch",e.stretch&&["top","bottom"].includes(l.props.tabPosition))],ref:i,style:k.value,role:"tablist",onKeydown:B},[e.type?null:V(pe,{tabs:[...e.panes]},null),t])])])}}}),me=u({type:{type:String,values:["card","border-card",""],default:""},activeName:{type:[String,Number],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number],default:""},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:c(Function),default:()=>!0},stretch:Boolean}),fe=e=>M(e)||W(e);var ye=p({name:"ElTabs",props:me,emits:{[U]:e=>fe(e),"tab-click":(e,a)=>a instanceof Event,"tab-change":e=>fe(e),edit:(e,a)=>["remove","add"].includes(a),"tab-remove":e=>fe(e),"tab-add":()=>!0},setup(e,{emit:a,slots:t,expose:l}){const s=m("tabs"),o=f(),n=q({}),r=f(e.modelValue||e.activeName||"0"),i=async t=>{var l,s,n;if(r.value!==t)try{!1!==await(null==(l=e.beforeLeave)?void 0:l.call(e,t,r.value))&&((e=>{r.value=e,a(U,e),a("tab-change",e)})(t),null==(n=null==(s=o.value)?void 0:s.removeFocus)||n.call(s))}catch(i){}},u=(e,t,l)=>{e.props.disabled||(i(t),a("tab-click",e,l))},c=(e,t)=>{e.props.disabled||(t.stopPropagation(),a("edit",e.props.name,"remove"),a("tab-remove",e.props.name))},d=()=>{a("edit",void 0,"add"),a("tab-add")};y((()=>e.activeName),(e=>i(e))),y((()=>e.modelValue),(e=>i(e))),y(r,(async()=>{var e;null==(e=o.value)||e.scrollToActiveTab()}));z(ce,{props:e,currentName:r,registerPane:e=>n[e.uid]=e,unregisterPane:e=>delete n[e]});return l({currentName:r}),()=>{const a=e.editable||e.addable?V("span",{class:s.e("new-tab"),tabindex:"0",onClick:d,onKeydown:e=>{e.code===K.enter&&d()}},[V(_,{class:s.is("icon-plus")},{default:()=>[V(H,null,null)]})]):null,l=V("div",{class:[s.e("header"),s.is(e.tabPosition)]},[a,V(ve,{ref:o,currentName:r.value,editable:e.editable,type:e.type,panes:Object.values(n),stretch:e.stretch,onTabClick:u,onTabRemove:c},null)]),i=V("div",{class:s.e("content")},[I(t,"default")]);return V("div",{class:[s.b(),s.m(e.tabPosition),{[s.m("card")]:"card"===e.type,[s.m("border-card")]:"border-card"===e.type}]},[..."bottom"!==e.tabPosition?[l,i]:[i,l]])}}});const ge=u({label:{type:String,default:""},name:{type:[String,Number],default:""},closable:Boolean,disabled:Boolean,lazy:Boolean}),he=["id","aria-hidden","aria-labelledby"];var xe=N(p(i(r({},{name:"ElTabPane"}),{props:ge,setup(e){const a=e,t=C(),l=Y(),s=b(ce);s||v("ElTabPane","usage: <el-tabs><el-tab-pane /></el-tabs/>");const o=m("tab-pane"),n=f(),r=S((()=>a.closable||s.props.closable)),i=D((()=>s.currentName.value===(a.name||n.value))),u=f(i.value),c=S((()=>a.name||n.value)),d=D((()=>!a.lazy||u.value||i.value));y(i,(e=>{e&&(u.value=!0)}));const p=q({uid:t.uid,slots:l,props:a,paneName:c,active:i,index:n,isClosable:r});return R((()=>{s.registerPane(p)})),G((()=>{s.unregisterPane(p.uid)})),(e,a)=>T(d)?J((P(),k("div",{key:0,id:`pane-${T(c)}`,class:w(T(o).b()),role:"tabpanel","aria-hidden":!T(i),"aria-labelledby":`tab-${T(c)}`},[I(e.$slots,"default")],10,he)),[[Q,T(i)]]):X("v-if",!0)}})),[["__file","/home/runner/work/element-plus/element-plus/packages/components/tabs/src/tab-pane.vue"]]);const Pe=Z(ye,{TabPane:xe}),ke=ee(xe);let we="";function Te(){ae(we)}const $e={created(e,a){e.addEventListener("click",Te),we=a.value},updated(e,a){we=a.value},beforeUnmount(e){e.removeEventListener("click",Te),we=""}},Ne={class:"app-container"},Ce=re("Copy"),Be=re("Copy"),Ee={directives:{clipboard:$e}},Oe=Object.assign(Ee,{setup(e){const a=q({text:"https://mao-118.github.io/fast-vue-admin"}),t=f("directly"),l=()=>{ae(a.text)};return(e,s)=>{const o=ke,n=Pe,r=te,i=ie,u=le,c=ue,d=oe("clipboard");return P(),k("div",Ne,[V(n,{modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e),class:"demo-tabs"},{default:se((()=>[V(o,{label:"直接复制",name:"directly"}),V(o,{label:"指令复制",name:"directive"})])),_:1},8,["modelValue"]),V(c,{inline:!0,model:T(a),class:"demo-form-inline"},{default:se((()=>[V(i,null,{default:se((()=>[V(r,{modelValue:T(a).text,"onUpdate:modelValue":s[1]||(s[1]=e=>T(a).text=e),style:{width:"300px"},placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),V(i,null,{default:se((()=>["directly"===t.value?(P(),ne(u,{key:0,type:"primary",onClick:l},{default:se((()=>[Ce])),_:1})):J((P(),ne(u,{key:1,type:"primary"},{default:se((()=>[Be])),_:1})),[[d,T(a).text]])])),_:1})])),_:1},8,["model"])])}}});export{Oe as default};
