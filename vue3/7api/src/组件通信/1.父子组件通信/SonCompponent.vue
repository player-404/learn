<template>
  <button @click="click">submit</button>
</template>
<script>
export default {
  emits: {
    submit(user, pass) {
      if (!user) {
        console.log("Please enter username");
        return false;
      }
      if (!pass) {
        console.log("Please enter password");
        return false;
      }
      return true;
    },
  },
  data() {
    return {};
  },
  methods: {
    click() {
      this.$emit("submit", "zhangsan", "lzpp");
    },
  },
};
</script>
<style lang="scss" scoped></style>
