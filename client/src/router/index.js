import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import CharactersView from "@/views/CharactersView.vue";
import InventoryView from "@/views/InventoryView.vue";
import TradeView from "@/views/TradeView.vue";
import MiscView from "@/views/MiscView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/characters",
      name: "characters",
      component: CharactersView,
    },
    {
      path: "/inventory",
      name: "inventory",
      component: InventoryView,
    },
    {
      path: "/trade",
      name: "trade",
      component: TradeView,
    },
    {
      path: "/misc",
      name: "misc",
      component: MiscView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
