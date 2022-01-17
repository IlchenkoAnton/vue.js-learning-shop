import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import initAxios from './config/axios.config';
import mockInterceptors from './mocks/axios.mock';

initAxios();
mockInterceptors();

createApp(App)
    .use(store)
    .use(router)
    .mount('#app');
