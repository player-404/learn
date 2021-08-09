<template>
  <div class="id">
    <ul
      class="container"
      v-focus="{
        className: 'active',
        ele: 'item-tab',
        curIndex,
      }"
    >
      <li
        class="item-tab"
        v-for="(item, index) in items"
        :key="item.id"
        @click="click(index)"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import tab from "./tab";
export default tab;
</script>

<style lang="less" scoped>
@import url("./tab.less");
</style>