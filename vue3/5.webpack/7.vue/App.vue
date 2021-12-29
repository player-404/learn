<template>
  <div class="girl">
    <div class="content1">
      <button @click="click1">美女1</button>
      <div class="girls-content" :class="{ hide: show }">
        <img :src="require('./public/girl1.jpg')" />
      </div>
    </div>
    <div class="content1">
      <button @click="click2">美女1</button>
      <div class="girls-content" :class="{ hide: show1 }">
        <img :src="require('./public/girl.jpg')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      show1: true,
    };
  },
  methods: {
    click1() {
      this.show = !this.show;
    },
    click2() {
      this.show1 = !this.show1;
    },
  },
};
</script>

<style scoped>
button {
  border: none;
  width: 100px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: yellowgreen;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}
.girls-content {
  width: 300px;
  height: 300px;
}
.girls-content img {
  width: 100%;
}
.hide {
  display: none;
}
</style>