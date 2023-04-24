import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/index.scss'
import 'element-plus/es/components/message/style/css';
import myPlugin from './plugins'
import { useProdMock } from '@/utils/mockProdServer'
// 生产环境下使用mock数据，如不需要则去掉
useProdMock()
window._AMapSecurityConfig = {
  //高德加密
  securityJsCode: 'e620277d4218a554566dfff84e7eee6e',
}
const app = createApp(App)
app.use(myPlugin).use(router)
app.mount('#app')
