<template>
  <Sl>
    <template #header="{msg}">
      <h1>{{ msg }}</h1>
    </template>
    <template #footer="{b}">
      <h2>{{ b }}</h2>
    </template>
    <template #default="{a}">
      <h3>{{ a }}</h3>
    </template>
  </Sl>
</template>

<script>
import Sl from './components/Slot';

export default {
  name: '具名插槽的简写',
  components: {
    Sl
  }
};
</script>

<style scoped>

</style>