import{_ as e,r as a,b as l,E as s,c as r,d as o,e as u,f as d,g as t,w as i,i as n,p as m,j as p,u as c,a as f,o as v,F as g,k as b,l as j,m as y,n as V,q as w,t as x,s as h,v as _}from"./index-274711a6.js";import{E as k,a as q}from"./el-form-item-bc01e259.js";import{E as C,a as U}from"./el-tab-pane-7d9f5777.js";import"./castArray-d46b5479.js";const K=e=>(m("data-v-c666b8ba"),e=e(),p(),e),E={class:"login-container"},I={class:"login-content"},T=K((()=>d("div",{class:"header flex justify-center items-center"},[d("img",{src:"https://preview.pro.ant.design/logo.svg",alt:"logo",class:"logo"}),d("span",{class:"ml-4"},"登陆")],-1))),F=K((()=>d("div",{class:"tips text-center mt-2"},"中小型后台解决方案",-1))),A={class:"login-box mt-6"},O={class:"flex justify-between items-center"},$={class:"w-full flex justify-between items-center"},z=w("自动登陆"),B=K((()=>d("a",{class:"login-form-forgot",href:"javascript:void(0)"},"忘记密码?",-1))),D=w("登陆");var G=e({setup(e){const m=a({username:"",password:"",mobile:"",msgCode:"",remember:!0}),p=c(),K=f(),G=a({username:[{required:!0,trigger:"blur",message:"请输入用户名!"}],password:[{required:!0,trigger:"blur",message:"请输入密码!"}],mobile:[{required:!0,trigger:"blur",message:"请输入手机号!"}],msgCode:[{required:!0,trigger:"blur",message:"请输入验证码!"}]}),H=l(!1),J=l(1),L=l(),M=()=>{L.value&&L.value.validate(((e,a)=>{e?(H.value=!0,setTimeout((()=>{h.setToken("hejsljlsjfisjdfijsjsjfjdjjasjfksjjsdjfsjisjjdjf");const e=p.query;let a="",l={};e&&(a=e.redirect,l=N(e)),K.replace({path:a||"/",query:l}).then((()=>{_.success("登录成功")})),H.value=!1}),500)):console.log("error submit!",a)}))},N=e=>Object.keys(e).reduce(((a,l)=>("redirect"!==l&&(a[l]=e[l]),a)),{}),P=l(!1),Q=l(60),R=l(0),S=()=>{if(!m.mobile)return _.warning("请先输入手机号");P.value=!0,setTimeout((()=>{_.success("短信已发送至手机,请注意查收!"),P.value=!1,Q.value--,R.value=window.setInterval((()=>{Q.value--,Q.value<=0&&(clearInterval(R.value),Q.value=60)}),1e3)}),1e3)};return(e,a)=>{const l=C,p=U,c=s,f=k,h=r,_=o,K=q;return v(),u("div",E,[d("div",I,[T,F,d("div",A,[t(p,{modelValue:J.value,"onUpdate:modelValue":a[0]||(a[0]=e=>J.value=e),centered:""},{default:i((()=>[t(l,{label:"账号密码登陆",name:1}),t(l,{label:"手机号登陆",name:2})])),_:1},8,["modelValue"]),t(K,{ref_key:"ruleForm",ref:L,model:n(m),rules:n(G)},{default:i((()=>[1===J.value?(v(),u(g,{key:0},[t(f,{prop:"username"},{default:i((()=>[t(c,{modelValue:n(m).username,"onUpdate:modelValue":a[1]||(a[1]=e=>n(m).username=e),"prefix-icon":n(b),placeholder:"用户名: admin or user"},null,8,["modelValue","prefix-icon"])])),_:1}),t(f,{prop:"password"},{default:i((()=>[t(c,{modelValue:n(m).password,"onUpdate:modelValue":a[2]||(a[2]=e=>n(m).password=e),"prefix-icon":n(j),type:"password",placeholder:"密码: 123456","show-password":"",onKeyup:y(M,["enter"])},null,8,["modelValue","prefix-icon","onKeyup"])])),_:1})],64)):(v(),u(g,{key:1},[t(f,{prop:"mobile"},{default:i((()=>[t(c,{modelValue:n(m).mobile,"onUpdate:modelValue":a[3]||(a[3]=e=>n(m).mobile=e),"prefix-icon":n(V),placeholder:"请输入手机号!"},null,8,["modelValue","prefix-icon"])])),_:1}),t(f,{prop:"msgCode"},{default:i((()=>[d("div",O,[t(c,{modelValue:n(m).msgCode,"onUpdate:modelValue":a[4]||(a[4]=e=>n(m).msgCode=e),"prefix-icon":n(j),placeholder:"请输入验证码!",onKeyup:y(M,["enter"])},null,8,["modelValue","prefix-icon","onKeyup"]),t(h,{class:"ml-2",style:{height:"40px"},loading:P.value,disabled:60!==Q.value,onClick:S},{default:i((()=>[w(x(60===Q.value?"获取验证码":`${Q.value}s后重新获取`),1)])),_:1},8,["loading","disabled"])])])),_:1})],64)),t(f,null,{default:i((()=>[d("div",$,[t(_,{modelValue:n(m).remember,"onUpdate:modelValue":a[5]||(a[5]=e=>n(m).remember=e)},{default:i((()=>[z])),_:1},8,["modelValue"]),B])])),_:1}),t(f,null,{default:i((()=>[t(h,{loading:H.value,class:"w-full",style:{height:"40px"},type:"primary",onClick:M},{default:i((()=>[D])),_:1},8,["loading"])])),_:1})])),_:1},8,["model","rules"])])])])}}},[["__scopeId","data-v-c666b8ba"]]);export{G as default};
