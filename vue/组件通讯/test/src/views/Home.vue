<template>
  <div class="home">
      <h1>this is home page</h1>
      <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
    props:['id'],
    name: 'home'
}
</script>

<style>

</style>