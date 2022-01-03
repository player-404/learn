<template>
  <h1>this is com1</h1>
</template>

<script>
export default {
  name: 'Com1',
  mounted() {
    console.log('组件mounted');
  },
  activated() {
    console.log('组件activated')
  },
  unmounted() {
    console.log('组件unmounted')
  },
  deactivated() {
    console.log('组件deactivated');
  }
};
</script>

<style scoped>

</style>