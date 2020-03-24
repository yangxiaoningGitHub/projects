<template>
  <div>
    <div>{{adds}}</div>
    <son @pass="adds"></son>
    <div v-html="msd"></div>
  </div>

</template>

<script>
  import son from './child/son';
    export default {
        data() {
            return {
              adds:'这是一个新增的界面',
              msd:'<h1>我是</h1>'
            }
        },
        components: {
          son
        }
    }
</script>
<style>
    body {
        background-color: #ff0000;
    }
</style>
