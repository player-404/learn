<template>
  <ul>
    <li v-for="item in items" :key="item" @click="click(item)">{{item}}</li>
  </ul>
  <keep-alive include="Home,Set">
    <component :is="currentComponents"/>
  </keep-alive>
</template>

<script>
import TapHome from './components/Home.vue';
import TapMine from './components/mine.vue';
import TapSet from './components/Set.vue';

export default {
  name: 'App.vue',
  components: {
    TapHome,
    TapSet,
    TapMine
  },
  data() {
    return {
      current: "home",
      items: ['home', 'mine', 'set']
    }
  },
  methods: {
    click(item) {
      this.current = item;
    }
  },
  computed: {
    currentComponents() {
      return 'tap-' + this.current;
    }
  }
};
</script>

<style scoped>
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin: 0 20px;
    border: 1px solid #333;
    display: flex;
    justify-content: center;
    align-content: center;
    padding: 10px 20px;
    cursor: pointer;
  }
</style>