import{b as C,r as $,c as n,o as B,n as z,w as t,e as N,f as e,g as l,j as V,E as U,I as R,l as S,d as Z,q as j,J as I,K as q}from"./index.9125a543.js";import{a as F}from"./index.223c3439.js";const G=N("span",{class:"text-gray-500"},"-",-1),K={class:"dialog-footer"},M=V("\u8FD4\u56DE"),Q=V("\u786E\u5B9A"),J={emits:["getTableList"],setup(d,{expose:c,emit:b}){const r=C(!1),p=C("\u7F16\u8F91"),a=$({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),h=()=>{b("getTableList")};return c({showEdit:k=>{console.log(k),r.value=!0}}),(k,o)=>{const m=n("el-input"),i=n("el-form-item"),_=n("el-option"),g=n("el-select"),w=n("el-date-picker"),v=n("el-col"),y=n("el-time-picker"),A=n("el-switch"),u=n("el-checkbox"),L=n("el-checkbox-group"),x=n("el-radio"),T=n("el-radio-group"),f=n("el-form"),E=n("el-button"),O=n("el-dialog");return B(),z(O,{modelValue:r.value,"onUpdate:modelValue":o[10]||(o[10]=s=>r.value=s),title:p.value,width:"50%",onClose:h},{footer:t(()=>[N("span",K,[e(E,{onClick:o[8]||(o[8]=s=>r.value=!1)},{default:t(()=>[M]),_:1}),e(E,{type:"primary",onClick:o[9]||(o[9]=s=>r.value=!1)},{default:t(()=>[Q]),_:1})])]),default:t(()=>[e(f,{model:l(a),"label-width":"120px"},{default:t(()=>[e(i,{label:"Activity name"},{default:t(()=>[e(m,{modelValue:l(a).name,"onUpdate:modelValue":o[0]||(o[0]=s=>l(a).name=s)},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity zone"},{default:t(()=>[e(g,{modelValue:l(a).region,"onUpdate:modelValue":o[1]||(o[1]=s=>l(a).region=s),placeholder:"please select your zone"},{default:t(()=>[e(_,{label:"Zone one",value:"shanghai"}),e(_,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity time"},{default:t(()=>[e(v,{span:11},{default:t(()=>[e(w,{modelValue:l(a).date1,"onUpdate:modelValue":o[2]||(o[2]=s=>l(a).date1=s),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])]),_:1}),e(v,{span:2,class:"text-center"},{default:t(()=>[G]),_:1}),e(v,{span:11},{default:t(()=>[e(y,{modelValue:l(a).date2,"onUpdate:modelValue":o[3]||(o[3]=s=>l(a).date2=s),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])]),_:1})]),_:1}),e(i,{label:"Instant delivery"},{default:t(()=>[e(A,{modelValue:l(a).delivery,"onUpdate:modelValue":o[4]||(o[4]=s=>l(a).delivery=s)},null,8,["modelValue"])]),_:1}),e(i,{label:"Activity type"},{default:t(()=>[e(L,{modelValue:l(a).type,"onUpdate:modelValue":o[5]||(o[5]=s=>l(a).type=s)},{default:t(()=>[e(u,{label:"Online activities",name:"type"}),e(u,{label:"Promotion activities",name:"type"}),e(u,{label:"Offline activities",name:"type"}),e(u,{label:"Simple brand exposure",name:"type"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Resources"},{default:t(()=>[e(T,{modelValue:l(a).resource,"onUpdate:modelValue":o[6]||(o[6]=s=>l(a).resource=s)},{default:t(()=>[e(x,{label:"Sponsor"}),e(x,{label:"Venue"})]),_:1},8,["modelValue"])]),_:1}),e(i,{label:"Activity form"},{default:t(()=>[e(m,{modelValue:l(a).desc,"onUpdate:modelValue":o[7]||(o[7]=s=>l(a).desc=s),type:"textarea"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}},D=F.create({baseURL:"/api",timeout:5e3});D.interceptors.request.use(d=>(d.headers.token="token",d),d=>{console.log(d)});D.interceptors.response.use(d=>{const{code:c,data:b,msg:r}=d.data;return c!==200?(U.error(r||"\u8BF7\u6C42\u5931\u8D25"),Promise.reject(new Error(r))):b},d=>(U.error(d.message||"\u8BF7\u6C42\u5931\u8D25"),Promise.reject(d)));const W=d=>D({url:"/api/demoList",method:"get",params:d}),H={class:"app-container"},X=V("Query"),Y=V("edit"),ee=V("delete"),te={name:"Demo1"},ne=Object.assign(te,{setup(d){const c=R(),b=C(null),r=C(),p=$({user:"",region:""}),a=$([]),h=async()=>{const{page:m,pre_size:i}=r.value.pageQuery;c.value=!0;const _=await W({page:m.value,pre_size:i.value});setTimeout(()=>{a.splice(0),r.value.changeTotal(_.total),a.push(..._.list),c.value=!1},500)},P=()=>{console.log("submit!")},k=m=>{b.value.showEdit(m)},o=()=>{q.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(()=>{U({type:"success",message:"Delete completed"})}).catch(()=>{U({type:"info",message:"Delete canceled"})})};return(m,i)=>{const _=n("el-input"),g=n("el-form-item"),w=n("el-option"),v=n("el-select"),y=n("el-button"),A=n("el-form"),u=n("el-table-column"),L=n("el-table"),x=n("fs-pagination"),T=S("loading");return B(),Z("div",H,[e(A,{inline:!0,model:l(p),class:"demo-form-inline"},{default:t(()=>[e(g,{label:"Approved by"},{default:t(()=>[e(_,{modelValue:l(p).user,"onUpdate:modelValue":i[0]||(i[0]=f=>l(p).user=f),placeholder:"Approved by"},null,8,["modelValue"])]),_:1}),e(g,{label:"Activity zone"},{default:t(()=>[e(v,{modelValue:l(p).region,"onUpdate:modelValue":i[1]||(i[1]=f=>l(p).region=f),placeholder:"Activity zone"},{default:t(()=>[e(w,{label:"Zone one",value:"shanghai"}),e(w,{label:"Zone two",value:"beijing"})]),_:1},8,["modelValue"])]),_:1}),e(g,null,{default:t(()=>[e(y,{type:"primary",onClick:P},{default:t(()=>[X]),_:1})]),_:1})]),_:1},8,["model"]),j((B(),z(L,{data:l(a),border:"",style:{width:"100%"}},{default:t(()=>[e(u,{prop:"date",label:"Date",width:"180"}),e(u,{prop:"name",label:"Name",width:"180"}),e(u,{prop:"address",label:"Address"}),e(u,{label:"operate"},{default:t(({row:f})=>[e(y,{type:"primary",onClick:E=>k(f)},{default:t(()=>[Y]),_:2},1032,["onClick"]),e(y,{type:"danger",onClick:o},{default:t(()=>[ee]),_:1})]),_:1})]),_:1},8,["data"])),[[T,l(c)]]),j(e(x,{ref_key:"FsPageRef",ref:r,onGetTableList:h},null,512),[[I,l(a).length]]),e(J,{ref_key:"edit",ref:b,onGetTableList:h},null,512)])}}});export{ne as default};