/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import { getBookmarks, addBookmark, deleteBookmark, findBookmark, saveBookmark } from "../api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bookmarks: [],
    loading: false
  },
  mutations: {
    SET_BOOKMARKS(state, payload) {
      state.bookmarks = payload;
    },
    SET_LOADING(state, payload) {
      state.loading = payload;
    },
    ADD_BOOKMARK(state, payload) {
      state.bookmarks = [...state.bookmarks, payload];
    }
  },
  actions: {
    async init({ commit }) {
      commit("SET_LOADING", true);
      try {
        const res = await getBookmarks();
        commit("SET_BOOKMARKS", res.data);
      } catch (e) {
        console.error(e);
      }
      commit("SET_LOADING", false);
    },
    async saveBookmark({ commit }, payload) {
      commit("SET_LOADING", true);
      try {
        const res = await addBookmark(payload);
        commit("ADD_BOOKMARK", res.data);
      } catch (e) {
        console.error(e);
      }
      commit("SET_LOADING", false);
    },
    async deleteBookmark({ commit, dispatch }, payload) {
      commit("SET_LOADING", true);
      try {
        await deleteBookmark(payload);
        dispatch("init");
      } catch (e) {
        console.error(e);
      }
      commit("SET_LOADING", false);
    },
    async findBookmark({ commit }, payload) {
      commit("SET_LOADING", true);
      try {
        const res = await findBookmark(payload);
        commit("SET_BOOKMARKS", res.data);
      } catch (e) {
        console.error(e);
      }
      commit("SET_LOADING", false);
    },
    async editBookmark({ commit, dispatch }, payload) {
      const { id, bookmark } = payload;
      commit("SET_LOADING", true);
      try {
        const res = await saveBookmark(id, bookmark);
        dispatch("init");
      } catch (e) {
        console.error(e);
      }
      commit("SET_LOADING", false);
    }
  }
});
