import Inicio from "src/pages/Inicio.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: Inicio },
      { path: "register", component: () => import("pages/Register.vue") },
      { path: "constructor", component: () => import("pages/Builder.vue") },
      { path: "user", component: () => import("pages/UserProfile.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
