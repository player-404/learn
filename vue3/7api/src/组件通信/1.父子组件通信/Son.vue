<template>
  <h1 :class="$attrs.id">{{ name }}</h1>
  <h1>asas</h1>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "张三",
    },
  },
};
</script>

<style lang="scss" scoped>
.hide {
  display: none;
<h1 :class="$attrs.id">{{ name }}</h1>
<h1>asas</h1>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: "张三",
    },
  },
};
</script>

<style lang="scss" scoped>
.hide {
}
</style>
