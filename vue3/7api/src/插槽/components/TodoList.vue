<template>
  <ul>
    <li v-for="item in items" :key="item">
      <slot item="fuck"></slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      items: ['张三', '李四', '王二']
    }
  }
};
</script>

<style scoped>

</style>