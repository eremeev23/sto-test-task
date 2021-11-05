import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home"
import List from "../pages/List";
import Range from "../pages/Range"
import User from "../pages/InfoAboutUser"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "List",
    component: List,
  },
  {
    path: "/range",
    name: "Range",
    component: Range,
  },
  {
    path: "/list/1",
    name: "User1",
    component: User,
  },
  {
    path: "/list/2",
    name: "User2",
    component: User,
  },
  {
    path: "/list/3",
    name: "User3",
    component: User,
  },
  {
    path: "/list/4",
    name: "User4",
    component: User,
  },
  {
    path: "/list/5",
    name: "User5",
    component: User,
  },
  {
    path: "/list/6",
    name: "User6",
    component: User,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
