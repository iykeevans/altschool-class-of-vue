import { createRouter, createWebHistory } from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import User from "../pages/User.vue";
import UserGeneric from "../pages/UserGeneric.vue";
import NotFound from "../pages/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/user/:id", component: User },
  { path: "/post*:postId(.*)", component: UserGeneric },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
