import{b as _,Z as v,c as a,o as w,d as B,f as e,w as l,g as b,$ as x,e as C,k as p}from"./index.96e25fe0.js";const h={class:"app-container"},F=p("\u6587\u672C\u8F6Cbase64"),N=p("\u6587\u4EF6\u8F6Cbase64"),R=p("Choose Files"),T={setup(U){const c=_(),s=_(""),i=_(),{base64:u}=v(s),{base64:d}=v(i),y=()=>{c.value.click()},g=f=>{i.value=f.target.files[0]};return(f,t)=>{const m=a("el-divider"),r=a("el-input"),n=a("el-col"),V=a("el-row"),k=a("el-button");return w(),B("div",h,[e(m,null,{default:l(()=>[F]),_:1}),e(V,{gutter:20},{default:l(()=>[e(n,{span:12},{default:l(()=>[e(r,{rows:5,type:"textarea",modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=o=>s.value=o)},null,8,["modelValue"])]),_:1}),e(n,{span:12},{default:l(()=>[e(r,{rows:5,type:"textarea",readonly:"",modelValue:b(u),"onUpdate:modelValue":t[1]||(t[1]=o=>x(u)?u.value=o:null)},null,8,["modelValue"])]),_:1})]),_:1}),e(m,null,{default:l(()=>[N]),_:1}),e(V,{gutter:20},{default:l(()=>[e(n,{span:12},{default:l(()=>[e(k,{style:{display:"block",margin:"0 auto"},color:"#44bd87",onClick:y},{default:l(()=>[R]),_:1}),C("input",{ref_key:"uploadFileRef",ref:c,type:"file",onChange:g,hidden:""},null,544)]),_:1}),e(n,{span:12},{default:l(()=>[e(r,{rows:5,type:"textarea",readonly:"",modelValue:b(d),"onUpdate:modelValue":t[2]||(t[2]=o=>x(d)?d.value=o:null)},null,8,["modelValue"])]),_:1})]),_:1})])}}};export{T as default};