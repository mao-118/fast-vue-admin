import{c as a,k as r,l as s,b as t,E as e,n,i as o,j as c}from"./index-28099bfc.js";const l={class:"app-container"},i=t("p",null,"点击按钮会产生一个错误",-1),p=c("确定"),u={setup(t){const c=()=>{throw e.info("产生一个错误，点击右上角图标查看"),new Error("create a error")};return(t,e)=>{const u=n("el-button");return o(),a("div",l,[i,r(u,{type:"danger",onClick:c},{default:s((()=>[p])),_:1})])}}};export{u as default};
