import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.scss';
import usePlugin from './plugins';
import { useProdMock } from '@/utils/mockProdServer';
// 生成环境下使用mock数据，如不需要则去掉
useProdMock();
const app = createApp(App);
usePlugin(app);
app.use(router);
app.mount('#app');
