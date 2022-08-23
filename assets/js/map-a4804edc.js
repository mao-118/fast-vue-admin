var e=Object.defineProperty,a=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable,l=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t;import"https://webapi.amap.com/maps?v=2.0&key=596002c0d52b6b4360a70ecbfb4c692d";import{a as r}from"./index-18d41a5c.js";import{_ as i,b as s,r as n,n as c,B as p,C as d,c as m,d as u,e as v,w as g,p as w,g as y,E as f,i as h,o as M,t as b}from"./index-0a5979d2.js";const k={class:"app-container"},x={class:"search-box"},A=["title"],O=["title"],S={style:{color:"#0082e5","font-size":"14px","font-weight":"700",height:"20px","line-height":"20px"}},j={style:{"font-size":"12px",color:"#8e8e8e",height:"20px","line-height":"20px"}},P=(e=>(w("data-v-17c9c39a"),e=e(),y(),e))((()=>u("div",{id:"container"},null,-1)));var C=i({setup(e){const i=s(""),w=s(),y=n({viewMap:null,marker:null,geocoder:null,geolocation:null}),C=n({whitesmoke:"amap://styles/macaron",dark:"amap://styles/dark"});p((()=>c.vueuseColorScheme),(e=>{"auto"===e?y.viewMap.setMapStyle(C.whitesmoke):y.viewMap.setMapStyle(C.dark)}));const _=e=>{z(e.lnglat),B(e.lnglat)},z=e=>{y.marker.setPosition([e.lng,e.lat])},B=e=>{y.geocoder.getAddress([e.lng,e.lat],((e,a)=>{if("complete"===e&&"OK"===a.info&&a&&a.regeocode){const e=a.regeocode.formattedAddress;y.marker.setTitle(e)}}))},T=async(e,i)=>{const{data:s}=await r.get("https://restapi.amap.com/v3/place/text",{params:{keywords:e,city:"杭州",key:"1a68b5f1bf437db3754cc1c9256c8433",output:"json",extensions:"all",city_limit:!1}});let n=[];s.pois&&(n=s.pois.map((e=>((e,r)=>{for(var i in r||(r={}))o.call(r,i)&&l(e,i,r[i]);if(a)for(var i of a(r))t.call(r,i)&&l(e,i,r[i]);return e})({value:e.pname+e.cityname+(e.adname===e.address?e.adname:e.adname+e.address)+e.name,newAddress:e.pname+e.cityname+e.adname},e)))),0===n.length&&(n=[{value:"暂未搜索到该地点信息",isResultLengthZero:!0}]),i(n),w.value.focus()},G=e=>{if(e.isResultLengthZero)return void(i.value="");y.viewMap.setZoom(16);const a=e.location.split(",");y.marker.setPosition([a[0],a[1]]),y.marker.setTitle(e.value),y.viewMap.setCenter([a[0],a[1]])},L=e=>{z(e.position),B(e.position)},R=e=>{f.error("定位失败")};return d((()=>{y.viewMap=new AMap.Map("container",{mapStyle:"auto"===c.vueuseColorScheme?C.whitesmoke:C.dark,zoom:11,resizeEnable:!0,viewMode:"3D"}),y.marker=new AMap.Marker({position:[116.397428,39.90923],title:""}),AMap.plugin(["AMap.Geocoder","AMap.Geolocation","AMap.ToolBar"],(()=>{y.geocoder=new AMap.Geocoder({radius:1e3,extensions:"all"});let e=new AMap.ToolBar({position:"LB"});y.viewMap.addControl(e),y.geolocation=new AMap.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonOffset:new AMap.Pixel(10,20),zoomToAccuracy:!0,buttonPosition:"RB",showMarker:!1}),y.geolocation.on("complete",L),y.geolocation.on("error",R),y.viewMap.addControl(y.geolocation)})),y.viewMap.on("click",_),y.viewMap.add(y.marker)})),(e,a)=>{const o=h("el-autocomplete");return M(),m("div",k,[u("div",x,[v(o,{ref_key:"elautocomplete",ref:w,modelValue:i.value,"onUpdate:modelValue":a[0]||(a[0]=e=>i.value=e),"trigger-on-focus":!1,"prefix-icon":"Search",clearable:"",placeholder:"请输入地名关键字","fetch-suggestions":T,onSelect:G},{default:g((({item:e})=>[e.isResultLengthZero?(M(),m("div",{key:0,title:e.value,style:{"text-align":"center",color:"red"}},b(e.value),9,A)):(M(),m("div",{key:1,style:{"margin-bottom":"10px"},title:e.value},[u("div",S,b(e.name),1),u("div",j,b(e.newAddress),1)],8,O))])),_:1},8,["modelValue"])]),P])}}},[["__scopeId","data-v-17c9c39a"]]);export{C as default};
