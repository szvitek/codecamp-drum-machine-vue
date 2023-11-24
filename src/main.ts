import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFreeCodeCamp } from '@fortawesome/free-brands-svg-icons';
import './style.css';
import App from './App.vue';

library.add(faFreeCodeCamp);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
