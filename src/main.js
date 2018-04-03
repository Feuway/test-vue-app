// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// vendors
import elementUi from './vendors/element-ui';
// import moment from './vendors/moment';
// import lodash from './vendors/lodash';

// use
Vue.use(elementUi);
// Vue.use(moment);
// Vue.use(lodash);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
