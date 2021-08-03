<template>
  <div class="father">
    <son :name="name" v-bind="$attrs"/>
    <input type="text" v-model="phone" />
    <input type="password" v-model="pass" />
    <button @click="submit">提交</button>
    <h1>{{$attrs}}</h1>
  </div>
</template>

<script>
import Son from "./Son.vue";
import md5 from "md5";
import axios from "axios";
import { eventBus } from './eventBus'
export default {
  components: { Son },
  provide() {
      return {

      }
  },
  data: () => ({
    name: "张三",
    phone: "",
    pass: "",
  }),
  methods: {
    async submit() {
      eventBus.$emit("say", {
          word: this.name
      })
    },
  },
  inheritAttrs: false,
  created() {
      console.log('attrs', this.$attrs);
      console.log('fun', this.$listeners)
  }
};
</script>

<style>
</style>