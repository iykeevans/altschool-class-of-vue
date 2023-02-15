import Home from "@/pages/Home.vue"; // @ --> alias references src ---> src/pages
import Posts from "@/pages/Posts.vue";
import Post from "@/pages/Post.vue";

const isAuthenticated = () => !!localStorage.getItem("token");

const AuthGuard = (to, from) => {
  // reject the navigation
  if (!isAuthenticated()) {
    return {
      name: "Login",
    };
  }
};

export default [
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
    // beforeEnter: [AuthGuard],
  },
  {
    name: "Post",
    path: "/posts/:postId",
    component: Post,
    meta: {
      authIsRequired: true,
    },
    beforeEnter: [AuthGuard],
  },
];
