<template>
 <div>
   <input v-for="j in arr" type="button" :value="j">
   <son :send="sondata" @pas="getChild">
    <h1>我是杨大宁slot的传值</h1>
   </son>
   <div>{{name}}</div>
   <div :class="yangxiaoning">{{sondata}}</div>
   <div>{{msh}}</div>
   <button @click="ths">是个狗</button>
 </div>
</template>

<script>
  import son from './child/son';
  import {mapGetters,mapActions} from  'vuex';
  export default {
    name: 'test',
    components:{
      son
    },
    data() {
      return {
        arr:['yangxiaoning','wanglinna','liyong'],
        sondata:'他是个够',
        name:'',
        yangxiaoning:['divs']
      }
    },
    computed:{
      ...mapGetters(['msh'])
    },
   methods:{
      getChild(data){
        this.name=data
      },
     ...mapActions(['ths'])
    },
    mounted(){
      console.log(this.$route.query.name)
    }
  }
</script>

<style scoped>
  .divs{
    font-size: 30px;
  }
</style>
