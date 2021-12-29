<template>
  <lists />
</template>
<script>
import Lists from "./components/TodoList.vue";
export default {
  components: {
    Lists,
  },
  provide() {
    return {
      user: "tom",
      length: this.nums.length,
    };
  },
  data: function () {
    return {
      nums: [1, 2, 3, 4, 5, 6, 7],
    };
  },
};
</script>
  