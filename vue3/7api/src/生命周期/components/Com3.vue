<template>
  <input v-model="value"/>
  <input v-model="value1"/>
</template>

<script>
export default {
  name: 'Com3',
  props: ['title', 'title1'],
  emits: ['update:title', 'update:title1'],
  computed: {
    value: {
      get() {
        return this.title;
      },
      set(value) {
        this.$emit('update:title', value);
      }
    },
    value1: {
      get() {
        return this.title1;
      },
      set(value) {
        this.$emit('update:title1', value);
      }
    }
  }
};
</script>

<style scoped>

</style>