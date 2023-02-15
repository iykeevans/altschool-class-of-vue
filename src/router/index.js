//import createRouter And createWebHistory here
import { createRouter, createWebHistory } from "vue-router";

//import pages here
import Dashboard from "../layouts/Dashboard.vue";
import AuthRoutes from "./AuthRoutes";

const isAuthenticated = () => !!localStorage.getItem("token");

// do routes here
const routes = [
  {
    name: "Dashboard",
    path: "/",
    component: Dashboard,
    children: [...AuthRoutes],
  },
  {
    name: "Login",
    path: "/login",
    component: () => import("@/pages/Login.vue"),
    beforeEnter: (to, from) => {
      // reject the navigation
      if (isAuthenticated()) {
        return {
          name: "Home",
        };
      }
    },
  },
];

// create our router
const router = createRouter({ history: createWebHistory(), routes });

const canUserAccess = (to) => {
  if (!isAuthenticated() && to.meta.authIsRequired && to.name !== "Login") {
    return false;
  }

  return true;
};

// router.beforeEach(async (to, from) => {
//   const canAccess = await canUserAccess(to);

//   if (isAuthenticated() && to.name === "Login") {
//     return {
//       name: "Home",
//     };
//   }

//   if (!canAccess) {
//     return {
//       name: "Login",
//     };
//   }
// });

export default router;
