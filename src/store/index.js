import Vue from 'vue';
import Vuex from 'vuex';

import posts from './modules/posts';
import users from './modules/users';
import photos from './modules/photos';

Vue.use(Vuex);

// eslint-disable-next-line import/prefer-default-export
export function createStore() {
  return new Vuex.Store({
    modules: {
      posts,
      users,
      photos,
    },
  });
}
