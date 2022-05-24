import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './styles/index.scss';
import usePlugin from './plugins';
const app = createApp(App);
usePlugin(app);
app.use(router);
app.mount('#app');
