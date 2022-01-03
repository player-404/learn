<template>
  <btn>
    <!--
      标签中的内容会显示到组件的slot标签位置处，如果slot不存在，则组件中的所有内容会被抛弃
      slot中可以包含各种内容
    -->
    <h1>fuck</h1>
    <h2>fuck3</h2>
  </btn>
</template>

<script>
import btn from './components/Btn.vue';

export default {
  name: 'App',
  components: {
    btn
  }
};
</script>

<style scoped>

</style>