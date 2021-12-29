<template>
  <h1>你好</h1>
  <!-- 父传子 -->
  <Son class="why" names="abc" id="fuck" />
  <div class="container">
    <h1>{{ num }}</h1>
    <son-compponent @add="add" @min="min" @click="click"></son-compponent>
  </div>
  <model />
</template>

<script>
import Son from "./Son.vue";
import SonCompponent from "./SonCompponent.vue";
import Inputs from "./Input.vue";
import model from "./model.vue";
export default {
  components: {
    Son,
    SonCompponent,
    Inputs,
    model,
  },
  data() {
    return {
      people: {
        name: "张三",
        age: 88,
        male: "old man",
      },
      num: 1,
      text: "there is somthing world here",
      fuckman: "fuck",
    };
  },
  methods: {
    add() {
      this.num++;
    },
    min() {
      this.num--;
    },
    click() {
      console.log("click");
    },
    fuck() {
      console.log("fuck");
    },
  },
};
</script>

<style lang="scss" scoped>
.why {
  color: red;
}
</style>
