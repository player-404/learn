<template>
  <h1>this is a home page</h1>
</template>

<script>
export default {
  name: 'Home',
  activated() {
    console.log('home组件生命周期activated已触发');
  },
  deactivated() {
    console.log('home组件生命周期deactivated已触发');
  }
};
</script>

<style scoped>

</style>