import{r as e,b as s,ah as a,E as l,c as t,e as o,f as r,aa as c,i as n,t as u,g as d,w as i,aO as p,aP as m,F as f,aU as x,q as v,o as g,v as b}from"./index-b5c3c419.js";import{E as _}from"./el-divider-0fef1d7a.js";import{E as h,a as j}from"./el-form-item-724c0c57.js";import{E as w}from"./el-col-dc69b9d5.js";import"./castArray-621d4e0f.js";const k={class:"app-container"},y=v(" 连接状态： "),E=v("发送"),V=v("聊天记录"),q={class:"msg-box"},U={class:"msg-content"},A={class:"msg-text"},C={setup(v){const C=e([]),F=s(null),O=e({text:""}),P=e({text:[{required:!0,message:"输入的内容不能为空",trigger:"blur"}]}),R=()=>{F.value.validate((e=>{e?(D(O.text),b.success("发送成功")):console.log(e)}))};let S=null;const W=s(0),z=e([{color:"text-purple-500",text:"建立连接中..."},{color:"text-green-500",text:"连接成功"},{color:"text-red-500",text:"连接失败"},{color:"text-purple-500",text:"连接关闭"}]),B=e=>{W.value=1},D=e=>{S.send(e),C.push(e)},G=e=>{C.push(e.data)},H=e=>{W.value=2,console.log("error",e),b.error("连接异常，请尝试刷新页面")},I=e=>{W.value=3,console.log("close",e)};return S=new WebSocket("wss://javascript.info/article/websocket/chat/ws"),S.onopen=B,S.onmessage=G,S.onerror=H,S.onclose=I,a((()=>{S.close()})),(e,s)=>{const a=l,v=w,b=h,S=t,B=j,D=_;return g(),o("div",k,[r("div",null,[y,r("span",{class:c(n(z)[W.value].color)},u(n(z)[W.value].text),3)]),d(B,{ref_key:"formRef",ref:F,model:n(O),rules:n(P),"label-width":"80px"},{default:i((()=>[d(b,{label:"输入内容",prop:"text"},{default:i((()=>[d(v,{span:5},{default:i((()=>[d(a,{modelValue:n(O).text,"onUpdate:modelValue":s[0]||(s[0]=e=>n(O).text=e)},null,8,["modelValue"])])),_:1})])),_:1}),d(b,null,{default:i((()=>[d(S,{type:"primary",onClick:R},{default:i((()=>[E])),_:1})])),_:1})])),_:1},8,["model","rules"]),d(D,null,{default:i((()=>[V])),_:1}),p(r("div",q,[(g(!0),o(f,null,x(n(C),((e,s)=>(g(),o("div",{key:s,class:c([{pt:s%2==0},"msg-item"])},[r("div",U,[r("div",A,u(e),1)])],2)))),128))],512),[[m,n(C).length]])])}}};export{C as default};