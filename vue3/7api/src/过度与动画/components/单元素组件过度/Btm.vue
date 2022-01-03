<template>
  <button @click="toggle">显示/隐藏</button>
  <transition name="fade">
    <span  v-show="show">hello</span>
  </transition>
</template>

<script>
export default {
  name: 'Btn',
  data() {
    return {
      show: true
    }
  },
  methods: {
    toggle() {
      this.show = !this.show;
    }
  }
};
</script>

<style scoped>
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
</style>