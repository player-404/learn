<template>
  <ul>
    <li v-for="item in lists" :key="item">{{ item }}</li>
  </ul>
  <list-desc />
</template>
<script>
import ListDesc from "./Listdesc.vue";
export default {
  components: {
    ListDesc,
  },
  data() {
    return {
      lists: ["张三", "李四", "王五", "王二麻子", "马云"],
    };
  },
};
</script>
<style lang="scss" scoped>
li {
  list-style: none;
  margin: 20px 0;
}
</style>
