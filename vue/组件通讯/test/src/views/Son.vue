<template>
  <div class="son">
      <h1>son: {{datas.num}}</h1>
  </div>
</template>

<script>
import { eventBus } from './eventBus'
export default {
  props: {
  },
  inject: {
      datas: {
          default: () => {}
      }
  },
  created() {
      console.log('son attrs', this.$attrs);
      eventBus.$on('say', data => {
          console.log('兄弟组件传过来的值', data)
      })
  },
  mounted() {
  },
  computed: {
  }
  ,
  watch: {
  }
};
</script>

<style>
</style>