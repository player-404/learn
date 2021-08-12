<template>
  <div class="son">
      <h1>son component</h1>
      <h1>父组件传递过来的数据：{{sonParams}}</h1>
      <h1>父组件传递过来的对象：{{personName}}</h1>
      <com />
  </div>
</template>

<script>
import son from './son'
export default son
</script>

<style>

</style>