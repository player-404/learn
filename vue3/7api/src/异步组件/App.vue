<template>
  <list/>
</template>

<script>
import {defineAsyncComponent} from 'vue';
// const list = defineAsyncComponent(() => import('./components/TodoList'));
const list = defineAsyncComponent({
  //工厂函数
  loader: () => import('./components/TodoList'),
  //加载组件时使用的组件
  loadingComponent: import('./components/Load'),
  //加载失败时使用的组件
  errorComponent: import('./components/ErrorCom'),
  //显示loadingComponent组件前的延迟
  delay: 2000,
  //超时
  timeout: 30000,
  onError(error, retry, fail, attempts) {
    //重试三次
    if (attempts < 3) {
      retry();
    } else {
      // 注意，retry/fail 就像 promise 的 resolve/reject 一样：
      // 必须调用其中一个才能继续错误处理。
      fail();
    }
  }
});

export default {
  name: 'App',
  components: {
    list
  }
};
</script>

<style scoped>

</style>