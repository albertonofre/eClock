import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import ArgonDashboard from "./argon-dashboard";





import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Agrega los íconos que necesites al objeto de la biblioteca
library.add(fas,fab,far);














const appInstance = createApp(App);
appInstance.component('fa', FontAwesomeIcon);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
