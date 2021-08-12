<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('组件路由 beforeRouteEnter');
    next();
  },
  beforeRouteUpdate(to, form , next) {
    console.log('组件路由 beforeRouteUpdate');
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log('组件路由 beforeRouteLeave');
    next();
  }
}
</script>