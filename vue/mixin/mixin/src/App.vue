<template>
  <div id="app">
    <div class="tips" v-show="show"></div>
    <button @click="click">显示/隐藏</button>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import mixin from './mixin/mixin'
export default {
  components: { HelloWorld },
  mixins: [mixin]
}
</script>
<style lang="less">
.tips {
  width: 400px;
  height: 400px;
  background-color: yellowgreen;
  border: 2px solid red;
}
</style>
