import * as types from '../mutation-types';
import { HTTP } from '../../http-common';

export default {
  state: {
    listPhotos: [],
  },
  getters: {
    listPhotos(state) {
      return state.listPhotos;
    },
  },
  mutations: {
    [types.SET_LIST_PHOTOS](state, payload) {
      state.listPhotos = payload.list;
    },
  },
  actions: {
    async fetchListPhotos({ getters, commit }) {
      if (getters.listPhotos.length === 0) {
        const response = await HTTP.get('photos');
        commit(types.SET_LIST_PHOTOS, { list: response.data });
      }
    },
  },
};
