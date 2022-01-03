<template>
  <div>
    <refs-com ref="ipts"/>
  </div>
</template>

<script>
import RefsCom from './components/RefApi';

export default {
  name: 'App',
  components: {
    RefsCom
  },
  methods: {
    focus() {
      console.log(this.$refs.ipts.msg)
      this.$refs.ipts.focus();
    }
  },
  mounted() {
    this.focus();
  }
};
</script>

<style scoped>

</style>