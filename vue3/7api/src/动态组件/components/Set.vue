<template>
  <h1>this is a set page</h1>
</template>

<script>
export default {
  name: 'Set',
  activated() {
    console.log('set组件生命周期activated已触发');
  },
  deactivated() {
    console.log('set组件生命周期deactivated已触发');
  }
};
</script>

<style scoped>

</style>