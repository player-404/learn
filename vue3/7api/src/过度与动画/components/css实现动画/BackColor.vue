<template>
  <div class="back" @mousemove="move" :style="{backgroundColor: `hsl(${color}, 80%, 50%, .5)`}"></div>
</template>

<script>
export default {
  name: 'BackColor',
  data() {
    return {
      x: 0
    };
  },
  methods: {
    move(e) {
      this.x++;
    }
  },
  computed: {
    color() {
      return this.x === 100 ? 0 : this.x / 10;
    }
  }
};
</script>

<style scoped>
.back {
  width: 400px;
  height: 200px;
  border: 1px solid #333;
}
</style>