import Inicio from "src/pages/Inicio.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "inicio", component: Inicio },
      { path: "login", component: () => import("pages/Login.vue") },
      { path: "constructor", component: () => import("pages/Builder.vue") }
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
