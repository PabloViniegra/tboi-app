import { createMemoryHistory, createRouter } from "vue-router";
import HomeView from "../tboi/items/views/HomeView.vue";
import AboutView from "../shared/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
