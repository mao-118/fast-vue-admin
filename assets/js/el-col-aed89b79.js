import{N as e,O as t,aF as s,W as a,a6 as u,V as p,Y as l,f as r,ar as b}from"./index-11542374.js";const f=Symbol("rowContextKey");const o=b(a({name:"ElCol",props:e({tag:{type:String,default:"div"},span:{type:Number,default:24},offset:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},xs:{type:t([Number,Object]),default:()=>s({})},sm:{type:t([Number,Object]),default:()=>s({})},md:{type:t([Number,Object]),default:()=>s({})},lg:{type:t([Number,Object]),default:()=>s({})},xl:{type:t([Number,Object]),default:()=>s({})}}),setup(e,{slots:t}){const{gutter:s}=u(f,{gutter:p((()=>0))}),a=l("col"),b=p((()=>s.value?{paddingLeft:s.value/2+"px",paddingRight:s.value/2+"px"}:{})),o=p((()=>{const t=[];["span","offset","pull","push"].forEach((s=>{const u=e[s];"number"==typeof u&&("span"===s?t.push(a.b(`${e[s]}`)):u>0&&t.push(a.b(`${s}-${e[s]}`)))}));return["xs","sm","md","lg","xl"].forEach((s=>{if("number"==typeof e[s])t.push(a.b(`${s}-${e[s]}`));else if("object"==typeof e[s]){const u=e[s];Object.keys(u).forEach((e=>{t.push("span"!==e?a.b(`${s}-${e}-${u[e]}`):a.b(`${s}-${u[e]}`))}))}})),s.value&&t.push(a.is("guttered")),t}));return()=>r(e.tag,{class:[a.b(),o.value],style:b.value},t)}}));export{o as E,f as r};
