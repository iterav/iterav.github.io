import '@/css/styles.css';

import AOS from 'aos';
// import Splide from '@splidejs/vue-splide';
import { createApp } from 'vue';

import App from '@/js/App.vue';

const app = createApp(App);
// app.use(Splide);
app.mount('#app');

AOS.init();
