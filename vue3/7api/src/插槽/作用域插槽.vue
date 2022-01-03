<template>
  <!--  <todo-list>
      <template v-slot:default="props">
        <span>{{ props.item }} - fuck</span>
      </template>
    </todo-list>-->
  <demo v-slot="{msg}">
    <h1>{{ msg }}</h1>
  </demo>
</template>

<script>
import TodoList from '@/插槽/components/TodoList';
import demo from './components/插槽的简写';

export default {
  name: '作用域插槽',
  components: {
    TodoList,
    demo
  }
};
</script>

<style scoped>

</style>