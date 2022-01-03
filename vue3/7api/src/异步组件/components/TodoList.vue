<template>
  <ul>
    <li v-for="item in items" :key="item">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  data() {
    return {
      items: ['张三', '李四', '王二麻子']
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
}
li {
  border: 1px solid red;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
}
</style>