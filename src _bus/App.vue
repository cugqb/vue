<template>
  <div class="root">
    <h1>{{msg}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <mySchool :sendName="sendName"/>
    <!-- 自定义组件 名称为sendStudentName -->
    <myStudent @sendStudnetName="demo"/>
  </div>
  
</template>

<script>
import myStudent from "./components/Student"
import mySchool from "./components/School"


export default {
  name: 'App',
  components:{mySchool,myStudent},
  data(){
    return{
      msg:'你好啊'
    }
  },
  methods:{
    sendName(name){
      this.msg = name
    },
    demo(name){
      this.msg = name
    }
  }
   
}
</script>

<style>
.root{
  background-color: rgb(112, 66, 66);
}

</style>
