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
    getPostById(state) {
      return id => state.listPosts.find(post => post.id === id) || null;
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
        commit(types.SET_LIST_POSTS, { list: response.data });
      }
    },

    async fetchListCommentsToPost(context, { postId }) {
      const response = await HTTP.get(`comments?postId=${postId}`);
      return response.data;
    },

    async addCommentToPost(context, { dataComment }) {
      const response = await HTTP.post(`posts/${dataComment.postId}/comments`, dataComment);
      return response.data;
    },

    async fetchNewPosts() {
      const response = await HTTP.get('posts?_start=0&_end=10');
      return response.data;
    },

    async fetchNewComments() {
      const response = await HTTP.get('comments?_start=0&_end=3');
      return response.data;
    },
  },
};
