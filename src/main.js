import App from './App.vue';
import { createApp } from 'vue';
import { Select } from 'primevue';
import PrimeVue from 'primevue/config';

createApp(App)
  .use(PrimeVue)
  .component('Select', Select)
  .mount('#app');
