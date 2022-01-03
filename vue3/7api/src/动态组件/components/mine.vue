<template>
  <h1>this is a mine page</h1>
</template>

<script>
export default {
  name: 'mine',
  activated() {
    console.log('mine组件生命周期activated已触发');
  },
  deactivated() {
    console.log('mine组件生命周期deactivated已触发');
  }
};
</script>

<style scoped>

</style>