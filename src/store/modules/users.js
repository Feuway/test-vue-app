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
    getUserById() {
      return id => this.listPosts.find(post => post.id === id) || null;
    },
  },
  mutations: {
    [types.SET_LIST_USERS](state, payload) {
      state.listPosts = payload.list;
    },
    [types.ADD_DATA_USER_TO_LIST](state, payload) {
      state.listPosts.push(payload.dataUser);
    },
  },
  actions: {
    async fetchListUsers({ getters, commit }) {
      if (getters.listPosts.length === 0) {
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

    async searchUserByName(context, { name }) {
      const response = await HTTP.get(`users?name_like=${name}`);
      return response.data;
    },
  },
};
