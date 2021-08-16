<template>
  <div id="app">
    <comps>
      <template v-slot:header="prop">
        <h1>this is header {{ prop.props }}</h1>
      </template>
      <template v-slot:main="p">
        <h1>this is main {{ p.props }}</h1>
      </template>
      <template v-slot:footer="p">
        <h1>this is footer {{ p.props }}</h1>
      </template>
    </comps>
  </div>
</template>
<script>
import comps from "./components/Slot.vue";
export default {
  components: {
    comps,
  },
};
</script>
<style lang="less">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
