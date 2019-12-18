<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2 @click="jumps">Essential Links</h2>
    <router-link :to="{path:'/test',query:{name:'杨小宁',age:'28'}}">点击我跳转到test界面</router-link>
    <h3>{{getDatas}}</h3>
    <h4 v-tests>{{mag}}</h4>
      <h1>{{pros}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        numData:90,
        mag:'我是测试者',
        pro:"原型链加载",
        getState:'hello  vuex'
      }
    },
    computed: {
      getDatas(){
        return this.numData+100;
      },
      pros(){
        this.func();
        return this.pro=this.pro+'我是杨戴宁'
      }
    },
    directives:{
     tests:{
       bind(el){
         el.style.color='#e4393c'
       }
     }
    },
    methods: {
      jumps: function () {
        this.func();
        var url = this.HOME + 'sug?code=utf-8';
        this.$http({
          method: 'get',
          url: url,
          params: {q: '八爪鱼'}
        }).then(function(res){
          console.log(res.data.result)
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only-->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
