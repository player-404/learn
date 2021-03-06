# vue router

### 动态路由
一个“路径参数”使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用

```javascript
 {
    path: '/home/:id', //id会自动赋值给$route.params （id为动态参数）
    name: 'home',
    component: () => import('../views/Home.vue'),
  }
  ```

  直接使用

  ```html   
  <div class="home">
      <h1>this is home page</h1>
      <h1>{{$route.params.id }}</h1>
  </div>

  ```
  使用props属性可以更加方便
  
  ```javascript
  {
    path: '/home/:id',
    name: 'home',
    component: () => import('../views/Home.vue'),
    props: true //设置props属性
  }
  ```
  ```html
<template>
  <div class="home">
      <h1>this is home page</h1>
      <h1>{{ id }}</h1>
  </div>
</template>

<script>
export default {
    props:['id'], //在组件中设置动态参数id
    name: 'home'
}
</script>
  ```

  `一般用在详情等页面`