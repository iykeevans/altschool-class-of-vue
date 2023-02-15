import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createStore } from "vuex";
import { $_getPosts } from "@/services";

const store = createStore({
  state() {
    return {
      count: 0,
      errors: null,
      posts: [],
      loadingPosts: true,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    SET_ERROR(state, payload) {
      state.errors = payload.message;
    },
    SET_POSTS(state, payload) {
      state.posts = payload;
    },
    SET_LOADING_POSTS(state, payload) {
      state.loadingPosts = payload;
    },
  },
  actions: {
    async getPosts(context, payload) {
      const { commit } = context;

      try {
        const { posts } = await $_getPosts();
        commit("SET_POSTS", posts);
      } catch (error) {
        commit("SET_ERROR", error);
      } finally {
        commit("SET_LOADING_POSTS", false);
      }
    },
  },
});

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
