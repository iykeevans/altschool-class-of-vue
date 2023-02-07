import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// import router from "./router";

import "./assets/main.css";

import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Post from "./pages/Post.vue";

const routes = [
  { path: "/", component: Home, name: "Home" },
  { path: "/about", component: About, name: "About" },
  { path: "/post/:postId", component: Post, name: "Post" },
  {
    name: "NotFound",
    path: "/:catchAll(.*)",
    component: () => import("./pages/Notfound.vue"),
  },
];

// this.router.push({ name: "Home" }); === this.router.push('/')

const router = createRouter({
  routes,
  history: createWebHistory(),
});

const app = createApp(App);

app.use(router);

app.mount("#app");
