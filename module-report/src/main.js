import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "./public-path";
import routes from "./router";
import store from "./store";
import "./plugins/element.js";

Vue.config.productionTip = false;

let router = null;
let instance = null;

export async function bootstrap() {
}

export async function mount() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? "/app2" : "/",
    mode: "history",
    routes
  });
  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount("#app");
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  router = null;
}

// 单独开发环境
window.__POWERED_BY_QIANKUN__ || mount();

/* new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app"); */
