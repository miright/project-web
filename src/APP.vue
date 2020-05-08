<template>
  <!--  <div id="app">-->

  <!--  </div>-->
  <div id="app">
    <router-link class="rlink" to="/one">跳转的第一个子组件</router-link>
    <router-link class="rlink" to="/two">跳转的第二个子组件</router-link>
    <router-link class="rlink" to="/">返回首页</router-link>
    <router-view></router-view>
    Vue-CLI创建的第一个项目

    <p>{{ msg }}</p>
    <button @click="myFn">我是按钮</button>
    <button v-on:click="getStr">App.vue组件中获取的共享数据</button>
    <one msg="Welcome to Your Vue.js App"></one> //在父组件中使用子组件
  </div>
</template>

<script>
import One from "./components/HelloWorld.vue"; //在父组件中导入子组件
export default {
  name: "App",
  components: {
    One: One //在父组件中注册子组件
  },
  data: function() {
    return {
      msg: ""
    };
  },
  created() {
    this.msg = "miright";
  },
  methods: {
    myFn() {
      this.msg = "点击了按钮";
    },
    getStr() {
      this.msg = this.$store.state.str;
    }
  }
};
</script>
<!--不加scoped属性那么就是全局样式-->
<style scoped>
#app {
  text-align: center;
}
.rlink {
  margin-right: 50px;
}
</style>
