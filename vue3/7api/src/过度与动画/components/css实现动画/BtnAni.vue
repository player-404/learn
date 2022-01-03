<template>
  <button @click="active = true" :class="{shake: active}" @animationend="end">click me</button>
</template>

<script>
export default {
  name: 'BtnAni',
  data() {
    return {
      active: false
    };
  },
  methods: {
    end() {
      this.active = false;
    }
  }
};
</script>

<style scoped>
button {
  width: 120px;
  height: 60px;
  background-color: red;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
}

.shake {
  animation: shake .82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  perspective: 1000px;
}

@keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>