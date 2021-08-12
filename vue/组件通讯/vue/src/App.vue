<template>
  <div id="app">
    <son :params="123" v-bind="person" />
    <brother />
    <button @click="click">click me bro</button>
    <button @click="jump">to about page</button>
    <router-view />
  </div>
</template>
<script>
import son from "./components/son/Son.vue";
import brother from "./components/brother/brother.vue";
export default {
  components: {
    son,
    brother,
  },
  provide() {
    return {
      msg: this.person,
      msgName: this.names
    }
  },
  data: () => ({
    name: '王五',
    person: {
      name: "张三",
      age: 20,
    },
  }),
  methods: {
    click() {
      this.person.name = '李四';
      this.name = '王刘'
    },
    jump() {
      this.$router.push({
        path: '/about',
        query: {
          age: 123
        }
      })
    }
  },
  computed: {
    names() {
      return this.name
    }
  }
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
