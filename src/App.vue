<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>{{mss}}</div>
    <el-row>
      <el-button @click="add" type="danger">+</el-button>
      <el-button @click="reduce" type="info">-</el-button>
    </el-row>
    <h1>{{count}}</h1>
    <el-row>
      <el-button @click="send"  type="danger">路由跳转传递参数</el-button>
    </el-row>

    <router-view></router-view>
  </div>
</template>

<script>
  import {mapGetters,mapActions} from 'vuex';
  export default {
    name: 'App',
    data(){
      return{
        mss:'7894',
        rou:'我是路由传参数'
      }
    },
    computed:mapGetters(['count']),
    methods:{
      ...mapActions(['add','reduce']),
      send(){
        this.$router.push({
          name:'son',
         params:{
            dataObj:this.rou
         }
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
