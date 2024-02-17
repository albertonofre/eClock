import { createRouter, createWebHistory } from "vue-router";
import Cuestions from "../views/Cuestions.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/Cuestions",
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Cuestions,
  },

  {
    path: "/Colaboradores",
    name: "Colaboradores",
    component: Cuestions,
  },
  {
    path: "/Cuestions",
    name: "Cuestions",
    component: Cuestions,
  },
 
 
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
