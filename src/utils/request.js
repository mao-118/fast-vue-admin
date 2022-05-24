import axios from "axios";
import {ElMessage} from "element-plus";
const service = axios.create({
    baseURL:import.meta.env.VITE_APP_BASE_API,
    timeout:5000
});

service.interceptors.request.use(config=>{
    config.headers["token"] = "token";
    return config;
},error=>{
    console.log(error);
});

service.interceptors.response.use(response=>{
    const {code,data,msg} = response.data;
    if(code!==200){
        ElMessage.error(msg||"请求失败");
        return Promise.reject(new Error(msg));
    }
    return data;
},error=>{
    ElMessage.error(error.message||"请求失败");
    return Promise.reject(error);
});
export default service;