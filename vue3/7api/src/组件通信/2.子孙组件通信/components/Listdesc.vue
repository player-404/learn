<template>
  <h1>list length is {{ user }}</h1>
  <h2>nums length is {{ length }}</h2>
</template>
<script>
export default {
  inject: ["user", "length"],
  data() {
    return {};
  },  
};
</script>
