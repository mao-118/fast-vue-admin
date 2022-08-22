import{b as e,r as l,i as a,o as t,x as o,w as d,d as n,e as i,f as u,m as s,E as r,P as m,c as p,y as c,K as f,v as y,Q as b}from"./index-1313190c.js";import{a as v}from"./index-18d41a5c.js";const g=n("span",{class:"text-gray-500"},"-",-1),V={class:"dialog-footer"},_=s("返回"),h=s("确定"),w={emits:["getTableList"],setup(s,{expose:r,emit:m}){const p=e(!1),c=e("编辑"),f=l({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),y=()=>{m("getTableList")};return r({showEdit:e=>{p.value=!0}}),(e,l)=>{const s=a("el-input"),r=a("el-form-item"),m=a("el-option"),b=a("el-select"),v=a("el-date-picker"),w=a("el-col"),k=a("el-time-picker"),x=a("el-switch"),U=a("el-checkbox"),A=a("el-checkbox-group"),C=a("el-radio"),T=a("el-radio-group"),j=a("el-form"),P=a("el-button"),z=a("el-dialog");return t(),o(z,{modelValue:p.value,"onUpdate:modelValue":l[10]||(l[10]=e=>p.value=e),title:c.value,width:"50%",onClose:y},{footer:d((()=>[n("span",V,[i(P,{onClick:l[8]||(l[8]=e=>p.value=!1)},{default:d((()=>[_])),_:1}),i(P,{type:"primary",onClick:l[9]||(l[9]=e=>p.value=!1)},{default:d((()=>[h])),_:1})])])),default:d((()=>[i(j,{model:u(f),"label-width":"120px"},{default:d((()=>[i(r,{label:"Activity name"},{default:d((()=>[i(s,{modelValue:u(f).name,"onUpdate:modelValue":l[0]||(l[0]=e=>u(f).name=e)},null,8,["modelValue"])])),_:1}),i(r,{label:"Activity zone"},{default:d((()=>[i(b,{modelValue:u(f).region,"onUpdate:modelValue":l[1]||(l[1]=e=>u(f).region=e),placeholder:"please select your zone"},{default:d((()=>[i(m,{label:"Zone one",value:"shanghai"}),i(m,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),i(r,{label:"Activity time"},{default:d((()=>[i(w,{span:11},{default:d((()=>[i(v,{modelValue:u(f).date1,"onUpdate:modelValue":l[2]||(l[2]=e=>u(f).date1=e),type:"date",placeholder:"Pick a date",style:{width:"100%"}},null,8,["modelValue"])])),_:1}),i(w,{span:2,class:"text-center"},{default:d((()=>[g])),_:1}),i(w,{span:11},{default:d((()=>[i(k,{modelValue:u(f).date2,"onUpdate:modelValue":l[3]||(l[3]=e=>u(f).date2=e),placeholder:"Pick a time",style:{width:"100%"}},null,8,["modelValue"])])),_:1})])),_:1}),i(r,{label:"Instant delivery"},{default:d((()=>[i(x,{modelValue:u(f).delivery,"onUpdate:modelValue":l[4]||(l[4]=e=>u(f).delivery=e)},null,8,["modelValue"])])),_:1}),i(r,{label:"Activity type"},{default:d((()=>[i(A,{modelValue:u(f).type,"onUpdate:modelValue":l[5]||(l[5]=e=>u(f).type=e)},{default:d((()=>[i(U,{label:"Online activities",name:"type"}),i(U,{label:"Promotion activities",name:"type"}),i(U,{label:"Offline activities",name:"type"}),i(U,{label:"Simple brand exposure",name:"type"})])),_:1},8,["modelValue"])])),_:1}),i(r,{label:"Resources"},{default:d((()=>[i(T,{modelValue:u(f).resource,"onUpdate:modelValue":l[6]||(l[6]=e=>u(f).resource=e)},{default:d((()=>[i(C,{label:"Sponsor"}),i(C,{label:"Venue"})])),_:1},8,["modelValue"])])),_:1}),i(r,{label:"Activity form"},{default:d((()=>[i(s,{modelValue:u(f).desc,"onUpdate:modelValue":l[7]||(l[7]=e=>u(f).desc=e),type:"textarea"},null,8,["modelValue"])])),_:1})])),_:1},8,["model"])])),_:1},8,["modelValue","title"])}}},k=v.create({baseURL:"/api",timeout:5e3});k.interceptors.request.use((e=>(e.headers.token="token",e)),(e=>{})),k.interceptors.response.use((e=>{const{code:l,data:a,msg:t}=e.data;return 200!==l?(r.error(t||"请求失败"),Promise.reject(new Error(t))):a}),(e=>(r.error(e.message||"请求失败"),Promise.reject(e))));const x={class:"app-container"},U=s("Query"),A=s("edit"),C=s("delete"),T={name:"Demo1"},j=Object.assign(T,{setup(n){const s=m(),v=e(null),g=e(),V=l({user:"",region:""}),_=l([]),h=async()=>{const{page:e,pre_size:l}=g.value.pageQuery;s.value=!0;const a=await(t={page:e.value,pre_size:l.value},k({url:"/demoList",method:"get",params:t}));var t;setTimeout((()=>{_.splice(0),g.value.changeTotal(a.total),_.push(...a.list),s.value=!1}),500)},T=()=>{},j=()=>{b.confirm("proxy will permanently delete the file. Continue?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then((()=>{r({type:"success",message:"Delete completed"})})).catch((()=>{r({type:"info",message:"Delete canceled"})}))};return(e,l)=>{const n=a("el-input"),r=a("el-form-item"),m=a("el-option"),b=a("el-select"),k=a("el-button"),P=a("el-form"),z=a("el-table-column"),L=a("el-table"),D=a("fs-pagination"),E=y("loading");return t(),p("div",x,[i(P,{inline:!0,model:u(V),class:"demo-form-inline"},{default:d((()=>[i(r,{label:"Approved by"},{default:d((()=>[i(n,{modelValue:u(V).user,"onUpdate:modelValue":l[0]||(l[0]=e=>u(V).user=e),placeholder:"Approved by"},null,8,["modelValue"])])),_:1}),i(r,{label:"Activity zone"},{default:d((()=>[i(b,{modelValue:u(V).region,"onUpdate:modelValue":l[1]||(l[1]=e=>u(V).region=e),placeholder:"Activity zone"},{default:d((()=>[i(m,{label:"Zone one",value:"shanghai"}),i(m,{label:"Zone two",value:"beijing"})])),_:1},8,["modelValue"])])),_:1}),i(r,null,{default:d((()=>[i(k,{type:"primary",onClick:T},{default:d((()=>[U])),_:1})])),_:1})])),_:1},8,["model"]),c((t(),o(L,{data:u(_),border:"",style:{width:"100%"}},{default:d((()=>[i(z,{prop:"date",label:"Date",width:"180"}),i(z,{prop:"name",label:"Name",width:"180"}),i(z,{prop:"address",label:"Address"}),i(z,{label:"operate"},{default:d((({row:e})=>[i(k,{type:"primary",onClick:l=>(e=>{v.value.showEdit(e)})(e)},{default:d((()=>[A])),_:2},1032,["onClick"]),i(k,{type:"danger",onClick:j},{default:d((()=>[C])),_:1})])),_:1})])),_:1},8,["data"])),[[E,u(s)]]),c(i(D,{ref_key:"FsPageRef",ref:g,onGetTableList:h},null,512),[[f,u(_).length]]),i(w,{ref_key:"edit",ref:v,onGetTableList:h},null,512)])}}});export{j as default};
