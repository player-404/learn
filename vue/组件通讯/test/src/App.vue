<template>
  <div id="app">
    <h1>father: {{ datas.num }}</h1>
    <button @click="add">增加</button>
    <father :name="name" :age="age" :school="school" @say="say"/>
    <router-link :to="{path: '/home/张三'}">to home page</router-link>
    <router-view />
  </div>
</template>
<script>
import Father from "./views/Father.vue";
export default {
  components: { Father },
  provide() {
    return {
      datas: this.datas,
    };
  },
  data: () => ({
    datas: {
      num: 0,
    },
    name: "张三",
    age: 20,
    school: "九江职业技术学院",
  }),
  create() {},
  mounted() {},
  methods: {
    add() {
      this.datas.num++;
    },
    say() {
      console.log("i'm app function");
    }
  },
  computed: {},
  watch: {},
};
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
