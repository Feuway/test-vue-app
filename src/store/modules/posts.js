import * as types from '../mutation-types';
import { HTTP } from '../../http-common';

export default {
  state: {
    listPosts: [],
  },
  getters: {
    listPosts(state) {
      return state.listPosts;
    },
    getPostById() {
      return id => this.listPosts.find(post => post.id === id) || null;
    },
  },
  mutations: {
    [types.SET_LIST_POSTS](state, payload) {
      state.listPosts = payload.list;
    },
  },
  actions: {
    async fetchListPosts({ getters, commit }) {
      if (getters.listPosts.length === 0) {
        const response = await HTTP.get('posts');
        commit(types.SET_LIST_POSTS, response.data);
      }
    },
  },
};
