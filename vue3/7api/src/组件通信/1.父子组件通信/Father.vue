<template>
  <model v-model:title.cap="text" />
</template>
<script>
import model from "./model.vue";
export default {
  components: {
    model,
  },
  data() {
    return {
      text: "a",
    };
  },
  created() {},
};
</script>
