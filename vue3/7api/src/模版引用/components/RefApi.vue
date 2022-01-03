<template>
  <input ref="ipt"/>
  <h1>fuck</h1>
</template>

<script>
export default {
  name: 'RefApi',
  data() {
    return {
      msg: '我是自组件的数据'
    };
  },
  methods: {
    focus() {
      this.$refs.ipt.focus();
      console.log('当前组件的父组件为:', this.$parent);
    }
  },
  mounted() {
  }
};
</script>

<style scoped>

</style>