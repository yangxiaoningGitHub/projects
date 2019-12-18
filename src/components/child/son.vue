<template>
  <div>
    <ul v-for="j in obj">
      <li>{{j}}</li>
    </ul>
    <div>{{send}}</div>
    <input @click="sendData" type="button" value="传值">
    <slot></slot>
    <div>{{gets}}</div>
  </div>
</template>

<script>
  export default {
    name:'son',
    props: ['send'],
    data() {
      return {
        obj: ['children', 'sons', 'class'],
        paren: '他是个吧',
        gets: ""
      }
    },
    methods: {
      sendData() {
        this.$emit('pas', this.paren)
      }
    },
    mounted(){
      console.log(this.$route.params.dataObj)
    }
  }
</script>
<style>
  body {

  }
</style>
