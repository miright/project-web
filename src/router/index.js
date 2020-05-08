import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import one from "../components/one.vue";
import two from "../components/wo.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: Home
  },
  {
    path: "/one",
    component: one
  },
  {
    path: "/two",
    component: two
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
