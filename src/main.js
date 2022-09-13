import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.scss';
import usePlugin from './plugins';
import { useProdMock } from '@/utils/mockProdServer';
// 生产环境下使用mock数据，如不需要则去掉
useProdMock();
window._AMapSecurityConfig = {
  securityJsCode: 'e620277d4218a554566dfff84e7eee6e'
};
console.log(window._AMapSecurityConfig, 'config');
const app = createApp(App);
usePlugin(app);
app.use(router);
app.mount('#app');
