//import createRouter And createWebHistory here
import { createRouter, createWebHistory } from "vue-router";

//import pages here
import Dashboard from "../layouts/Dashboard.vue";
import Home from "@/pages/Home.vue"; // @ --> alias references src ---> src/pages
import Posts from "@/pages/Posts.vue";
import Post from "@/pages/Post.vue";

// do routes here
const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
    children: [
      {
        name: "Home",
        path: "/",
        component: Home,
      },
      {
        name: "Posts",
        path: "/posts",
        component: Posts,
        meta: {
          authIsRequired: true,
        },
      },
      {
        name: "Post",
        path: "/posts/:postId",
        component: Post,
        meta: {
          authIsRequired: true,
        },
      },
    ],
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/pages/Login.vue"),
  },
];

// create our router
const router = createRouter({ history: createWebHistory(), routes });

const isAuthenticated = () => !!localStorage.getItem("token");

const canUserAccess = (to) => {
  if (!isAuthenticated() && to.meta.authIsRequired && to.name !== "Login") {
    return false;
  }

  return true;
};

router.beforeEach(async (to, from) => {
  const canAccess = await canUserAccess(to);

  if (isAuthenticated() && to.name === "Login") {
    return {
      name: "Home",
    };
  }

  if (!canAccess) {
    return {
      name: "Login",
    };
  }
});

export default router;
