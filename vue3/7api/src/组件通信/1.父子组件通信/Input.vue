<template>
  <input type="text" @input="change" />
  <h2>{{ fuck }}</h2>
</template>
<script>
export default {
  props: ["titles", "fuck"],
  emits: ["update:titles", "update:fuck"],
  methods: {
    change(event) {
      this.$emit("update:titles", event.target.value);
      this.$emit("update:fuck", "fuck the world");
    },
  },
};
</script>
