import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/es/locale/lang/zh-cn";
import {elSize} from '@/config'
export default (app)=>{
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        app.component(key, component);
      }
    app.use(ElementPlus,{
      locale: zhCn,
      size:localStorage.getItem(elSize)||"default"
    });
};