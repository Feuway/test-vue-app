import Vue from 'vue';
import App from './App';
import { createStore } from './store';
import { createRouter } from './router';
// import { sync } from 'vuex-router-sync';
// import titleMixin from './util/title';
// import * as filters from './util/filters';

import elementUi from './vendors/element-ui';

Vue.use(elementUi);

// mixin for handling title
// Vue.mixin(titleMixin);

// register global utility filters.
// Object.keys(filters).forEach((key) => {
//   Vue.filter(key, filters[key]);
// });

// Expose a factory function that creates a fresh set of store, router,
// app instances on each call (which is called for each SSR request)
// eslint-disable-next-line import/prefer-default-export
export function createApp() {
  // create store and router instances
  const store = createStore();
  const router = createRouter();

  // sync the router with the vuex store.
  // this registers `store.state.route`
  // sync(store, router);

  const app = new Vue({
    router,
    store,
    render: h => h(App),
  });
  return { app, router, store };
}
