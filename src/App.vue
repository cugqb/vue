<template>
<div class="demo">
  <myBanner/>
  <div class="url">
    <!-- <a href="./about.html">about</a> -->
    <router-link to="/about">about</router-link>
    <router-link to="/home">home</router-link>
    <!-- <a href="./home.html">home</a> -->
  </div>
  <div>
   <router-view></router-view>
  </div>

</div>
  
</template>

<script>
import myBanner from './components/Banner'


export default {
  name: 'App',
  components:{myBanner}
  

}
</script>

<style>
a {
  text-decoration: none;
  margin-left: 20px;
}
a:hover{
  background: skyblue;
}
.demo{
  
  padding-left: 500px;
  
}
.url{
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
