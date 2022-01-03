<template>
  <div class="container">
    <!--头部-->
    <header>
      <slot name="header" msg="this is a header message"></slot>
    </header>
    <!--主体-->
    <main>
      <slot a="张三"></slot>
    </main>
    <!--尾部-->
    <footer>
      <slot name="footer" b="李四"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Slot'
};
</script>

<style scoped>

</style>