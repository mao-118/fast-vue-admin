import{s as e,r as a,b as l,c as t,e as d,w as o,f as s,i,v as n,o as u,x as r,y as c,m}from"./index-1313190c.js";let p="";function f(){e(p)}const v={created(e,a){e.addEventListener("click",f),p=a.value},updated(e,a){p=a.value},beforeUnmount(e){e.removeEventListener("click",f),p=""}},y={class:"app-container"},b=m("Copy"),x=m("Copy"),V={directives:{clipboard:v}},_=Object.assign(V,{setup(m){const p=a({text:"https://mao-118.github.io/fast-vue-admin"}),f=l("directly"),v=()=>{e(p.text)};return(e,a)=>{const l=i("el-tab-pane"),m=i("el-tabs"),V=i("el-input"),_=i("el-form-item"),k=i("el-button"),h=i("el-form"),C=n("clipboard");return u(),t("div",y,[d(m,{modelValue:f.value,"onUpdate:modelValue":a[0]||(a[0]=e=>f.value=e),class:"demo-tabs"},{default:o((()=>[d(l,{label:"直接复制",name:"directly"}),d(l,{label:"指令复制",name:"directive"})])),_:1},8,["modelValue"]),d(h,{inline:!0,model:s(p),class:"demo-form-inline"},{default:o((()=>[d(_,null,{default:o((()=>[d(V,{style:{width:"300px"},modelValue:s(p).text,"onUpdate:modelValue":a[1]||(a[1]=e=>s(p).text=e),placeholder:"请输入内容"},null,8,["modelValue"])])),_:1}),d(_,null,{default:o((()=>["directly"===f.value?(u(),r(k,{key:0,type:"primary",onClick:v},{default:o((()=>[b])),_:1})):c((u(),r(k,{key:1,type:"primary"},{default:o((()=>[x])),_:1})),[[C,s(p).text]])])),_:1})])),_:1},8,["model"])])}}});export{_ as default};
