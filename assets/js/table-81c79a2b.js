var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,a,r)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[a]=r;import{_ as n,S as c,c as p,k as i,l as d,t as f,n as u,i as b}from"./index-fda3baf4.js";const m={class:"app-container"};var y=n(c({setup(e){const n=((e=10,n="column-",c)=>Array.from({length:e}).map(((e,p)=>{return i=((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(r)for(var a of r(t))o.call(t,a)&&s(e,a,t[a]);return e})({},c),t(i,a({key:`${n}${p}`,dataKey:`${n}${p}`,title:`Column ${p}`,width:150}));var i})))(10),c=((e,t=200,a="row-")=>Array.from({length:t}).map(((t,r)=>e.reduce(((e,t,a)=>(e[t.dataKey]=`Row ${r} - Col ${a}`,e)),{id:`${a}${r}`,parentId:null}))))(n,200);return(e,t)=>{const a=u("el-alert"),r=u("el-col"),l=u("el-row"),o=u("el-table-v2");return b(),p("div",m,[i(l,{class:"mb-8"},{default:d((()=>[i(r,{class:"mb-2",span:24},{default:d((()=>[i(a,{title:"背景：在某些使用情况下，组件可能最终加载数万行数据。 将这么多的数据渲染至 DOM 中可能会给浏览器带来负担，从而造成性能问题。",type:"success",effect:"dark"})])),_:1}),i(r,{span:24},{default:d((()=>[i(a,{title:"Tips：虚拟化组件目前在测试当中，如果在使用中发现任何漏洞和问题，可以前往官网反馈。",type:"warning",effect:"dark"})])),_:1})])),_:1}),i(o,{columns:f(n),data:f(c),width:800,height:600,fixed:""},null,8,["columns","data"])])}}}),[["__scopeId","data-v-419fafb0"]]);export{y as default};