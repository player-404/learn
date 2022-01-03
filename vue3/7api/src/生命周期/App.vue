<template>
  <button v-for="item in items" :key="item" @click="click(item)">{{item}}</button>
  <keep-alive>
    <component :is="currentCom"></component>
  </keep-alive>
  <com3 v-model:title="msg1" v-model:title1="msg2"/>
  <h1>{{msg1}}</h1>
  <h2>{{msg2}}</h2>
</template>
<script>
import com1 from './components/Com1';
import com2 from './components/Com2';
import com3 from '@/生命周期/components/Com3';

export default {
  components: {
    com1, com2, com3
  },
  data() {
    return {
      text: 'hello',
      com: 1,
      items:[1, 2, 3],
      msg1: 'hello',
      msg2: 'world'
    };
  },
  methods: {
    click(item) {
      this.com = item;
    }
  },
  computed: {
    currentCom() {
      return `com${this.com}`
    }
  }
};
</script>