import Vue from 'vue';
import Vuex from 'vuex';

import posts from './modules/posts';
import users from './modules/users';
import photos from './modules/photos';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    posts,
    users,
    photos,
  },
});
