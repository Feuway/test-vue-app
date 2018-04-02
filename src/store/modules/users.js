import * as types from '../mutation-types';
import { HTTP } from '../../http-common';

export default {
  state: {
    listUsers: [],
  },
  getters: {
    listUsers(state) {
      return state.listUsers;
    },
    getUserById(state) {
      return id => state.listUsers.find(post => post.id === id) || null;
    },
  },
  mutations: {
    [types.SET_LIST_USERS](state, payload) {
      state.listUsers = payload.list;
    },
    [types.ADD_DATA_USER_TO_LIST](state, payload) {
      state.listUsers.push(payload.dataUser);
    },
  },
  actions: {
    async fetchListUsers({ getters, commit }) {
      if (getters.listUsers.length === 0) {
        const response = await HTTP.get('users');
        commit(types.SET_LIST_USERS, { list: response.data });
      }
    },

    async fetchDataUser({ getters, commit }, { userId }) {
      if (!getters.getUserById(userId)) {
        const response = await HTTP.get(`users/${userId}`);
        commit(types.ADD_DATA_USER_TO_LIST, { dataUser: response.data });
      }
    },

    async fetchPostsUser(context, { userId }) {
      const response = await HTTP.get(`users/${userId}/posts`);
      return response.data;
    },

    async fetchTodosUser(context, { userId }) {
      const response = await HTTP.get(`users/${userId}/todos`);
      return response.data;
    },

    async fetchAlbumsUser(context, { userId }) {
      const response = await HTTP.get(`users/${userId}/albums`);
      return response.data;
    },

    async fetchPhotosUser(context, { albumId }) {
      const response = await HTTP.get(`albums/${albumId}/photos`);
      return response.data;
    },

    async searchUserByName(context, { name }) {
      const response = await HTTP.get(`users?name_like=${name}`);
      return response.data;
    },

    fetchUserPermission() {
      return new Promise((resolve) => {
        // any async code...
        setTimeout(() => {
          resolve('guest');
        }, 358);
      });
    },
  },
};
