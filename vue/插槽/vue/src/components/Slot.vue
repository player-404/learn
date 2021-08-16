<template>
  <div class="container">
      <div class="header">
          <slot name="header" :props="header"></slot>
      </div>
      <div class="main">
          <slot name="main" :props="main"></slot>
      </div>
      <div class="footer">
          <slot name="footer" :props="footer"></slot>
      </div>
  </div>
</template>

<script>
export default {
    name: 'container',
    data: () => ({
        header: 'this is header msg',
        main: 'this is main msg',
        footer: 'this is footer msg'
    })
}
</script>

<style lang="less" scoped>
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .header {
        width: 100%;
        flex-basis: 60px;
        background-color: gray;
    }
    .main {
        width: 100%;
        flex-grow: 1;
        background-color: pink;
    }
    .footer {
        width: 100%;
       flex-basis: 60px;
        background-color:yellowgreen;
    }
</style>