<template>
  <Sl>
    <template v-slot:footer>
      <h1>这里时尾部的内容</h1>
    </template>
    <template v-slot:header>
      <h1>这里时头部的内通</h1>
    </template>
    <template v-slot:default>
      <h1>这里时主体的内容</h1>
    </template>
  </Sl>
</template>

<script>
import Sl from './components/Slot';

export default {
  name: '具名插槽',
  components: {
    Sl
  }
};
</script>

<style scoped>

</style>