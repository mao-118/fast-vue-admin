var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,i=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a;import{W as n,X as l,a2 as c,a4 as d,a1 as p,o as u,e as v,aa as b,i as f,a9 as y,at as m,ar as O,ab as g,aw as j}from"./index-274711a6.js";const P=n({direction:{type:String,values:["horizontal","vertical"],default:"horizontal"},contentPosition:{type:String,values:["left","center","right"],default:"center"},borderStyle:{type:l(String),default:"solid"}}),w=c((S=((e,t)=>{for(var r in t||(t={}))s.call(t,r)&&i(e,r,t[r]);if(a)for(var r of a(t))o.call(t,r)&&i(e,r,t[r]);return e})({},{name:"ElDivider"}),t(S,r({props:P,setup(e){const t=e,r=d("divider"),a=p((()=>r.cssVar({"border-style":t.borderStyle})));return(e,t)=>(u(),v("div",{class:b([f(r).b(),f(r).m(e.direction)]),style:O(f(a))},[e.$slots.default&&"vertical"!==e.direction?(u(),v("div",{key:0,class:b([f(r).e("text"),f(r).is(e.contentPosition)])},[y(e.$slots,"default")],2)):m("v-if",!0)],6))}}))));var S;const h=j(g(w,[["__file","/home/runner/work/element-plus/element-plus/packages/components/divider/src/divider.vue"]]));export{h as E};
