import{r as _,b,y as U,c as l,o as d,d as m,e as a,Q as w,g as t,D as k,f as s,w as n,q as z,J,F as M,C as Q,j as p,E as y}from"./index.9125a543.js";const T={class:"app-container"},W=p(" \u8FDE\u63A5\u72B6\u6001\uFF1A "),A=p("\u53D1\u9001"),G=p("\u804A\u5929\u8BB0\u5F55"),H={class:"msg-box"},I={class:"msg-content"},K={class:"msg-text"},Y={setup(O){const c=_([]),f=b(null),i=_({text:""}),V=_({text:[{required:!0,message:"\u8F93\u5165\u7684\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A",trigger:"blur"}]}),C=()=>{f.value.validate(e=>{e?(S(i.text),y.success("\u53D1\u9001\u6210\u529F")):console.log(e)})};let o=null;const r=b(0),x=_([{color:"text-purple-500",text:"\u5EFA\u7ACB\u8FDE\u63A5\u4E2D..."},{color:"text-green-500",text:"\u8FDE\u63A5\u6210\u529F"},{color:"text-red-500",text:"\u8FDE\u63A5\u5931\u8D25"},{color:"text-purple-500",text:"\u8FDE\u63A5\u5173\u95ED"}]),B=e=>{r.value=1},S=e=>{o.send(e),c.push(e)},D=e=>{c.push(e.data)},E=e=>{r.value=2,console.log("error",e),y.error("\u8FDE\u63A5\u5F02\u5E38\uFF0C\u8BF7\u5C1D\u8BD5\u5237\u65B0\u9875\u9762")},L=e=>{r.value=3,console.log("close",e)};return(()=>{o=new WebSocket("wss://javascript.info/article/websocket/chat/ws"),o.onopen=B,o.onmessage=D,o.onerror=E,o.onclose=L})(),U(()=>{o.close()}),(e,v)=>{const N=l("el-input"),j=l("el-col"),g=l("el-form-item"),q=l("el-button"),F=l("el-form"),R=l("el-divider");return d(),m("div",T,[a("div",null,[W,a("span",{class:w(t(x)[r.value].color)},k(t(x)[r.value].text),3)]),s(F,{ref_key:"formRef",ref:f,model:t(i),rules:t(V),"label-width":"80px"},{default:n(()=>[s(g,{label:"\u8F93\u5165\u5185\u5BB9",prop:"text"},{default:n(()=>[s(j,{span:5},{default:n(()=>[s(N,{modelValue:t(i).text,"onUpdate:modelValue":v[0]||(v[0]=u=>t(i).text=u)},null,8,["modelValue"])]),_:1})]),_:1}),s(g,null,{default:n(()=>[s(q,{type:"primary",onClick:C},{default:n(()=>[A]),_:1})]),_:1})]),_:1},8,["model","rules"]),s(R,null,{default:n(()=>[G]),_:1}),z(a("div",H,[(d(!0),m(M,null,Q(t(c),(u,h)=>(d(),m("div",{class:w([{pt:h%2==0},"msg-item"]),key:h},[a("div",I,[a("div",K,k(u),1)])],2))),128))],512),[[J,t(c).length]])])}}};export{Y as default};
