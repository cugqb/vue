<template>
  <div>
    <ul>
        <!-- 使用接收query参数 -->
        <!-- <li>id:{{$route.query.id}}</li>
        <li>家务是:{{$route.query.name}}</li> -->
        <!-- 使用接收params参数 -->
        <li>id:{{id}}</li>
        <li>家务是:{{name}}</li>

        
    </ul>

  </div>
</template>

<script>
    export default {
        name:'myDetail',
        //接收houseWork传递过来的参数，再通过插值语法显示在页面
        props:['id','name'],
        mounted(){
            console.log(this.$route);
        }

    }
</script>

<style>

</style>