<template>
  <div id="app">
    Vue-CLI创建的第一个项目
    <p>{{ msg }}</p>
    <button @click="myFn">我是按钮</button>
    <one></one>
  </div>
</template>

<script>
import One from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    One: One
  },
  data: function() {
    return {
      msg: "App组件中的数据"
    };
  },
  methods: {
    myFn() {
      this.msg = "点击了按钮";
    }
  }
};
</script>

<style scoped>
#app {
  text-align: center;
}
</style>
