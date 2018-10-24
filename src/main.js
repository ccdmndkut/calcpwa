import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import './registerServiceWorker';
import forceScreenSize from './forceScreenSize';

forceScreenSize(400, 650);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
