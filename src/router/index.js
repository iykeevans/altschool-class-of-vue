//import createRouter And createWebHistory here
import { createRouter, createWebHistory } from "vue-router";

//import pages here
import Home from "@/pages/Home.vue"; // @ --> alias references src ---> src/pages
import Posts from "@/pages/Posts.vue";
import Post from "@/pages/Post.vue";

// do routes here
const routes = [
  { name: "Home", path: "/", component: Home },
  { name: "Posts", path: "/posts", component: Posts },
  {
    name: "Post",
    path: "/posts/:postId",
    component: Post,
    meta: {
      isRequired: true,
    },
  },
];

// create our router
const router = createRouter({ history: createWebHistory(), routes });

export default router;
