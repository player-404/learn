<template>
  <div class="son">
     <slot></slot>
  </div>
</template>

<script>
import Slot from '../../../../插槽/vue/src/components/Slot.vue'
export default {
  components: { Slot },

}
</script>

<style lang="less" scoped>
    .son {
        width:400px;
        height:400px;
        text-align:center;
        color: #fff;
        background-color: yellowgreen;
    }
</style>