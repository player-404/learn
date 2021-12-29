<template>
  <input @input="change" :value="title" />
</template>
<script>
export default {
  props: {
    title: String,
    modelModifiers: {
      type: Object,
      default: () => {},
    },
  },
  emits: ["update:title"],
  methods: {
    change(e) {
      this.$emit("update:title", e.target.value);
    },
  },
  created() {
    console.log(this.modelModifiers);
  },
  watch: {
    title: {
      handler(newval, oldValue) {
        console.log("newval", newval);
      },
      immediate: true,
    },
  },
};
</script>
