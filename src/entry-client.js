/* eslint-disable no-underscore-dangle,consistent-return */

import { createApp } from './main';

const { app, router, store } = createApp();

if (window.__INITIAL_STATE__) {
  store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
  // Add router hook for handling asyncData.
  // Doing it after initial route is resolved so that we don't double-fetch
  // the data that we already have. Using router.beforeResolve() so that all
  // async components are resolved.
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    let diffed = false;
    const activated = matched.filter((c, i) => diffed || (diffed = (prevMatched[i] !== c)));
    const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _);
    if (!asyncDataHooks.length) {
      return next();
    }

    // bar.start();
    Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
      .then(() => {
        // bar.finish();
        next();
      })
      .catch(next);
  });

  // actually mount to DOM
  app.$mount('#app');
});

// service worker
if (location.protocol === 'https:' && navigator.serviceWorker) {
  console.log('service worker register');
  navigator.serviceWorker.register('/service-worker.js');
}
