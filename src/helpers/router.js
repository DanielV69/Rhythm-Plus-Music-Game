import VueRouter from "vue-router";
import Home from "../routes/Home.vue";
import Game from "../routes/Game.vue";
import Auth from "../routes/Auth.vue";
import Result from "../routes/Result.vue";
import Rankings from "../routes/Rankings.vue";
import SongSelect from "../routes/SongSelect.vue";
import SheetEditor from "../routes/SheetEditor.vue";
import { store } from "./store";

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home, meta: { requireBg: true } },
    { path: "/menu", component: SongSelect, meta: { requireBg: true } },
    { path: "/rankings", component: Rankings, meta: { requireBg: true } },
    {
      path: "/game",
      component: Game,
      children: [{ path: ":sheet", component: Game }],
    },
    {
      path: "/result",
      component: Result,
      props: true,
      children: [{ path: ":resultId", component: Result }],
    },
    {
      path: "/editor",
      component: SheetEditor,
      children: [{ path: ":sheet", component: SheetEditor }],
    },
    { path: "/account", component: Auth, meta: { requireBg: true } },
    { path: "*", redirect: { path: "/" } },
  ],
});
export default router;
