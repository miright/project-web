//main.js在渲染的时候会被webpack引入变成app.js文件 app.js文件在index.html中会被引入

import Vue from "vue";
import App from "./APP.vue"; /*引入组件文件*/
import store from "./store/index.js"; /*引入Vuex*/
import router from "./router/index.js";

new Vue({
  //创建初始Vue实例 页面入口
  store,
  router,
  //h => h(App)
  render: function(createElement) {
    return createElement(App);
  }
}).$mount("#myApp");
//Vue 的$mount()为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），
// 之后要手动挂载上。new Vue时，el和$mount并没有本质上的不同。
